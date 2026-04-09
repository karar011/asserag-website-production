document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });

    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.visibility = 'hidden'; }, 500);
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });

    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    const htmlRoot = document.getElementById('htmlRoot');
    const body = document.getElementById('body');
    let currentLang = htmlRoot.getAttribute('lang') || 'ar';

    const translations = {
        en: {
            navLogo: 'Seraj <span>Equipment</span>',
            home: 'Home', services: 'Services', tools: 'Tools', portfolio: 'Portfolio', downloads: 'Downloads', contact: 'Contact',
            heroTitle: 'Secure Your <span>Future</span> With Advanced Systems',
            heroDesc: 'Al-Seraj Industrial Equipment, Authorized Asenware Distributor in Yemen.',
            smartTools: 'Smart Tools',
            toolsDesc: 'Interactive tools to help you secure your facility and verify product quality.',
            checkTitle: 'Authenticity Checker',
            checkDesc: 'Enter the product serial number to verify it is an original Seraj product.',
            verifyBtn: 'Verify Now',
            calcTitle: 'System Estimator',
            areaLabel: 'Facility Area (sqm):',
            roomsLabel: 'Number of Rooms/Sections:',
            calcBtn: 'Calculate Needs',
            dlCenter: 'Download Center',
            dlDesc: 'Download technical catalogs and international certifications.',
            footer: 'Al-Seraj Industrial Equipment. All Rights Reserved.',
            announcement: '📢 Special Offer: 15% discount on periodic maintenance for Asenware systems - Limited time!',
            getStarted: 'Get Started',
            statProjects: 'Projects Done',
            statYears: 'Years Experience',
            statClients: 'Happy Clients',
            servicesDesc: 'We provide integrated solutions in industrial security and safety.',
            serviceFire: 'Fire Systems',
            serviceFireDesc: 'Supply and installation of latest fire alarm and fighting systems.',
            serviceMaint: 'Periodic Maintenance',
            serviceMaintDesc: 'Professional maintenance contracts to ensure system efficiency.',
            serviceTrain: 'Technical Training',
            serviceTrainDesc: 'Training staff on using and maintaining safety systems.',
            partners: 'Success Partners',
            dlCat: 'Asenware Catalog 2024',
            dlCert: 'LPCB International Certificate',
            dlGuide: 'Installation & Maintenance Guide',
            contactTitle: 'Contact Us',
            contactDesc: 'We are here to answer your inquiries and meet your needs.',
            phone: 'Phone',
            email: 'Email',
            location: 'Location',
            waHeader: 'Contact Al-Seraj',
            waSales: 'Sales Department',
            waTech: 'Technical Support',
            waMaint: 'Emergency Maintenance'
        },
        ar: {
            navLogo: 'السراج <span>للتجهيزات</span>',
            home: 'الرئيسية', services: 'خدماتنا', tools: 'الأدوات', portfolio: 'معرض المشاريع', downloads: 'التحميلات', contact: 'اتصل بنا',
            heroTitle: 'نؤمن <span>مستقبلك</span> بأحدث أنظمة الحماية',
            heroDesc: 'السراج للتجهيزات الصناعية، الوكيل المعتمد لشركة Asenware العالمية في اليمن.',
            smartTools: 'الأدوات الذكية',
            toolsDesc: 'أدوات تفاعلية لمساعدتك في تأمين منشأتك والتأكد من جودة منتجاتك.',
            checkTitle: 'التحقق من الأصالة',
            checkDesc: 'أدخل الرقم التسلسلي للمنتج للتأكد من أنه أصلي من وكالة السراج.',
            verifyBtn: 'تحقق الآن',
            calcTitle: 'حاسبة الأنظمة التقديرية',
            areaLabel: 'مساحة المنشأة (متر مربع):',
            roomsLabel: 'عدد الغرف/الأقسام:',
            calcBtn: 'احسب الاحتياج',
            dlCenter: 'مركز التحميلات',
            dlDesc: 'حمل الكتالوجات الفنية وشهادات الاعتماد الدولية لمنتجاتنا.',
            footer: 'السراج للتجهيزات الصناعية. جميع الحقوق محفوظة.',
            announcement: '📢 عرض خاص: خصم 15% على عقود الصيانة الدورية لأنظمة Asenware - لفترة محدودة!',
            getStarted: 'ابدأ الآن',
            statProjects: 'مشروع منفذ',
            statYears: 'سنوات خبرة',
            statClients: 'عميل سعيد',
            servicesDesc: 'نقدم حلولاً متكاملة في مجال الأمن والسلامة الصناعية.',
            serviceFire: 'أنظمة الحريق',
            serviceFireDesc: 'توريد وتركيب أحدث أنظمة إنذار ومكافحة الحريق.',
            serviceMaint: 'صيانة دورية',
            serviceMaintDesc: 'عقود صيانة احترافية لضمان عمل الأنظمة بكفاءة.',
            serviceTrain: 'تدريب فني',
            serviceTrainDesc: 'تدريب الكوادر على استخدام وصيانة أنظمة السلامة.',
            partners: 'شركاء النجاح',
            dlCat: 'كتالوج Asenware 2024',
            dlCert: 'شهادة LPCB الدولية',
            dlGuide: 'دليل التركيب والصيانة',
            contactTitle: 'اتصل بنا',
            contactDesc: 'نحن هنا للإجابة على استفساراتكم وتلبية احتياجاتكم.',
            phone: 'الهاتف',
            email: 'البريد الإلكتروني',
            location: 'الموقع',
            waHeader: 'تواصل مع السراج',
            waSales: 'قسم المبيعات',
            waTech: 'الدعم الفني',
            waMaint: 'صيانة طارئة'
        }
    };

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            langToggle.innerText = currentLang === 'ar' ? 'English' : 'العربية';
            htmlRoot.setAttribute('lang', currentLang);
            htmlRoot.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            body.classList.toggle('en', currentLang === 'en');
            updateTranslations();
        });
    }

    function updateTranslations() {
        const t = translations[currentLang];
        const navLogoText = document.getElementById('navLogoText');
        if (navLogoText) navLogoText.innerHTML = t.navLogo;
        
        const selectors = {
            '.lang-home': t.home,
            '.lang-services': t.services,
            '.lang-tools': t.tools,
            '.lang-portfolio': t.portfolio,
            '.lang-downloads': t.downloads,
            '.lang-contact': t.contact,
            '.lang-smart-tools': t.smartTools,
            '.lang-tools-desc': t.toolsDesc,
            '.lang-check-title': t.checkTitle,
            '.lang-check-desc': t.checkDesc,
            '.lang-calc-title': t.calcTitle,
            '.lang-area-label': t.areaLabel,
            '.lang-rooms-label': t.roomsLabel,
            '.lang-calc-btn': t.calcBtn,
            '.lang-dl-center': t.dlCenter,
            '.lang-dl-desc': t.dlDesc,
            '.lang-footer': t.footer,
            '.lang-get-started': t.getStarted,
            '.lang-stat-projects': t.statProjects,
            '.lang-stat-years': t.statYears,
            '.lang-stat-clients': t.statClients,
            '.lang-services-desc': t.servicesDesc,
            '.lang-service-fire': t.serviceFire,
            '.lang-service-fire-desc': t.serviceFireDesc,
            '.lang-service-maint': t.serviceMaint,
            '.lang-service-maint-desc': t.serviceMaintDesc,
            '.lang-service-train': t.serviceTrain,
            '.lang-service-train-desc': t.serviceTrainDesc,
            '.lang-partners': t.partners,
            '.lang-dl-cat': t.dlCat,
            '.lang-dl-cert': t.dlCert,
            '.lang-dl-guide': t.dlGuide,
            '.lang-contact-title': t.contactTitle,
            '.lang-contact-desc': t.contactDesc,
            '.lang-wa-header': t.waHeader,
            '.lang-wa-sales': t.waSales,
            '.lang-wa-tech': t.waTech,
            '.lang-wa-maint': t.waMaint
        };

        for (const [selector, text] of Object.entries(selectors)) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el) el.innerText = text;
            });
        }

        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle) heroTitle.innerHTML = t.heroTitle;
        
        const heroDesc = document.getElementById('heroDesc');
        if (heroDesc) heroDesc.innerText = t.heroDesc;
        
        const announcement = document.getElementById('announcement');
        if (announcement) announcement.innerText = t.announcement;
    }

    // Serial Checker Logic
    window.checkSerial = function() {
        const input = document.getElementById('serialInput').value.trim();
        const result = document.getElementById('checkResult');
        if (!result) return;
        result.style.display = 'block';
        
        if (input.startsWith('AS-2024')) {
            result.innerHTML = currentLang === 'ar' ? '✅ منتج أصلي معتمد من السراج' : '✅ Original Certified Seraj Product';
            result.style.background = 'rgba(37, 211, 102, 0.1)';
            result.style.border = '1px solid #25d366';
        } else {
            result.innerHTML = currentLang === 'ar' ? '❌ الرقم غير صحيح أو المنتج غير مسجل' : '❌ Invalid Serial or Product Not Registered';
            result.style.background = 'rgba(217, 79, 26, 0.1)';
            result.style.border = '1px solid var(--orange)';
        }
    };

    // System Calculator Logic
    window.calculateSystem = function() {
        const area = document.getElementById('calcArea').value;
        const rooms = document.getElementById('calcRooms').value;
        const result = document.getElementById('calcResult');
        if (!result) return;
        
        if (!area || !rooms) return;
        
        const detectors = Math.ceil(area / 50) + parseInt(rooms);
        const panels = 1;
        
        result.style.display = 'block';
        result.innerHTML = currentLang === 'ar' 
            ? `📊 الاحتياج التقديري: <br> - كواشف: ${detectors} <br> - لوحة تحكم: ${panels}`
            : `📊 Estimated Needs: <br> - Detectors: ${detectors} <br> - Control Panel: ${panels}`;
    };

    // Theme Toggle & Auto Detection
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    function setTheme(isDark) {
        if (isDark) {
            body.classList.remove('light');
            body.classList.add('dark-forced');
            if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.classList.add('light');
            body.classList.remove('dark-forced');
            if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    // Initial Set
    setTheme(prefersDark.matches);

    // Listen for system changes
    prefersDark.addEventListener('change', (e) => setTheme(e.matches));

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isNowLight = body.classList.toggle('light');
            body.classList.toggle('dark-forced', !isNowLight);
            themeToggle.innerHTML = isNowLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // Smart WhatsApp Toggle
    const waToggle = document.getElementById('waToggle');
    const waMenu = document.getElementById('waMenu');
    if (waToggle && waMenu) {
        waToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            waMenu.style.display = waMenu.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', () => {
            waMenu.style.display = 'none';
        });
        waMenu.addEventListener('click', (e) => e.stopPropagation());
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm();
        });
    }

    function handleContactForm() {
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        const formMessage = document.getElementById('formMessage');

        if (!name || !email || !message) {
            showFormMessage(false, currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage(false, currentLang === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address');
            return;
        }

        showFormMessage(true, currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Your message has been sent successfully! We will contact you soon.');
        contactForm.reset();
        setTimeout(() => {
            if (formMessage) formMessage.style.display = 'none';
        }, 5000);
    }

    function showFormMessage(isSuccess, message) {
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.style.display = 'block';
            formMessage.className = 'form-message ' + (isSuccess ? 'success' : 'error');
            formMessage.textContent = message;
        }
    }
});
