const APP_URL = 'https://play.google.com/store/apps/details?id=com.gursetu.app';
const REDIRECT_SECONDS = 11;
const POPUP_SECONDS = 3;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const translations = {
  en: {
    welcomeEyebrow:'A calmer space begins here', welcomeTitle:'Welcome to GurSetu', welcomeText:'Your daily Sikh spiritual companion for Nitnem, Simran, Gurbani guidance and meaningful practice.', autoClose:'Closes automatically', redirectPrefix:'Opening GurSetu on Google Play in', pause:'Pause', resume:'Resume', openNow:'Open now', companion:'Your Daily Sikh Companion', getApp:'Get App', heroKicker:'Faith · Practice · Peace', heroLine1:'Start your daily', heroLine2:'spiritual journey', oneAppFor:'One peaceful app for', heroText:'Read. Reflect. Remember. Connect your daily Sikh practice in one beautifully focused experience.', downloadApp:'Download GurSetu', scanDownload:'Scan to Download', threeLanguages:'3 Languages', dailyTools:'Daily Tools', mobileFirst:'Made for Mobile', visualTour:'GurSetu visual tour', swipeHint:'Swipe posters ↔', everythingEyebrow:'One companion · many meaningful moments', everythingTitle:'Everything that keeps your practice connected.', everythingText:'Simple daily tools, thoughtful guidance and a focused spiritual experience — built around your routine.', nitnemText:'A calm, distraction-light space for daily Bani reading.', simranText:'Track Naam Simran and build a gentle daily rhythm.', aiText:'Ask questions and explore Gurbani ideas in simple language.', journalText:'Reflect on the day and keep meaningful thoughts together.', calendarText:'Follow important dates, Gurpurabs and upcoming moments.', sangatText:'Stay connected to community-centered spiritual experiences.', challengeText:'Turn small daily actions into a stronger spiritual habit.', quizText:'Learn through engaging questions, reflection and discovery.', audioText:'Listen and practice when reading is not convenient.', gurdwaraText:'Keep useful local spiritual information close at hand.', dailyFlow:'A simple daily flow', journeyStart:'Start with', journeyText:'Move through your day with a calmer rhythm: read, remember, reflect and reconnect.', stepRead:'Read', stepRemember:'Remember', stepReflect:'Reflect', stepConnect:'Connect', scanEyebrow:'One scan away', scanTitle:'Take GurSetu with you.', scanText:'Scan the QR code with your phone camera or tap the button to open GurSetu directly on Google Play.', openPlay:'Open on Google Play', scanMe:'SCAN ME', cameraHint:'Open your phone camera', finalText:'More than an app. A bridge to daily practice.', footerLine:'Connect · Learn · Practice · Grow', autoRedirect:'auto redirect', install:'Install'
  },
  hi: {
    welcomeEyebrow:'एक शांत शुरुआत यहाँ से', welcomeTitle:'GurSetu में आपका स्वागत है', welcomeText:'Nitnem, Simran, Gurbani guidance और रोज़ की meaningful practice के लिए आपका Sikh spiritual companion.', autoClose:'अपने आप बंद होगा', redirectPrefix:'GurSetu Google Play पर खुलेगा', pause:'रोकें', resume:'जारी रखें', openNow:'अभी खोलें', companion:'आपका रोज़ का Sikh Companion', getApp:'ऐप लें', heroKicker:'आस्था · अभ्यास · शांति', heroLine1:'अपनी रोज़ की', heroLine2:'आध्यात्मिक यात्रा शुरू करें', oneAppFor:'एक शांत ऐप आपके', heroText:'पढ़ें, मनन करें, याद करें और अपनी रोज़ की Sikh practice को एक सुंदर अनुभव में जोड़ें।', downloadApp:'GurSetu डाउनलोड करें', scanDownload:'स्कैन करके डाउनलोड', threeLanguages:'3 भाषाएँ', dailyTools:'Daily Tools', mobileFirst:'Mobile के लिए', visualTour:'GurSetu visual tour', swipeHint:'पोस्टर swipe करें ↔', everythingEyebrow:'एक companion · कई meaningful moments', everythingTitle:'आपकी spiritual practice के लिए सब कुछ एक जगह।', everythingText:'Simple daily tools, thoughtful guidance और focused spiritual experience — आपकी routine के आसपास बनाया गया।', nitnemText:'Daily Bani पढ़ने के लिए शांत और focused reader.', simranText:'Naam Simran track करें और रोज़ की consistency बनाएं.', aiText:'Questions पूछें और Gurbani ideas को सरल भाषा में समझें.', journalText:'दिन के Hukam पर reflect करें और thoughts save रखें.', calendarText:'Important dates, Gurpurabs और upcoming moments देखें.', sangatText:'Community-centered spiritual experiences से जुड़े रहें.', challengeText:'छोटे daily actions को मजबूत spiritual habit में बदलें.', quizText:'Questions और discovery से Sikh learning को engaging बनाएं.', audioText:'जब पढ़ना आसान न हो, तब सुनें और practice करें.', gurdwaraText:'Useful local spiritual information अपने पास रखें.', dailyFlow:'एक सरल daily flow', journeyStart:'शुरुआत करें', journeyText:'Read, remember, reflect और reconnect करते हुए अपने दिन को शांत rhythm दें.', stepRead:'पढ़ें', stepRemember:'याद करें', stepReflect:'मनन करें', stepConnect:'जुड़ें', scanEyebrow:'बस एक scan', scanTitle:'GurSetu अपने साथ रखें।', scanText:'QR code को phone camera से scan करें या Google Play पर GurSetu खोलने के लिए button दबाएँ.', openPlay:'Google Play पर खोलें', scanMe:'SCAN करें', cameraHint:'Phone camera खोलें', finalText:'सिर्फ app नहीं — daily practice का bridge.', footerLine:'Connect · Learn · Practice · Grow', autoRedirect:'auto redirect', install:'Install'
  },
  pa: {
    welcomeEyebrow:'ਇੱਕ ਸ਼ਾਂਤ ਸ਼ੁਰੂਆਤ ਇੱਥੋਂ', welcomeTitle:'GurSetu ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ', welcomeText:'Nitnem, Simran, Gurbani guidance ਅਤੇ ਰੋਜ਼ਾਨਾ meaningful practice ਲਈ ਤੁਹਾਡਾ Sikh spiritual companion.', autoClose:'ਆਪਣੇ ਆਪ ਬੰਦ ਹੋਵੇਗਾ', redirectPrefix:'GurSetu Google Play ਤੇ ਖੁੱਲੇਗਾ', pause:'ਰੋਕੋ', resume:'ਜਾਰੀ ਰੱਖੋ', openNow:'ਹੁਣੇ ਖੋਲ੍ਹੋ', companion:'ਤੁਹਾਡਾ ਰੋਜ਼ਾਨਾ Sikh Companion', getApp:'ਐਪ ਲਵੋ', heroKicker:'ਵਿਸ਼ਵਾਸ · ਅਭਿਆਸ · ਸ਼ਾਂਤੀ', heroLine1:'ਆਪਣੀ ਰੋਜ਼ਾਨਾ', heroLine2:'ਰੂਹਾਨੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ', oneAppFor:'ਇੱਕ ਸ਼ਾਂਤ ਐਪ ਤੁਹਾਡੇ', heroText:'ਪੜ੍ਹੋ, ਵਿਚਾਰ ਕਰੋ, ਯਾਦ ਕਰੋ ਅਤੇ ਆਪਣੀ ਰੋਜ਼ਾਨਾ Sikh practice ਨੂੰ ਇੱਕ ਸੁੰਦਰ experience ਵਿੱਚ ਜੋੜੋ।', downloadApp:'GurSetu ਡਾਊਨਲੋਡ ਕਰੋ', scanDownload:'ਸਕੈਨ ਕਰਕੇ ਡਾਊਨਲੋਡ', threeLanguages:'3 ਭਾਸ਼ਾਵਾਂ', dailyTools:'Daily Tools', mobileFirst:'Mobile ਲਈ', visualTour:'GurSetu visual tour', swipeHint:'ਪੋਸਟਰ swipe ਕਰੋ ↔', everythingEyebrow:'ਇੱਕ companion · ਕਈ meaningful moments', everythingTitle:'ਤੁਹਾਡੀ spiritual practice ਲਈ ਸਭ ਕੁਝ ਇੱਕ ਥਾਂ।', everythingText:'Simple daily tools, thoughtful guidance ਅਤੇ focused spiritual experience — ਤੁਹਾਡੀ routine ਦੇ ਆਸ-ਪਾਸ ਬਣਾਇਆ ਗਿਆ।', nitnemText:'Daily Bani ਲਈ ਸ਼ਾਂਤ ਅਤੇ focused reader.', simranText:'Naam Simran track ਕਰੋ ਅਤੇ ਰੋਜ਼ਾਨਾ consistency ਬਣਾਓ.', aiText:'Questions ਪੁੱਛੋ ਅਤੇ Gurbani ideas ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਮਝੋ.', journalText:'ਦਿਨ ਦੇ Hukam ਉੱਤੇ ਵਿਚਾਰ ਕਰੋ ਅਤੇ thoughts ਇਕੱਠੇ ਰੱਖੋ.', calendarText:'Important dates, Gurpurabs ਅਤੇ upcoming moments ਦੇਖੋ.', sangatText:'Community-centered spiritual experiences ਨਾਲ ਜੁੜੇ ਰਹੋ.', challengeText:'ਛੋਟੇ daily actions ਨੂੰ ਮਜ਼ਬੂਤ spiritual habit ਬਣਾਓ.', quizText:'Questions ਅਤੇ discovery ਨਾਲ Sikh learning ਨੂੰ engaging ਬਣਾਓ.', audioText:'ਜਦੋਂ ਪੜ੍ਹਨਾ ਆਸਾਨ ਨਾ ਹੋਵੇ, ਸੁਣੋ ਅਤੇ practice ਕਰੋ.', gurdwaraText:'Useful local spiritual information ਆਪਣੇ ਕੋਲ ਰੱਖੋ.', dailyFlow:'ਇੱਕ ਸੌਖਾ daily flow', journeyStart:'ਸ਼ੁਰੂ ਕਰੋ', journeyText:'Read, remember, reflect ਅਤੇ reconnect ਕਰਦੇ ਹੋਏ ਦਿਨ ਨੂੰ ਸ਼ਾਂਤ rhythm ਦਿਓ.', stepRead:'ਪੜ੍ਹੋ', stepRemember:'ਯਾਦ ਕਰੋ', stepReflect:'ਵਿਚਾਰ ਕਰੋ', stepConnect:'ਜੁੜੋ', scanEyebrow:'ਸਿਰਫ਼ ਇੱਕ scan', scanTitle:'GurSetu ਆਪਣੇ ਨਾਲ ਰੱਖੋ।', scanText:'QR code ਨੂੰ phone camera ਨਾਲ scan ਕਰੋ ਜਾਂ Google Play ਤੇ GurSetu ਖੋਲ੍ਹਣ ਲਈ button ਦਬਾਓ.', openPlay:'Google Play ਤੇ ਖੋਲ੍ਹੋ', scanMe:'SCAN ਕਰੋ', cameraHint:'Phone camera ਖੋਲ੍ਹੋ', finalText:'ਸਿਰਫ਼ app ਨਹੀਂ — daily practice ਦਾ bridge.', footerLine:'Connect · Learn · Practice · Grow', autoRedirect:'auto redirect', install:'Install'
  }
};

const rotatingWords = {
  en:['Nitnem','Simran','AI Sahayak','Hukamnama','Sangat','Hukam Journal','Quiz'],
  hi:['Nitnem','Simran','AI Sahayak','Hukamnama','Sangat','Hukam Journal','Quiz'],
  pa:['Nitnem','Simran','AI Sahayak','Hukamnama','Sangat','Hukam Journal','Quiz']
};
const journeyWords = {
  en:['Nitnem','Naam Simran','Hukamnama','Reflection'],
  hi:['Nitnem','Naam Simran','Hukamnama','Reflection'],
  pa:['Nitnem','Naam Simran','Hukamnama','Reflection']
};

let currentLang = localStorage.getItem('gursetu-lang') || 'en';
if (!translations[currentLang]) currentLang = 'en';
let currentSlide = 0;
let slideTimer;
let redirectRemaining = REDIRECT_SECONDS;
let redirectTimer;
let redirectPaused = false;
let popupRemaining = POPUP_SECONDS;
let popupTimer;
let wordIndex = 0;
let journeyIndex = 0;
let startX = null;

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const slides = $$('.slide');
const dots = $('#sliderDots');

function trackPixel(eventName, params={}){
  try { if (window.fbq) window.fbq('trackCustom', eventName, params); } catch(e){}
}

function setLanguage(lang){
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('gursetu-lang', lang);
  document.documentElement.lang = lang;
  $$('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const dict = translations[lang];
  $$('[data-t]').forEach(el => {
    const value = dict[el.dataset.t];
    if (value != null) el.textContent = value;
  });
  $('#changingWord').textContent = rotatingWords[lang][wordIndex % rotatingWords[lang].length];
  $('#journeyWord').textContent = journeyWords[lang][journeyIndex % journeyWords[lang].length];
  updateRedirectUI();
  trackPixel('LanguageChanged',{language:lang});
}

function animateWord(el, next){
  if (!el) return;
  if (prefersReducedMotion){ el.textContent = next; return; }
  el.classList.remove('word-in');
  el.classList.add('word-out');
  setTimeout(() => {
    el.textContent = next;
    el.classList.remove('word-out');
    void el.offsetWidth;
    el.classList.add('word-in');
  }, 270);
}

function startWordLoops(){
  setInterval(() => {
    wordIndex = (wordIndex + 1) % rotatingWords[currentLang].length;
    animateWord($('#changingWord'), rotatingWords[currentLang][wordIndex]);
  }, 2200);
  setInterval(() => {
    journeyIndex = (journeyIndex + 1) % journeyWords[currentLang].length;
    animateWord($('#journeyWord'), journeyWords[currentLang][journeyIndex]);
  }, 3100);
}

function buildDots(){
  dots.innerHTML = '';
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.type='button';
    b.setAttribute('aria-label',`Go to poster ${i+1}`);
    b.addEventListener('click',()=>{currentSlide=i; renderSlides(); restartSlides();});
    dots.appendChild(b);
  });
}

function renderSlides(){
  const n = slides.length;
  slides.forEach((slide,i)=>{
    slide.className='slide';
    const prev=(currentSlide-1+n)%n, next=(currentSlide+1)%n, farPrev=(currentSlide-2+n)%n, farNext=(currentSlide+2)%n;
    if(i===currentSlide) slide.classList.add('active');
    else if(i===prev) slide.classList.add('prev');
    else if(i===next) slide.classList.add('next');
    else if(i===farPrev) slide.classList.add('far-prev');
    else if(i===farNext) slide.classList.add('far-next');
  });
  [...dots.children].forEach((d,i)=>d.classList.toggle('active',i===currentSlide));
  $('#slideCounter').textContent = `${String(currentSlide+1).padStart(2,'0')} / ${String(n).padStart(2,'0')}`;
}
function nextSlide(){currentSlide=(currentSlide+1)%slides.length;renderSlides()}
function prevSlide(){currentSlide=(currentSlide-1+slides.length)%slides.length;renderSlides()}
function restartSlides(){clearInterval(slideTimer);slideTimer=setInterval(nextSlide,3600)}

function updateRedirectUI(){
  $$('.redirect-countdown').forEach(el=>el.textContent=String(Math.max(0,redirectRemaining)));
  const pct=((REDIRECT_SECONDS-redirectRemaining)/REDIRECT_SECONDS)*100;
  $('#redirectProgress').style.width=`${Math.max(0,Math.min(100,pct))}%`;
  const key=redirectPaused?'resume':'pause';
  $('#pauseRedirect').textContent=translations[currentLang][key];
}
function startRedirect(){
  clearInterval(redirectTimer);
  redirectRemaining=REDIRECT_SECONDS;
  redirectPaused=false;
  updateRedirectUI();
  redirectTimer=setInterval(()=>{
    if(redirectPaused || document.hidden) return;
    redirectRemaining--;
    updateRedirectUI();
    if(redirectRemaining<=0){
      clearInterval(redirectTimer);
      trackPixel('AutoRedirectToPlayStore');
      window.location.href=APP_URL;
    }
  },1000);
}
function toggleRedirect(){redirectPaused=!redirectPaused;updateRedirectUI()}

function closeModal(){
  $('#welcomeModal').classList.add('hidden');
  clearInterval(popupTimer);
}
function startModalTimer(){
  popupRemaining=POPUP_SECONDS;
  $('#popupCountdown').textContent=popupRemaining;
  $('#popupProgress').style.width='0%';
  popupTimer=setInterval(()=>{
    popupRemaining--;
    $('#popupCountdown').textContent=Math.max(0,popupRemaining);
    $('#popupProgress').style.width=`${((POPUP_SECONDS-popupRemaining)/POPUP_SECONDS)*100}%`;
    if(popupRemaining<=0) closeModal();
  },1000);
}

function initReveal(){
  const items=$$('.reveal');
  if(prefersReducedMotion || !('IntersectionObserver' in window)){items.forEach(x=>x.classList.add('visible'));return}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});
  items.forEach(x=>io.observe(x));
}

function initParticles(){
  if(prefersReducedMotion) return;
  const wrap=$('#particles');
  const count=window.innerWidth<700?24:42;
  for(let i=0;i<count;i++){
    const p=document.createElement('span');
    p.className='particle';
    p.style.left=`${(i*37+9)%100}%`;
    p.style.top=`${(i*61+13)%100}%`;
    p.style.setProperty('--dur',`${8+(i%7)}s`);
    p.style.setProperty('--op',`${.18+(i%5)*.08}`);
    p.style.setProperty('--dx',`${-18+(i%7)*7}px`);
    p.style.setProperty('--dy',`${-25-(i%6)*8}px`);
    p.style.animationDelay=`-${i%8}s`;
    wrap.appendChild(p);
  }
}

function initTilt(){
  if(prefersReducedMotion || !window.matchMedia('(hover:hover)').matches) return;
  $$('.tilt').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      card.style.setProperty('--mx',`${(x+.5)*100}%`);
      card.style.setProperty('--my',`${(y+.5)*100}%`);
      card.style.transform=`perspective(900px) rotateX(${y*-4}deg) rotateY(${x*5}deg) translateY(-2px)`;
    });
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });
  const wrap=$('#sliderWrap');
  wrap?.addEventListener('pointermove',e=>{
    const r=wrap.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    wrap.style.transform=`perspective(1200px) rotateX(${y*-2.5}deg) rotateY(${x*3.2}deg)`;
  });
  wrap?.addEventListener('pointerleave',()=>wrap.style.transform='');
}

function initSwipe(){
  const stage=$('#sliderStage');
  stage.addEventListener('touchstart',e=>{startX=e.touches[0].clientX},{passive:true});
  stage.addEventListener('touchend',e=>{
    if(startX==null) return;
    const dx=e.changedTouches[0].clientX-startX;
    if(Math.abs(dx)>45){dx<0?nextSlide():prevSlide();restartSlides()}
    startX=null;
  },{passive:true});
}

function bindEvents(){
  $('#nextSlide').addEventListener('click',()=>{nextSlide();restartSlides()});
  $('#prevSlide').addEventListener('click',()=>{prevSlide();restartSlides()});
  $('#pauseRedirect').addEventListener('click',toggleRedirect);
  $('#modalClose').addEventListener('click',closeModal);
  $$('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
  $$('.app-link').forEach(link=>link.addEventListener('click',()=>trackPixel('AppOpenClick',{placement:link.closest('header')?'header':'landing'})));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInterval(slideTimer);else restartSlides()});
}

buildDots();
renderSlides();
setLanguage(currentLang);
restartSlides();
startRedirect();
startModalTimer();
startWordLoops();
initReveal();
initParticles();
initTilt();
initSwipe();
bindEvents();
