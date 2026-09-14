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

  // Dedicated Regional Recipe Pools for 100% Authentic State Meal Plans
  REGIONAL_RECIPES: {
    "Gujarat": {
      "breakfast": [
        {
          name: "Gujarati Steamed Nylon Dhokla & Green Chutney",
          prepTime: "15 mins", cookTime: "15 mins", calories: 290, protein: 9, carbs: 48, fat: 6, calcium: 50, iron: 2.5, vitaminC: 18,
          tags: ["Steamed Protein", "Gut Healthy", "Gujarati Classic"],
          ingredients: [
            { name: "Gram Flour (Besan)", base_qty_g: 70, category: "Flour/Pulses", shelf_life: 120 },
            { name: "Semolina (Suji)", base_qty_g: 20, category: "Grains", shelf_life: 90 },
            { name: "Eno Fruit Salt / Baking Soda", base_qty_g: 5, category: "Pantry", shelf_life: 180 },
            { name: "Green Chili & Mustard Tempering", base_qty_g: 10, category: "Spices", shelf_life: 30 },
            { name: "Grated Coconut & Coriander", base_qty_g: 15, category: "Fresh Produce", shelf_life: 5 }
          ],
          instructions: ["Whisk besan, suji, turmeric, lemon juice, sugar, and water into smooth batter.", "Add Eno salt and steam in greased plate for 15 mins.", "Temper mustard seeds, sesame, and green chilies in oil with water & sugar.", "Pour temper over fluffy dhokla and cut into squares."]
        },
        {
          name: "Gujarati Methi Thepla & Fresh Curd",
          prepTime: "15 mins", cookTime: "10 mins", calories: 360, protein: 10, carbs: 54, fat: 11, calcium: 110, iron: 3.8, vitaminC: 22,
          tags: ["Fresh Fenugreek", "Travel Friendly", "High Fiber"],
          ingredients: [
            { name: "Whole Wheat Flour", base_qty_g: 75, category: "Grains", shelf_life: 90 },
            { name: "Fresh Fenugreek (Methi) Leaves", base_qty_g: 40, category: "Fresh Greens", shelf_life: 3 },
            { name: "Gram Flour (Besan)", base_qty_g: 15, category: "Grains", shelf_life: 120 },
            { name: "Curd / Yogurt", base_qty_g: 80, category: "Dairy", shelf_life: 7 },
            { name: "Sesame Seeds & Spices", base_qty_g: 8, category: "Spices", shelf_life: 90 }
          ],
          instructions: ["Knead wheat flour, besan, chopped methi leaves, curd, sesame seeds, and spices.", "Roll into thin flatbreads (thepla).", "Roast on hot tawa with a drizzle of oil till golden spots appear.", "Serve with fresh curd or mango chundo."]
        },
        {
          name: "Spiced Gujarati Handvo with Sesame Tempering",
          prepTime: "15 mins", cookTime: "25 mins", calories: 380, protein: 12, carbs: 56, fat: 12, calcium: 85, iron: 3.2, vitaminC: 15,
          tags: ["Lentil Rice Cake", "Crispy Crust", "Nutritious"],
          ingredients: [
            { name: "Mixed Dal & Rice Batter", base_qty_g: 120, category: "Grains & Pulses", shelf_life: 4 },
            { name: "Grated Bottle Gourd (Lauki)", base_qty_g: 60, category: "Vegetables", shelf_life: 7 },
            { name: "Sesame & Mustard Seeds", base_qty_g: 10, category: "Seeds", shelf_life: 180 },
            { name: "Oil & Curry Leaves", base_qty_g: 10, category: "Oils", shelf_life: 180 }
          ],
          instructions: ["Mix fermented dal-rice batter with grated lauki, ginger, green chilies, and turmeric.", "Heat oil in deep pan, temper mustard, sesame, and curry leaves.", "Pour batter, cover and cook on low flame till golden and crispy on both sides."]
        },
        {
          name: "Soft Gujarati Khandvi with Coconut Tempering",
          prepTime: "15 mins", cookTime: "15 mins", calories: 310, protein: 9, carbs: 42, fat: 9, calcium: 95, iron: 2.8, vitaminC: 12,
          tags: ["Silky Roll", "Melt in Mouth", "Low Calorie"],
          ingredients: [
            { name: "Gram Flour (Besan)", base_qty_g: 60, category: "Flour/Pulses", shelf_life: 120 },
            { name: "Buttermilk / Sour Curd", base_qty_g: 150, category: "Dairy", shelf_life: 5 },
            { name: "Mustard, Sesame & Coconut", base_qty_g: 15, category: "Pantry", shelf_life: 30 }
          ],
          instructions: ["Whisk besan and buttermilk with ginger paste, turmeric, and salt.", "Cook on medium heat stirring continuously till thick.", "Spread quickly over flipped plates, roll tightly into bite-sized cylinders.", "Top with hot mustard-sesame oil temper and grated coconut."]
        }
      ],
      "lunch": [
        {
          name: "Authentic Gujarati Undhiyu & Whole Wheat Puri",
          prepTime: "25 mins", cookTime: "30 mins", calories: 590, protein: 18, carbs: 82, fat: 22, calcium: 160, iron: 5.2, vitaminC: 45,
          tags: ["Winter Classic", "Root Veg Power", "Festive Dish"],
          ingredients: [
            { name: "Mixed Veggies (Surti Papdi, Sweet Potato, Yam, Eggplant)", base_qty_g: 120, category: "Fresh Veg", shelf_life: 5 },
            { name: "Methi Muthiya (Fenugreek Dumplings)", base_qty_g: 50, category: "Prepared Base", shelf_life: 3 },
            { name: "Whole Wheat Atta (for Puri)", base_qty_g: 70, category: "Grains", shelf_life: 90 },
            { name: "Groundnut Oil & Spices", base_qty_g: 15, category: "Oils", shelf_life: 180 }
          ],
          instructions: ["Stuff brinjal and potatoes with grated coconut, peanut, coriander, and spice mixture.", "Sauté surti papdi and root veggies in groundnut oil.", "Layer veggies with fried methi muthiyas and cook on low heat.", "Serve piping hot with puffed wheat puris."]
        },
        {
          name: "Gujarati Dal Dhokli with Desi Ghee",
          prepTime: "20 mins", cookTime: "25 mins", calories: 510, protein: 19, carbs: 84, fat: 11, calcium: 110, iron: 4.5, vitaminC: 20,
          tags: ["One Pot Comfort", "Sweet & Tangy", "Protein Rich"],
          ingredients: [
            { name: "Toor Dal (Pigeon Peas)", base_qty_g: 65, category: "Pulses", shelf_life: 180 },
            { name: "Whole Wheat Dough Strips (Dhokli)", base_qty_g: 70, category: "Grains", shelf_life: 90 },
            { name: "Jaggery & Kokum / Peanuts", base_qty_g: 20, category: "Pantry", shelf_life: 90 },
            { name: "Desi Ghee", base_qty_g: 10, category: "Dairy", shelf_life: 60 }
          ],
          instructions: ["Pressure cook toor dal, blend smooth with water, jaggery, peanuts, and kokum.", "Bring dal to boil.", "Cut rolled spiced wheat dough into diamond strips (dhokli) and drop into boiling dal.", "Simmer for 15 mins till dhokli is tender; drizzle ghee."]
        },
        {
          name: "Khatty-Meethi Gujarati Dal, Steamed Rice & Phulka",
          prepTime: "15 mins", cookTime: "25 mins", calories: 490, protein: 17, carbs: 88, fat: 8, calcium: 90, iron: 4.1, vitaminC: 18,
          tags: ["Balanced Sweet & Sour", "Daily Staple", "Light Lunch"],
          ingredients: [
            { name: "Toor Dal", base_qty_g: 60, category: "Pulses", shelf_life: 180 },
            { name: "Basmati Rice", base_qty_g: 70, category: "Grains", shelf_life: 180 },
            { name: "Whole Wheat Atta", base_qty_g: 50, category: "Grains", shelf_life: 90 },
            { name: "Jaggery, Lemon & Mustard Temper", base_qty_g: 15, category: "Pantry", shelf_life: 90 }
          ],
          instructions: ["Boil toor dal with peanuts and ginger.", "Simmer with jaggery, lemon juice, clove, and cinnamon.", "Temper mustard seeds, cumin, curry leaves, and asafoetida in oil; pour over dal.", "Serve with steamed rice and soft phulkas."]
        },
        {
          name: "Sev Tamatar Nu Shaak, Gujarati Kadhi & Bajra Rotlo",
          prepTime: "15 mins", cookTime: "20 mins", calories: 540, protein: 16, carbs: 78, fat: 16, calcium: 140, iron: 4.8, vitaminC: 35,
          tags: ["Kathiyawadi Style", "Pearl Millet Power", "Spicy Tangy"],
          ingredients: [
            { name: "Crispy Sev", base_qty_g: 40, category: "Pantry", shelf_life: 60 },
            { name: "Fresh Tomatoes", base_qty_g: 100, category: "Vegetables", shelf_life: 7 },
            { name: "Pearl Millet (Bajra) Flour", base_qty_g: 80, category: "Grains", shelf_life: 60 },
            { name: "Buttermilk & Besan (for Kadhi)", base_qty_g: 100, category: "Dairy/Flour", shelf_life: 5 }
          ],
          instructions: ["Sauté juicy tomatoes with ginger, chili, coriander powder, and jaggery.", "Add water, simmer till soft, top with thick sev just before serving.", "Prepare thin sweet-sour buttermilk kadhi thickened with besan.", "Serve hot with thick hand-patted bajra rotlo."]
        }
      ],
      "dinner": [
        {
          name: "Gujarati Khichdi, Sweet Guj Kadhi & Roasted Papad",
          prepTime: "10 mins", cookTime: "20 mins", calories: 440, protein: 15, carbs: 72, fat: 8, calcium: 110, iron: 3.5, vitaminC: 12,
          tags: ["Light Comfort", "Easy Digestion", "Soothing Night Meal"],
          ingredients: [
            { name: "Rice & Green Moong Dal", base_qty_g: 90, category: "Grains & Pulses", shelf_life: 180 },
            { name: "Buttermilk & Besan", base_qty_g: 120, category: "Dairy/Flour", shelf_life: 5 },
            { name: "Desi Ghee & Cloves", base_qty_g: 10, category: "Dairy & Spices", shelf_life: 60 },
            { name: "Urad Dal Papad", base_qty_g: 15, category: "Pantry", shelf_life: 120 }
          ],
          instructions: ["Pressure cook equal parts rice and green moong dal with turmeric and salt.", "Simmer buttermilk, besan, ginger paste, cinnamon, cloves, and jaggery for Kadhi.", "Temper ghee with mustard seeds, curry leaves, and red chili.", "Serve soft khichdi with hot kadhi and roasted papad."]
        },
        {
          name: "Ringan No Olo (Smokey Baingan Bharta) & Bajra Roti",
          prepTime: "15 mins", cookTime: "25 mins", calories: 480, protein: 14, carbs: 76, fat: 12, calcium: 120, iron: 5.1, vitaminC: 28,
          tags: ["Smokey Flavor", "Kathiyawadi Special", "High Fiber"],
          ingredients: [
            { name: "Big Eggplant (Ringan)", base_qty_g: 150, category: "Vegetables", shelf_life: 7 },
            { name: "Spring Onions & Garlic", base_qty_g: 60, category: "Fresh Produce", shelf_life: 7 },
            { name: "Bajra Flour", base_qty_g: 80, category: "Grains", shelf_life: 60 },
            { name: "Oil & Spices", base_qty_g: 10, category: "Oils", shelf_life: 180 }
          ],
          instructions: ["Roast eggplant directly over open flame until skin is charred.", "Peel and mash roasted eggplant pulp.", "Sauté abundant garlic, green chilies, spring onions, and tomatoes in oil.", "Fold in roasted pulp, cook 10 mins. Serve with warm bajra roti."]
        },
        {
          name: "Mag Nu Shaak (Whole Green Moong Curry) & Phulka",
          prepTime: "10 mins", cookTime: "20 mins", calories: 450, protein: 21, carbs: 70, fat: 7, calcium: 95, iron: 4.9, vitaminC: 16,
          tags: ["Whole Legume", "High Protein", "Wholesome"],
          ingredients: [
            { name: "Whole Green Moong", base_qty_g: 70, category: "Pulses", shelf_life: 180 },
            { name: "Whole Wheat Atta", base_qty_g: 60, category: "Grains", shelf_life: 90 },
            { name: "Jaggery, Lemon & Spices", base_qty_g: 10, category: "Spices", shelf_life: 90 }
          ],
          instructions: ["Boil soaked whole green moong until tender.", "Prepare gravy with oil, mustard seeds, ginger, garlic, chili, and jaggery.", "Add moong, squeeze fresh lemon juice, simmer 10 mins.", "Serve hot with soft phulkas."]
        }
      ]
    },
    "Punjab": {
      "breakfast": [
        {
          name: "Punjabi Stuffed Aloo Methi Paratha with Fresh Curd",
          prepTime: "20 mins", cookTime: "15 mins", calories: 420, protein: 11, carbs: 62, fat: 12, calcium: 120, iron: 3.5, vitaminC: 18,
          tags: ["Butter Roasted", "Hearty Breakfast", "Punjabi Classic"],
          ingredients: [
            { name: "Whole Wheat Flour", base_qty_g: 80, category: "Grains", shelf_life: 90 },
            { name: "Boiled Potatoes", base_qty_g: 70, category: "Vegetables", shelf_life: 21 },
            { name: "Fresh Fenugreek (Methi)", base_qty_g: 30, category: "Fresh Greens", shelf_life: 3 },
            { name: "Fresh Curd / Yogurt", base_qty_g: 100, category: "Dairy", shelf_life: 7 },
            { name: "Butter / Ghee", base_qty_g: 10, category: "Dairy", shelf_life: 60 }
          ],
          instructions: ["Knead wheat dough.", "Boil and mash potatoes with chopped methi, cumin, chili powder, and salt.", "Stuff dough, roll into parathas, and roast on tawa with butter.", "Serve hot with cold curd."]
        },
        {
          name: "Amritsari Kulcha with Chole & Chutney",
          prepTime: "20 mins", cookTime: "20 mins", calories: 480, protein: 16, carbs: 74, fat: 14, calcium: 110, iron: 4.2, vitaminC: 22,
          tags: ["Crispy Stuffed", "Tangy Chole", "Street Style"],
          ingredients: [
            { name: "Refined/Wheat Flour Batter", base_qty_g: 80, category: "Grains", shelf_life: 90 },
            { name: "Kabuli Chana (Chickpeas)", base_qty_g: 60, category: "Pulses", shelf_life: 180 },
            { name: "Potatoes & Onions", base_qty_g: 50, category: "Vegetables", shelf_life: 14 }
          ],
          instructions: ["Prepare spiced potato-onion stuffing.", "Roll dough, stuff and bake on tawa till crispy.", "Serve hot with spicy-tangy Amritsari chole."]
        }
      ],
      "lunch": [
        {
          name: "Punjabi Dal Makhani, Jeera Rice & Butter Naan",
          prepTime: "20 mins", cookTime: "35 mins", calories: 610, protein: 22, carbs: 82, fat: 18, calcium: 150, iron: 5.5, vitaminC: 15,
          tags: ["Creamy Black Urad", "Slow Cooked", "Rich Protein"],
          ingredients: [
            { name: "Whole Black Urad & Rajma", base_qty_g: 70, category: "Pulses", shelf_life: 180 },
            { name: "Basmati Rice", base_qty_g: 75, category: "Grains", shelf_life: 180 },
            { name: "Fresh Cream & Butter", base_qty_g: 20, category: "Dairy", shelf_life: 10 }
          ],
          instructions: ["Soak black urad and rajma overnight, pressure cook till soft.", "Simmer with tomato puree, ginger-garlic paste, and spices for 30 mins.", "Finish with fresh cream and butter. Serve with jeera rice and warm butter naan."]
        },
        {
          name: "Punjabi Chole Bhature with Sweet Lassi",
          prepTime: "20 mins", cookTime: "25 mins", calories: 630, protein: 20, carbs: 88, fat: 22, calcium: 130, iron: 5.8, vitaminC: 20,
          tags: ["Festive Feast", "Puffed Bhature", "Classic Comfort"],
          ingredients: [
            { name: "Chickpeas (Kabuli Chana)", base_qty_g: 75, category: "Pulses", shelf_life: 180 },
            { name: "Flour (for Bhature)", base_qty_g: 80, category: "Grains", shelf_life: 90 },
            { name: "Thick Curd (for Lassi)", base_qty_g: 100, category: "Dairy", shelf_life: 7 }
          ],
          instructions: ["Cook chickpeas with tea-infused whole spices for dark color.", "Sauté onion-tomato masala and simmer chole.", "Deep fry kneaded dough into puffed bhaturas.", "Serve hot with chilled sweet lassi."]
        }
      ],
      "dinner": [
        {
          name: "Paneer Tikka Masala, Tandoori Roti & Salad",
          prepTime: "20 mins", cookTime: "25 mins", calories: 580, protein: 25, carbs: 65, fat: 22, calcium: 310, iron: 3.9, vitaminC: 20,
          tags: ["High Calcium", "Grilled Cottage Cheese", "Delicious"],
          ingredients: [
            { name: "Fresh Cottage Cheese (Paneer)", base_qty_g: 100, category: "Dairy", shelf_life: 7 },
            { name: "Whole Wheat Dough (for Roti)", base_qty_g: 60, category: "Grains", shelf_life: 90 },
            { name: "Onion Tomato Gravy Base", base_qty_g: 80, category: "Fresh Produce", shelf_life: 7 }
          ],
          instructions: ["Marinate paneer cubes in spiced curd and grill.", "Simmer paneer in rich onion-tomato gravy.", "Serve hot with tandoori wheat roti."]
        }
      ]
    },
    "South India": {
      "breakfast": [
        {
          name: "South Indian Steamed Idli, Sambar & Coconut Chutney",
          prepTime: "10 mins", cookTime: "15 mins", calories: 310, protein: 9, carbs: 58, fat: 5, calcium: 55, iron: 2.1, vitaminC: 8,
          tags: ["Gut Friendly", "Fermented Probiotic", "South Indian Icon"],
          ingredients: [
            { name: "Rice & Urad Dal Batter", base_qty_g: 180, category: "Batter", shelf_life: 4 },
            { name: "Grated Coconut", base_qty_g: 30, category: "Produce", shelf_life: 3 },
            { name: "Roasted Chana Dal", base_qty_g: 15, category: "Pulses", shelf_life: 90 },
            { name: "Tempering Spices (Mustard, Curry Leaves)", base_qty_g: 5, category: "Spices", shelf_life: 30 }
          ],
          instructions: ["Pour batter into idli molds and steam for 10-12 minutes.", "Grind grated coconut, roasted chana dal, green chili, and salt with water.", "Temper chutney with mustard seeds and curry leaves in oil.", "Serve soft idlis hot with vegetable sambar."]
        },
        {
          name: "Crispy South Indian Paper Masala Dosa & Sambar",
          prepTime: "15 mins", cookTime: "15 mins", calories: 380, protein: 10, carbs: 64, fat: 9, calcium: 65, iron: 2.8, vitaminC: 15,
          tags: ["Crispy Crepe", "Spiced Potato Filling", "Delicious"],
          ingredients: [
            { name: "Fermented Dosa Batter", base_qty_g: 160, category: "Batter", shelf_life: 4 },
            { name: "Boiled Spiced Potatoes", base_qty_g: 80, category: "Vegetables", shelf_life: 14 }
          ],
          instructions: ["Spread dosa batter thinly on hot iron tawa.", "Drizzle oil/ghee till edges turn golden and crisp.", "Place spiced potato masala in center, fold tightly.", "Serve hot with coconut chutney and piping hot sambar."]
        }
      ],
      "lunch": [
        {
          name: "South Indian Bisibelebath with Potato Chips",
          prepTime: "15 mins", cookTime: "25 mins", calories: 490, protein: 17, carbs: 78, fat: 11, calcium: 110, iron: 4.1, vitaminC: 28,
          tags: ["One Pot Meal", "Rice Lentil Mash", "Flavorsome"],
          ingredients: [
            { name: "Rice & Toor Dal", base_qty_g: 100, category: "Grains & Pulses", shelf_life: 180 },
            { name: "Mixed Vegetables (Carrot, Beans, Peas)", base_qty_g: 80, category: "Vegetables", shelf_life: 5 },
            { name: "Bisibelebath Powder & Tamarind", base_qty_g: 15, category: "Pantry", shelf_life: 90 }
          ],
          instructions: ["Cook rice, dal, and vegetables together.", "Add tamarind extract, bisibelebath spice powder, and salt.", "Simmer till well blended and top with fried cashews in ghee."]
        },
        {
          name: "Tangy Rasam Rice, Potato Fry & Curd Rice",
          prepTime: "15 mins", cookTime: "20 mins", calories: 470, protein: 13, carbs: 82, fat: 8, calcium: 120, iron: 3.2, vitaminC: 25,
          tags: ["Digestive Rasam", "Soothing Curd Rice", "Comfort Lunch"],
          ingredients: [
            { name: "Steamed Rice", base_qty_g: 120, category: "Grains", shelf_life: 180 },
            { name: "Tamarind & Tomato Rasam Base", base_qty_g: 80, category: "Produce", shelf_life: 7 },
            { name: "Fresh Curd", base_qty_g: 80, category: "Dairy", shelf_life: 7 }
          ],
          instructions: ["Boil rasam with pepper, cumin, tamarind, and tomatoes.", "Serve hot rasam over steamed rice alongside crispy roasted potatoes.", "Finish meal with cooling tempered curd rice."]
        }
      ],
      "dinner": [
        {
          name: "Kerala Appam with Creamy Vegetable Stew",
          prepTime: "15 mins", cookTime: "20 mins", calories: 420, protein: 12, carbs: 68, fat: 12, calcium: 130, iron: 3.5, vitaminC: 18,
          tags: ["Lace Crepe", "Coconut Milk Stew", "Mild & Soothing"],
          ingredients: [
            { name: "Fermented Rice Coconut Batter", base_qty_g: 140, category: "Batter", shelf_life: 3 },
            { name: "Mixed Veggies & Coconut Milk", base_qty_g: 120, category: "Produce/Pantry", shelf_life: 5 }
          ],
          instructions: ["Pour batter into appam chatti, swirl to create thin lacy edges and soft center.", "Simmer carrots, potatoes, and peas in aromatic spiced coconut milk.", "Serve hot appam with warm vegetable stew."]
        }
      ]
    },
    "Maharashtra": {
      "breakfast": [
        {
          name: "Maharashtrian Kanda Poha & Solkadhi",
          prepTime: "15 mins", cookTime: "15 mins", calories: 330, protein: 8, carbs: 56, fat: 8, calcium: 45, iron: 3.1, vitaminC: 22,
          tags: ["Flattened Rice", "Quick & Light", "Marathi Special"],
          ingredients: [
            { name: "Flattened Rice (Poha)", base_qty_g: 75, category: "Grains", shelf_life: 90 },
            { name: "Onions & Peanuts", base_qty_g: 65, category: "Produce/Nuts", shelf_life: 30 }
          ],
          instructions: ["Rinse poha and drain.", "Sauté mustard seeds, peanuts, chilies, and onions in oil.", "Add turmeric, salt, and poha; steam 3 mins. Garnish with lemon and coriander."]
        },
        {
          name: "Spicy Kolhapuri Misal Pav & Farsan",
          prepTime: "15 mins", cookTime: "20 mins", calories: 450, protein: 18, carbs: 62, fat: 14, calcium: 90, iron: 4.8, vitaminC: 30,
          tags: ["Spicy Sprouts", "Crunchy Farsan", "Energy Boost"],
          ingredients: [
            { name: "Sprouted Matki (Moth Beans)", base_qty_g: 90, category: "Sprouts", shelf_life: 4 },
            { name: "Spicy Kat/Rassa Gravy", base_qty_g: 80, category: "Produce/Spices", shelf_life: 7 },
            { name: "Crispy Farsan & Ladi Pav", base_qty_g: 80, category: "Bakery/Pantry", shelf_life: 10 }
          ],
          instructions: ["Cook sprouted matki gravy.", "Prepare fiery chili-garlic Kat (rassa).", "Assemble: sprouted matki base, crunchy farsan, chopped raw onions, hot rassa. Serve with pav."]
        }
      ],
      "lunch": [
        {
          name: "Traditional Pitla Bhakri with Green Chili Thecha",
          prepTime: "15 mins", cookTime: "20 mins", calories: 520, protein: 18, carbs: 80, fat: 10, calcium: 95, iron: 4.8, vitaminC: 30,
          tags: ["Rustic Flavor", "Besan Curry", "High Fiber"],
          ingredients: [
            { name: "Gram Flour (Besan)", base_qty_g: 60, category: "Pulses", shelf_life: 120 },
            { name: "Jowar / Sorghum Flour", base_qty_g: 80, category: "Grains", shelf_life: 90 },
            { name: "Green Chilies & Garlic (Thecha)", base_qty_g: 20, category: "Spices", shelf_life: 10 }
          ],
          instructions: ["Whisk besan with turmeric and water.", "Temper garlic and chilies in oil, add besan water and stir till thick.", "Pat jowar dough into bhakri and cook on tawa.", "Serve pitla hot with jowar bhakri and garlic chili thecha."]
        }
      ],
      "dinner": [
        {
          name: "Varan Bhaat with Desi Ghee & Potato Sukka",
          prepTime: "10 mins", cookTime: "20 mins", calories: 460, protein: 14, carbs: 78, fat: 9, calcium: 70, iron: 3.2, vitaminC: 12,
          tags: ["Simple Varan", "Soothing Dinner", "Comfort Food"],
          ingredients: [
            { name: "Toor Dal (for Varan)", base_qty_g: 60, category: "Pulses", shelf_life: 180 },
            { name: "Steamed Rice", base_qty_g: 80, category: "Grains", shelf_life: 180 },
            { name: "Desi Ghee", base_qty_g: 10, category: "Dairy", shelf_life: 60 }
          ],
          instructions: ["Boil toor dal with turmeric and salt, mash smooth for mild varan.", "Serve hot varan over rice drizzled with ghee alongside spiced potato fry."]
        }
      ]
    },
    "Bengal": {
      "breakfast": [
        {
          name: "Bengali Luchi with Alur Dom & Cholar Dal",
          prepTime: "20 mins", cookTime: "20 mins", calories: 460, protein: 12, carbs: 70, fat: 14, calcium: 75, iron: 3.5, vitaminC: 18,
          tags: ["Fluffy Luchi", "Spiced Baby Potato", "Festive Breakfast"],
          ingredients: [
            { name: "Refined Flour (for Luchi)", base_qty_g: 75, category: "Grains", shelf_life: 90 },
            { name: "Baby Potatoes (Alur Dom)", base_qty_g: 80, category: "Vegetables", shelf_life: 21 },
            { name: "Chana Dal with Coconut", base_qty_g: 50, category: "Pulses", shelf_life: 180 }
          ],
          instructions: ["Knead dough and deep fry fluffy white luchis.", "Cook baby potatoes in mustard oil with ginger, cumin, and tomato gravy.", "Serve hot luchis with alur dom."]
        }
      ],
      "lunch": [
        {
          name: "Bengali Shukto, Cholar Dal & Steamed Gobindobhog Rice",
          prepTime: "20 mins", cookTime: "25 mins", calories: 520, protein: 16, carbs: 82, fat: 11, calcium: 130, iron: 4.5, vitaminC: 25,
          tags: ["Bitter Gourd Medley", "Coconut Milk Gravy", "Traditional"],
          ingredients: [
            { name: "Mixed Veggies (Bitter Gourd, Raw Banana, Eggplant, Drumstick)", base_qty_g: 120, category: "Fresh Veg", shelf_life: 5 },
            { name: "Chana Dal with Coconut Chips", base_qty_g: 60, category: "Pulses", shelf_life: 180 },
            { name: "Gobindobhog Rice", base_qty_g: 75, category: "Grains", shelf_life: 180 }
          ],
          instructions: ["Sauté veggies in mustard oil, simmer in mustard-poppy seed paste and milk for traditional Shukto.", "Cook Cholar dal tempered with ghee, coconut, and whole spices.", "Serve with fragrant rice."]
        }
      ],
      "dinner": [
        {
          name: "Bhaja Moong Dal, Baingan Bhaja & Gobindobhog Rice",
          prepTime: "15 mins", cookTime: "20 mins", calories: 480, protein: 15, carbs: 78, fat: 10, calcium: 90, iron: 4.1, vitaminC: 15,
          tags: ["Roasted Moong Dal", "Pan Fried Eggplant", "Aromatic"],
          ingredients: [
            { name: "Roasted Yellow Moong Dal", base_qty_g: 60, category: "Pulses", shelf_life: 180 },
            { name: "Sliced Eggplant (Baingan)", base_qty_g: 100, category: "Vegetables", shelf_life: 7 },
            { name: "Rice", base_qty_g: 75, category: "Grains", shelf_life: 180 }
          ],
          instructions: ["Dry roast moong dal till aromatic, pressure cook with ginger and green chilies.", "Marinate eggplant slices in turmeric, chili, and salt; pan fry in mustard oil.", "Serve hot with rice."]
        }
      ]
    },
    "General": {
      "breakfast": [
        {
          name: "Vegetable Oats Upma with Roasted Peanuts",
          prepTime: "10 mins", cookTime: "10 mins", calories: 310, protein: 10, carbs: 50, fat: 7, calcium: 60, iron: 3.2, vitaminC: 18,
          tags: ["High Fiber", "Quick Prep", "Healthy Heart"],
          ingredients: [
            { name: "Rolled Oats", base_qty_g: 60, category: "Grains", shelf_life: 180 },
            { name: "Chopped Mixed Veggies", base_qty_g: 50, category: "Produce", shelf_life: 5 },
            { name: "Peanuts & Mustard Temper", base_qty_g: 15, category: "Pantry", shelf_life: 60 }
          ],
          instructions: ["Dry roast oats.", "Temper mustard seeds, curry leaves, and peanuts in oil; sauté veggies.", "Add water, salt, and oats; simmer till soft."]
        }
      ],
      "lunch": [
        {
          name: "Wholesome Dal Tadka, Jeera Rice & Chapati",
          prepTime: "15 mins", cookTime: "25 mins", calories: 520, protein: 18, carbs: 84, fat: 10, calcium: 85, iron: 4.2, vitaminC: 15,
          tags: ["Balanced Protein", "Comfort Food", "USDA Compliant"],
          ingredients: [
            { name: "Yellow Toor Dal", base_qty_g: 60, category: "Pulses", shelf_life: 180 },
            { name: "Basmati Rice", base_qty_g: 70, category: "Grains", shelf_life: 180 },
            { name: "Whole Wheat Atta", base_qty_g: 60, category: "Grains", shelf_life: 90 }
          ],
          instructions: ["Pressure cook dal.", "Temper ghee with garlic, cumin, and chili.", "Serve with jeera rice and chapatis."]
        }
      ],
      "dinner": [
        {
          name: "Yellow Moong Khichdi with Ghee & Roasted Papad",
          prepTime: "10 mins", cookTime: "20 mins", calories: 430, protein: 15, carbs: 70, fat: 8, calcium: 75, iron: 3.2, vitaminC: 12,
          tags: ["Easy Digestion", "Nourishing", "Comfort Night"],
          ingredients: [
            { name: "Moong Dal & Rice", base_qty_g: 100, category: "Grains & Pulses", shelf_life: 180 },
            { name: "Desi Ghee", base_qty_g: 10, category: "Dairy", shelf_life: 60 }
          ],
          instructions: ["Pressure cook dal and rice together with turmeric and salt.", "Top with ghee temper and serve with roasted papad."]
        }
      ]
    }
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
          name: "Gujarati Steamed Nylon Dhokla & Green Chutney",
          prepTime: "15 mins",
          cookTime: "15 mins",
          calories: 290, protein: 9, carbs: 48, fat: 6, calcium: 50, iron: 2.5, vitaminC: 18, vitaminA: 110, potassium: 280,
          tags: ["High Protein", "Steamed", "Gujarati Classic"],
          ingredients: [
            { name: "Gram Flour (Besan)", base_qty_g: 75, category: "Flour/Pulses", shelf_life: 120 },
            { name: "Semolina (Suji)", base_qty_g: 20, category: "Grains", shelf_life: 90 },
            { name: "Eno Fruit Salt / Baking Soda", base_qty_g: 5, category: "Pantry", shelf_life: 180 },
            { name: "Green Chili & Mustard Tempering", base_qty_g: 10, category: "Spices", shelf_life: 30 },
            { name: "Grated Coconut & Coriander", base_qty_g: 10, category: "Fresh Produce", shelf_life: 5 }
          ],
          instructions: ["Whisk besan, suji, turmeric, lemon juice, and water.", "Steam in greased plate for 15 mins.", "Temper mustard seeds, sesame, and green chilies in oil.", "Pour temper over dhokla and cut into squares."]
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
