/**
 * Khana AI - Zero-Waste Grocery & Market Purchasing Engine
 * Calculates exact market quantities in kg/gm scaled by family size and shopping frequency.
 * Canonicalizes ingredient names and standardizes standard grocery categories to eliminate duplication.
 */

window.KhanaGrocery = {

  /**
   * Smart normalization mapping to merge redundant ingredient names and standard categories
   */
  normalizeItem: function(rawName, rawCategory) {
    const n = rawName.trim().toLowerCase();

    // Grains, Flours & Pulses
    if (n.includes("wheat") || n.includes("atta") || n.includes("puri") || n.includes("roti") || n.includes("phulka") || n.includes("dhokli")) {
      return { name: "Whole Wheat Atta / Flour", category: "🌾 Grains, Flours & Pulses" };
    }
    if (n.includes("poha") || n.includes("flattened rice")) {
      return { name: "Flattened Rice (Poha)", category: "🌾 Grains, Flours & Pulses" };
    }
    if (n.includes("rice") || n.includes("basmati") || n.includes("gobindobhog")) {
      return { name: "Rice (Basmati / Local)", category: "🌾 Grains, Flours & Pulses" };
    }
    if (n.includes("besan") || n.includes("gram flour")) {
      return { name: "Gram Flour (Besan)", category: "🌾 Grains, Flours & Pulses" };
    }
    if (n.includes("toor dal") || n.includes("arhar") || n.includes("pigeon pea")) {
      return { name: "Toor Dal (Arhar Dal)", category: "🌾 Grains, Flours & Pulses" };
    }
    if (n.includes("moong") || n.includes("matki") || n.includes("sprouts")) {
      return { name: "Green Moong / Sprouts", category: "🌾 Grains, Flours & Pulses" };
    }
    if (n.includes("chana") || n.includes("chickpea") || n.includes("kabuli")) {
      return { name: "Kabuli Chana / Chana Dal", category: "🌾 Grains, Flours & Pulses" };
    }
    if (n.includes("urad")) {
      return { name: "Urad Dal", category: "🌾 Grains, Flours & Pulses" };
    }
    if (n.includes("suji") || n.includes("semolina") || n.includes("oats") || n.includes("bajra") || n.includes("millet") || n.includes("jowar") || n.includes("batter")) {
      return { name: "Suji / Bajra / Millet / Oats / Batter", category: "🌾 Grains, Flours & Pulses" };
    }

    // Vegetables & Fresh Produce
    if (n.includes("onion")) {
      return { name: "Onions", category: "🥬 Fresh Vegetables & Greens" };
    }
    if (n.includes("tomato")) {
      return { name: "Fresh Tomatoes", category: "🥬 Fresh Vegetables & Greens" };
    }
    if (n.includes("potato") || n.includes("aloo") || n.includes("yam")) {
      return { name: "Potatoes & Root Veggies", category: "🥬 Fresh Vegetables & Greens" };
    }
    if (n.includes("methi") || n.includes("fenugreek") || n.includes("spinach") || n.includes("greens") || n.includes("coriander") || n.includes("lauki") || n.includes("gourd") || n.includes("eggplant") || n.includes("baingan") || n.includes("ringan") || n.includes("papdi") || n.includes("veggie") || n.includes("vegetable")) {
      return { name: "Fresh Seasonal Green Vegetables", category: "🥬 Fresh Vegetables & Greens" };
    }
    if (n.includes("lemon") || n.includes("coconut")) {
      return { name: "Fresh Lemon & Coconut", category: "🥬 Fresh Vegetables & Greens" };
    }

    // Dairy & Dairy Alternatives
    if (n.includes("curd") || n.includes("yogurt") || n.includes("buttermilk")) {
      return { name: "Fresh Curd / Yogurt / Buttermilk", category: "🥛 Dairy & Plant Dairy" };
    }
    if (n.includes("paneer") || n.includes("tofu") || n.includes("cottage")) {
      return { name: "Fresh Paneer / Tofu", category: "🥛 Dairy & Plant Dairy" };
    }
    if (n.includes("ghee") || n.includes("butter")) {
      return { name: "Desi Ghee / Butter", category: "🥛 Dairy & Plant Dairy" };
    }

    // Cooking Oils
    if (n.includes("oil")) {
      return { name: "Cooking Oil (Groundnut / Mustard / Sesame)", category: "🛢️ Cooking Oils" };
    }

    // Spices, Seeds & Pantry
    if (n.includes("peanuts") || n.includes("cashew") || n.includes("sesame") || n.includes("seed")) {
      return { name: "Peanuts, Cashews & Seeds", category: "🌶️ Spices, Seeds & Pantry Staples" };
    }
    if (n.includes("jaggery") || n.includes("sugar") || n.includes("kokum")) {
      return { name: "Jaggery / Sweetener / Kokum", category: "🌶️ Spices, Seeds & Pantry Staples" };
    }
    if (n.includes("papad") || n.includes("sev") || n.includes("farsan") || n.includes("eno") || n.includes("salt") || n.includes("spice") || n.includes("tempering") || n.includes("mustard")) {
      return { name: "Mustard Seeds, Spices, Sev & Papad", category: "🌶️ Spices, Seeds & Pantry Staples" };
    }

    // Fallback
    return { name: rawName.trim(), category: "🌶️ Spices, Seeds & Pantry Staples" };
  },

  /**
   * Calculates total grocery requirements for the entire household
   */
  generateGroceryList: function(mealPlan, familyMembers, frequency) {
    const totalPortions = (familyMembers && familyMembers.length > 0)
      ? familyMembers.reduce((sum, member) => sum + (parseFloat(member.portion_factor) || 1.0), 0)
      : 1.0;

    const daysMultiplier = {
      "daily": 1,
      "twice_weekly": 3.5,
      "weekly": 7,
      "biweekly": 14,
      "monthly": 30
    }[frequency] || 7;

    const daysToCover = Math.min(30, Math.ceil(daysMultiplier));
    const rawAggregated = {};

    for (let d = 0; d < daysToCover; d++) {
      const dayData = mealPlan[d % mealPlan.length];
      if (!dayData) continue;

      const meals = [dayData.meals.breakfast, dayData.meals.lunch, dayData.meals.dinner];
      meals.forEach(meal => {
        if (!meal || !meal.ingredients) return;

        meal.ingredients.forEach(ing => {
          const norm = this.normalizeItem(ing.name, ing.category);
          const key = norm.name;
          const baseQtyG = ing.base_qty_g || 50;
          const totalGrams = baseQtyG * totalPortions;

          if (!rawAggregated[key]) {
            rawAggregated[key] = {
              name: norm.name,
              category: norm.category,
              totalGrams: 0
            };
          }
          rawAggregated[key].totalGrams += totalGrams;
        });
      });
    }

    const categories = {};
    Object.values(rawAggregated).forEach(item => {
      const cat = item.category;
      if (!categories[cat]) categories[cat] = [];

      let formattedQty = "";
      if (item.totalGrams >= 1000) {
        const kg = (item.totalGrams / 1000).toFixed(2);
        formattedQty = `${kg} kg`;
      } else {
        formattedQty = `${Math.round(item.totalGrams)} gm`;
      }

      categories[cat].push({
        name: item.name,
        totalGrams: item.totalGrams,
        formattedQty: formattedQty
      });
    });

    return {
      householdPortions: totalPortions.toFixed(1),
      shoppingDaysCovered: daysToCover,
      frequencyLabel: this.getFrequencyLabel(frequency),
      categories: categories,
      rawItemsCount: Object.keys(rawAggregated).length
    };
  },

  getFrequencyLabel: function(freq) {
    return {
      "daily": "Daily Market Trips (Fresh Everyday)",
      "twice_weekly": "2-3 Times a Week Market Trips",
      "weekly": "Weekly Market Trip (Every 7 Days)",
      "biweekly": "Bi-Weekly Bulk Shopping (Every 14 Days)",
      "monthly": "Monthly Full Pantry Stock"
    }[freq] || "Weekly Market Trip";
  }
};
