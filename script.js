// تغيير الوضع بين فاتح وداكن
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleThemeBtn.textContent = document.body.classList.contains('dark') ? 'وضع فاتح' : 'وضع داكن';
});

// تغيير اللغة بين عربي وإنجليزي
const toggleLangBtn = document.getElementById('toggleLang');

const translations = {
  en: {
    home: "Home",
    teachers: "Teachers",
    contact: "Contact Us",
    login: "Login",
    welcome: "Welcome to Etqan Platform",
    intro: "A learning platform to master skills easily and effectively.",
    loginTitle: "Login",
    username: "Username:",
    password: "Password:",
    loginBtn: "Login",
    teachersTitle: "Teachers",
    contactTitle: "Contact Us",
    name: "Name:",
    email: "Email:",
    message: "Message:",
    send: "Send"
  },
  ar: {
    home: "الرئيسية",
    teachers: "المدرسين",
    contact: "تواصل معنا",
    login: "تسجيل الدخول",
    welcome: "مرحبا بك في منصة اتقان",
    intro: "منصة تعليمية لتعلم أفضل المهارات بشكل مميز وسهل.",
    loginTitle: "تسجيل الدخول",
    username: "اسم المستخدم:",
    password: "كلمة المرور:",
    loginBtn: "دخول",
    teachersTitle: "المدرسين",
    contactTitle: "تواصل معنا",
    name: "الاسم:",
    email: "البريد الإلكتروني:",
    message: "الرسالة:",
    send: "إرسال"
  }
};

let currentLang = 'ar';

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  toggleLangBtn.textContent = currentLang === 'ar' ? 'English' : 'العربية';
}

toggleLangBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  if(currentLang === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  }
  translatePage();
});

// لأول مرة:
translatePage();

// نموذج تسجيل الدخول (بسيط جداً، يحفظ اسم المستخدم في localStorage)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageP = document.getElementById('loginMessage');
    // تحقق بسيط (تخيل تسجيل حقيقي)
    if(username && password) {
      localStorage.setItem('etqan_user', username);
      messageP.style.color = 'green';
      messageP.textContent = currentLang === 'ar' ? 'تم تسجيل الدخول بنجاح' : 'Login successful';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      messageP.style.color = 'red';
      messageP.textContent = currentLang === 'ar' ? 'الرجاء ملء جميع الحقول' : 'Please fill all fields';
    }
  });
}

// نموذج تواصل معنا (لا يرسل بيانات حقيقية، فقط محاكاة)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const msgP = document.getElementById('contactMsg');
    msgP.style.color = 'green';
    msgP.textContent = currentLang === 'ar' ? 'شكراً لتواصلك معنا!' : 'Thank you for contacting us!';
    contactForm.reset();
  });
}
