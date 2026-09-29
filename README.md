# 🍲 Khana AI — Zero-Waste 30-Day Smart Meal & Grocery Planner

[![RevenueCat Shipaton 2026](https://img.shields.io/badge/RevenueCat-Shipaton%202026-red?style=for-the-badge&logo=revenuecat)](https://www.revenuecat.com/)
[![Platform: iOS | Android | Web](https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-blue?style=for-the-badge)](https://github.com/MeeraliN/khana)
[![Built with Strands Agents SDK](https://img.shields.io/badge/Strands_Agents-SDK-blue?style=for-the-badge)](https://github.com/MeeraliN/khana)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Hosted on GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-success?style=for-the-badge&logo=github)](https://meeralin.github.io/khana/)

> **Built for RevenueCat Shipaton 2026**
> A compassionate, zero-waste regional meal & grocery planner engineered for cross-platform mobile (iOS, Android) and web. Grounded in Abbey's Kitchen Hunger Crushing Combo framework and powered by RevenueCat SDK monetization, Khana AI eliminates daily meal decision fatigue, scales market purchases in exact **kg & gm**, and delivers sustainable, non-restrictive nutrition without food shame.

---

## 🚀 Live Demo & Repository
- **Live Web Application (GitHub Pages):** [https://meeralin.github.io/khana/](https://meeralin.github.io/khana/)
- **GitHub Repository:** [https://github.com/MeeraliN/khana](https://github.com/MeeraliN/khana)

---

## 🎯 Problem & Target Audience

### The Problem
Every single day, households spend 30–45 minutes arguing over two exhausting questions:
1. *"What should we cook today?"*
2. *"What and how much should we buy from the market today?"*

This daily decision fatigue leads to:
- **Food Waste:** Buying perishable vegetables in wrong quantities that spoil in the fridge.
- **Monotony:** Repeating the same 3-4 meals every week due to mental fatigue.
- **Nutritional Imbalance:** Missing essential vitamins (Vitamin C, B12, A) and minerals (Iron, Calcium).
- **Restrictive Diet Strain:** Traditional diet apps obsess over strict calorie counting and macro restriction, causing food guilt instead of healthy habits.

### Who It's For
Families, students, working professionals, and health-conscious individuals across mobile and web who want zero-thought daily meal execution, exact market purchase quantities in **kg/gm**, and zero food waste.

---

## 💚 Abbey's Kitchen Hunger Crushing Combo Framework
Khana AI embraces dietitian Abbey Sharp's **Hunger Crushing Combo (HCC)** framework:

```
+-----------------------------------------------------------------------+
|                    Hunger Crushing Combo (HCC)                        |
|                                                                       |
|   [ PROTEIN ] + [ FIBER ] + [ HEALTHY FATS ] + [ VOLUME & CARBS ]     |
|   Satiety &     Gut Health    Hormone Support    Sustained Energy     |
|   Muscle        & Fullness    & Flavor           & Satisfaction       |
+-----------------------------------------------------------------------+
```

- **Compassionate Nutrition:** Replaces obsessive calorie tracking with positive, nutrient-rich meal construction.
- **Satiety & Energy:** Every meal balances lean or plant-based protein, complex fiber, healthy fats (cold-pressed oils, nuts, seeds), and volume-rich regional produce.
- **Zero Restrictive Rules:** Encourages enjoyment of traditional regional comfort foods while maintaining USDA Recommended Daily Allowances (RDA) sufficiency.

---

## 💳 RevenueCat SDK Integration & Monetization Architecture

Khana AI leverages **RevenueCat** (`purchases_flutter` / `react-native-purchases` / `purchases-capacitor` / `purchases-js`) to manage cross-platform subscriptions, paywalls, and feature entitlements effortlessly across iOS, Android, and Web.

```
 +-----------------------------------------------------------------------+
 |                 Mobile App (iOS / Android / Web)                      |
 |                                                                       |
 |   [ Free User ]                                   [ Pro Subscriber ]  |
 |   - 7-Day Meal Matrix                             - 30-Day Matrix     |
 |   - Single-User Scaling                           - Family Scaling    |
 |   - Single-Day List                               - Zero-Waste Export |
 |   - Basic USDA Summary                            - AI Meal Swaps     |
 +-----------------------------------+-----------------------------------+
                                     |
                                     v
 +-----------------------------------------------------------------------+
 |                   RevenueCat SDK Integration                          |
 |            Purchases.configure() & CustomerInfo Entitlements          |
 |                     Entitlement ID: "khana_pro"                       |
 +-----------------------------------+-----------------------------------+
                                     |
                                     v
 +-----------------------------------------------------------------------+
 |                Apple App Store / Google Play / Web Pay                |
 |        Khana Pro Monthly ($4.99/mo) | Khana Pro Annual ($39.99/yr)      |
 +-----------------------------------------------------------------------+
```

### Tier Structure & Feature Matrix

| Feature | Freemium Tier (Free) | Khana Pro Subscription 👑 |
| :--- | :---: | :---: |
| **Meal Planning Scope** | 7 Days (21 Meals) | **Full 30-Day x 3 Meals Matrix (90 Meals)** |
| **Regional Cuisine Engine** | Standard Selection | **All Cuisines (Gujarat, Punjab, South India, Maharashtra, Bengal)** |
| **Portion Scaling Engine** | Single Adult (1.0x) | **Custom Family Member Portion Scaling (Adults, Children, Seniors, Toddlers)** |
| **Zero-Waste Market List** | Single-Day View | **Multi-Frequency Market Purchases (Daily, 2-3x/wk, Weekly, 30-Day Bulk in kg/gm)** |
| **Market List Export** | Screen View Only | **Zero-Waste Market Exports (PDF & WhatsApp formatted checklists)** |
| **AI Agent & Meal Swaps** | 1 Swap / Day | **Unlimited AI Meal Swaps & Ingredient Substitution Engine** |
| **Nutrition Dashboard** | USDA Basic Totals | **USDA RDA Gauges & Abbey's Hunger Crushing Combo Breakdown** |

---

## ✨ Key Features

1. **Location & Regional Cuisine Intelligence:**
   - Adapts 90 distinct meals (30 days x 3 meals: Breakfast, Lunch, Dinner) based on **Country, State, and City** (e.g. Maharashtra, Punjab, South India, Gujarat, Bengal).

2. **Strict Dietary Guardrails (Veg / Non-Veg / Vegan):**
   - 🟢 **Vegetarian (Veg):** Excludes meat, fish, egg, and seafood across all 90 meals.
   - 🥬 **Vegan:** Excludes all dairy, ghee, butter, honey, meat, and eggs; substitutes plant cottage/tofu and cold-pressed oils.
   - 🔴 **Non-Vegetarian:** Balanced lean protein and vegetarian meals.

3. **Household Member Portion Scaling (Pro):**
   - Add family details (Adults, Children, Seniors, Toddlers).
   - Automatically computes exact household portion scaling (e.g. 2 Adults + 1 Child = 2.6x scale factor).

4. **Market Purchase Planner (kg/gm) & Zero-Waste Export (Pro):**
   - Asks how many times you are willing to visit the market (Daily, 2-3x/week, Weekly, Bi-weekly).
   - Generates exact market purchase quantities in **kilograms (kg) and grams (gm)** grouped by produce shelf-life to guarantee zero waste.
   - Export structured checklists directly to **PDF** or **WhatsApp**.

5. **USDA Nutrition Benchmark & Hunger Crushing Combo Gauges:**
   - Real-time compliance gauges comparing daily totals against USDA Recommended Daily Allowances (RDA) for Calories, Protein, Iron, Calcium, Vitamin C, and Carbohydrates.

6. **Strands AI Agent Interactive Playground & Meal Swaps:**
   - Powered by **Strands Agents SDK** (`strands-agents`).
   - Dynamic recipe swap, ingredient substitution advisor, and real-time reasoning trace.

---

## 🏛️ System Architecture

```
 +-----------------------------------------------------------------------+
 |                        Mobile / Web Interface                         |
 |           (Cross-Platform Mobile App & Responsive Web UI)             |
 +-----------------------------------+-----------------------------------+
                                     |
                                     v
 +-----------------------------------------------------------------------+
 |                 RevenueCat Paywall & Entitlement Engine               |
 |         (Validates "khana_pro" status for 30-Day matrix & Exports)      |
 +-----------------------------------+-----------------------------------+
                                     |
                                     v
 +-----------------------------------------------------------------------+
 |                   Khana Core AI & Planning Engine                     |
 |                     (Strands Agents SDK Agent)                        |
 +-----------+-----------------------+-----------------------+-----------+
             |                       |                       |
             v                       v                       v
 +-----------------------+ +-------------------+ +-----------------------+
 |  Location & Cuisine   | |  USDA FoodData    | |   Grocery Scaling &   |
 |     Adapter Tool      | |  Central API Tool | |  Zero-Waste Engine    |
 +-----------------------+ +-------------------+ +-----------------------+
             |                       |                       |
             +-----------------------+-----------------------+
                                     |
                                     v
 +-----------------------------------------------------------------------+
 |               Strict Dietary Guardrail Verification Engine            |
 |            (Guarantees ZERO non-veg items for Veg / Vegan)            |
 +-----------------------------------+-----------------------------------+
                                     |
                                     v
 +-----------------------------------------------------------------------+
 |        30-Day Matrix (90 Meals) + Market List (kg/gm) + Export        |
 +-----------------------------------+-----------------------------------+
```

### Agent Code Structure
- `agent/meal_planner_agent.py`: Strands Agent SDK implementation featuring `@agent` and `@tool` decorators for USDA lookup, grocery scaling, and diet verification.
- `agent/requirements.txt`: Python SDK dependencies (`strands-agents`, `boto3`, `requests`, `pydantic`).

---

## 🛠️ Local Setup & Running

### Running the Web Application Locally
Simply open `index.html` in any web browser, or serve it with a local static server:

```bash
# Using Python builtin server
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Running the Python Agent
```bash
cd agent
pip install -r requirements.txt
python meal_planner_agent.py
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

