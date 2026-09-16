# 🍲 Khana AI — Complete Project Documentation & Recreation Guide

This document contains the complete technical blueprint, architectural specifications, file inventory, and source code required to recreate **Khana AI** from scratch.

---

## 📋 Table of Contents
1. [Project Overview & Architecture](#1-project-overview--architecture)
2. [Directory Structure](#2-directory-structure)
3. [File Specifications & Code Inventory](#3-file-specifications--code-inventory)
   - `index.html` (Single-Page Web Application)
   - `css/styles.css` (Tailwind & Print Styles)
   - `js/data.js` (Recipe Database & USDA Benchmarks)
   - `js/usda.js` (USDA Nutrition Integration Module)
   - `js/planner.js` (30-Day Meal Matrix Engine)
   - `js/grocery.js` (Zero-Waste Market Grocery Engine)
   - `js/agent.js` (Strands AI Agent Simulator)
   - `js/app.js` (Main UI Application Controller)
   - `agent/meal_planner_agent.py` (AWS Strands Agents SDK Agent)
   - `agent/requirements.txt` (Python Dependencies)
   - `agent/Dockerfile` (Amazon Bedrock AgentCore Container)
   - `agent/agentcore.json` (Bedrock AgentCore Spec)
4. [Deployment & Recreation Instructions](#4-deployment--recreation-instructions)

---

## 1. Project Overview & Architecture

**Khana AI** is a zero-waste 30-day meal and grocery market planner built for the **AWS Agents for Humans Hackathon 2026**.

### Core Pillars:
1. **30-Day x 3 Meals Matrix (90 Meals):** Generates 90 distinct regional meals customized by Country and State (Gujarat, Punjab, South India, Maharashtra, Bengal).
2. **Strict Dietary Guardrails:** 🟢 Vegetarian and 🥬 Vegan filters guarantee 100% zero non-veg or non-vegan ingredients.
3. **Household Member Portion Scaling:** Dynamically scales recipe ingredient quantities based on family member portion multipliers.
4. **Zero-Waste Market Grocery Engine:** Groups required ingredients into 5 clean department categories (`🌾 Grains`, `🥬 Fresh Veggies`, `🥛 Dairy`, `🛢️ Oils`, `🌶️ Spices`) and aggregates weights in **kg** and **gm** based on custom shopping day durations (`Today`, `Tomorrow`, `Tomorrow + 2 Days`, `Weekly`, `30-Day Bulk`).
5. **USDA Nutrition RDA Dashboard:** Compares daily intake against official USDA Recommended Daily Allowances (RDA).
6. **AWS Strands Agents SDK Integration:** Powered by decorated Strands tools (`@tool`) and Amazon Bedrock foundation models.

---

## 2. Directory Structure

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
│   ├── agent.js                # Strands Agent SDK Interactive Simulator
│   └── app.js                  # Main Application UI Controller
├── agent/
│   ├── meal_planner_agent.py   # AWS Strands Agents SDK Python Agent
│   ├── requirements.txt        # Python SDK Dependencies
│   ├── Dockerfile              # Amazon Bedrock AgentCore Container File
│   └── agentcore.json          # Bedrock AgentCore Deployment Manifest
├── README.md                   # Repository Overview & Architecture Diagram
└── LICENSE                     # MIT Open Source License
```

---

## 3. File Specifications & Code Inventory

### `index.html`
Single-page web application featuring responsive Tailwind CSS header, navigation tabs, day timeline selector, 3-card meal grid, interactive market grocery checklist, USDA nutrition gauges, Strands AI agent playground, and preferences modal.

### `css/styles.css`
Contains glassmorphism styling, custom scrollbars, and `@media print` rules designed to hide all non-grocery UI elements when printing the market checklist.

### `js/data.js`
Maintains USDA RDA benchmarks and dedicated 100% authentic regional recipe pools for **Gujarat**, **Punjab**, **South India**, **Maharashtra**, and **Bengal**.

### `js/usda.js`
Utility module calculating daily caloric and micronutrient totals and comparing them against USDA RDA targets.

### `js/planner.js`
Generating engine that loops through 30 days (90 meals total) and applies strict vegetarian/vegan sanitization guardrails.

### `js/grocery.js`
Contains `normalizeItem` canonicalization mapping to merge redundant ingredient names (e.g. merging *"Whole Wheat Atta"*, *"Wheat Flour"*, and *"Roti Dough"* into one entry) and aggregate quantities in **kg** and **gm** for any selected day or range.

### `js/agent.js`
Interactive Strands AI Agent simulation module with step-by-step reasoning trace and live plan mutation callbacks (`onCuisineChange`, `onDietChange`, `onFrequencyChange`, `onMealSwap`).

### `js/app.js`
Main application state controller handling global state, modal toggles, day selection timeline, tab switching, and event binding.

### `agent/meal_planner_agent.py`
Python implementation of the AWS Strands Agent using `@tool` decorators for `usda_nutrition_analyzer_tool`, `grocery_market_scaler_tool`, and `strict_diet_guardrail_tool`, backed by Amazon Bedrock Runtime via `boto3`.

---

## 4. Deployment & Recreation Instructions

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
1. Push all code to your GitHub repository `https://github.com/YourUsername/khana`.
2. Navigate to **Settings** → **Pages**.
3. Under **Source**, select `Deploy from a branch`.
4. Choose `main` branch and `/ (root)` directory, then click **Save**.

### Step 3: Run the Python Strands Agent
```bash
cd agent
pip install -r requirements.txt
python meal_planner_agent.py
```
