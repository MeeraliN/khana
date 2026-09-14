/**
 * Khana AI - Main Application Controller
 * Handles UI interactions, state management, rendering, family members, and tabs.
 */

document.addEventListener("DOMContentLoaded", function () {
  // Global State
  const state = {
    preferences: {
      country: "India",
      state: "Gujarat",
      dietType: "veg", // "veg", "non-veg", "vegan"
      marketingFrequency: "weekly", // "daily", "twice_weekly", "weekly", "biweekly"
      familyMembers: [
        { id: 1, name: "Adult 1", ageGroup: "adult", gender: "male", portion_factor: 1.0 },
        { id: 2, name: "Adult 2", ageGroup: "adult", gender: "female", portion_factor: 1.0 },
        { id: 3, name: "Child 1", ageGroup: "child", gender: "female", portion_factor: 0.6 }
      ]
    },
    mealPlan: [],
    selectedDay: 1,
    activeTab: "planner"
  };

  // DOM Elements
  const countrySelect = document.getElementById("input-country");
  const stateSelect = document.getElementById("input-state");
  const cityInput = document.getElementById("input-city");
  const dietSelect = document.getElementById("input-diet");
  const freqSelect = document.getElementById("input-freq");
  const btnGenerate = document.getElementById("btn-generate");
  const btnAddMember = document.getElementById("btn-add-member");
  const familyList = document.getElementById("family-list");
  const portionTotalBadge = document.getElementById("portion-total-badge");

  // Nav Tabs
  const navTabs = document.querySelectorAll(".nav-tab");
  const tabPanels = document.querySelectorAll(".tab-content");

  // Meal Plan UI
  const daysContainer = document.getElementById("days-container");
  const dayMealsContainer = document.getElementById("day-meals-container");
  const currentDayLabel = document.getElementById("current-day-label");

  // Grocery UI
  const groceryContainer = document.getElementById("grocery-container");

  // Agent Chat UI
  const agentChatLog = document.getElementById("agent-chat-log");
  const agentPromptInput = document.getElementById("agent-prompt-input");
  const btnSendAgent = document.getElementById("btn-send-agent");
  const agentTraceContainer = document.getElementById("agent-trace-container");

  // Initialize App
  function init() {
    setupEventListeners();
    renderFamilyMembers();
    generatePlanAndRefresh();

    // Register global event handlers for AI Agent live interactions
    window.KhanaAppEvents = {
      onCuisineChange: function(newState) {
        state.preferences.state = newState;
        if (stateSelect) stateSelect.value = newState;
        generatePlanAndRefresh();
        if (state.activeTab === "grocery") renderGroceryList();
      },
      onDietChange: function(newDiet) {
        state.preferences.dietType = newDiet;
        if (dietSelect) dietSelect.value = newDiet;
        updateDietWarningBanner(newDiet);
        generatePlanAndRefresh();
        if (state.activeTab === "grocery") renderGroceryList();
      },
      onFrequencyChange: function(newFreq) {
        state.preferences.marketingFrequency = newFreq;
        if (freqSelect) freqSelect.value = newFreq;
        if (state.activeTab === "grocery") renderGroceryList();
      },
      onMealSwap: function(dayNum, mealType, newMealName) {
        const dayIdx = (dayNum || state.selectedDay) - 1;
        if (state.mealPlan[dayIdx] && state.mealPlan[dayIdx].meals[mealType]) {
          state.mealPlan[dayIdx].meals[mealType].name = newMealName;
          renderDayMeals(state.selectedDay);
        }
      }
    };
  }

  function setupEventListeners() {
    // Nav Tab Switching
    navTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");
        switchTab(target);
      });
    });

    // Country/State Selection Handler
    countrySelect?.addEventListener("change", (e) => {
      state.preferences.country = e.target.value;
      updateStateOptions(e.target.value);
    });

    stateSelect?.addEventListener("change", (e) => {
      state.preferences.state = e.target.value;
    });

    dietSelect?.addEventListener("change", (e) => {
      state.preferences.dietType = e.target.value;
      updateDietWarningBanner(e.target.value);
    });

    freqSelect?.addEventListener("change", (e) => {
      state.preferences.marketingFrequency = e.target.value;
    });

    btnGenerate?.addEventListener("click", () => {
      readFormValues();
      generatePlanAndRefresh();
    });

    btnAddMember?.addEventListener("click", () => {
      addFamilyMember();
    });

    btnSendAgent?.addEventListener("click", () => {
      handleAgentPrompt();
    });

    agentPromptInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleAgentPrompt();
    });
  }

  function switchTab(tabId) {
    state.activeTab = tabId;
    navTabs.forEach(t => {
      if (t.getAttribute("data-tab") === tabId) {
        t.classList.add("active-tab", "border-amber-500", "text-amber-600", "dark:text-amber-400");
        t.classList.remove("text-slate-500", "border-transparent");
      } else {
        t.classList.remove("active-tab", "border-amber-500", "text-amber-600", "dark:text-amber-400");
        t.classList.add("text-slate-500", "border-transparent");
      }
    });

    tabPanels.forEach(panel => {
      if (panel.id === `tab-${tabId}`) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });

    if (tabId === "grocery") {
      renderGroceryList();
    } else if (tabId === "nutrition") {
      renderNutritionDashboard();
    }
  }

  function readFormValues() {
    state.preferences.country = countrySelect?.value || "India";
    state.preferences.state = stateSelect?.value || "Gujarat";
    state.preferences.dietType = dietSelect?.value || "veg";
    state.preferences.marketingFrequency = freqSelect?.value || "weekly";
  }

  function updateStateOptions(country) {
    if (!stateSelect) return;
    stateSelect.innerHTML = "";
    if (country === "India") {
      const states = ["Gujarat", "Maharashtra", "Punjab", "South India", "Bengal", "General"];
      states.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s;
        opt.textContent = s;
        if (s === "Gujarat") opt.selected = true;
        stateSelect.appendChild(opt);
      });
    } else {
      const opt = document.createElement("option");
      opt.value = "General";
      opt.textContent = "General State / Region";
      stateSelect.appendChild(opt);
    }
  }

  function updateDietWarningBanner(diet) {
    const banner = document.getElementById("diet-warning-banner");
    if (!banner) return;
    if (diet === "veg") {
      banner.innerHTML = `🟢 <strong>Strict Vegetarian Active:</strong> 100% Meat, Fish, Egg, and Seafood excluded across all 90 meals.`;
      banner.className = "p-3 rounded-lg bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 text-sm font-medium border border-emerald-200 dark:border-emerald-800";
    } else if (diet === "vegan") {
      banner.innerHTML = `🥬 <strong>Strict Vegan Active:</strong> All Dairy, Ghee, Honey, Meat, Fish, and Eggs excluded. 100% Plant-Based.`;
      banner.className = "p-3 rounded-lg bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200 text-sm font-medium border border-teal-200 dark:border-teal-800";
    } else {
      banner.innerHTML = `🔴 <strong>Non-Vegetarian Active:</strong> Balanced inclusion of lean poultry, fish, eggs, and vegetarian meals.`;
      banner.className = "p-3 rounded-lg bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200 text-sm font-medium border border-amber-200 dark:border-amber-800";
    }
  }

  // Family Members Management
  function renderFamilyMembers() {
    if (!familyList) return;
    familyList.innerHTML = "";

    let totalPortion = 0;

    state.preferences.familyMembers.forEach((member, index) => {
      totalPortion += parseFloat(member.portion_factor) || 1.0;

      const div = document.createElement("div");
      div.className = "flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700";
      div.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold text-sm">
            ${index + 1}
          </div>
          <div>
            <div class="font-semibold text-slate-800 dark:text-slate-100 text-sm">${member.name}</div>
            <div class="text-xs text-slate-500 capitalize">${member.ageGroup} (${member.portion_factor}x portion)</div>
          </div>
        </div>
        <button class="btn-delete-member text-rose-500 hover:text-rose-700 p-1" data-index="${index}">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      `;
      familyList.appendChild(div);
    });

    if (portionTotalBadge) {
      portionTotalBadge.textContent = `${totalPortion.toFixed(1)}x Household Scale`;
    }

    document.querySelectorAll(".btn-delete-member").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(btn.getAttribute("data-index"));
        state.preferences.familyMembers.splice(idx, 1);
        renderFamilyMembers();
      });
    });
  }

  function addFamilyMember() {
    const name = prompt("Enter family member name:", `Member ${state.preferences.familyMembers.length + 1}`);
    if (!name) return;
    const type = prompt("Select age group (adult / child / senior / toddler):", "adult");
    let factor = 1.0;
    if (type === "child") factor = 0.6;
    if (type === "senior") factor = 0.8;
    if (type === "toddler") factor = 0.3;

    state.preferences.familyMembers.push({
      id: Date.now(),
      name: name,
      ageGroup: type || "adult",
      portion_factor: factor
    });

    renderFamilyMembers();
  }

  // Plan Generation
  function generatePlanAndRefresh() {
    state.mealPlan = window.KhanaPlanner.generate30DayPlan(state.preferences);
    render30DaySelector();
    renderDayMeals(state.selectedDay);
  }

  // Render 30-Day Grid Bar
  function render30DaySelector() {
    if (!daysContainer) return;
    daysContainer.innerHTML = "";

    for (let d = 1; d <= 30; d++) {
      const btn = document.createElement("button");
      const isSelected = d === state.selectedDay;

      btn.className = `flex-shrink-0 px-4 py-2.5 rounded-xl font-medium text-xs transition-all ${
        isSelected
          ? "bg-amber-500 text-white shadow-md shadow-amber-500/20 scale-105"
          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
      }`;
      btn.innerHTML = `<span>Day ${d}</span>`;
      btn.addEventListener("click", () => {
        state.selectedDay = d;
        render30DaySelector();
        renderDayMeals(d);
      });
      daysContainer.appendChild(btn);
    }
  }

  // Render Meals for Selected Day
  function renderDayMeals(dayNum) {
    if (!dayMealsContainer) return;
    const dayData = state.mealPlan[dayNum - 1];
    if (!dayData) return;

    if (currentDayLabel) {
      currentDayLabel.textContent = `Day ${dayNum} - 3 Balanced Meals`;
    }

    const { breakfast, lunch, dinner } = dayData.meals;

    dayMealsContainer.innerHTML = `
      ${renderMealCard("Breakfast", breakfast, "🌅", "amber")}
      ${renderMealCard("Lunch", lunch, "☀️", "emerald")}
      ${renderMealCard("Dinner", dinner, "🌙", "indigo")}
    `;
  }

  function renderMealCard(title, meal, icon, color) {
    const colorClasses = {
      amber: "border-amber-200 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/20",
      emerald: "border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-emerald-950/20",
      indigo: "border-indigo-200 dark:border-indigo-900/40 bg-indigo-50/30 dark:bg-indigo-950/20"
    }[color];

    const totalPortions = (state.preferences.familyMembers && state.preferences.familyMembers.length > 0)
      ? state.preferences.familyMembers.reduce((sum, member) => sum + (parseFloat(member.portion_factor) || 1.0), 0)
      : 1.0;

    const tagsHtml = (meal.tags || []).map(t => `<span class="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-semibold text-slate-600 dark:text-slate-300">${t}</span>`).join(" ");

    const ingredientsHtml = (meal.ingredients || []).map(i => {
      const baseQty = i.base_qty_g || 50;
      const scaledQty = Math.round(baseQty * totalPortions);
      const qtyDisplay = scaledQty >= 1000 ? `${(scaledQty / 1000).toFixed(2)} kg` : `${scaledQty} gm`;
      return `
        <li class="text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <span class="font-medium">• ${i.name}</span>
          <span class="font-bold text-amber-600 dark:text-amber-400 text-[11px] bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-200/80 dark:border-amber-800/80 ml-2 whitespace-nowrap">${qtyDisplay}</span>
        </li>
      `;
    }).join("");

    const instructionsHtml = (meal.instructions || []).map((step, idx) => `<p class="text-xs text-slate-600 dark:text-slate-400 mb-1"><strong class="text-slate-800 dark:text-slate-200">${idx + 1}.</strong> ${step}</p>`).join("");

    return `
      <div class="rounded-2xl border ${colorClasses} p-5 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xl">${icon}</span>
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">${title}</span>
          </div>
          <div class="text-xs font-semibold text-slate-600 dark:text-slate-300">⏱️ ${meal.prepTime} prep | ${meal.cookTime} cook</div>
        </div>

        <div>
          <h3 class="text-base font-bold text-slate-900 dark:text-slate-100">${meal.name}</h3>
          <div class="flex flex-wrap gap-1.5 mt-2">${tagsHtml}</div>
        </div>

        <div class="grid grid-cols-4 gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900/80 text-center border border-slate-100 dark:border-slate-800">
          <div>
            <div class="text-[10px] uppercase text-slate-400 font-semibold">Calories</div>
            <div class="text-xs font-bold text-slate-800 dark:text-slate-200">${meal.calories} kcal</div>
          </div>
          <div>
            <div class="text-[10px] uppercase text-slate-400 font-semibold">Protein</div>
            <div class="text-xs font-bold text-emerald-600 dark:text-emerald-400">${meal.protein}g</div>
          </div>
          <div>
            <div class="text-[10px] uppercase text-slate-400 font-semibold">Carbs</div>
            <div class="text-xs font-bold text-blue-600 dark:text-blue-400">${meal.carbs}g</div>
          </div>
          <div>
            <div class="text-[10px] uppercase text-slate-400 font-semibold">Fats</div>
            <div class="text-xs font-bold text-amber-600 dark:text-amber-400">${meal.fat}g</div>
          </div>
        </div>

        <div class="space-y-2">
          <details class="group">
            <summary class="text-xs font-semibold text-amber-600 dark:text-amber-400 cursor-pointer flex items-center justify-between">
              <span>View Ingredients (gm) & Recipe Steps</span>
              <span class="transition group-open:rotate-180">▼</span>
            </summary>
            <div class="pt-3 space-y-3">
              <div>
                <div class="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>Ingredients Required:</span>
                  <span class="text-[10px] font-semibold text-amber-600 dark:text-amber-400">Scaled for ${totalPortions.toFixed(1)}x Household</span>
                </div>
                <ul class="grid grid-cols-1 gap-1.5">${ingredientsHtml}</ul>
              </div>
              <div>
                <div class="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Preparation:</div>
                ${instructionsHtml}
              </div>
            </div>
          </details>
        </div>
      </div>
    `;
  }

  // Render Grocery List
  function renderGroceryList() {
    if (!groceryContainer) return;

    const data = window.KhanaGrocery.generateGroceryList(
      state.mealPlan,
      state.preferences.familyMembers,
      state.preferences.marketingFrequency
    );

    let html = `
      <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
            🛒
          </div>
          <div>
            <h3 class="font-extrabold text-slate-900 dark:text-slate-100 text-sm">${data.frequencyLabel}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Scaled for <strong>${data.householdPortions}x portions</strong> (${state.preferences.familyMembers.length} family members) • ${data.shoppingDaysCovered} days
            </p>
          </div>
        </div>
        <button id="btn-print-grocery" class="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition">
          🖨️ Print Checklist
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    `;

    Object.entries(data.categories).forEach(([category, items]) => {
      const itemsList = items.map(item => `
        <label class="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/50 dark:border-slate-700/50 text-xs transition cursor-pointer">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="w-3.5 h-3.5 rounded text-amber-500 focus:ring-amber-400 cursor-pointer" />
            <span class="font-medium text-slate-800 dark:text-slate-200 text-[11px]">${item.name}</span>
          </div>
          <span class="font-extrabold text-[11px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 ml-2 whitespace-nowrap">${item.formattedQty}</span>
        </label>
      `).join("");

      html += `
        <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
            <h4 class="font-bold text-slate-800 dark:text-slate-200 text-xs tracking-tight">${category}</h4>
            <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">${items.length} items</span>
          </div>
          <div class="space-y-1.5">${itemsList}</div>
        </div>
      `;
    });

    html += `</div>`;
    groceryContainer.innerHTML = html;

    document.getElementById("btn-print-grocery")?.addEventListener("click", () => {
      window.print();
    });
  }

  // Render USDA Nutrition Dashboard
  function renderNutritionDashboard() {
    const dashboard = document.getElementById("nutrition-dashboard");
    if (!dashboard) return;

    const dayData = state.mealPlan[state.selectedDay - 1] || state.mealPlan[0];
    if (!dayData) return;

    const comp = window.KhanaUSDA.getBenchmarkCompliance(dayData.dailyTotals);

    dashboard.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${renderNutritionGauge("Calories (kcal)", comp.calories.current, comp.calories.target, "amber")}
        ${renderNutritionGauge("Protein (g)", comp.protein.current, comp.protein.target, "emerald")}
        ${renderNutritionGauge("Iron (mg)", comp.iron.current, comp.iron.target, "blue")}
        ${renderNutritionGauge("Calcium (mg)", comp.calcium.current, comp.calcium.target, "purple")}
        ${renderNutritionGauge("Vitamin C (mg)", comp.vitaminC.current, comp.vitaminC.target, "teal")}
        ${renderNutritionGauge("Carbohydrates (g)", comp.carbs.current, comp.carbs.target, "indigo")}
      </div>
    `;
  }

  function renderNutritionGauge(label, current, target, color) {
    const pct = Math.min(100, Math.round((current / target) * 100));
    return `
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">${label}</span>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400">${pct}% USDA Target</span>
        </div>
        <div class="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div class="h-full bg-amber-500 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
        </div>
        <div class="flex justify-between text-xs text-slate-500">
          <span>Current: <strong>${Math.round(current)}</strong></span>
          <span>Target: <strong>${target}</strong></span>
        </div>
      </div>
    `;
  }

  // Agent Chat Handler
  function handleAgentPrompt() {
    const query = agentPromptInput?.value.trim();
    if (!query) return;

    // Append user query to chat log
    appendChatMessage("user", query);
    agentPromptInput.value = "";

    // Clear trace container
    if (agentTraceContainer) agentTraceContainer.innerHTML = "";

    window.KhanaAgent.processQuery(
      query,
      state.preferences,
      state.mealPlan,
      (stepInfo) => {
        // Render step trace
        if (agentTraceContainer) {
          const traceDiv = document.createElement("div");
          traceDiv.className = "p-2.5 rounded-lg bg-slate-900 text-emerald-400 text-xs font-mono border border-slate-800";
          traceDiv.innerHTML = `> [Step ${stepInfo.step}] ${stepInfo.title}: ${stepInfo.detail}`;
          agentTraceContainer.appendChild(traceDiv);
        }
      },
      (finalResponse) => {
        appendChatMessage("agent", finalResponse);
      }
    );
  }

  function appendChatMessage(role, text) {
    if (!agentChatLog) return;
    const isUser = role === "user";
    const msgDiv = document.createElement("div");
    msgDiv.className = `flex ${isUser ? "justify-end" : "justify-start"}`;
    msgDiv.innerHTML = `
      <div class="max-w-[80%] p-3.5 rounded-2xl text-xs font-medium ${
        isUser
          ? "bg-amber-500 text-white rounded-br-none"
          : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-bl-none whitespace-pre-line"
      }">
        ${text}
      </div>
    `;
    agentChatLog.appendChild(msgDiv);
    agentChatLog.scrollTop = agentChatLog.scrollHeight;
  }

  // Start App
  init();
});
