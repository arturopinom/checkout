    // SVG Icons
    const ICONS = {
      check: '<svg width="14" height="14" fill="none" stroke="white" stroke-width="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>',
      cross: '<svg width="14" height="14" fill="none" stroke="#9ca3af" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>',
      chevronLeft: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
      chevronDown: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',
      user: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
      users: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      lock: '<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
      checkCircle: '<svg width="40" height="40" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>',
      close: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>',
      trainer: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>',
      weight: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6.5 6.5L4 4m13.5 2.5L20 4M12 2v4m-2 4h4m-4 4h4M7 21h10a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2z"/></svg>',
      scale: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M8 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4"/><circle cx="12" cy="6" r="2"/></svg>',
      nutrition: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>',
    };

    // Price Formatter
    const fmt = (n) => new Intl.NumberFormat('es-CL', { 
      style:'currency', 
      currency:'CLP', 
      maximumFractionDigits:0 
    }).format(n);

    // Data
    const PLANS = [
      {
        id:'mensual',
        name:'Plan Mensual Cargo Automático',
        monthlyPrice:21000,
        months:12,
        matricula:0,
        activacion:20000,
        subtotal:22000,
        total:42000,
        featured:true,
        badge:'El Más Escogido',
        features:[
          {check:true, title:'Personal Trainer de regalo', desc:'1 sesión incluida'},
          {check:true, title:'Congelamiento', desc:'Pausa cuando lo necesites'},
          {check:true, title:'Acceso Multiclub', desc:'Todos nuestros clubes'},
          {check:true, title:'Sin compromiso', desc:'Cancela cuando quieras'},
          {check:true, title:'Cargo automático', desc:'Mes 1 y 2 al inicio'}
        ]
      },
      {
        id:'anual-multiclub',
        name:'Plan Anual Multiclub',
        monthlyPrice:20000,
        months:12,
        matricula:0,
        activacion:20000,
        subtotal:220000,
        total:240000,
        featured:false,
        features:[
          {check:false, title:'Personal Trainer', desc:'No incluido'},
          {check:false, title:'Congelamiento', desc:'No disponible'},
          {check:true, title:'Acceso Multiclub', desc:'Todos nuestros clubes'},
          {check:true, title:'Ahorro anual', desc:'$20.000/mes'},
          {check:true, title:'Pago único', desc:'Un pago del año'}
        ]
      },
      {
        id:'anual-oneclub',
        name:'Plan Anual Oneclub',
        monthlyPrice:19170,
        months:12,
        matricula:0,
        activacion:20000,
        subtotal:210000,
        total:230000,
        featured:false,
        features:[
          {check:false, title:'Personal Trainer', desc:'No incluido'},
          {check:false, title:'Congelamiento', desc:'No disponible'},
          {check:true, title:'Acceso 1 club', desc:'Elige tu sede'},
          {check:true, title:'Mejor precio', desc:'Más económico'},
          {check:true, title:'Pago único', desc:'Un pago del año'}
        ]
      }
    ];

    const UPSELLS = [
      {
        id:'pt-12',
        icon:'trainer',
        name:'Personal Trainer',
        subtitle:'12 Sesiones',
        description:'Plan mensual y flexible.',
        price:276000,
        badge:null
      },
      {
        id:'pt-8',
        icon:'trainer',
        name:'Personal Trainer',
        subtitle:'8 Sesiones',
        description:'Plan mensual y flexible.',
        price:192000,
        badge:null
      },
      {
        id:'inbody-1',
        icon:'scale',
        name:'InBody',
        subtitle:'1 Sesión',
        description:'Composición corporal.',
        price:10500,
        originalPrice:15000,
        badge:'30% OFF'
      },
      {
        id:'nutri-1',
        icon:'nutrition',
        name:'Nutrición',
        subtitle:'1 Consulta',
        description:'Incluye InBody.',
        price:20000,
        originalPrice:25000,
        badge:'20% OFF'
      }
    ];

    // Auto-calc discount badge from originalPrice when missing
    UPSELLS.forEach(u => {
      if (!u.badge && u.originalPrice && u.price) {
        const p = Math.round((1 - (u.price / u.originalPrice)) * 100);
        if (p > 0) u.badge = `-${p}%`;
      }
    });

    const TERMS = {
      'mensual':'<h3>Plan Mensual Cargo Automático</h3><ul><li>Matrícula: $0 (GRATIS)</li><li>Activación: $20.000</li><li>Pago inicial: Mes 1 y 2 ($42.000)</li><li>Desde mes 3: Cargo automático de $21.000</li><li>Acceso Multiclub</li><li>Personal Trainer: 1 sesión gratis</li><li>Sin compromiso</li></ul>',
      'anual-multiclub':'<h3>Plan Anual Multiclub</h3><ul><li>Matrícula: $0 (GRATIS)</li><li>Activación: $20.000</li><li>Pago único anual: $240.000</li><li>Acceso Multiclub</li><li>Compromiso de 12 meses</li></ul>',
      'anual-oneclub':'<h3>Plan Anual Oneclub</h3><ul><li>Matrícula: $0 (GRATIS)</li><li>Activación: $20.000</li><li>Pago único anual: $230.000</li><li>Acceso a 1 club</li><li>Compromiso de 12 meses</li></ul>',
      'pt-12':'<h3>Personal Trainer 12 Sesiones</h3><ul><li>Exclusivo para socios activos</li><li>Sesiones de 60 minutos</li><li>Válido por 30 días desde la primera sesión</li><li>Reserva con 24 horas de anticipación</li></ul>',
      'pt-8':'<h3>Personal Trainer 8 Sesiones</h3><ul><li>Exclusivo para socios activos</li><li>Sesiones de 60 minutos</li><li>Válido por 30 días desde la primera sesión</li><li>Reserva con 24 horas de anticipación</li></ul>',
      'inbody-1':'<h3>Medición Composición Corporal</h3><ul><li>Descuento 30% aplicado</li><li>Sesión de 30 minutos</li><li>Incluye reporte completo</li><li>Válido por 60 días</li></ul>',
      'nutri-1':'<h3>Nutrición 1 Consulta</h3><ul><li>Descuento 20% aplicado</li><li>Incluye 1 medición InBody</li><li>Consulta de 60 minutos</li><li>Plan nutricional personalizado</li></ul>'
    };

    // State
    const state = {
      step:0,
      plan:null,
      upsells:{},
      form:{
        payerRut:'', payerBirth:'', payerName:'', payerLname:'',
        payerEmail:'', payerPhone:'', who:null,
        userRut:'', userBirth:'', userName:'', userLname:'',
        userEmail:'', userPhone:'', 
        planStart:'',
        payMethod:null,
        termsAccepted:false
      }
    };
    
    // Date helpers
    function fmtISODate(date) { return date.toISOString().split('T')[0]; }
    function getMinStartDate() {
      const d = new Date();
      d.setHours(0,0,0,0);
      return fmtISODate(d);
    }
    function getMaxStartDate() {
      const d = new Date();
      d.setHours(0,0,0,0);
      d.setDate(d.getDate() + 30);
      return fmtISODate(d);
    }
    
    function renderPlanStartDate() {
      const min = getMinStartDate();
      const max = getMaxStartDate();
      const value = state.form.planStart || '';
      return `
        `;
    }
    
    // Bottom sheet auto-hide
    function initBottomSheetAutoHide() {
      const bs = document.getElementById('bottomSheet');
      if (!bs) return;
      
      if (window.matchMedia('(min-width:1024px)').matches) return;
      
      const summaryCTA = document.querySelector('.checkout-sidebar .btn-primary');
      if (!summaryCTA) return;
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) bs.style.display = 'none';
        else bs.style.display = 'block';
      }, { threshold: 0.1 });
      
      observer.observe(summaryCTA);
    }

    // Calculate totals
    function calcTotals() {
      if (!state.plan) return { subtotal:0, matricula:0, activacion:0, crossSelling:0, total:0, monthlyPrice:0 };
      
      const p = state.plan;
      const upsellList = Object.values(state.upsells);
      const crossSelling = upsellList.reduce((s,x)=>s+x.price,0);
      const total = p.total + crossSelling;
      const monthlyPrice = Math.round((p.subtotal + p.activacion) / p.months);
      
      return {
        subtotal: p.subtotal,
        matricula: p.matricula,
        activacion: p.activacion,
        crossSelling,
        total,
        monthlyPrice
      };
    }

    // Render Order Summary
    function renderOrderSummary(showCTA = false) {
      const totals = calcTotals();
      const upsellList = Object.values(state.upsells);
      
      // Determine CTA state
      let ctaDisabled = false;
      let ctaText = 'Continuar';
      let ctaAction = 'nextStep()';
      
      if (state.step === 0.5) {
        ctaText = 'Continuar';
        ctaAction = 'continueWithUpsells()';
      } else if (state.step === 1) {
        const payerComplete = state.form.payerRut && state.form.payerBirth && 
                              state.form.payerName && state.form.payerLname && 
                              state.form.payerEmail && state.form.payerPhone;
        const userComplete = state.form.who === 'self' || 
                            (state.form.who === 'other' && state.form.userRut && 
                             state.form.userBirth && state.form.userName && 
                             state.form.userLname && state.form.userEmail && 
                             state.form.userPhone);
        const dateRequired = true;
        const dateValid = (
           !!state.form.planStart &&
           state.form.planStart >= getMinStartDate() &&
           state.form.planStart <= getMaxStartDate()
        );
        ctaDisabled = !payerComplete || !state.form.who || !userComplete || !dateValid;
      } else if (state.step === 2) {
        ctaText = 'Pagar ahora';
        ctaDisabled = !state.form.payMethod || !state.form.termsAccepted;
      }
      
      return `
        <div class="order-summary">
          <h2 class="summary-title">Resumen de compra</h2>
          
          <div class="summary-items">
            <div class="summary-item">
              <span>${state.plan.name}</span>
              <span>${fmt(totals.subtotal)}</span>
            </div>
            ${totals.matricula === 0 ? `
              <div class="summary-item subtle">
                <span>Matrícula</span>
                <span class="free">Gratis</span>
              </div>
            ` : `
              <div class="summary-item subtle">
                <span>Matrícula</span>
                <span>${fmt(totals.matricula)}</span>
              </div>
            `}
            ${totals.activacion > 0 ? `
              <div class="summary-item subtle">
                <span>Activación</span>
                <span>${fmt(totals.activacion)}</span>
              </div>
            ` : ''}
            ${upsellList.map(u => `
              <div class="summary-item">
                <span>${u.name}</span>
                <span>${fmt(u.price)}</span>
              </div>
            `).join('')}
            ${state.form.planStart ? `
              <div class="summary-item subtle">
                <span>Inicio del plan</span>
                <span>${new Date(state.form.planStart + 'T12:00:00').toLocaleDateString('es-CL', { day:'2-digit', month:'short', year:'numeric' })}</span>
              </div>
            ` : ''}
          </div>
          
          <div class="summary-total">
            <span>Total</span>
            <span class="amount">${fmt(totals.total)}</span>
          </div>
          
          ${state.plan.months > 1 ? `
            <div class="summary-monthly">
              Precio mensual: <strong>${fmt(totals.monthlyPrice)}/mes</strong>
            </div>
          ` : ''}
          
          ${showCTA ? `
            <button class="btn btn-primary btn-full" style="margin-top:var(--space-xl)" 
                    onclick="${ctaAction}" ${ctaDisabled ? 'disabled' : ''}>
              ${ctaText}
            </button>
          ` : ''}
        </div>
      `;
    }

    // Render Bottom Sheet (Mobile)
    function renderBottomSheet() {
      const totals = calcTotals();
      const upsellList = Object.values(state.upsells);
      
      let ctaAction = 'nextStep()';
      let ctaDisabled = false;
      
      if (state.step === 0.5) {
        ctaAction = 'continueWithUpsells()';
      } else if (state.step === 1) {
        const payerComplete = state.form.payerRut && state.form.payerBirth && 
                              state.form.payerName && state.form.payerLname && 
                              state.form.payerEmail && state.form.payerPhone;
        const userComplete = state.form.who === 'self' || 
                            (state.form.who === 'other' && state.form.userRut && 
                             state.form.userBirth && state.form.userName && 
                             state.form.userLname && state.form.userEmail && 
                             state.form.userPhone);
        const dateRequired = true;
        const dateValid = (
           !!state.form.planStart &&
           state.form.planStart >= getMinStartDate() &&
           state.form.planStart <= getMaxStartDate()
        );
        ctaDisabled = !payerComplete || !state.form.who || !userComplete || !dateValid;
      } else if (state.step === 2) {
        ctaDisabled = !state.form.payMethod || !state.form.termsAccepted;
      }
      
      return `
        <div class="bottom-sheet" id="bottomSheet">
          <div class="bottom-sheet-header" onclick="toggleBottomSheet()">
            <div class="bottom-sheet-toggle">
              ${ICONS.chevronDown}
              <span>Ver detalle</span>
            </div>
            <div class="bottom-sheet-content">
              <div class="bottom-sheet-total">
                <div class="total-label">Total</div>
                <div class="total-amount">${fmt(totals.total)}</div>
              </div>
              <button class="btn btn-primary" onclick="event.stopPropagation();${ctaAction}" ${ctaDisabled ? 'disabled' : ''}>
                Continuar
              </button>
            </div>
          </div>
          
          <div class="bottom-sheet-detail">
            <div class="bottom-sheet-detail-inner">
              <h3 class="detail-title">Detalle de compra</h3>
              
              <div class="detail-items">
                <div class="detail-item">
                  <span>${state.plan.name}</span>
                  <span>${fmt(totals.subtotal)}</span>
                </div>
                ${totals.matricula === 0 ? `
                  <div class="detail-item subtle">
                    <span>Matrícula</span>
                    <span class="free">Gratis</span>
                  </div>
                ` : `
                  <div class="detail-item subtle">
                    <span>Matrícula</span>
                    <span>${fmt(totals.matricula)}</span>
                  </div>
                `}
                ${totals.activacion > 0 ? `
                  <div class="detail-item subtle">
                    <span>Activación</span>
                    <span>${fmt(totals.activacion)}</span>
                  </div>
                ` : ''}
                ${upsellList.map(u => `
                  <div class="detail-item">
                    <span>${u.name}</span>
                    <span>${fmt(u.price)}</span>
                  </div>
                `).join('')}
                ${state.form.planStart ? `
                  <div class="detail-item subtle">
                    <span>Inicio del plan</span>
                    <span>${new Date(state.form.planStart + 'T12:00:00').toLocaleDateString('es-CL', { day:'2-digit', month:'short', year:'numeric' })}</span>
                  </div>
                ` : ''}
              </div>
              
              <div class="detail-total">
                <span>Total</span>
                <span class="amount">${fmt(totals.total)}</span>
              </div>
              
              ${state.plan.months > 1 ? `
                <div class="detail-monthly">
                  Precio mensual: <strong>${fmt(totals.monthlyPrice)}/mes</strong>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }

    // Toggle bottom sheet
    window.toggleBottomSheet = () => {
      const bs = document.getElementById('bottomSheet');
      if (bs) {
        bs.classList.toggle('expanded');
      }
    };

    // Render
    function render() {
      const app = document.getElementById('app');
      app.innerHTML = '';
      
      renderTopBar();
      if (state.step >= 0.5 && state.step < 3) {
        renderProgress();
      }
      
      if (state.step === 0) renderPlans();
      else if (state.step === 0.5) renderUpsells();
      else if (state.step === 1) renderForm();
      else if (state.step === 2) renderPayment();
      else if (state.step === 3) renderSuccess();
      
      // Init bottom sheet auto-hide if exists
      if (document.getElementById('bottomSheet')) {
        setTimeout(initBottomSheetAutoHide, 100);
      }
    }

    function renderTopBar() {
      const showBack = (state.step > 0 || state.step === 0.5) && state.step < 3;
      document.getElementById('app').insertAdjacentHTML('beforeend', `
        <div class="topbar">
          <div class="topbar-inner">
            ${showBack ? `
              <button class="topbar-back" onclick="goBack()" aria-label="Volver">
                ${ICONS.chevronLeft}
                <span>Volver</span>
              </button>
            ` : '<div></div>'}
            <div class="topbar-logo">
              <div class="logo-dot"></div>
              Checkout
            </div>
            <div style="width:${showBack?'100px':'0'}"></div>
          </div>
        </div>
      `);
    }

    function renderProgress() {
      const steps = ['Potencia tu plan', 'Datos', 'Pago'];
      const currentStep = state.step === 0.5 ? 0 : state.step - 1;
      const progress = (currentStep / (steps.length - 1)) * 100;
      
      document.getElementById('app').insertAdjacentHTML('beforeend', `
        <div class="progress">
          <div class="progress-inner">
            <div class="progress-bar">
              <div class="progress-fill" style="width:${progress}%"></div>
            </div>
            ${steps.map((label, i) => `
              <div class="progress-step ${i < currentStep ? 'completed' : i === currentStep ? 'active' : ''}">
                <div class="step-tooltip">${label}</div>
                <div class="step-number">${i < currentStep ? '' : i + 1}</div>
                <div class="step-label">${label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `);
    }

    function renderPlans() {
      document.getElementById('app').insertAdjacentHTML('beforeend', `
        <main class="container" id="main">
          <div class="section-header">
            <h1 class="section-title">Elige tu plan</h1>
            <p class="section-subtitle">Selecciona el plan que mejor se adapte a tu estilo de vida</p>
          </div>
          
          <div class="plans-grid">
            ${PLANS.map(p => `
              <article class="plan-card ${p.featured ? 'featured' : ''}">
                ${p.badge ? `<div class="plan-badge">${p.badge}</div>` : ''}
                <h2 class="plan-name">${p.name}</h2>
                
                <div class="plan-price">
                  <div class="price-label">Desde</div>
                  <div class="price-value">
                    <div class="price-amount">${fmt(p.monthlyPrice)}</div>
                    <div class="price-period">/mes</div>
                  </div>
                  ${p.id !== 'mensual' ? `<div class="price-total">Pago único: ${fmt(p.total)}</div>` : ''}
                </div>
                
                <ul class="plan-features">
                  ${p.features.map(f => `
                    <li class="feature">
                      <div class="feature-icon ${f.check ? 'check' : 'cross'}">
                        ${f.check ? ICONS.check : ICONS.cross}
                      </div>
                      <div class="feature-text">
                        <div class="feature-title">${f.title}</div>
                        <div class="feature-desc">${f.desc}</div>
                      </div>
                    </li>
                  `).join('')}
                </ul>
                
                <button class="btn ${p.featured ? 'btn-secondary' : 'btn-secondary'} btn-full" 
                        onclick="selectPlan('${p.id}')">
                  Elegir plan
                </button>
                
                <button class="btn btn-link btn-full" onclick="showTerms('${p.id}')">
                  Ver condiciones
                </button>
              </article>
            `).join('')}
          </div>
        </main>
      `);
    }
    
    function renderUpsells() {
      const totals = calcTotals();
      
      document.getElementById('app').insertAdjacentHTML('beforeend', `
        <main class="container" id="main">
          <div class="section-header">
            <h1 class="section-title">Potencia tu plan</h1>
            <p class="section-subtitle">Agrega complementos opcionales</p>
            <p class="section-info">Plan seleccionado: ${state.plan.name}</p>
          </div>
          
          <div class="checkout-layout">
            <div>
              <div class="upsells-grid">
                ${UPSELLS.map(u => {
                  const selected = !!state.upsells[u.id];
                  return `
                    <div class="upsell-card ${selected ? 'selected' : ''}" onclick="toggleUpsell('${u.id}')">
                      <div class="upsell-header">
                        <div class="upsell-icon">
                          ${ICONS[u.icon]}
                        </div>
                        <div class="upsell-info">
                          ${u.badge ? `<div class="upsell-badge">${u.badge}</div>` : ''}
                          <h3 class="upsell-name">${u.name}</h3>
                          <div class="upsell-subtitle">${u.subtitle}</div>
                        </div>
                      </div>
                      
                      <p class="upsell-description">${u.description}</p>
                      
                      <div class="upsell-footer">
                        <div class="upsell-pricing">
                          <div class="upsell-price-row">
                            <div class="upsell-price">${fmt(u.price)}</div>
                            ${u.originalPrice ? `<div class="upsell-price-original">${fmt(u.originalPrice)}</div>` : ''}
                          </div>
                        </div>
                        <div class="upsell-check">
                          ${ICONS.check}
                        </div>
                      </div>
                      
                      <div class="upsell-terms" onclick="event.stopPropagation();showTerms('${u.id}')">
                        Ver condiciones
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
            
            <div class="checkout-sidebar">
              ${renderOrderSummary(true)}
            </div>
          </div>
        </main>
        
        ${renderBottomSheet()}
      `);
    }

    function renderForm() {
      const p = state.plan;
      const payerComplete = state.form.payerRut && state.form.payerBirth && 
                            state.form.payerName && state.form.payerLname && 
                            state.form.payerEmail && state.form.payerPhone;
      // Ensure default start date is today
      if (!state.form.planStart) {
        state.form.planStart = getMinStartDate();
      }
      
      document.getElementById('app').insertAdjacentHTML('beforeend', `
        <main class="container" id="main">
          <div class="section-header">
            <h1 class="section-title">Tus datos</h1>
            <p class="section-subtitle">Completa la información para continuar</p>
          </div>
          
          <div class="checkout-layout">
            <div>
              <div class="form-section">
                <div class="form-section-header">
                  <h2 class="form-section-title">Datos del titular</h2>
                  <p class="form-section-subtitle">Persona que realiza el pago</p>
                </div>
                
                <div id="titular-section">
                  <div class="form-row cols-2">
                    <div class="form-group">
                      <label class="form-label">RUT <span class="required">*</span></label>
                      <input class="form-input" type="text" placeholder="12.345.678-9" 
                             value="${state.form.payerRut}" 
                             oninput="updateForm('payerRut', this.value)" required />
                    </div>
                    <div class="form-group">
                      <label class="form-label">Fecha de nacimiento <span class="required">*</span></label>
                      <input class="form-input" type="date" 
                             value="${state.form.payerBirth}" 
                             oninput="updateForm('payerBirth', this.value)" required />
                    </div>
                  </div>
                  
                  <div class="form-row cols-2">
                    <div class="form-group">
                      <label class="form-label">Nombre <span class="required">*</span></label>
                      <input class="form-input" type="text" placeholder="Juan" 
                             value="${state.form.payerName}" 
                             oninput="updateForm('payerName', this.value)" required />
                    </div>
                    <div class="form-group">
                      <label class="form-label">Apellido <span class="required">*</span></label>
                      <input class="form-input" type="text" placeholder="Pérez" 
                             value="${state.form.payerLname}" 
                             oninput="updateForm('payerLname', this.value)" required />
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Email <span class="required">*</span></label>
                    <input class="form-input" type="email" placeholder="tu@email.com" 
                           value="${state.form.payerEmail}" 
                           oninput="updateForm('payerEmail', this.value)" required />
                  </div>
                  
                  <div class="form-group">
                    <label class="form-label">Celular <span class="required">*</span></label>
                    <input class="form-input" type="tel" placeholder="+56 9 1234 5678" 
                           value="${state.form.payerPhone}" 
                           oninput="updateForm('payerPhone', this.value)"
                           onblur="formatPhone('payerPhone', this)"
                           inputmode="numeric" required />
                  </div>
                  
                </div>
                
              </div>

              ${(() => {
                const payerCompleteInner = state.form.payerRut && state.form.payerBirth && 
                                           state.form.payerName && state.form.payerLname && 
                                           state.form.payerEmail && state.form.payerPhone;
                const userCompleteInner = state.form.who === 'self' || 
                                     (state.form.who === 'other' && state.form.userRut && 
                                      state.form.userBirth && state.form.userName && 
                                      state.form.userLname && state.form.userEmail && 
                                      state.form.userPhone);
                const min = getMinStartDate();
                const max = getMaxStartDate();
                const value = state.form.planStart || min;
                const dateDisabled = false;
                return `
                  <div class="flow-controls">
                    <div class="segmented-control" style="margin-bottom: var(--space-xl);">
                      <label class="segmented-label">¿Quién usará la membresía?</label>
                      <div class="segmented-options">
                        <button class="segmented-option ${state.form.who === 'self' ? 'active' : ''}" onclick="setWho('self')">

                          <div class="option-icon">${ICONS.user}</div>
                          <div class="option-text">Titular</div>
                        </button>
                        <button class="segmented-option ${state.form.who === 'other' ? 'active' : ''}" onclick="setWho('other')">

                          <div class="option-icon">${ICONS.users}</div>
                          <div class="option-text">Otra persona</div>
                        </button>
                      </div>
                    </div>
                    </div>
                `;
              })()}
            </div>
            
            <div class="checkout-sidebar">
              ${(() => { const min = getMinStartDate(); const max = getMaxStartDate(); const value = state.form.planStart || min; return `
                  <div class="form-group plan-start" style="margin-bottom:var(--space-xl)">
                    <label class="form-label">Fecha de inicio del plan <span class="required">*</span></label>
                    <input class="form-input" type="date" min="${min}" max="${max}" value="${value}" required oninput="updateForm('planStart', this.value)" />
                    <p class="text-muted" style="font-size:12px;margin-top:6px;">Puedes iniciar tu plan entre hoy y los próximos 30 días.</p>
                  </div>
                `; })()}
              ${renderOrderSummary(true)}
            </div>
          </div>
        </main>
        
        ${payerComplete && state.form.who ? renderBottomSheet() : ''}
      `);
    }

    function renderPayment() {
      const totals = calcTotals();
      const canPay = state.form.payMethod && state.form.termsAccepted;
      
      document.getElementById('app').insertAdjacentHTML('beforeend', `
        <main class="container" id="main">
          <div class="section-header">
            <h1 class="section-title">Método de pago</h1>
            <p class="section-subtitle">Selecciona cómo deseas pagar</p>
          </div>
          
          <div class="checkout-layout">
            <div>
              <div class="form-section">
                <div class="payment-methods">
                  <h2 class="payment-title">Elige tu método</h2>
                  
                  <div class="payment-options">
                    <button class="payment-option ${state.form.payMethod === 'mp' ? 'active' : ''}" 
                            onclick="setPayMethod('mp')">
                      <div class="payment-logo">MP</div>
                      <div class="payment-name">MercadoPago</div>
                      <div class="payment-check">${ICONS.check}</div>
                    </button>
                    
                    <button class="payment-option ${state.form.payMethod === 'onepay' ? 'active' : ''}" 
                            onclick="setPayMethod('onepay')">
                      <div class="payment-logo">OP</div>
                      <div class="payment-name">Onepay</div>
                      <div class="payment-check">${ICONS.check}</div>
                    </button>
                    
                    <button class="payment-option ${state.form.payMethod === 'fintoc' ? 'active' : ''}" 
                            onclick="setPayMethod('fintoc')">
                      <div class="payment-logo">FT</div>
                      <div class="payment-name">Fintoc</div>
                      <div class="payment-check">${ICONS.check}</div>
                    </button>
                  </div>
                  
                  <div class="payment-secure">
                    ${ICONS.lock}
                    <span>Pago seguro y encriptado</span>
                  </div>
                </div>
                
                ${state.form.payMethod ? `
                  <div class="checkbox-group">
                    <label class="checkbox-wrapper ${state.form.termsAccepted ? 'checked' : ''}">
                      <label class="segmented-label">¿Quién usará la membresía?</label>
                      <div class="checkbox-custom">
                        <svg class="checkmark" viewBox="0 0 24 24">
                          <path d="M4 12l6 6L20 6" />
                        </svg>
                          <div class="option-text">Para mí</div>
                      <div class="checkbox-label">
                        Acepto los <a href="#">términos y condiciones</a> de la compra
                      </div>
                    </label>
                  </div>
                ` : ''}
              </div>
            </div>
            
            <div class="checkout-sidebar">
              ${(() => { const min = getMinStartDate(); const max = getMaxStartDate(); const value = state.form.planStart || min; return `
                  <div class="form-group plan-start" style="margin-bottom:var(--space-xl)">
                    <label class="form-label">Fecha de inicio del plan <span class="required">*</span></label>
                    <input class="form-input" type="date" min="${min}" max="${max}" value="${value}" required oninput="updateForm('planStart', this.value)" />
                    <p class="text-muted" style="font-size:12px;margin-top:6px;">Puedes iniciar tu plan entre hoy y los próximos 30 días.</p>
                  </div>
                `; })()}
              ${renderOrderSummary(true)}
            </div>
          </div>
        </main>
        
        ${renderBottomSheet()}
      `);
    }

    function renderSuccess() {
      const totals = calcTotals();
      const upsellList = Object.values(state.upsells);
      
      document.getElementById('app').insertAdjacentHTML('beforeend', `
        <div class="success-screen">
          <div class="success-card">
            <div class="success-icon">${ICONS.checkCircle}</div>
            
            <h1 class="success-title">¡Bienvenido al Club!</h1>
            <p class="success-subtitle">Tu membresía ha sido activada exitosamente</p>
            
            <div class="success-summary">
              <div class="success-item">
                <span class="success-item-label">${state.plan.name}</span>
                <span class="success-item-value">${fmt(totals.subtotal)}</span>
              </div>
              ${totals.matricula === 0 ? `
                <div class="success-item free">
                  <span class="success-item-label">Matrícula</span>
                  <span class="success-item-value">Gratis</span>
                </div>
              ` : `
                <div class="success-item">
                  <span class="success-item-label">Matrícula</span>
                  <span class="success-item-value">${fmt(totals.matricula)}</span>
                </div>
              `}
              ${totals.activacion > 0 ? `
                <div class="success-item">
                  <span class="success-item-label">Activación</span>
                  <span class="success-item-value">${fmt(totals.activacion)}</span>
                </div>
              ` : ''}
              ${upsellList.map(u => `
                <div class="success-item">
                  <span class="success-item-label">${u.name}</span>
                  <span class="success-item-value">${fmt(u.price)}</span>
                </div>
              `).join('')}
              ${state.form.planStart ? `
                <div class="success-item">
                  <span class="success-item-label">Inicio del plan</span>
                  <span class="success-item-value">${new Date(state.form.planStart + 'T12:00:00').toLocaleDateString('es-CL', { day:'2-digit', month:'short', year:'numeric' })}</span>
                </div>
              ` : ''}
              <div class="success-total">
                <span class="success-total-label">Total pagado</span>
                <span class="success-total-value">${fmt(totals.total)}</span>
              </div>
            </div>
            
            <div class="success-actions">
              <button class="btn btn-primary btn-full" onclick="reset()">
                Ir al inicio
              </button>
              <button class="btn btn-outline btn-full">
                Descargar recibo
              </button>
            </div>
            
            <p class="success-contact">
              ¿Necesitas ayuda? 
              <a href="mailto:soporte@energyclub.cl">soporte@energyclub.cl</a>
            </p>
          </div>
        </div>
      `);
    }

    // �o. Listener único para checkbox y enlace de términos
    document.addEventListener('click', function (e) {
      const wrapper = e.target.closest('.checkbox-wrapper');
      const link = e.target.closest('.checkbox-label a');

      // Si clickea el enlace
      if (link) {
        e.preventDefault();
        showTerms('mensual');
        return;
      }

      // Si clickea en el bloque del checkbox
      if (wrapper && !link) {
        const input = wrapper.querySelector('.checkbox-input');
        if (input) {
          input.checked = !input.checked;
          state.form.termsAccepted = input.checked;
          
          // Toggle clase 'checked' en el wrapper
          wrapper.classList.toggle('checked', input.checked);
          
          // Actualizar botones
          const sidebarBtn = document.querySelector('.checkout-sidebar .btn-primary');
          if (sidebarBtn && state.step === 2) {
            sidebarBtn.disabled = !state.form.payMethod || !state.form.termsAccepted;
          }
          
          const bottomBtn = document.querySelector('.bottom-sheet .btn-primary');
          if (bottomBtn && state.step === 2) {
            bottomBtn.disabled = !state.form.payMethod || !state.form.termsAccepted;
          }
        }
      }
    });

    // Actions
    window.selectPlan = (id) => {
      state.plan = PLANS.find(p => p.id === id);
      state.step = 0.5;
      render();
      window.scrollTo({top:0, behavior:'smooth'});
    };
    
    window.continueWithUpsells = () => {
      state.step = 1;
      render();
      window.scrollTo({top:0, behavior:'smooth'});
    };
    
    // Alias para mantener compatibilidad
    window.skipUpsells = window.continueWithUpsells;
    
    window.toggleUpsell = (id) => {
      const upsell = UPSELLS.find(u => u.id === id);
      if (!upsell) return;
      
      if (state.upsells[id]) {
        delete state.upsells[id];
      } else {
        state.upsells[id] = upsell;
      }
      render();
    };

    window.goBack = () => {
      if (state.step === 0.5) {
        state.step = 0;
      } else if (state.step > 0) {
        state.step--;
      }
      render();
      window.scrollTo({top:0, behavior:'smooth'});
    };

    window.nextStep = () => {
      // Reset terms when moving from step 1 to step 2 (payment)
      if (state.step === 1) {
        state.form.termsAccepted = false;
      }
      
      state.step++;
      render();
      window.scrollTo({top:0, behavior:'smooth'});
    };

    window.updateForm = (key, value) => {
      state.form[key] = value;
      
      // Check if payer is complete
      const payerComplete = state.form.payerRut && state.form.payerBirth && 
                            state.form.payerName && state.form.payerLname && 
                            state.form.payerEmail && state.form.payerPhone;
      
      // Show "who will use" section if payer is complete and not already shown
      if (false && payerComplete && !state.form.who && state.step === 1) {
        const mainContent = document.querySelector('#main .form-section');
        if (mainContent && !document.querySelector('.segmented-control')) {
          // Add the "who will use" section
          const whoSection = `
            <hr class="form-divider" />
            
            <div class="segmented-control">
              <label class="segmented-label">¿Quién usará la membresía?</label>
              <div class="segmented-options">
                <button class="segmented-option" onclick="setWho('self')">

                  <div class="option-icon">${ICONS.user}</div>
                  <div class="option-text">Para mí</div>
                </button>
                <button class="segmented-option" onclick="setWho('other')">

                  <div class="option-icon">${ICONS.users}</div>
                  <div class="option-text">Otra persona</div>
                </button>
              </div>
            </div>
          `;
          mainContent.insertAdjacentHTML('beforeend', whoSection);
        }
      }
      
      // Update sidebar button state
      if (state.step === 1 || state.step === 2) {
        // Keep sidebar date input enabled state in sync
        const userCompleteForDate = state.form.who === 'self' || 
                                    (state.form.who === 'other' && state.form.userRut && 
                                     state.form.userBirth && state.form.userName && 
                                     state.form.userLname && state.form.userEmail && 
                                     state.form.userPhone);
        const dateInputs = [
          document.querySelector('.flow-controls .plan-start input'),
          document.querySelector('.checkout-sidebar .plan-start input')
        ].filter(Boolean);
        dateInputs.forEach(inp => {
          inp.disabled = false;
          inp.required = true;
        });
        const sidebarBtn = document.querySelector('.checkout-sidebar .btn-primary');
        if (sidebarBtn) {
          const userComplete = state.form.who === 'self' || 
                              (state.form.who === 'other' && state.form.userRut && 
                               state.form.userBirth && state.form.userName && 
                               state.form.userLname && state.form.userEmail && 
                               state.form.userPhone);
          
          const dateRequired = true;
          const dateValid = (
             !!state.form.planStart &&
             state.form.planStart >= getMinStartDate() &&
             state.form.planStart <= getMaxStartDate()
          );
          
          if (state.step === 1) {
            sidebarBtn.disabled = !payerComplete || !state.form.who || !userComplete || !dateValid;
          } else if (state.step === 2) {
            sidebarBtn.disabled = !state.form.payMethod || !state.form.termsAccepted;
          }
        }
        
        // Also update bottom sheet button
        const bottomBtn = document.querySelector('.bottom-sheet .btn-primary');
        if (bottomBtn) {
          const userComplete = state.form.who === 'self' || 
                              (state.form.who === 'other' && state.form.userRut && 
                               state.form.userBirth && state.form.userName && 
                               state.form.userLname && state.form.userEmail && 
                               state.form.userPhone);
          
          const dateRequired = true;
          const dateValid = (
             !!state.form.planStart &&
             state.form.planStart >= getMinStartDate() &&
             state.form.planStart <= getMaxStartDate()
          );
          
          if (state.step === 1) {
            bottomBtn.disabled = !payerComplete || !state.form.who || !userComplete || !dateValid;
          } else if (state.step === 2) {
            bottomBtn.disabled = !state.form.payMethod || !state.form.termsAccepted;
          }
        }
      }
    };
    
    window.formatPhone = (key, input) => {
      let value = state.form[key];
      
      // Remove all non-digits
      let digits = value.replace(/\D/g, '');
      
      // Limit to 11 digits (56 + 9 digits)
      if (digits.length > 11) digits = digits.slice(0, 11);
      
      // Format: +56 9 1234 5678
      if (digits.length > 0) {
        if (digits.startsWith('56')) {
          // Already has country code
          if (digits.length <= 2) {
            value = '+' + digits;
          } else if (digits.length <= 3) {
            value = '+' + digits.slice(0, 2) + ' ' + digits.slice(2);
          } else if (digits.length <= 7) {
            value = '+' + digits.slice(0, 2) + ' ' + digits.slice(2, 3) + ' ' + digits.slice(3);
          } else {
            value = '+' + digits.slice(0, 2) + ' ' + digits.slice(2, 3) + ' ' + digits.slice(3, 7) + ' ' + digits.slice(7);
          }
        } else if (digits.startsWith('9')) {
          // Starts with 9, add country code
          if (digits.length <= 1) {
            value = '+56 ' + digits;
          } else if (digits.length <= 5) {
            value = '+56 ' + digits.slice(0, 1) + ' ' + digits.slice(1);
          } else {
            value = '+56 ' + digits.slice(0, 1) + ' ' + digits.slice(1, 5) + ' ' + digits.slice(5);
          }
        } else {
          // Assume it needs both country code and 9
          if (digits.length <= 4) {
            value = '+56 9 ' + digits;
          } else {
            value = '+56 9 ' + digits.slice(0, 4) + (digits.length > 4 ? ' ' + digits.slice(4) : '');
          }
        }
      }
      
      state.form[key] = value;
      input.value = value;
      
      // Trigger validation update
      updateForm(key, value);
    };

    window.setWho = (who) => {
      state.form.who = who;
      render();
      requestAnimationFrame(() => {
        const segContainers = [
          document.querySelector(
            ".checkout-sidebar .segmented-options"
          ),
          document.querySelector(".flow-controls .segmented-options"),
        ].filter(Boolean);
        segContainers.forEach((container) => {
          container
            .querySelectorAll(".segmented-option")
            .forEach((opt) => opt.classList.remove("active"));
          if (event && event.target) {
            const btn = event.target.closest(".segmented-option");
            if (btn && container.contains(btn)) btn.classList.add("active");
          }
        });

        const dateInputs = [
          document.querySelector(".flow-controls .plan-start input"),
          document.querySelector(".checkout-sidebar .plan-start input"),
        ].filter(Boolean);
        dateInputs.forEach((inp) => {
          if (inp) {
            inp.disabled = false;
            inp.required = true;
          }
        });

        const target =
          who === "other"
            ?
              document.getElementById("beneficiary-section") ||
              document.querySelector(".flow-controls")
            :
              document.querySelector(".flow-controls .plan-start") ||
              document.querySelector(".plan-start");
        if (target && target.scrollIntoView)
          target.scrollIntoView({ behavior: "smooth", block: "start" });

        if (who === "other") {
          const first = document.querySelector(
            "#beneficiary-section input"
          );
          if (first && first.focus) first.focus();
        }
      });
    };

    window.setPayMethod = (method) => {
      state.form.payMethod = method;
      
      // Update payment option buttons visually
      document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('active');
      });
      event.target.closest('.payment-option').classList.add('active');
      
      // Show terms checkbox if not already visible
      if (!document.querySelector('.checkbox-group')) {
        const paymentSection = document.querySelector('.form-section');
        if (paymentSection) {
          const termsHTML = `
            <div class="checkbox-group">
              <label class="checkbox-wrapper">
                <input type="checkbox" class="checkbox-input" />
                <div class="checkbox-custom">
                  <svg class="checkmark" viewBox="0 0 24 24">
                    <path d="M4 12l6 6L20 6" />
                  </svg>
                </div>
                <div class="checkbox-label">
                  Acepto los <a href="#">términos y condiciones</a> de la compra
                </div>
              </label>
            </div>
          `;
          paymentSection.insertAdjacentHTML('beforeend', termsHTML);
        }
      }
      
      // Update sidebar button
      const sidebarBtn = document.querySelector('.checkout-sidebar .btn-primary');
      if (sidebarBtn && state.step === 2) {
        sidebarBtn.disabled = !state.form.payMethod || !state.form.termsAccepted;
      }
      
      // Update bottom sheet button
      const bottomBtn = document.querySelector('.bottom-sheet .btn-primary');
      if (bottomBtn && state.step === 2) {
        bottomBtn.disabled = !state.form.payMethod || !state.form.termsAccepted;
      }
    };
    
    window.toggleTerms = () => {
      state.form.termsAccepted = !state.form.termsAccepted;

      // Actualiza checkboxes visualmente
      document.querySelectorAll('.checkbox-wrapper').forEach(cb => {
        if (state.form.termsAccepted) {
          cb.classList.add('checked');
          const input = cb.querySelector('.checkbox-input');
          if (input) input.checked = true;
        } else {
          cb.classList.remove('checked');
          const input = cb.querySelector('.checkbox-input');
          if (input) input.checked = false;
        }
      });

      // Actualiza el botón principal (sidebar) sin rerenderizar todo
      const sidebarBtn = document.querySelector('.checkout-sidebar .btn-primary');
      if (sidebarBtn) {
        if (state.step === 1) {
          const payerComplete = state.form.payerRut && state.form.payerBirth && 
                                state.form.payerName && state.form.payerLname && 
                                state.form.payerEmail && state.form.payerPhone;
          const userComplete = state.form.who === 'self' || 
                              (state.form.who === 'other' && state.form.userRut && 
                               state.form.userBirth && state.form.userName && 
                               state.form.userLname && state.form.userEmail && 
                               state.form.userPhone);
          const dateRequired = state.form.who === 'self' || (state.form.who === 'other' && userComplete);
          const dateValid = !dateRequired || (
             !!state.form.planStart &&
             state.form.planStart >= getMinStartDate() &&
             state.form.planStart <= getMaxStartDate()
          );
          sidebarBtn.disabled = !payerComplete || !state.form.who || !userComplete || !dateValid;
        } else if (state.step === 2) {
          sidebarBtn.disabled = !state.form.payMethod || !state.form.termsAccepted;
        }
      }

      // Actualiza también el botón del bottom sheet en mobile
      const bottomBtn = document.querySelector('.bottom-sheet .btn-primary');
      if (bottomBtn) {
        if (state.step === 1) {
          const payerComplete = state.form.payerRut && state.form.payerBirth && 
                                state.form.payerName && state.form.payerLname && 
                                state.form.payerEmail && state.form.payerPhone;
          const userComplete = state.form.who === 'self' || 
                              (state.form.who === 'other' && state.form.userRut && 
                               state.form.userBirth && state.form.userName && 
                               state.form.userLname && state.form.userEmail && 
                               state.form.userPhone);
          const dateRequired = state.form.who === 'self' || (state.form.who === 'other' && userComplete);
          const dateValid = !dateRequired || (
             !!state.form.planStart &&
             state.form.planStart >= getMinStartDate() &&
             state.form.planStart <= getMaxStartDate()
          );
          bottomBtn.disabled = !payerComplete || !state.form.who || !userComplete || !dateValid;
        } else if (state.step === 2) {
          bottomBtn.disabled = !state.form.payMethod || !state.form.termsAccepted;
        }
      }
    };

    window.showTerms = (id) => {
      const content = TERMS[id];
      if (!content) return;
      
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      overlay.innerHTML = `
        <div class="modal">
          <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
            ${ICONS.close}
          </button>
          <h2 class="modal-title">Términos y Condiciones</h2>
          <div class="modal-content">${content}</div>
        </div>
      `;
      overlay.onclick = (e) => {
        if (e.target === overlay) overlay.remove();
      };
      document.body.appendChild(overlay);
    };

    window.reset = () => {
      state.step = 0;
      state.plan = null;
      state.upsells = {};
      state.form = {
        payerRut:'', payerBirth:'', payerName:'', payerLname:'',
        payerEmail:'', payerPhone:'', who:null,
        userRut:'', userBirth:'', userName:'', userLname:'',
        userEmail:'', userPhone:'', 
        planStart:'',
        payMethod:null,
        termsAccepted:false
      };
      render();
      window.scrollTo({top:0, behavior:'smooth'});
    };

    // Init
    render();
