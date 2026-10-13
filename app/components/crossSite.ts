// Fallo de Chrome en iOS: al llegar a una web desde un enlace con la barra del
// navegador contraída, la página puede quedarse "atascada" sin poder volver arriba.
// Mitigación: antes de cruzar a la otra web subimos arriba (barra expandida) y
// navegamos en la misma pestaña.
export const isChromeIOS = () => typeof navigator !== "undefined" && /CriOS/.test(navigator.userAgent);

export function crossSiteClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (!isChromeIOS()) return;
  e.preventDefault();
  const url = e.currentTarget.href;
  window.scrollTo(0, 0);
  setTimeout(() => window.location.assign(url), 120);
}

// Se ejecuta al cargar: si venimos de ia.monqmedia.com en Chrome iOS, fuerza a
// Chrome a recolocar el scroll en la parte superior.
export const chromeIOSScrollFix = `(function(){try{
if(!/CriOS/.test(navigator.userAgent))return;
if(!/[?&]from=ia/.test(location.search)&&!/ia\\.monqmedia\\.com/.test(document.referrer))return;
if('scrollRestoration' in history)history.scrollRestoration='manual';
var nudge=function(){if(window.scrollY>4||location.hash)return;window.scrollTo(0,1);setTimeout(function(){window.scrollTo(0,0)},60)};
window.addEventListener('pageshow',function(){setTimeout(nudge,80)});
window.addEventListener('load',function(){setTimeout(nudge,300)});
}catch(e){}})();`;
