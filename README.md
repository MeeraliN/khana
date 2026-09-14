# 🍲 Khana AI — Zero-Waste 30-Day Smart Meal & Grocery Agent

[![AWS Agents for Humans Hackathon](https://img.shields.io/badge/AWS-Agents%20for%20Humans-orange?style=for-the-badge&logo=amazon-aws)](https://agentsforhumans.devpost.com/)
[![Built with Strands Agents SDK](https://img.shields.io/badge/Strands_Agents-SDK-blue?style=for-the-badge)](https://github.com/MeeraliN/khana)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Hosted on GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-success?style=for-the-badge&logo=github)](https://meeralin.github.io/khana/)

> **Built for AWS Agents for Humans Hackathon 2026**
> An autonomous AI Agent built with the **Strands Agents SDK** that solves daily meal decision fatigue, eliminates food waste, scales grocery buying in **kg & gm** based on household size and market frequency, and ensures 100% USDA balanced nutrition.

---

## 🚀 Live Demo & Repository
- **Live Website (GitHub Pages):** [https://meeralin.github.io/khana/](https://meeralin.github.io/khana/)
- **GitHub Repository:** [https://github.com/MeeraliN/khana](https://github.com/MeeraliN/khana)

---

## 🎯 Problem & Target Audience

### The Problem
Every single day, households spend 30-45 minutes arguing over two exhausting questions:
1. *"What should we cook today?"*
2. *"What and how much should we buy from the market today?"*

This leads to:
- **Food Waste:** Buying perishable vegetables in wrong quantities that spoil in the fridge.
- **Monotony:** Repeating the same 3-4 meals every week.
- **Nutritional Imbalance:** Missing essential vitamins (Vitamin C, B12, A) and minerals (Iron, Calcium).
- **Dietary Accidental Violations:** Vegetarians and Vegans accidentally receiving or cross-contaminating meals with non-veg ingredients.

### Who It's For
Families, students, working professionals, and health-conscious individuals who want zero-thought daily meal execution, exact market purchase quantities in **kg/gm**, and zero food waste.

---

## ✨ Key Features

1. **Location & Regional Cuisine Intelligence:**
   - Adapts 90 distinct meals (30 days x 3 meals: Breakfast, Lunch, Dinner) based on **Country, State, and City** (e.g. Maharashtra, Punjab, South India, California, London, Tokyo).

2. **Strict Dietary Guardrails (Veg / Non-Veg / Vegan):**
   - 🟢 **Vegetarian (Veg):** Strictly excludes 100% meat, fish, egg, and seafood across all 90 meals.
   - 🥬 **Vegan:** Excludes all dairy, ghee, butter, honey, meat, and eggs; substitutes plant cottage/tofu and cold-pressed oils.
   - 🔴 **Non-Vegetarian:** Balanced lean protein and vegetarian meals.

3. **Household Member Portion Scaling:**
   - Add family details (Adults, Children, Seniors, Toddlers).
   - Automatically computes exact household portion scaling (e.g. 2 Adults + 1 Child = 2.6x scale factor).

4. **Market Purchase Planner (kg/gm):**
   - Asks how many times you are willing to visit the market (Daily, 2-3x/week, Weekly, Bi-weekly).
   - Generates exact market purchase quantities in **kilograms (kg) and grams (gm)** grouped by produce shelf-life to guarantee zero waste.

5. **USDA Nutrition Benchmark Integration:**
   - Real-time compliance gauges comparing daily totals against USDA Recommended Daily Allowances (RDA) for Calories, Protein, Iron, Calcium, Vitamin C, and Carbohydrates.

6. **Strands AI Agent Interactive Playground:**
   - Powered by **Strands Agents SDK** (`strands-agents`).
   - Features dynamic recipe swap, ingredient substitution advisor, and a real-time Strands SDK reasoning trace.

---

## 🏛️ Architecture & Strands Agents SDK Implementation

### Architecture Diagram

```
 +-----------------------------------------------------------------------+
 |                            User Interface                             |
 |        (GitHub Pages Web App - Location, Diet, Family & Frequency)    |
 +-----------------------------------+-----------------------------------+
                                     |
                                     v
 +-----------------------------------------------------------------------+
 |                     Strands AI Agent Orchestrator                     |
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
 |            30-Day Matrix (90 Meals) + Market List (kg/gm)             |
 +-----------------------------------+-----------------------------------+
```

### Agent Code Structure
- `agent/meal_planner_agent.py`: Strands Agent SDK implementation featuring `@agent` and `@tool` decorators for USDA lookup, grocery scaling, and diet verification.
- `agent/requirements.txt`: Strands SDK dependencies (`strands-agents`, `boto3`, `requests`, `pydantic`).

---

## 🛠️ Local Setup & Running

### Running the Web Application Locally
Simply open `index.html` in any web browser, or serve it with a local static server:

```bash
# Using Python builtin server
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Running the Strands Agent SDK Python Agent
```bash
cd agent
pip install -r requirements.txt
python meal_planner_agent.py
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
