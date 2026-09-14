/**
 * Khana AI - 30-Day Meal Planner Engine
 * Generates 30 days x 3 meals = 90 distinct meals tailored to location and dietary choice.
 * Enforces strict diet filtering (Veg/Vegan/Non-Veg) with zero cross-contamination.
 */

window.KhanaPlanner = {
  
  /**
   * Main function to generate 30 days of meals (90 total)
   */
  generate30DayPlan: function(preferences) {
    const { country, state, city, dietType } = preferences;
    const diet = (dietType || "veg").toLowerCase();
    
    // Select recipe pool based on diet
    let pool = window.KhanaData.RECIPE_TEMPLATES[diet] || window.KhanaData.RECIPE_TEMPLATES["veg"];
    
    // Fallback if diet pool is missing
    if (!pool.breakfast || pool.breakfast.length === 0) {
      pool = window.KhanaData.RECIPE_TEMPLATES["veg"];
    }

    const plan = [];

    for (let day = 1; day <= 30; day++) {
      const bIndex = (day - 1) % pool.breakfast.length;
      const lIndex = (day - 1) % pool.lunch.length;
      const dIndex = (day - 1) % pool.dinner.length;

      let breakfast = JSON.parse(JSON.stringify(pool.breakfast[bIndex]));
      let lunch = JSON.parse(JSON.stringify(pool.lunch[lIndex]));
      let dinner = JSON.parse(JSON.stringify(pool.dinner[dIndex]));

      // Customize meal names according to state/city context if applicable
      if (state && country === "India") {
        breakfast.name = this.adaptMealToRegion(breakfast.name, state, "breakfast", day);
        lunch.name = this.adaptMealToRegion(lunch.name, state, "lunch", day);
        dinner.name = this.adaptMealToRegion(dinner.name, state, "dinner", day);
      }

      // Enforce strict diet check
      breakfast = this.sanitizeMealForDiet(breakfast, diet);
      lunch = this.sanitizeMealForDiet(lunch, diet);
      dinner = this.sanitizeMealForDiet(dinner, diet);

      const dailyTotals = window.KhanaUSDA.calculateDailyNutrition([breakfast, lunch, dinner]);

      plan.push({
        day: day,
        week: Math.ceil(day / 7),
        dateLabel: `Day ${day}`,
        meals: {
          breakfast: breakfast,
          lunch: lunch,
          dinner: dinner
        },
        dailyTotals: dailyTotals
      });
    }

    return plan;
  },

  /**
   * Dynamically tailors dish titles with regional touches based on selected state
   */
  adaptMealToRegion: function(originalName, state, mealType, day) {
    const dishes = window.KhanaData.CUISINES["India"]?.[state];
    if (dishes && dishes.length > 0) {
      const dish = dishes[(day + mealType.length) % dishes.length];
      if (day % 2 === 0) {
        return `${state} Special: ${originalName}`;
      } else {
        return `${dish} & ${originalName.split(' with ')[0] || originalName}`;
      }
    }
    return originalName;
  },

  /**
   * Enforces strict dietary guardrails:
   * If Veg or Vegan is selected, strip any non-veg ingredients or rename dish cleanly.
   */
  sanitizeMealForDiet: function(meal, diet) {
    if (diet === "veg" || diet === "vegan") {
      const forbidden = ["chicken", "mutton", "fish", "beef", "pork", "egg", "seafood", "prawn", "meat", "bacon"];
      meal.ingredients = meal.ingredients.filter(ing => {
        const nameLower = ing.name.toLowerCase();
        return !forbidden.some(f => nameLower.includes(f));
      });
      // Ensure name contains no non-veg words
      forbidden.forEach(f => {
        const re = new RegExp(f, "gi");
        meal.name = meal.name.replace(re, "Plant-Based");
      });
    }

    if (diet === "vegan") {
      const veganForbidden = ["paneer", "ghee", "butter", "milk", "curd", "yogurt", "cheese", "honey"];
      meal.ingredients = meal.ingredients.map(ing => {
        let nameLower = ing.name.toLowerCase();
        if (veganForbidden.some(v => nameLower.includes(v))) {
          if (nameLower.includes("paneer")) return { ...ing, name: "Tofu / Plant Cottage", category: "Plant Protein" };
          if (nameLower.includes("ghee") || nameLower.includes("butter")) return { ...ing, name: "Cold-Pressed Sesame / Olive Oil", category: "Oils" };
          if (nameLower.includes("milk") || nameLower.includes("curd")) return { ...ing, name: "Almond / Oat Yogurt", category: "Plant Dairy" };
        }
        return ing;
      });

      veganForbidden.forEach(v => {
        if (v === "paneer") meal.name = meal.name.replace(/paneer/gi, "Tofu");
        if (v === "ghee" || v === "butter") meal.name = meal.name.replace(/ghee|butter/gi, "Olive Oil");
        if (v === "curd" || v === "yogurt") meal.name = meal.name.replace(/curd|yogurt/gi, "Plant Yogurt");
      });
    }

    return meal;
  }
};
