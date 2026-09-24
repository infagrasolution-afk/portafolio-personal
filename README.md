# Portafolio Oficial - Luis Infante (Infagra Solution)

Portafolio web interactivo de alto rendimiento y diseño de vanguardia (*Cyber-Obsidian Glassmorphism*). Presenta los 8 proyectos y sistemas de ingeniería de software desarrollados por Luis Infante.

## Tecnologías y Características

- **Diseño Visual:** Glassmorphism moderno, modo oscuro obsidian, spotlight interactivo sobre tarjetas y tipografía con Google Fonts.
- **Interactividad:** Filtros en tiempo real, buscador instantáneo (`Ctrl+K`), modal de estudio de caso arquitectónico y sintetizador Web Audio para retroalimentación sonora.
- **Contacto Directo:** Modal interactivo con envío automatizado a **WhatsApp** (`+58 412 0161906`) y apertura de redacción en **Gmail Web**.

---

## Despliegue en Render (Paso a Paso)

Este repositorio incluye [`render.yaml`](render.yaml) configurado para desplegarse como **Static Site** gratuito (sin límite de tiempo de inactividad, en CDN global y con SSL automático).

### Opción 1: Despliegue con Render Blueprint (Automático)
1. Ve a tu panel de [Render Dashboard](https://dashboard.render.com).
2. Haz clic en **New +** y selecciona **Blueprint**.
3. Conecta este repositorio (`portafolio-personal` o `portafolio-luis-infante`).
4. Render leerá el archivo `render.yaml` y creará el sitio estático automáticamente en segundos.

### Opción 2: Despliegue Manual como Static Site en Render
1. En [Render Dashboard](https://dashboard.render.com), haz clic en **New +** > **Static Site**.
2. Selecciona tu repositorio de GitHub.
3. Configura:
   - **Name:** `portafolio-luis-infante`
   - **Branch:** `main` (o `master`)
   - **Build Command:** *(dejar vacío)*
   - **Publish Directory:** `./`
4. Haz clic en **Create Static Site**. ¡Tu portafolio estará en vivo con dominio `.onrender.com`!

---

## Ejecución Local

```bash
# Iniciar servidor local
node server.js
```
Abre tu navegador en `http://localhost:3333`.
