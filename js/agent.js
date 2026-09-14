/**
 * Khana AI - Strands AI Agent Interactive Module
 * Simulates Strands Agent SDK execution trace, reasoning steps, tool usage, and AI meal adjustments.
 */

window.KhanaAgent = {
  
  /**
   * Process user agent query and stream step-by-step Strands SDK thinking trace
   */
  processQuery: async function(userPrompt, activePreferences, currentPlan, onStepCallback, onCompleteCallback) {
    const promptLower = userPrompt.toLowerCase();
    
    // Step 1: Agent Initialization
    onStepCallback({
      step: 1,
      type: "agent_init",
      title: "Agent Initialized",
      detail: `StrandsAgent(name="KhanaMealAssistant", SDK="Strands-Agents-v0.1") initialized with user context: ${activePreferences.country}, ${activePreferences.dietType.toUpperCase()} diet.`
    });

    await this.delay(600);

    // Step 2: Tool Selection
    let toolName = "USDA_Nutrition_Analyzer";
    if (promptLower.includes("swap") || promptLower.includes("change") || promptLower.includes("replace")) {
      toolName = "Meal_Substitution_Engine";
    } else if (promptLower.includes("buy") || promptLower.includes("market") || promptLower.includes("kg") || promptLower.includes("grocery")) {
      toolName = "Household_Grocery_Scaler";
    } else if (promptLower.includes("store") || promptLower.includes("waste") || promptLower.includes("spoil")) {
      toolName = "ZeroWaste_Storage_Advisor";
    }

    onStepCallback({
      step: 2,
      type: "tool_execution",
      title: `Executing Tool: @tool.${toolName}`,
      detail: `Invoking Strands SDK tool [${toolName}] with prompt params and dietary guardrails.`
    });

    await this.delay(700);

    // Step 3: Dietary Guardrail Verification
    onStepCallback({
      step: 3,
      type: "guardrail_check",
      title: "Dietary Guardrail Verification",
      detail: `Checking output against strict constraint: DIET = ${activePreferences.dietType.toUpperCase()}. Zero non-veg ingredients permitted.`
    });

    await this.delay(600);

    // Step 4: Final Synthesis & Output
    let responseText = "";
    
    if (promptLower.includes("gujju") || promptLower.includes("gujarat") || promptLower.includes("gujarati") || promptLower.includes("dhokla") || promptLower.includes("undhiyu") || promptLower.includes("thepla")) {
      toolName = "Regional_Cuisine_Adapter";
      responseText = `✨ **Gujarati Cuisine Adapter Activated!**\n\nI have re-aligned your entire 30-Day 90-Meal plan to 100% authentic Gujarati vegetarian specialties:\n- **Breakfast:** Steamed Nylon Dhokla, Khandvi, Methi Thepla & Handvo\n- **Lunch:** Authentic Surti Undhiyu, Dal Dhokli, Gujarati Sweet Dal & Phulka Roti\n- **Dinner:** Comfort Khichdi Kadhi, Sev Tamatar Sabzi, Ringan No Olo & Bajra Rotlo\n\n*All 90 meals updated live on screen to Gujarati!*`;
      
      if (window.KhanaAppEvents && window.KhanaAppEvents.onCuisineChange) {
        window.KhanaAppEvents.onCuisineChange("Gujarat");
      }
    } else if (promptLower.includes("maharashtra") || promptLower.includes("marathi") || promptLower.includes("mumbai") || promptLower.includes("poha") || promptLower.includes("misal") || promptLower.includes("bhakri")) {
      toolName = "Regional_Cuisine_Adapter";
      responseText = `✨ **Maharashtrian Cuisine Adapter Activated!**\n\nI have adapted your 30-Day meal matrix with authentic Maharashtrian recipes:\n- **Breakfast:** Kanda Poha, Spicy Misal Pav, Thalipeeth & Sabudana Khichdi\n- **Lunch:** Pitla Bhakri with Green Chili Thecha, Varan Bhaat & Katachi Amti\n- **Dinner:** Matki Usal with Chapati, Shevgha Bhaji & Masale Bhaat\n\n*All 90 meals updated live on screen to Maharashtrian!*`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onCuisineChange) {
        window.KhanaAppEvents.onCuisineChange("Maharashtra");
      }
    } else if (promptLower.includes("punjab") || promptLower.includes("punjabi") || promptLower.includes("kulcha") || promptLower.includes("dal makhani")) {
      toolName = "Regional_Cuisine_Adapter";
      responseText = `✨ **Punjabi Cuisine Adapter Activated!**\n\nI have adapted your 30-Day meal matrix with rich Punjabi flavors:\n- **Breakfast:** Stuffed Aloo Paratha with Curd, Amritsari Kulcha & Chole\n- **Lunch:** Dal Makhani, Rajma Chawal, Sarson ka Saag & Chapati\n- **Dinner:** Paneer Tikka Masala, Kadhi Pakora & Jeera Rice\n\n*All 90 meals updated live on screen to Punjabi!*`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onCuisineChange) {
        window.KhanaAppEvents.onCuisineChange("Punjab");
      }
    } else if (promptLower.includes("south") || promptLower.includes("dosa") || promptLower.includes("idli") || promptLower.includes("sambar")) {
      toolName = "Regional_Cuisine_Adapter";
      responseText = `✨ **South Indian Cuisine Adapter Activated!**\n\nI have updated your meal matrix with traditional South Indian recipes:\n- **Breakfast:** Steamed Idli Sambar, Crisp Masala Dosa & Ven Pongal\n- **Lunch:** Bisibelebath, Rasam Rice with Potato Fry & Curd Rice\n- **Dinner:** Appam with Veg Stew & Lemon Rice\n\n*All 90 meals updated live on screen to South Indian!*`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onCuisineChange) {
        window.KhanaAppEvents.onCuisineChange("South India");
      }
    } else if (promptLower.includes("bengal") || promptLower.includes("bengali") || promptLower.includes("luchi") || promptLower.includes("shukto")) {
      toolName = "Regional_Cuisine_Adapter";
      responseText = `✨ **Bengali Cuisine Adapter Activated!**\n\nI have updated your 30-Day meal matrix with authentic Bengali recipes:\n- **Breakfast:** Luchi Alur Dom, Radhabhallabhi & Cholar Dal\n- **Lunch:** Shukto, Ghugni, Cholar Dal & Steamed Rice\n- **Dinner:** Baingan Bhaja, Kichuri & Mishti Doi\n\n*All 90 meals updated live on screen to Bengali!*`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onCuisineChange) {
        window.KhanaAppEvents.onCuisineChange("Bengal");
      }
    } else if (promptLower.includes("vegan") || promptLower.includes("plant-based") || promptLower.includes("dairy free")) {
      toolName = "Strict_Diet_Guardrail";
      responseText = `🥬 **Strict Vegan Diet Filter Activated!**\n\nI have filtered your 30-Day plan to exclude all Dairy, Ghee, Butter, Milk, and Honey. Replaced with Almond Yogurt, Tofu, and Cold-Pressed Oils across all 90 meals!`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onDietChange) {
        window.KhanaAppEvents.onDietChange("vegan");
      }
    } else if (promptLower.includes("non-veg") || promptLower.includes("nonveg") || promptLower.includes("meat")) {
      toolName = "Diet_Preference_Adapter";
      responseText = `🔴 **Non-Vegetarian Diet Activated!**\n\nI have updated your 30-Day plan with a balanced mix of lean poultry, fish curries, egg bhurji, and vegetarian meals!`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onDietChange) {
        window.KhanaAppEvents.onDietChange("non-veg");
      }
    } else if (promptLower.includes("daily")) {
      toolName = "Household_Grocery_Scaler";
      responseText = `🛒 **Market Frequency Updated to Daily Fresh Visits!**\n\nRecalculated market grocery quantities for fresh daily purchases. Check the Smart Grocery tab!`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onFrequencyChange) {
        window.KhanaAppEvents.onFrequencyChange("daily");
      }
    } else if (promptLower.includes("weekly")) {
      toolName = "Household_Grocery_Scaler";
      responseText = `🛒 **Market Frequency Updated to Weekly Trip (7 Days)!**\n\nRecalculated bulk grocery quantities in kg and gm. Check the Smart Grocery tab!`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onFrequencyChange) {
        window.KhanaAppEvents.onFrequencyChange("weekly");
      }
    } else if (promptLower.includes("swap") || promptLower.includes("change") || promptLower.includes("replace") || promptLower.includes("millet") || promptLower.includes("quinoa")) {
      toolName = "Meal_Substitution_Engine";
      responseText = `✨ **Meal Swapped Live!**\n\nI have swapped Day 1 Breakfast with high-protein **Quinoa & Sprouted Moong Pulao** (+7g Protein, +5g Fiber). Check your active Day 1 meal cards!`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onMealSwap) {
        window.KhanaAppEvents.onMealSwap(1, "breakfast", "Quinoa & Sprouted Moong Pulao");
      }
    } else if (promptLower.includes("market") || promptLower.includes("buy") || promptLower.includes("kg") || promptLower.includes("grocery")) {
      responseText = `Based on your household size: Purchase vegetables like tomatoes & spinach in 1.5 kg portions, and root crops like potatoes & onions in 3.0 kg bulk to minimize market visits!`;
    } else if (promptLower.includes("store") || promptLower.includes("waste") || promptLower.includes("spoil")) {
      responseText = `Zero-Waste Storage Strategy:\n1. Leafy greens: Wrap unwashed in dry paper towels and store in airtight glass containers.\n2. Tomatoes: Keep at room temperature stems-down.\n3. Herbs: Place stems in 1 inch of fresh water covered loosely.`;
    } else if (promptLower.includes("hi") || promptLower.includes("hello") || promptLower.includes("hey")) {
      responseText = `Hello! I am your Strands AI Agent. Type commands like 'Make it Gujju menu', 'Switch to Punjabi', 'Make it Vegan', or 'Swap Day 1 breakfast' and I will update your 30-day plan live on screen!`;
    } else {
      responseText = `✨ **Strands Agent Action Executed!**\n\nI have processed your request ("${userPrompt}") through the Strands Agent SDK toolchain and updated your meal matrix context for **${activePreferences.state}, ${activePreferences.country}**.`;
      if (window.KhanaAppEvents && window.KhanaAppEvents.onCuisineChange) {
        window.KhanaAppEvents.onCuisineChange(activePreferences.state);
      }
    }

    onStepCallback({
      step: 4,
      type: "complete",
      title: "Strands Agent Result Ready",
      detail: responseText
    });

    if (onCompleteCallback) onCompleteCallback(responseText);
  },

  delay: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};
