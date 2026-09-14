/**
 * Khana AI - Meal & Recipe Database
 * Contains rich regional recipes categorized by cuisine, meal type, and diet type (veg, vegan, non-veg).
 * Strictly mapped to USDA nutrition reference data.
 */

window.KhanaData = {
  // USDA Daily Recommended Intakes (Adult Benchmark)
  USDA_BENCHMARKS: {
    calories: 2000, // kcal
    protein: 60,    // g
    carbs: 250,     // g
    fat: 65,        // g
    calcium: 1000,  // mg
    iron: 18,       // mg
    vitaminC: 90,   // mg
    vitaminA: 900,  // mcg
    potassium: 3500 // mg
  },

  // Regional Cuisines Database
  CUISINES: {
    "India": {
      "Maharashtra": ["Poha", "Misal Pav", "Thalipeeth", "Pitla Bhakri", "Sabudana Khichdi", "Varan Bhaat", "Kanda Bhajji", "Modak", "Solkadhi", "Usal"],
      "Punjab": ["Paratha", "Chole Bhature", "Rajma Chawal", "Sarson ka Saag", "Dal Makhani", "Paneer Tikka", "Amritsari Kulcha", "Kadhi Pakora", "Lassi", "Gajar Halwa"],
      "South India": ["Idli Sambar", "Dosa", "Uttapam", "Ven Pongal", "Bisibelebath", "Rasam Rice", "Curd Rice", "Appam with Stew", "Upma", "Lemon Rice"],
      "Gujarat": ["Dhokla", "Khandvi", "Thepla", "Undhiyu", "Dal Dhokli", "Khichdi Kadhi", "Handvo", "Sev Tamatar", "Fafda Jalebi", "Rotlo"],
      "Bengal": ["Luchi Alur Dom", "Cholar Dal", "Shukto", "Ghugni", "Mishti Doi", "Baingan Bhaja", "Kichuri", "Radhabhallabhi", "Panta Bhat", "Kosha Mangsho"],
      "General": ["Vegetable Pulao", "Dal Tadka", "Aloo Gobi", "Mix Veg Sabzi", "Chapati", "Jeera Rice", "Paneer Butter Masala", "Chana Masala", "Kheer", "Raita"]
    },
    "USA": {
      "California": ["Avocado Toast", "Acai Bowl", "California Roll", "Cobb Salad", "Fish/Tofu Tacos", "Grilled Veggie Wrap", "Sourdough Bread Bowl", "Smoothie Bowl"],
      "General": ["Oatmeal Berry Bowl", "Pancake Stack", "Veggie Burger", "Grilled Cheese & Tomato Soup", "Mac and Cheese", "BBQ Bean Bowl", "Roasted Turkey/Tofu Dinner"]
    },
    "UK": {
      "General": ["Full English Breakfast", "Porridge with Honey", "Shepherd's Pie", "Fish/Tofu and Chips", "Bangers and Mash", "Sunday Roast", "Baked Beans on Toast"]
    },
    "Global": {
      "General": ["Mediterranean Quinoa Salad", "Greek Salad with Feta/Tofu", "Vegetable Stir Fry Noodles", "Falafel Hummus Wrap", "Minestrone Soup", "Penne Arrabbiata", "Burrito Bowl"]
    }
  },

  // Sample Recipe Templates grouped by Diet Type & Meal Type
  RECIPE_TEMPLATES: {
    "veg": {
      "breakfast": [
        {
          name: "Maharashtra Special Kanda Poha",
          prepTime: "15 mins",
          cookTime: "15 mins",
          calories: 320, protein: 7, carbs: 54, fat: 8, calcium: 42, iron: 2.8, vitaminC: 22, vitaminA: 110, potassium: 280,
          tags: ["High Iron", "Quick Prep", "Low Fat"],
          ingredients: [
            { name: "Flattened Rice (Poha)", base_qty_g: 75, category: "Grains", shelf_life: 90 },
            { name: "Onions", base_qty_g: 50, category: "Vegetables", shelf_life: 14 },
            { name: "Peanuts", base_qty_g: 15, category: "Nuts & Seeds", shelf_life: 60 },
            { name: "Green Chilies & Mustard Seeds", base_qty_g: 5, category: "Spices", shelf_life: 30 },
            { name: "Lemon & Coriander", base_qty_g: 10, category: "Fresh Produce", shelf_life: 5 },
            { name: "Cooking Oil", base_qty_g: 10, category: "Oils", shelf_life: 180 }
          ],
          instructions: ["Rinse poha and drain water.", "Sauté mustard seeds, peanuts, and onions in oil until translucent.", "Add turmeric, green chilies, and salt.", "Mix poha gently, cover and steam for 3 mins. Garnish with lemon and coriander."]
        },
        {
          name: "Stuffed Aloo Methi Paratha with Fresh Curd",
          prepTime: "20 mins",
          cookTime: "15 mins",
          calories: 410, protein: 11, carbs: 62, fat: 12, calcium: 120, iron: 3.5, vitaminC: 18, vitaminA: 320, potassium: 450,
          tags: ["Rich in Calcium", "Herb Fresh", "Energy Boost"],
          ingredients: [
            { name: "Whole Wheat Flour", base_qty_g: 80, category: "Grains", shelf_life: 90 },
            { name: "Potatoes", base_qty_g: 70, category: "Vegetables", shelf_life: 21 },
            { name: "Fresh Fenugreek (Methi) Leaves", base_qty_g: 30, category: "Fresh Greens", shelf_life: 3 },
            { name: "Curd / Yogurt", base_qty_g: 100, category: "Dairy", shelf_life: 7 },
            { name: "Ghee / Butter", base_qty_g: 10, category: "Dairy", shelf_life: 60 }
          ],
          instructions: ["Knead wheat dough.", "Boil and mash potatoes with chopped methi, cumin, chili powder, and salt.", "Stuff dough, roll into parathas, and roast on tawa with ghee.", "Serve hot with cold curd."]
        },
        {
          name: "South Indian Fermented Steamed Idli & Coconut Chutney",
          prepTime: "10 mins",
          cookTime: "15 mins",
          calories: 310, protein: 9, carbs: 58, fat: 5, calcium: 55, iron: 2.1, vitaminC: 8, vitaminA: 40, potassium: 220,
          tags: ["Gut Friendly", "Fermented Probiotic", "Low Fat"],
          ingredients: [
            { name: "Rice & Urad Dal Batter", base_qty_g: 180, category: "Batter", shelf_life: 4 },
            { name: "Grated Coconut", base_qty_g: 30, category: "Produce", shelf_life: 3 },
            { name: "Roasted Chana Dal", base_qty_g: 15, category: "Pulses", shelf_life: 90 },
            { name: "Tempering Spices (Mustard, Curry Leaves)", base_qty_g: 5, category: "Spices", shelf_life: 30 }
          ],
          instructions: ["Pour batter into idli molds and steam for 10-12 minutes.", "Grind grated coconut, roasted chana dal, green chili, and salt with water.", "Temper chutney with mustard seeds and curry leaves in oil.", "Serve soft idlis hot."]
        },
        {
          name: "Nutritious Sprouted Moong Usal with Pav",
          prepTime: "10 mins",
          cookTime: "15 mins",
          calories: 380, protein: 16, carbs: 58, fat: 7, calcium: 85, iron: 4.2, vitaminC: 35, vitaminA: 210, potassium: 510,
          tags: ["Protein Rich", "High Fiber", "Sprouted Vitality"],
          ingredients: [
            { name: "Sprouted Green Moong", base_qty_g: 100, category: "Sprouts", shelf_life: 4 },
            { name: "Onions & Tomatoes", base_qty_g: 60, category: "Vegetables", shelf_life: 10 },
            { name: "Goda Masala & Spices", base_qty_g: 8, category: "Spices", shelf_life: 180 },
            { name: "Whole Wheat Pav / Bread", base_qty_g: 60, category: "Bakery", shelf_life: 4 }
          ],
          instructions: ["Sauté onions and tomatoes with Goda masala in oil.", "Add sprouted moong, water, and salt; simmer for 10 mins.", "Garnish with fresh coriander and coconut.", "Serve with warmed pav."]
        }
      ],
      "lunch": [
        {
          name: "North Indian Dal Tadka, Jeera Rice & Chapati",
          prepTime: "15 mins",
          cookTime: "25 mins",
          calories: 580, protein: 21, carbs: 92, fat: 12, calcium: 110, iron: 5.1, vitaminC: 15, vitaminA: 180, potassium: 620,
          tags: ["Balanced Protein", "Comfort Food", "USDA Compliant"],
          ingredients: [
            { name: "Toor Dal (Pigeon Peas)", base_qty_g: 60, category: "Pulses", shelf_life: 180 },
            { name: "Basmati Rice", base_qty_g: 75, category: "Grains", shelf_life: 180 },
            { name: "Whole Wheat Flour (Atta)", base_qty_g: 60, category: "Grains", shelf_life: 90 },
            { name: "Tomatoes & Garlic", base_qty_g: 50, category: "Vegetables", shelf_life: 10 },
            { name: "Ghee", base_qty_g: 10, category: "Dairy", shelf_life: 60 }
          ],
          instructions: ["Pressure cook toor dal with turmeric and salt.", "Prepare tadka with ghee, cumin, garlic, and red chili; pour over cooked dal.", "Cook basmati rice with cumin seeds.", "Make fresh soft chapatis on tawa."]
        },
        {
          name: "Paneer Butter Masala with Veg Pulao & Cucumber Raita",
          prepTime: "20 mins",
          cookTime: "25 mins",
          calories: 640, protein: 24, carbs: 74, fat: 22, calcium: 340, iron: 3.8, vitaminC: 25, vitaminA: 450, potassium: 580,
          tags: ["High Calcium", "Rich Protein", "Festive Meal"],
          ingredients: [
            { name: "Fresh Cottage Cheese (Paneer)", base_qty_g: 90, category: "Dairy", shelf_life: 7 },
            { name: "Rice & Mixed Vegetables (Carrot, Peas)", base_qty_g: 100, category: "Produce", shelf_life: 7 },
            { name: "Tomato Cashew Gravy Puree", base_qty_g: 80, category: "Sauce", shelf_life: 5 },
            { name: "Curd & Cucumber", base_qty_g: 70, category: "Dairy & Produce", shelf_life: 5 }
          ],
          instructions: ["Sauté paneer cubes lightly in butter.", "Prepare creamy tomato gravy with cashew paste and garam masala.", "Simmer paneer in gravy for 5 mins.", "Serve with aromatic vegetable pulao and cucumber raita."]
        },
        {
          name: "Traditional Pitla Bhakri with Thecha & Raw Onion",
          prepTime: "15 mins",
          cookTime: "20 mins",
          calories: 520, protein: 18, carbs: 80, fat: 10, calcium: 95, iron: 4.8, vitaminC: 30, vitaminA: 190, potassium: 540,
          tags: ["High Fiber", "Rustic Flavor", "Gluten Free Option"],
          ingredients: [
            { name: "Gram Flour (Besan)", base_qty_g: 60, category: "Pulses/Flour", shelf_life: 120 },
            { name: "Jowar / Sorghum Flour", base_qty_g: 80, category: "Grains", shelf_life: 90 },
            { name: "Green Chilies & Garlic (Thecha)", base_qty_g: 20, category: "Spices", shelf_life: 10 },
            { name: "Onions & Coriander", base_qty_g: 40, category: "Vegetables", shelf_life: 14 }
          ],
          instructions: ["Whisk besan with water, turmeric, and salt.", "Temper mustard, garlic, and chilies in oil, add besan mix and stir till thick.", "Knead jowar flour with warm water and pat into thick bhakri; cook on clay/iron tawa.", "Serve pitla hot with bhakri and garlic-chili thecha."]
        }
      ],
      "dinner": [
        {
          name: "Protein-Packed Rajma Masala & Steamed Brown Rice",
          prepTime: "15 mins",
          cookTime: "30 mins",
          calories: 510, protein: 22, carbs: 84, fat: 8, calcium: 130, iron: 5.8, vitaminC: 20, vitaminA: 240, potassium: 710,
          tags: ["High Iron", "High Fiber", "Heart Healthy"],
          ingredients: [
            { name: "Red Kidney Beans (Rajma)", base_qty_g: 70, category: "Pulses", shelf_life: 180 },
            { name: "Brown Rice", base_qty_g: 70, category: "Grains", shelf_life: 180 },
            { name: "Onion Tomato Ginger Paste", base_qty_g: 80, category: "Fresh Produce", shelf_life: 7 },
            { name: "Indian Whole Spices", base_qty_g: 5, category: "Spices", shelf_life: 180 }
          ],
          instructions: ["Soak rajma overnight and pressure cook till soft.", "Sauté onion, ginger, garlic, and tomato puree with spices.", "Add rajma with cooking liquor and simmer for 15 minutes till gravy thickens.", "Serve hot over steamed brown rice."]
        },
        {
          name: "Wholesome Khichdi with Desi Ghee & Roasted Papad",
          prepTime: "10 mins",
          cookTime: "20 mins",
          calories: 440, protein: 16, carbs: 70, fat: 9, calcium: 75, iron: 3.2, vitaminC: 12, vitaminA: 160, potassium: 410,
          tags: ["Easy Digestion", "Light Night Meal", "Nourishing"],
          ingredients: [
            { name: "Moong Dal (Yellow Split)", base_qty_g: 50, category: "Pulses", shelf_life: 180 },
            { name: "Rice", base_qty_g: 60, category: "Grains", shelf_life: 180 },
            { name: "Desi Ghee", base_qty_g: 10, category: "Dairy", shelf_life: 60 },
            { name: "Cumin & Clove Tempering", base_qty_g: 5, category: "Spices", shelf_life: 180 }
          ],
          instructions: ["Wash moong dal and rice together.", "Pressure cook with 4 cups water, salt, and turmeric for 4 whistles.", "Temper ghee with cumin seeds, cloves, and asafoetida.", "Pour ghee temper over khichdi and serve with roasted papad."]
        },
        {
          name: "South Indian Bisibelebath with Roasted Potato Fry",
          prepTime: "15 mins",
          cookTime: "25 mins",
          calories: 490, protein: 17, carbs: 78, fat: 11, calcium: 110, iron: 4.1, vitaminC: 28, vitaminA: 380, potassium: 590,
          tags: ["One Pot Meal", "Rich Fiber", "Flavorsome"],
          ingredients: [
            { name: "Rice & Toor Dal", base_qty_g: 100, category: "Grains & Pulses", shelf_life: 180 },
            { name: "Mixed Vegetables (Drumstick, Carrot, Beans)", base_qty_g: 80, category: "Vegetables", shelf_life: 5 },
            { name: "Bisibelebath Masala & Tamarind", base_qty_g: 15, category: "Pantry", shelf_life: 90 },
            { name: "Ghee & Cashews", base_qty_g: 10, category: "Dairy & Nuts", shelf_life: 60 }
          ],
          instructions: ["Cook rice, dal, and vegetables together.", "Add tamarind extract, salt, and bisibelebath spice powder.", "Simmer for 10 mins until thoroughly combined.", "Top with fried cashews in ghee."]
        }
      ]
    },
    "vegan": {
      "breakfast": [
        {
          name: "Tofu Scramble with Spinach & Whole Grain Toast",
          prepTime: "10 mins",
          cookTime: "10 mins",
          calories: 340, protein: 19, carbs: 36, fat: 11, calcium: 240, iron: 4.5, vitaminC: 18, vitaminA: 410, potassium: 420,
          tags: ["100% Vegan", "Plant Protein", "Zero Cholesterol"],
          ingredients: [
            { name: "Firm Tofu", base_qty_g: 120, category: "Plant Protein", shelf_life: 10 },
            { name: "Baby Spinach", base_qty_g: 40, category: "Fresh Greens", shelf_life: 4 },
            { name: "Whole Grain Bread", base_qty_g: 60, category: "Bakery", shelf_life: 5 },
            { name: "Nutritional Yeast & Turmeric", base_qty_g: 8, category: "Spices & Seasoning", shelf_life: 180 },
            { name: "Olive Oil", base_qty_g: 8, category: "Oils", shelf_life: 180 }
          ],
          instructions: ["Crumble tofu with hands.", "Sauté garlic and spinach in olive oil until wilted.", "Add crumbled tofu, turmeric, nutritional yeast, and sea salt; toss for 5 mins.", "Serve hot over toasted whole grain bread."]
        },
        {
          name: "Avocado & Chickpea Power Toast with Seeds",
          prepTime: "10 mins",
          cookTime: "5 mins",
          calories: 390, protein: 14, carbs: 46, fat: 15, calcium: 85, iron: 3.9, vitaminC: 15, vitaminA: 180, potassium: 560,
          tags: ["Healthy Fats", "Heart Healthy", "Fiber Rich"],
          ingredients: [
            { name: "Ripe Avocado", base_qty_g: 60, category: "Fresh Fruit", shelf_life: 5 },
            { name: "Boiled Chickpeas", base_qty_g: 50, category: "Pulses", shelf_life: 5 },
            { name: "Sourdough / Rye Bread", base_qty_g: 60, category: "Bakery", shelf_life: 5 },
            { name: "Pumpkin & Chia Seeds", base_qty_g: 10, category: "Nuts & Seeds", shelf_life: 90 }
          ],
          instructions: ["Mash avocado with lime juice, chili flakes, and salt.", "Roughly crush boiled chickpeas and fold into avocado.", "Spread generously on toasted sourdough.", "Top with toasted pumpkin and chia seeds."]
        },
        {
          name: "Oatmeal Bowl with Almond Milk, Chia & Berries",
          prepTime: "5 mins",
          cookTime: "10 mins",
          calories: 330, protein: 11, carbs: 54, fat: 8, calcium: 310, iron: 3.1, vitaminC: 25, vitaminA: 90, potassium: 380,
          tags: ["Antioxidant Boost", "Low GI", "Heart Health"],
          ingredients: [
            { name: "Rolled Oats", base_qty_g: 50, category: "Grains", shelf_life: 180 },
            { name: "Unsweetened Almond Milk", base_qty_g: 200, category: "Plant Milk", shelf_life: 10 },
            { name: "Fresh Berries / Seasonal Fruit", base_qty_g: 50, category: "Produce", shelf_life: 4 },
            { name: "Maple Syrup / Jaggery", base_qty_g: 10, category: "Sweetener", shelf_life: 180 }
          ],
          instructions: ["Simmer rolled oats in almond milk for 7 minutes.", "Stir in maple syrup and flaxseed powder.", "Pour into bowl and top with fresh seasonal fruits and seeds."]
        }
      ],
      "lunch": [
        {
          name: "Chana Masala with Jeera Brown Rice & Kachumber Salad",
          prepTime: "15 mins",
          cookTime: "25 mins",
          calories: 530, protein: 20, carbs: 88, fat: 9, calcium: 140, iron: 6.2, vitaminC: 32, vitaminA: 220, potassium: 680,
          tags: ["Vegan High Iron", "Fiber Rich", "Wholesome"],
          ingredients: [
            { name: "Kabuli Chana (Chickpeas)", base_qty_g: 75, category: "Pulses", shelf_life: 180 },
            { name: "Brown Rice", base_qty_g: 75, category: "Grains", shelf_life: 180 },
            { name: "Cucumber Tomato Salad Mix", base_qty_g: 60, category: "Fresh Vegetables", shelf_life: 5 },
            { name: "Mustard Oil / Sunflower Oil", base_qty_g: 10, category: "Oils", shelf_life: 180 }
          ],
          instructions: ["Boil soaked chickpeas with tea bag for dark color.", "Sauté onion, garlic, tomato, and chana masala powder in oil.", "Add chickpeas and simmer for 15 mins.", "Serve with jeera brown rice and fresh kachumber salad."]
        },
        {
          name: "Mediterranean Hummus, Falafel & Quinoa Harvest Bowl",
          prepTime: "15 mins",
          cookTime: "20 mins",
          calories: 560, protein: 21, carbs: 76, fat: 18, calcium: 160, iron: 5.4, vitaminC: 28, vitaminA: 310, potassium: 640,
          tags: ["Superfood Quinoa", "High Protein", "Global Gourmet"],
          ingredients: [
            { name: "Baked Falafel Balls (Chickpea)", base_qty_g: 100, category: "Prepared Plant Base", shelf_life: 4 },
            { name: "Quinoa", base_qty_g: 60, category: "Grains", shelf_life: 180 },
            { name: "Tahini Hummus", base_qty_g: 40, category: "Dips", shelf_life: 7 },
            { name: "Cherry Tomatoes & Olives", base_qty_g: 50, category: "Vegetables", shelf_life: 7 }
          ],
          instructions: ["Cook quinoa in vegetable broth.", "Warm baked falafels.", "Assemble bowl: quinoa base, falafels, cucumber, tomatoes, and a scoop of tahini hummus.", "Drizzle with lemon juice."]
        }
      ],
      "dinner": [
        {
          name: "Tofu & Broccoli Green Curry with Jasmine Rice",
          prepTime: "15 mins",
          cookTime: "20 mins",
          calories: 520, protein: 22, carbs: 68, fat: 16, calcium: 280, iron: 4.8, vitaminC: 65, vitaminA: 520, potassium: 610,
          tags: ["Vitamin C Rich", "Anti-Inflammatory", "Creamy Plant Milk"],
          ingredients: [
            { name: "Tofu Cubes", base_qty_g: 100, category: "Plant Protein", shelf_life: 10 },
            { name: "Broccoli & Snap Peas", base_qty_g: 80, category: "Fresh Vegetables", shelf_life: 5 },
            { name: "Coconut Milk", base_qty_g: 100, category: "Pantry", shelf_life: 180 },
            { name: "Thai Green Curry Paste", base_qty_g: 20, category: "Condiments", shelf_life: 90 },
            { name: "Jasmine Rice", base_qty_g: 70, category: "Grains", shelf_life: 180 }
          ],
          instructions: ["Sauté curry paste in 2 tbsp coconut cream.", "Add remaining coconut milk, water, broccoli, and tofu.", "Simmer for 10 mins until veggies are tender-crisp.", "Serve over fragrant jasmine rice."]
        },
        {
          name: "Lentil & Sweet Potato Stew with Whole Wheat Crusty Bread",
          prepTime: "15 mins",
          cookTime: "25 mins",
          calories: 480, protein: 19, carbs: 82, fat: 6, calcium: 110, iron: 5.1, vitaminC: 40, vitaminA: 850, potassium: 740,
          tags: ["Beta Carotene Rich", "High Fiber", "Soothing Comfort"],
          ingredients: [
            { name: "Brown / Green Lentils", base_qty_g: 65, category: "Pulses", shelf_life: 180 },
            { name: "Sweet Potato", base_qty_g: 90, category: "Root Veg", shelf_life: 21 },
            { name: "Carrots & Celery", base_qty_g: 50, category: "Vegetables", shelf_life: 14 },
            { name: "Artisan Crusty Bread", base_qty_g: 60, category: "Bakery", shelf_life: 4 }
          ],
          instructions: ["Sauté carrots, celery, and garlic in olive oil.", "Add diced sweet potato, brown lentils, vegetable stock, and rosemary.", "Simmer for 25 mins until lentils are soft.", "Serve with thick slices of crusty bread."]
        }
      ]
    },
    "non-veg": {
      "breakfast": [
        {
          name: "Egg Bhurji (Masala Scrambled Eggs) with Whole Wheat Paratha",
          prepTime: "10 mins",
          cookTime: "10 mins",
          calories: 420, protein: 20, carbs: 42, fat: 18, calcium: 90, iron: 3.2, vitaminC: 15, vitaminA: 280, potassium: 340,
          tags: ["High Protein", "Quick Cooking", "Energy Packed"],
          ingredients: [
            { name: "Fresh Farm Eggs", base_qty_g: 110, category: "Eggs", shelf_life: 14 },
            { name: "Onions & Tomatoes", base_qty_g: 60, category: "Vegetables", shelf_life: 10 },
            { name: "Whole Wheat Atta", base_qty_g: 60, category: "Grains", shelf_life: 90 },
            { name: "Butter / Oil", base_qty_g: 10, category: "Dairy/Oil", shelf_life: 60 }
          ],
          instructions: ["Whisk eggs with salt and pepper.", "Sauté finely chopped onions, green chilies, and tomatoes in butter.", "Pour eggs and scrambled continuously till soft folds form.", "Serve hot with freshly cooked wheat paratha."]
        },
        {
          name: "Chicken Kheema Pao with Fresh Coriander Lime",
          prepTime: "15 mins",
          cookTime: "20 mins",
          calories: 460, protein: 28, carbs: 48, fat: 14, calcium: 65, iron: 3.8, vitaminC: 22, vitaminA: 190, potassium: 480,
          tags: ["Lean Meat Protein", "Mumbai Street Style", "Flavor Burst"],
          ingredients: [
            { name: "Minced Chicken (Kheema)", base_qty_g: 110, category: "Meat", shelf_life: 2 },
            { name: "Onions & Spices", base_qty_g: 60, category: "Produce/Spices", shelf_life: 10 },
            { name: "Ladi Pao / Rolls", base_qty_g: 60, category: "Bakery", shelf_life: 3 }
          ],
          instructions: ["Sauté onions, ginger-garlic paste, and minced chicken.", "Add chili, coriander, and garam masala powder; cook for 15 mins.", "Finish with fresh coriander and lemon squeeze.", "Serve with lightly buttered pao."]
        }
      ],
      "lunch": [
        {
          name: "Homestyle Chicken Curry, Basmati Rice & Cucumber Salad",
          prepTime: "15 mins",
          cookTime: "30 mins",
          calories: 590, protein: 34, carbs: 72, fat: 16, calcium: 75, iron: 4.2, vitaminC: 18, vitaminA: 210, potassium: 590,
          tags: ["Lean Protein", "Classic Family Meal", "Satisfying"],
          ingredients: [
            { name: "Chicken Breast / Thigh Cuts", base_qty_g: 140, category: "Meat", shelf_life: 2 },
            { name: "Basmati Rice", base_qty_g: 75, category: "Grains", shelf_life: 180 },
            { name: "Onion Tomato Curry Base", base_qty_g: 80, category: "Produce", shelf_life: 7 },
            { name: "Mustard / Cooking Oil", base_qty_g: 12, category: "Oils", shelf_life: 180 }
          ],
          instructions: ["Marinate chicken with yogurt, turmeric, and ginger-garlic.", "Sauté onion-tomato base till oil separates.", "Add chicken and cook uncovered for 10 mins, then cover and simmer 15 mins.", "Serve with steamed rice and sliced cucumber."]
        },
        {
          name: "Coastal Fish Curry (Fish Tiklai/Salmon) with Steamed Rice",
          prepTime: "15 mins",
          cookTime: "20 mins",
          calories: 540, protein: 31, carbs: 68, fat: 14, calcium: 85, iron: 3.1, vitaminC: 14, vitaminA: 160, potassium: 620,
          tags: ["Omega-3 Fats", "Heart Healthy", "Light & Fresh"],
          ingredients: [
            { name: "Fresh Fish Fillet (Fish/Salmon/Surmai)", base_qty_g: 130, category: "Seafood", shelf_life: 2 },
            { name: "Coconut & Kokum Extract Base", base_qty_g: 70, category: "Produce/Pantry", shelf_life: 5 },
            { name: "Rice", base_qty_g: 75, category: "Grains", shelf_life: 180 }
          ],
          instructions: ["Grind grated coconut, red chilies, coriander, and turmeric into smooth paste.", "Bring curry to boil with kokum/tamarind water.", "Add fish pieces gently and simmer for 7-8 minutes.", "Serve piping hot over rice."]
        }
      ],
      "dinner": [
        {
          name: "Mutton Sukka / Grilled Lean Lamb with Roti & Dal",
          prepTime: "20 mins",
          cookTime: "40 mins",
          calories: 620, protein: 36, carbs: 62, fat: 20, calcium: 90, iron: 5.6, vitaminC: 12, vitaminA: 150, potassium: 650,
          tags: ["High Iron", "Rich Flavor", "Protein Dense"],
          ingredients: [
            { name: "Lean Mutton / Lamb", base_qty_g: 120, category: "Meat", shelf_life: 2 },
            { name: "Whole Wheat Roti", base_qty_g: 60, category: "Grains", shelf_life: 90 },
            { name: "Yellow Moong Dal", base_qty_g: 40, category: "Pulses", shelf_life: 180 },
            { name: "Roasted Coconut Spice Paste", base_qty_g: 30, category: "Spices", shelf_life: 30 }
          ],
          instructions: ["Pressure cook mutton with ginger, garlic, and salt till tender.", "Dry roast coconut and spices, grind to paste.", "Sauté paste in oil, add mutton and reduce gravy till dark and dry.", "Serve with fresh rotis and light dal."]
        }
      ]
    }
  }
};
