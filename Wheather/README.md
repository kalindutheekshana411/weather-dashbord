Weatherly — Local Weather Dashboard

What this provides
- A single-page weather dashboard UI (HTML + CSS + JS)
- Search with suggestions (OpenWeatherMap Geocoding API)
- Use my location button (browser geolocation)
- Animated, smooth transitions and responsive layout
- Live updates: refreshes every 10 minutes

Quick start
1. Get an API key from OpenWeatherMap: https://openweathermap.org/api (free tier is fine)
2. Open `Src/Java.js/main.js` and replace the string in `API_KEY` with your key.
3. Open `Src/index.html` in a browser (double-click or use Live Server).

Notes and next steps
- The app uses OpenWeatherMap current weather + 5-day forecast endpoints.
- No build step required; it's static and works by opening the HTML file.
- If you want fancier animations, I can wire in a lightweight animation library (GSAP) or add SVG weather backgrounds.

If you'd like, I can:
- Add a small service worker to cache last results for offline use.
- Implement nicer icons (animated SVG) and auto-theme based on day/night.
- Create a tiny Node dev server with https for local geolocation testing.
