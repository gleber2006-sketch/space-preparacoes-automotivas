// Space Preparações Automotivas — interações e animação por rolagem.
// Configure abaixo o WhatsApp oficial antes de publicar.
const WHATSAPP_NUMBER = ""; // Ex.: 5511999999999 (código do país + DDD + número, só dígitos)
const WHATSAPP_MESSAGE = "Olá! Gostaria de conversar sobre um projeto de preparação automotiva.";

const loader = document.getElementById("loader");
const loadBar = document.getElementById("loadBar");
const loadPercent = document.getElementById("loadPercent");
const loaderNeedle = document.querySelector(".tach-loader .tach-needle");
let load = 0;
const loadTimer = setInterval(() => {
  load = Math.min(100, load + Math.random() * 17 + 5);
  loadBar.style.width = `${load}%`;
  loadPercent.textContent = `${Math.floor(load)}%`;
  if (loaderNeedle) loaderNeedle.style.transform = `rotate(${-45 + load * 1.35}deg)`;
  if (load >= 100) {
    clearInterval(loadTimer);
    setTimeout(() => loader.classList.add("done"), 250);
  }
}, 110);

document.getElementById("year").textContent = new Date().getFullYear();
const nav = document.getElementById("nav");
document.getElementById("menuToggle").addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const whatsapp = document.getElementById("whatsappLink");
if (WHATSAPP_NUMBER) {
  whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
} else {
  whatsapp.addEventListener("click", e => {
    e.preventDefault();
    alert("Configure WHATSAPP_NUMBER no arquivo script.js com o número oficial antes de publicar.");
  });
}

// Animação demonstrativa controlada pelo scroll. Para reproduzir exatamente a versão publicada,
// substitua a ilustração por seus 139 quadros originais em assets/ e carregue-os num canvas.
const section = document.querySelector(".scrollytelling");
const progress = document.getElementById("scrollProgress");
const counter = document.getElementById("stageCounter");
const rpm = document.getElementById("rpmValue");
const needle = document.getElementById("tachNeedle");
const status = document.getElementById("stageStatus");
const engine = document.getElementById("explodedEngine");
const cards = [...document.querySelectorAll(".scroll-card")];

function updateScrollScene() {
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const total = Math.max(1, section.offsetHeight - window.innerHeight);
  const traveled = Math.min(total, Math.max(0, -rect.top));
  const p = Math.min(1, Math.max(0, traveled / total));
  const step = Math.min(3, Math.floor(p * 4));
  progress.style.width = `${p * 100}%`;
  counter.textContent = `0${step + 1} / 04`;
  rpm.textContent = (1.2 + p * 6.3).toFixed(1);
  needle.style.transform = `rotate(${-48 + p * 130}deg)`;
  status.textContent = ["SISTEMA EM STANDBY", "ANÁLISE DE COMPONENTES", "CALIBRANDO PERFORMANCE", "SISTEMA OTIMIZADO"][step];
  cards.forEach((card, i) => card.classList.toggle("active", i === step));
  const parts = engine.querySelectorAll(".part");
  const offsets = [
    [0,0,0],[0,-24,0],[0,-47,0],[0,-68,0]
  ][step];
  parts.forEach((part, i) => {
    const spread = step / 3;
    const x = ((i % 4) - 1.5) * 9 * spread;
    const y = (i < 3 ? -1 : i < 7 ? 1 : i < 10 ? -1.5 : 1.7) * 28 * spread;
    part.style.transform = `translate(${x}px, ${y + offsets[1]}px) rotate(${((i % 3) - 1) * 3 * spread}deg)`;
  });
}
window.addEventListener("scroll", updateScrollScene, { passive: true });
window.addEventListener("resize", updateScrollScene);
updateScrollScene();
