/**
 * Khana AI - Zero-Waste Grocery & Market Purchasing Engine
 * Calculates exact market quantities in kg/gm scaled by family size and shopping frequency.
 */

window.KhanaGrocery = {

  /**
   * Calculates total grocery requirements for the entire household
   * @param {Array} mealPlan - 30 days of meals
   * @param {Array} familyMembers - List of family members
   * @param {string} frequency - 'daily', 'twice_weekly', 'weekly', 'biweekly'
   */
  generateGroceryList: function(mealPlan, familyMembers, frequency) {
    // Calculate total household portion multiplier
    const totalPortions = (familyMembers && familyMembers.length > 0)
      ? familyMembers.reduce((sum, member) => sum + (parseFloat(member.portion_factor) || 1.0), 0)
      : 1.0;

    // Days covered per shopping trip
    const daysMultiplier = {
      "daily": 1,
      "twice_weekly": 3.5,
      "weekly": 7,
      "biweekly": 14,
      "monthly": 30
    }[frequency] || 7;

    // Aggregate ingredients for the selected number of days
    const daysToCover = Math.min(30, Math.ceil(daysMultiplier));
    const rawAggregated = {};

    for (let d = 0; d < daysToCover; d++) {
      const dayData = mealPlan[d % mealPlan.length];
      if (!dayData) continue;

      const meals = [dayData.meals.breakfast, dayData.meals.lunch, dayData.meals.dinner];
      meals.forEach(meal => {
        if (!meal || !meal.ingredients) return;

        meal.ingredients.forEach(ing => {
          const key = ing.name.trim();
          const baseQtyG = ing.base_qty_g || 50;
          const totalGrams = baseQtyG * totalPortions;

          if (!rawAggregated[key]) {
            rawAggregated[key] = {
              name: ing.name,
              category: ing.category || "General",
              shelfLife: ing.shelf_life || 7,
              totalGrams: 0
            };
          }
          rawAggregated[key].totalGrams += totalGrams;
        });
      });
    }

    // Process and format quantities into kg and gm
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
        formattedQty: formattedQty,
        shelfLife: item.shelfLife,
        isPerishable: item.shelfLife <= 5
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
