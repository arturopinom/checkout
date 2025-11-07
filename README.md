# Energy Club - Checkout

Sistema de checkout moderno y optimizado para Energy Club, diseñado con un enfoque mobile-first y siguiendo las mejores prácticas de UX/UI.

## 🚀 Inicio Rápido

### Opción 1: Abrir directamente (Más fácil)
1. Abre el archivo `checkout-full.html` en tu navegador
2. ¡Listo! Todo funciona sin necesidad de servidor

### Opción 2: Versión modular para desarrollo
1. Usa un servidor local (ver instrucciones abajo)
2. Abre `index.html`

## ⚠️ Importante
**Si ves solo texto "Saltar al contenido"** significa que estás abriendo `index.html` sin servidor. Usa `checkout-full.html` en su lugar.

## 🚀 Características

- ✨ Diseño minimalista inspirado en Apple y Nike
- 📱 Mobile-first responsive design
- 🎯 Flujo de checkout en 3 pasos optimizado para conversión
- 🇨🇱 Validación de datos chilenos (RUT, teléfono)
- ⚡ Renderizado dinámico con JavaScript vanilla
- ♿ Accesibilidad mejorada
- 🎨 Sistema de diseño basado en CSS custom properties

## 📋 Pasos del Checkout

1. **Selección de Plan** - Elige entre los planes disponibles con upsells opcionales
2. **Información Personal** - Formulario con validación de datos del pagador y beneficiario
3. **Método de Pago** - Selección de método de pago y confirmación

## 🛠️ Tecnologías

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript Vanilla (ES6+)
- Google Fonts (DM Sans, Inter Tight)

## 📦 Estructura del Proyecto

```
checkout-energyclub/
├── index.html          # HTML principal con archivos separados
├── checkout-full.html  # Versión todo-en-uno (original)
├── css/
│   └── styles.css      # Estilos del checkout (2,128 líneas)
├── js/
│   └── main.js         # Lógica y funcionalidad (1,318 líneas)
├── .gitignore          # Archivos a ignorar
└── README.md           # Este archivo
```

**Dos versiones disponibles:**
- `index.html` - Versión modular con CSS y JS en archivos separados (recomendada)
- `checkout-full.html` - Versión todo-en-uno con CSS y JS inline

## 🚀 Cómo usar

### Opción 1: GitHub Pages

1. Sube este proyecto a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la branch `main` y carpeta `/ (root)`
4. Tu checkout estará disponible en: `https://tu-usuario.github.io/nombre-repo/`

### Opción 2: Servidor local

Simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego visita: `http://localhost:8000`

## 🎨 Personalización

### Colores

Los colores principales se definen en `:root` en `styles.css`:

```css
--brand: #E60000;        /* Color principal Energy Club */
--text: #0B0B0B;         /* Color del texto */
--bg: #F8F9FC;           /* Color de fondo */
```

### Planes y Precios

Los planes se configuran en el objeto `PLANS` en `main.js`:

```javascript
const PLANS = {
  basic: { name: 'Plan Básico', price: 29990, ... },
  // ...
};
```

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ iOS Safari 12+
- ✅ Chrome Android

## 🔒 Validaciones

- RUT chileno con formato y dígito verificador
- Teléfono chileno (+56 9)
- Email con formato válido
- Fechas de nacimiento (mínimo 18 años)
- Fecha de inicio del plan (rango configurable)

## 📝 Licencia

Este proyecto es propiedad de Energy Club.

## 👥 Créditos

Desarrollado para Energy Club - Fitness Made Simple

---

**Nota**: Este es un proyecto de checkout demo. Para producción, asegúrate de implementar:
- Integración con gateway de pago real
- Validaciones backend
- Seguridad HTTPS
- Manejo de sesiones
- Analytics y tracking
