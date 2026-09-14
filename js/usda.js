/**
 * Khana AI - USDA Nutrition Module
 * Connects to USDA FoodData Central API and maintains reference dataset for balanced nutrient calculations.
 */

window.KhanaUSDA = {
  apiKey: "DEMO_KEY",

  /**
   * Calculate daily nutritional total for a set of 3 meals (breakfast, lunch, dinner)
   */
  calculateDailyNutrition: function(meals) {
    let totals = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      calcium: 0,
      iron: 0,
      vitaminC: 0,
      vitaminA: 0,
      potassium: 0
    };

    meals.forEach(meal => {
      totals.calories += meal.calories || 0;
      totals.protein += meal.protein || 0;
      totals.carbs += meal.carbs || 0;
      totals.fat += meal.fat || 0;
      totals.calcium += meal.calcium || 0;
      totals.iron += meal.iron || 0;
      totals.vitaminC += meal.vitaminC || 0;
      totals.vitaminA += meal.vitaminA || 0;
      totals.potassium += meal.potassium || 0;
    });

    return totals;
  },

  /**
   * Compare daily totals against USDA recommended benchmarks and return percentage compliance
   */
  getBenchmarkCompliance: function(dailyTotals) {
    const bench = window.KhanaData.USDA_BENCHMARKS;
    return {
      calories: { current: dailyTotals.calories, target: bench.calories, pct: Math.min(100, Math.round((dailyTotals.calories / bench.calories) * 100)) },
      protein: { current: dailyTotals.protein, target: bench.protein, pct: Math.min(100, Math.round((dailyTotals.protein / bench.protein) * 100)) },
      carbs: { current: dailyTotals.carbs, target: bench.carbs, pct: Math.min(100, Math.round((dailyTotals.carbs / bench.carbs) * 100)) },
      fat: { current: dailyTotals.fat, target: bench.fat, pct: Math.min(100, Math.round((dailyTotals.fat / bench.fat) * 100)) },
      iron: { current: dailyTotals.iron, target: bench.iron, pct: Math.min(100, Math.round((dailyTotals.iron / bench.iron) * 100)) },
      calcium: { current: dailyTotals.calcium, target: bench.calcium, pct: Math.min(100, Math.round((dailyTotals.calcium / bench.calcium) * 100)) },
      vitaminC: { current: dailyTotals.vitaminC, target: bench.vitaminC, pct: Math.min(100, Math.round((dailyTotals.vitaminC / bench.vitaminC) * 100)) }
    };
  },

  /**
   * Search USDA API dynamically if online
   */
  fetchUSDANutrition: async function(query) {
    try {
      const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(query)}&pageSize=1&api_key=${this.apiKey}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.foods && data.foods.length > 0) {
          const food = data.foods[0];
          const nutrients = {};
          food.foodNutrients.forEach(n => {
            nutrients[n.nutrientName] = n.value;
          });
          return {
            source: "USDA FoodData Central API",
            name: food.description,
            calories: nutrients["Energy"] || 200,
            protein: nutrients["Protein"] || 10,
            carbs: nutrients["Carbohydrate, by difference"] || 30,
            fat: nutrients["Total lipid (fat)"] || 5,
            iron: nutrients["Iron, Fe"] || 2,
            calcium: nutrients["Calcium, Ca"] || 50
          };
        }
      }
    } catch (e) {
      console.warn("USDA Live API fallback:", e);
    }
    return null;
  }
};
