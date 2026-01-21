// ==========================================
// 밀리초타이머 - JavaScript
// ==========================================

// ==========================================
// 1. 다국어 지원
// ==========================================
const translations = {
  ko: {
    // 페이지 메타
    'page-title': '밀리초타이머 - 밀리초 단위 타이머, 스톱워치, 시계',
    'page-description': '밀리초 단위로 정밀한 타이머, 스톱워치, 시계 기능을 제공하는 iOS 앱입니다. App Store에서 다운로드하세요!',
    'page-keywords': '밀리초타이머, 타이머, 스톱워치, 시계, iOS, 밀리초, millisecond timer',

    // 헤더
    'app-name': '밀리초타이머',
    'language-ko': '한국어',
    'language-en': 'English',
    'theme-auto': '자동',
    'theme-light': '라이트',
    'theme-dark': '다크',

    // 히어로
    'hero-title': '밀리초타이머',
    'hero-subtitle': '밀리초 단위 타이머, 스톱워치, 시계를 이용해 보세요!',
    'rating-count': '6개의 평가',
    'download-button': 'App Store에서 다운로드',

    // 기능 섹션
    'features-title': '주요 기능',
    'feature-timer-title': '밀리초 타이머',
    'feature-timer-desc': '밀리초 단위까지 정밀하게 시간을 측정할 수 있는 타이머입니다. 버튼을 길게 눌러 빠르게 세팅하고, 최근 타이머 기능으로 자주 사용하는 타이머를 바로 실행하세요.',
    'feature-stopwatch-title': '밀리초 스톱워치',
    'feature-stopwatch-desc': '밀리초 단위로 시간을 측정할 수 있는 스톱워치입니다. 운동, 공부, 실험 등 정확한 시간 측정이 필요한 모든 순간에 활용하세요.',
    'feature-clock-title': '밀리초 시계',
    'feature-clock-desc': '현재 시각을 밀리초 단위로 확인할 수 있습니다. 24시간제 표시를 지원하며, 정밀한 시간 동기화가 필요한 작업에 최적화되어 있습니다.',
    'feature-pro-title': '밀리초타이머 프로',
    'feature-pro-desc': '광고 없이 타이머와 시간에 집중하세요! 최근 타이머 기능으로 이전에 사용했던 타이머를 빠르게 세팅할 수 있습니다.',
    'feature-ux-title': '직관적인 디자인',
    'feature-ux-desc': '3D 효과가 적용된 버튼, 다크 모드 지원, 더 큰 텍스트와 충분한 대비로 누구나 쉽게 사용할 수 있습니다.',
    'feature-accessibility-title': '뛰어난 접근성',
    'feature-accessibility-desc': 'VoiceOver 지원, 색상 외의 요소로도 구별 가능, 손쉬운 사용 기능을 완벽하게 지원하여 모든 사용자가 편리하게 이용할 수 있습니다.',

    // 스크린샷 섹션
    'screenshots-title': '앱 스크린샷',
    'screenshot-alt-1': '정확한 밀리초타이머',
    'screenshot-alt-2': '최근 타이머로 한 번에 세팅',
    'screenshot-alt-3': '버튼으로 쉽게 타이머를 세팅',
    'screenshot-alt-4': '타이머 시간 입력도 빠르게',
    'screenshot-alt-5': '앱 스크린샷 5',
    'screenshot-alt-6': '앱 스크린샷 6',
    'screenshot-alt-7': '앱 스크린샷 7',
    'screenshot-alt-8': '앱 스크린샷 8',

    // 통계 섹션
    'stats-title': '방문 통계',
    'stats-today': '오늘 방문자',
    'stats-total': '누적 방문자',

    // 푸터
    'footer-rights': 'All rights reserved.',
    'footer-website': '개발자 웹사이트',
    'footer-privacy': '개인정보 처리방침',
    'footer-contact': '문의하기'
  },

  en: {
    // Page Meta
    'page-title': 'MillisecondTimer - Precise Timer, Stopwatch, Clock',
    'page-description': 'An iOS app that provides precise timer, stopwatch, and clock functions in milliseconds. Download from the App Store!',
    'page-keywords': 'MillisecondTimer, Timer, Stopwatch, Clock, iOS, Milliseconds, Precise Timer',

    // Header
    'app-name': 'MillisecondTimer',
    'language-ko': '한국어',
    'language-en': 'English',
    'theme-auto': 'Auto',
    'theme-light': 'Light',
    'theme-dark': 'Dark',

    // Hero
    'hero-title': 'MillisecondTimer',
    'hero-subtitle': 'Use precise millisecond timer, stopwatch, and clock!',
    'rating-count': '6 ratings',
    'download-button': 'Download on App Store',

    // Features Section
    'features-title': 'Key Features',
    'feature-timer-title': 'Millisecond Timer',
    'feature-timer-desc': 'A timer that can measure time precisely down to milliseconds. Long-press buttons for quick setup, and use recent timers to instantly start your frequently used timers.',
    'feature-stopwatch-title': 'Precise Stopwatch',
    'feature-stopwatch-desc': 'A stopwatch that measures time in milliseconds. Perfect for workouts, studying, experiments, and any moment that requires accurate time measurement.',
    'feature-clock-title': 'Millisecond Clock',
    'feature-clock-desc': 'Check the current time down to the millisecond. Supports 24-hour format and is optimized for tasks requiring precise time synchronization.',
    'feature-pro-title': 'MillisecondTimer Pro',
    'feature-pro-desc': 'Focus on your timer and time without ads! Quickly set up previously used timers with the recent timer feature.',
    'feature-ux-title': 'Intuitive Design',
    'feature-ux-desc': 'Easy to use with 3D button effects, dark mode support, larger text, and sufficient contrast for everyone.',
    'feature-accessibility-title': 'Excellent Accessibility',
    'feature-accessibility-desc': 'Full support for VoiceOver, distinguishable by elements other than color, and accessibility features for convenient use by all users.',

    // Screenshots Section
    'screenshots-title': 'App Screenshots',
    'screenshot-alt-1': 'Precise Millisecond Timer',
    'screenshot-alt-2': 'Quick Setup with Recent Timers',
    'screenshot-alt-3': 'Easy Setup with Buttons',
    'screenshot-alt-4': 'Fast Timer Input',
    'screenshot-alt-5': 'App Screenshot 5',
    'screenshot-alt-6': 'App Screenshot 6',
    'screenshot-alt-7': 'App Screenshot 7',
    'screenshot-alt-8': 'App Screenshot 8',

    // Stats Section
    'stats-title': 'Visit Statistics',
    'stats-today': 'Today\'s Visitors',
    'stats-total': 'Total Visitors',

    // Footer
    'footer-rights': 'All rights reserved.',
    'footer-website': 'Developer Website',
    'footer-privacy': 'Privacy Policy',
    'footer-contact': 'Contact'
  }
};

// ==========================================
// 2. 언어 관리
// ==========================================
let currentLanguage = 'ko';

function initLanguage() {
  // localStorage에서 언어 설정 불러오기
  const savedLanguage = localStorage.getItem('language');

  if (savedLanguage) {
    currentLanguage = savedLanguage;
  } else {
    // 브라우저 언어 감지
    const browserLanguage = navigator.language || navigator.userLanguage;
    currentLanguage = browserLanguage.startsWith('ko') ? 'ko' : 'en';
  }

  updateLanguage();
  updateLanguageToggle();
}

function updateLanguage() {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[currentLanguage][key];

    if (translation) {
      // 텍스트 노드 업데이트
      if (element.tagName === 'META') {
        element.setAttribute('content', translation);
      } else if (element.tagName === 'TITLE') {
        element.textContent = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

  // HTML lang 속성 업데이트
  document.documentElement.lang = currentLanguage;

  // 스크린샷 이미지 및 Alt 텍스트 업데이트
  for (let i = 1; i <= 8; i++) {
    const img = document.getElementById(`screenshot-${i}`);
    if (img) {
      img.src = `assets/images/screenshots/${currentLanguage}/screenshot_${i}.png`;
      img.alt = translations[currentLanguage][`screenshot-alt-${i}`];
    }
  }

  // localStorage에 저장
  localStorage.setItem('language', currentLanguage);
}

function updateLanguageToggle() {
  const toggle = document.getElementById('language-toggle');
  if (toggle) {
    toggle.checked = currentLanguage === 'en';
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'ko' ? 'en' : 'ko';
  updateLanguage();
}

// ==========================================
// 3. 테마 관리
// ==========================================
let currentTheme = 'auto';

function initTheme() {
  // localStorage에서 테마 설정 불러오기
  const savedTheme = localStorage.getItem('theme') || 'auto';
  currentTheme = savedTheme;

  applyTheme();
  updateThemeButtons();

  // 시스템 테마 변경 감지
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => {
    if (currentTheme === 'auto') {
      applyTheme();
    }
  });
}

function applyTheme() {
  if (currentTheme === 'auto') {
    // 시스템 설정 따르기
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    // 수동 설정
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  // localStorage에 저장
  localStorage.setItem('theme', currentTheme);
}

function updateThemeButtons() {
  const buttons = document.querySelectorAll('.theme-button');

  buttons.forEach(button => {
    const theme = button.getAttribute('data-theme');
    if (theme === currentTheme) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function setTheme(theme) {
  currentTheme = theme;
  applyTheme();
  updateThemeButtons();
}

// ==========================================
// 4. 방문자 통계
// ==========================================
async function initVisitorStats() {
  // 실제 방문자 통계 API 사용
  const API_DOMAIN = 'millisecond-timer-prod'; // 고유 도메인 식별자
  let today = 0;
  let total = 0;
  let useLocal = false;

  try {
    const response = await fetch('https://visitor.6developer.com/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ domain: API_DOMAIN })
    });

    if (response.ok) {
      const data = await response.json();
      today = data.todayCount;
      total = data.totalCount;
      console.log('📊 Visitor Stats (API):', today, total);
    } else {
      throw new Error('API response not ok');
    }
  } catch (e) {
    console.warn('Visitor API Error, using local stats:', e);
    useLocal = true;
  }

  if (useLocal) {
    const localStats = calculateLocalStats();
    today = localStats.today;
    total = localStats.total;
  }

  // UI 애니메이션
  const todayElement = document.getElementById('today-visitors');
  const totalElement = document.getElementById('total-visitors');

  if (todayElement && totalElement) {
    animateCounter(todayElement, today, 800);
    animateCounter(totalElement, total, 1200);
  }
}

function calculateLocalStats() {
  const todayDate = new Date().toDateString();
  const now = new Date().getTime();
  const lastCountedTime = parseInt(localStorage.getItem('lastCountedTime') || '0');

  // 1시간 쿨다운 (3600000ms)
  const COOLDOWN = 3600000;

  let todayVisitors = parseInt(localStorage.getItem('todayVisitors') || '0');
  let totalVisitors = parseInt(localStorage.getItem('totalVisitors') || '0');

  const savedDate = localStorage.getItem('lastVisitDate');
  if (!savedDate) {
    localStorage.setItem('lastVisitDate', todayDate);
  }

  if (savedDate && savedDate !== todayDate) {
    todayVisitors = 0;
    localStorage.setItem('lastVisitDate', todayDate);
  }

  if (now - lastCountedTime > COOLDOWN) {
    todayVisitors++;
    totalVisitors++;
    localStorage.setItem('todayVisitors', todayVisitors.toString());
    localStorage.setItem('totalVisitors', totalVisitors.toString());
    localStorage.setItem('lastCountedTime', now.toString());
  }

  return { today: todayVisitors, total: totalVisitors };
}

function animateCounter(element, target, duration) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// ==========================================
// 5. 이벤트 리스너
// ==========================================
function initEventListeners() {
  // 언어 토글
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle) {
    languageToggle.addEventListener('change', toggleLanguage);
  }

  // 테마 버튼들
  const themeButtons = document.querySelectorAll('.theme-button');
  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.getAttribute('data-theme');
      setTheme(theme);
    });
  });

  // 다운로드 버튼 클릭 이벤트 (분석용)
  const downloadButton = document.getElementById('download-cta');
  if (downloadButton) {
    downloadButton.addEventListener('click', () => {
      console.log('Download button clicked');
      // 여기에 Google Analytics 등의 추적 코드를 추가할 수 있습니다
    });
  }

  // 스크롤 애니메이션
  initScrollAnimations();
}

// ==========================================
// 6. 스크롤 애니메이션
// ==========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 관찰할 요소들
  const elements = document.querySelectorAll('.feature-card, .screenshot-item, .stat-item');
  elements.forEach(element => {
    observer.observe(element);
  });
}

// ==========================================
// 7. 가로 스크롤 (마우스 휠 지원)
// ==========================================
function initHorizontalScroll() {
  const gallery = document.querySelector('.screenshots-gallery');
  if (gallery) {
    gallery.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        gallery.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }
}

// ==========================================
// 8. 저작권 연도 자동 업데이트
// ==========================================
function initYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ==========================================
// 9. 초기화
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 밀리초타이머 웹페이지 초기화 중...');

  // 순서대로 초기화
  initTheme();
  initLanguage();
  initVisitorStats();
  initEventListeners();
  initHorizontalScroll();
  initYear();

  console.log('✅ 초기화 완료!');
  console.log('📊 현재 언어:', currentLanguage);
  console.log('🎨 현재 테마:', currentTheme);
});

// ==========================================
// 10. 유틸리티 함수
// ==========================================

// 디바운스 함수 (필요시 사용)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 콘솔 환영 메시지
console.log('%c밀리초타이머 웹페이지', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%c개발자: COMDORI 컴돌이', 'font-size: 14px; color: #667eea;');
console.log('%c문의: comdori@comdori.com', 'font-size: 12px; color: #999;');
