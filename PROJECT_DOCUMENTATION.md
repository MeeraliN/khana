# 🍲 Khana AI — Complete Project Documentation & Technical Specification

This document contains the technical blueprint, architectural specifications, RevenueCat integration design, file inventory, and recreation instructions for **Khana AI**.

---

## 📋 Table of Contents
1. [Project Overview & Positioning](#1-project-overview--positioning)
2. [Abbey's Kitchen Hunger Crushing Combo Framework](#2-abbeys-kitchen-hunger-crushing-combo-framework)
3. [RevenueCat Integration & Monetization Architecture](#3-revenuecat-integration--monetization-architecture)
4. [Directory Structure](#4-directory-structure)
5. [File Specifications & Code Inventory](#5-file-specifications--code-inventory)
   - `index.html` (Single-Page Web Application)
   - `css/styles.css` (Tailwind & Print Styles)
   - `js/data.js` (Recipe Database & USDA Benchmarks)
   - `js/usda.js` (USDA Nutrition Integration Module)
   - `js/planner.js` (30-Day Meal Matrix Engine)
   - `js/grocery.js` (Zero-Waste Market Grocery Engine)
   - `js/agent.js` (Strands AI Agent Simulator)
   - `js/app.js` (Main UI Application Controller)
   - `agent/meal_planner_agent.py` (Strands Agents SDK Python Agent)
   - `agent/requirements.txt` (Python Dependencies)
   - `agent/Dockerfile` (Agent Container Specification)
   - `agent/agentcore.json` (Deployment Manifest)
6. [Deployment & Recreation Guide](#6-deployment--recreation-guide)

---

## 1. Project Overview & Positioning

**Khana AI** is a zero-waste 30-day meal and grocery market planner engineered for mobile (iOS/Android) and web, built for **RevenueCat Shipaton 2026**.

### Core Pillars:
1. **30-Day x 3 Meals Matrix (90 Meals):** Generates 90 distinct regional meals customized by Country and State (Gujarat, Punjab, South India, Maharashtra, Bengal).
2. **Abbey's Kitchen Hunger Crushing Combo (HCC):** Balances meals for protein, fiber, healthy fats, and satisfying volume without restrictive calorie counting.
3. **RevenueCat Subscription Integration:** Seamless Freemium to Pro monetization framework unlocking 30-day matrices, family scaling, zero-waste exports, and AI swaps.
4. **Strict Dietary Guardrails:** 🟢 Vegetarian and 🥬 Vegan filters guarantee 100% zero non-veg or non-vegan ingredients.
5. **Household Member Portion Scaling:** Dynamically scales recipe ingredient quantities based on family member age and gender portion multipliers.
6. **Zero-Waste Market Grocery Engine:** Groups required ingredients into 5 clean department categories (`🌾 Grains`, `🥬 Fresh Veggies`, `🥛 Dairy`, `🛢️ Oils`, `🌶️ Spices`) and aggregates weights in **kg** and **gm** based on custom shopping day durations (`Today`, `Tomorrow`, `Tomorrow + 2 Days`, `Weekly`, `30-Day Bulk`).
7. **USDA Nutrition RDA Dashboard:** Compares daily intake against official USDA Recommended Daily Allowances (RDA).
8. **AI Agent Interactive Playground:** Powered by decorated Strands tools (`@tool`) for dynamic recipe swaps and ingredient substitutions.

---

## 2. Abbey's Kitchen Hunger Crushing Combo Framework

Khana AI integrates dietitian Abbey Sharp's **Hunger Crushing Combo** principle into its meal generation and nutrition evaluation algorithms:

### Four Pillars of the Combo:
1. **Protein:** 20–30g per meal (Paneer, Sprouts, Dal, Eggs, Tofu, Chicken/Fish). Promotes satiety and preserves lean muscle mass.
2. **Fiber:** 8–15g per meal (Whole Wheat Atta, Oats, Leafy Greens, Pulses). Supports gut microbiome and steady blood glucose.
3. **Healthy Fats:** Cold-pressed mustard/groundnut oil, Ghee, Almonds, Seeds, Avocado. Slows digestion for lasting fullness and micronutrient absorption.
4. **Volume & Complex Carbs:** Fresh vegetables, Millets (Bajra, Jowar), Brown Rice. Provides satisfying physical volume and sustained energy.

### Compassionate, Non-Restrictive Approach:
- **No Food Shame:** Never flags traditional dishes as "bad" or "cheat" foods.
- **Positive Addition:** Focuses on *adding* missing pillars (e.g. adding a seed mix or fiber salad) rather than cutting out favorite foods.

---

## 3. RevenueCat Integration & Monetization Architecture

Khana AI uses **RevenueCat** for cross-platform subscription management across iOS, Android, and Web.

### Product & Entitlement Configuration

```json
{
  "entitlements": {
    "khana_pro": {
      "description": "Unlocks 30-Day Matrix, Family Portion Scaling, PDF/WhatsApp Exports, and Unlimited AI Swaps"
    }
  },
  "products": {
    "khana_pro_monthly": {
      "identifier": "khana_pro_monthly",
      "price": "$4.99/month",
      "entitlement": "khana_pro"
    },
    "khana_pro_annual": {
      "identifier": "khana_pro_annual",
      "price": "$39.99/year",
      "entitlement": "khana_pro"
    }
  }
}
```

### Client Integration Pattern (RevenueCat SDK)

```typescript
// Sample RevenueCat SDK Integration Pattern
import Purchases from 'purchases-flutter'; // or 'react-native-purchases' / '@revenuecat/purchases-capacitor'

async function checkProAccess(): Promise<boolean> {
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    return customerInfo.entitlements.active["khana_pro"] !== undefined;
  } catch (e) {
    console.error("RevenueCat entitlement check failed:", e);
    return false;
  }
}

async function triggerPaywall(): Promise<boolean> {
  const offerings = await Purchases.getOfferings();
  if (offerings.current !== null) {
    // Present RevenueCat Paywall UI
    const purchaseResult = await Purchases.purchasePackage(offerings.current.monthly!);
    return purchaseResult.customerInfo.entitlements.active["khana_pro"] !== undefined;
  }
  return false;
}
```

### Feature Entitlement Mapping
- **Free Tier:** Days 1–7 unlocked, single adult scale factor (1.0x), on-screen grocery list.
- **Pro Tier (`khana_pro`):** Days 1–30 unlocked, family member portion scaling, export grocery list to PDF/WhatsApp, unlimited AI meal swaps.

---

## 4. Directory Structure

```text
khana/
├── index.html                  # Main Web Application HTML
├── css/
│   └── styles.css              # Custom Styles & Print Media Rules
├── js/
│   ├── data.js                 # Recipe Database & USDA RDA Benchmarks
│   ├── usda.js                 # USDA Nutrition Analyzer Module
│   ├── planner.js              # 30-Day Meal Matrix Generator Engine
│   ├── grocery.js              # Zero-Waste Grocery Deduplication Engine
│   ├── agent.js                # Strands AI Agent Interactive Simulator
│   └── app.js                  # Main Application UI Controller
├── agent/
│   ├── meal_planner_agent.py   # Strands Agents SDK Python Agent
│   ├── requirements.txt        # Python SDK Dependencies
│   ├── Dockerfile              # Container Specification File
│   └── agentcore.json          # Deployment Manifest
├── README.md                   # Repository Overview & Architecture Diagram
└── LICENSE                     # MIT Open Source License
```

---

## 5. File Specifications & Code Inventory

### `index.html`
Single-page web application featuring responsive Tailwind CSS header, navigation tabs, day timeline selector, 3-card meal grid, interactive market grocery checklist, USDA nutrition gauges, AI agent playground, and preferences modal.

### `css/styles.css`
Contains glassmorphism styling, custom scrollbars, and `@media print` rules designed to hide non-grocery UI elements when exporting or printing the market checklist.

### `js/data.js`
Maintains USDA RDA benchmarks and dedicated 100% authentic regional recipe pools for **Gujarat**, **Punjab**, **South India**, **Maharashtra**, and **Bengal**.

### `js/usda.js`
Utility module calculating daily caloric and micronutrient totals and comparing them against USDA RDA targets.

### `js/planner.js`
Generating engine that loops through 30 days (90 meals total) and applies strict vegetarian/vegan sanitization guardrails.

### `js/grocery.js`
Contains canonicalization mapping to merge redundant ingredient names (e.g. merging *"Whole Wheat Atta"*, *"Wheat Flour"*, and *"Roti Dough"*) and aggregate quantities in **kg** and **gm** for any selected day or range.

### `js/agent.js`
Interactive AI Agent simulation module with step-by-step reasoning trace and live plan mutation callbacks (`onCuisineChange`, `onDietChange`, `onFrequencyChange`, `onMealSwap`).

### `js/app.js`
Main application state controller handling global state, modal toggles, day selection timeline, tab switching, and event binding.

### `agent/meal_planner_agent.py`
Python implementation of the Strands Agent using `@tool` decorators for `usda_nutrition_analyzer_tool`, `grocery_market_scaler_tool`, and `strict_diet_guardrail_tool`.

---

## 6. Deployment & Recreation Guide

### Step 1: Local Web Server
```bash
# Clone the repository
git clone https://github.com/MeeraliN/khana.git
cd khana

# Start local HTTP server
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

### Step 2: Deploy to GitHub Pages
1. Push all code to your GitHub repository `https://github.com/MeeraliN/khana`.
2. Navigate to **Settings** → **Pages**.
3. Under **Source**, select `Deploy from a branch`.
4. Choose `main` branch and `/ (root)` directory, then click **Save**.

### Step 3: Run the Python Strands Agent
```bash
cd agent
pip install -r requirements.txt
python meal_planner_agent.py
```

