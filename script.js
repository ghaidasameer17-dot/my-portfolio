/* ================================================
   script.js — منطق الموقع وبياناته
   ================================================

   هذا الملف يحتوي على:
   1. بيانات المشاريع (مصفوفة ثابتة)
   2. بيانات التعلم الذاتي (مصفوفة ثابتة)
   3. دالة لبناء بطاقات المشاريع وعرضها
   4. دالة لبناء بطاقات التعلم الذاتي
   5. منطق الكاروسيل (الأسهم)
   6. منطق نموذج التواصل
   7. الشريط المتحرك في الفوتر
================================================ */


/* ================================================
   SECTION 1: بيانات المشاريع
   ================================================
   كل مشروع هو object يحتوي على:
   - title:       عنوان المشروع
   - description: وصف المشروع
   - image:       مسار الصورة (من مجلد assets/images/)
   - bgColor:     لون خلفية البطاقة (hex)
   - dotColor:    لون النقطة الصغيرة في الأزرار (hex)
   - links:       روابط المشروع — المنطق الشرطي يتحقق من وجودها قبل العرض
================================================ */

const PROJECTS = [

  {
    title: "Atelier",

    description: "Artists lack a unified platform to showcase work and manage commissions. Atelier connects artists with collectors, featuring Web AR to visualize artworks in real spaces.",

    image: "assets/images/atelier-icon.png",
    isLogo: true,   // شعار → يُعرض بـ contain مع padding بدل cover

    bgColor: "#F7BCC6",
    dotColor: "#CFEDEF",

    links: {
      github: "https://github.com/ghaidasameer17-dot/Atelier.git",
      live:   "https://mukhaverse.github.io/Atelier/",
      video:  "assets/videos/Atelier.mp4",   // ← ضعي الملف هنا عند الجهوزية
      pdf:    "assets/pdfs/atelier.pdf"
    }
  },

  {
    title: "Sanad",

    description: "Volunteer organizations struggle to manage their online presence efficiently. Sanad streamlines registration and public communication through a centralized admin system.",

    image: "assets/images/Sanad.svg",
    isLogo: true,   // شعار → يُعرض بـ contain مع padding بدل cover

    bgColor: "#CFEDEF",
    dotColor: "#F49FB6",

    links: {
      github: "https://github.com/ghaidasameer17-dot/Sanad.git",
      pdf:    "assets/pdfs/Sanad.pdf"
      // لا يوجد فيديو أو رابط موقع لهذا المشروع
      // لذلك لن تظهر أزرارهم تلقائياً
    }
  },

  {
    title: "BizCo Information System",

    description: "Disconnected legacy systems caused slow, fragmented reporting. Designed a software architecture using SOA to integrate systems and deliver real-time aggregated reports.",

    image: "assets/images/software-architecture.png",

    bgColor: "#C9DDB2",
    dotColor: "#FBF3D6",

    links: {
      pdf: "assets/pdfs/software-architecture.pdf"
      // لا يوجد GitHub أو فيديو أو رابط موقع
    }
  },

  {
    title: "Analysis and Testing of WordPress (wp-comments-post.php)",

    description: "The WordPress comment system required rigorous security testing. Executed comprehensive test cases via Postman to validate stability and input security.",

    image: "assets/images/WordPress-Testing.png",

    bgColor: "#FBF3D6",
    dotColor: "#CFEDEF",

    links: {
      pdf: "assets/pdfs/WordPress-Testing.pdf"
      // لا يوجد GitHub أو فيديو أو رابط موقع
    }
  },

  {
    title: "Gemini – User Experience Study",

    description: "Evaluated Gemini's UX to identify usability gaps in daily tasks. Conducted usability testing and redesigned wireframes to improve visual clarity and interaction.",

    image: "assets/images/gemini.png",

    bgColor: "#F7BCC6",
    dotColor: "#CFEDEF",

    links: {
      pdf: "assets/pdfs/gemini.pdf"
      // لا يوجد GitHub أو فيديو أو رابط موقع
    }
  },

  {
    title: "Architectural Landmarks Explorer",

    description: "Accessing unified data about global landmarks was fragmented. Built a web app integrating OpenStreetMap and Wikipedia APIs to explore landmarks with real-time insights.",

    image: "assets/images/Architectural Landmarks Explorer.png",

    bgColor: "#CFEDEF",
    dotColor: "#F49FB6",

    links: {
      github: "https://github.com/ghaidasameer17-dot/Architectural-Landmarks-Explorer.git",
      live:   "https://ghaidasameer17-dot.github.io/Architectural-Landmarks-Explorer/"
      // لا يوجد فيديو أو PDF
    }
  }

];


/* ================================================
   SECTION 2: بيانات التعلم الذاتي
   ================================================
   كل عنصر يحتوي على:
   - title:      العنوان
   - desc:       الوصف
   - icon:       كود SVG للأيقونة (يُضاف بـ innerHTML)
   - iconBg:     لون خلفية دائرة الأيقونة
   - btnText:    نص زر الرابط
   - btnColor:   لون زر الرابط (hex)
   - btnLink:    رابط الزر
================================================ */

const SELF_LEARNING = [

  {
    title:   "Mastering Version Control",
    desc:    "Advancing my Git skills with a focus on clean code history and collaborative workflows that follow industry standards.",
    // أيقونة Git Branch
    icon:    `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>`,
    iconBg:  "rgba(244,159,182,0.2)",
    btnText: "Explore",
    btnColor: "#F7BCC6",
    btnLink: "https://gitmastery.me/"
  },

  {
    title:   "Exploring API Integration",
    desc:    "Diving deeper into how systems communicate — practicing the art of fetching and managing dynamic data to bring applications to life.",
    // أيقونة Link
    icon:    `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>`,
    iconBg:  "rgba(207,237,239,0.6)",
    btnText: "View Project",
    btnColor: "#CFEDEF",
    btnLink: "https://ghaidasameer17-dot.github.io/Architectural-Landmarks-Explorer/"
  },

  {
    title:   "Strengthening Algorithmic Logic",
    desc:    "Studying data structures and algorithms to sharpen problem-solving skills and write cleaner, more efficient code.",
    // أيقونة Layers (طبقات تمثل الخوارزميات)
    icon:    `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>`,
    iconBg:  "rgba(251,243,214,0.8)",
    btnText: "Visualize",
    btnColor: "#FBF3D6",
    btnLink: "https://visualgo.net/en"
  },

  {
    title:   "Interactive Git Logic",
    desc:    "Exploring visual branching models to master complex version control scenarios and build stronger logical thinking in software management.",
    // أيقونة Git Merge
    icon:    `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="18" r="3"></circle>
                <circle cx="6" cy="6" r="3"></circle>
                <path d="M6 21V9a9 9 0 0 0 9 9"></path>
              </svg>`,
    iconBg:  "rgba(201,221,178,0.8)",
    btnText: "Practice",
    btnColor: "#C9DDB2",  /* أخضر يتطابق مع لون الدائرة */
    btnLink: "https://learngitbranching.js.org/"
  },

  {
    title:   "Exploring Relational Databases",
    desc:    "Diving into SQL fundamentals to query, filter, and manage structured data for building reliable backend systems.",
    // أيقونة Database
    icon:    `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>`,
    iconBg:  "rgba(244,159,182,0.2)",
    btnText: "Learn SQL",
    btnColor: "#F7BCC6",
    btnLink: "https://www.kaggle.com/learn/intro-to-sql"
  }

];


/* ================================================
   SECTION 3: دالة بناء بطاقة مشروع واحد
   ================================================
   تأخذ بيانات المشروع وترجع عنصر HTML جاهز للإضافة
================================================ */

function buildProjectCard(project) {

  /* ---- إنشاء div الرئيسي للبطاقة ---- */
  const card = document.createElement("div");
  card.className = "project-card";
  card.style.backgroundColor = project.bgColor;


  /* ---- قسم الصورة ---- */
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "project-img-wrapper";

  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.title;

  /*
    إذا كان المشروع يحتوي على شعار (logo) بدل صورة عادية:
    - object-fit: contain → يحافظ على نسب الشعار بدون قص
    - padding          → يترك مساحة حوله
    - background white → خلفية بيضاء تُظهر الشعار بوضوح
    أما الصور العادية فتبقى على object-fit: cover (محددة في CSS)
  */
  if (project.isLogo) {
    img.classList.add("project-img-logo");
  }

  // طبقة شفافة فوق الصورة للتأثير الجمالي
  const overlay = document.createElement("div");
  overlay.className = "project-img-overlay";

  imgWrapper.appendChild(img);
  imgWrapper.appendChild(overlay);


  /* ---- قسم المحتوى (العنوان، الوصف، الأزرار) ---- */
  const body = document.createElement("div");
  body.className = "project-body";

  const title = document.createElement("h3");
  title.className = "project-title";
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.className = "project-desc";
  desc.textContent = project.description;

  /* ---- حاوية الأزرار ---- */
  const linksDiv = document.createElement("div");
  linksDiv.className = "project-links";

  /*
    المنطق الشرطي:
    قبل إضافة أي زر، نتحقق أولاً إذا كانت البيانات موجودة.
    إذا لم يكن هناك رابط، لا يُضاف الزر — بسيط!

    الطريقة: project.links?.github
    علامة ؟ تعني "إذا كان links موجوداً، اقرأ github منه"
    لو github فارغ أو undefined أو null — الشرط يفشل ولا يُضاف الزر
  */

  if (project.links?.github) {
    linksDiv.appendChild(buildLinkBtn("GitHub",    project.links.github, project.dotColor));
  }

  if (project.links?.live) {
    linksDiv.appendChild(buildLinkBtn("Live Demo", project.links.live,   project.dotColor));
  }

  if (project.links?.video) {
    linksDiv.appendChild(buildLinkBtn("Video",     project.links.video,  project.dotColor));
  }

  if (project.links?.pdf) {
    linksDiv.appendChild(buildLinkBtn("PDF",       project.links.pdf,    project.dotColor));
  }

  if (project.links?.slides) {
    linksDiv.appendChild(buildLinkBtn("Slides",    project.links.slides, project.dotColor));
  }

  /* ---- تجميع كل الأجزاء ---- */
  body.appendChild(title);
  body.appendChild(desc);
  body.appendChild(linksDiv);

  card.appendChild(imgWrapper);
  card.appendChild(body);

  return card;  // نرجع البطاقة الجاهزة
}


/* ================================================
   دالة مساعدة: بناء زر رابط واحد
   تُستخدم داخل buildProjectCard
================================================ */

function buildLinkBtn(label, href, dotColor) {
  const a = document.createElement("a");
  a.href = href;
  a.className = "project-link-btn";
  a.target = "_blank";              // يفتح الرابط في تبويب جديد
  a.rel = "noreferrer noopener";    // لأمان الروابط الخارجية

  // النقطة الملونة
  const dot = document.createElement("span");
  dot.className = "link-dot";
  dot.style.backgroundColor = dotColor;

  // النص
  const text = document.createTextNode(label);

  a.appendChild(dot);
  a.appendChild(text);

  return a;
}


/* ================================================
   SECTION 4: دالة بناء بطاقة تعلم ذاتي واحدة
================================================ */

function buildSLCard(item) {

  const card = document.createElement("div");
  card.className = "sl-card";

  /* دائرة الأيقونة */
  const icon = document.createElement("div");
  icon.className = "sl-icon";
  icon.style.backgroundColor = item.iconBg;
  // innerHTML بدل textContent لأن icon أصبح كود SVG وليس نصاً
  icon.innerHTML = item.icon;

  /* العنوان */
  const title = document.createElement("h3");
  title.className = "sl-card-title";
  title.textContent = item.title;

  /* الوصف */
  const desc = document.createElement("p");
  desc.className = "sl-card-desc";
  desc.textContent = item.desc;

  /* الزر */
  const btn = document.createElement("a");
  btn.href = item.btnLink;
  btn.className = "sl-btn";
  btn.style.backgroundColor = item.btnColor;
  btn.target = "_blank";
  btn.rel = "noreferrer noopener";
  btn.textContent = item.btnText;

  card.appendChild(icon);
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(btn);

  return card;
}


/* ================================================
   SECTION 5: ملء الكاروسيلات بالبطاقات
   ================================================
   نكرر كل مجموعة 3 مرات لإعطاء تأثير اللانهاية
   عند التمرير يميناً أو يساراً
================================================ */

function fillCarousels() {

  const projectsTrack = document.getElementById("projects-track");
  const slTrack       = document.getElementById("sl-track");

  /* --- ملء كاروسيل المشاريع --- */
  // نكرر البطاقات 3 مرات: هذا يجعل الكاروسيل يبدو لا نهائياً
  for (let repeat = 0; repeat < 3; repeat++) {
    PROJECTS.forEach(function(project) {
      projectsTrack.appendChild(buildProjectCard(project));
    });
  }

  /* --- ملء كاروسيل التعلم الذاتي --- */
  for (let repeat = 0; repeat < 3; repeat++) {
    SELF_LEARNING.forEach(function(item) {
      slTrack.appendChild(buildSLCard(item));
    });
  }

  /* بعد إضافة البطاقات، نبدأ من المجموعة الوسطى
     حتى يمكن التمرير للأمام والخلف */
  const projectCardWidth = 316; // عرض البطاقة + الـ gap
  const slCardWidth      = 296;

  projectsTrack.scrollLeft = projectCardWidth * PROJECTS.length;
  slTrack.scrollLeft       = slCardWidth * SELF_LEARNING.length;
}


/* ================================================
   SECTION 6: منطق الكاروسيل (الأسهم)
   ================================================
   عند الضغط على السهم، نحرك الـ scrollLeft
   بمقدار عرض بطاقة واحدة
================================================ */

function setupCarouselArrows() {

  /* --- كاروسيل المشاريع --- */
  const projectsTrack = document.getElementById("projects-track");
  const projectsPrev  = document.getElementById("projects-prev");
  const projectsNext  = document.getElementById("projects-next");

  projectsPrev.addEventListener("click", function() {
    // scrollBy تحرك بمقدار نسبي من الموقع الحالي
    projectsTrack.scrollBy({ left: -316, behavior: "smooth" });
  });

  projectsNext.addEventListener("click", function() {
    projectsTrack.scrollBy({ left: 316, behavior: "smooth" });
  });


  /* --- كاروسيل التعلم الذاتي --- */
  const slTrack = document.getElementById("sl-track");
  const slPrev  = document.getElementById("sl-prev");
  const slNext  = document.getElementById("sl-next");

  slPrev.addEventListener("click", function() {
    slTrack.scrollBy({ left: -296, behavior: "smooth" });
  });

  slNext.addEventListener("click", function() {
    slTrack.scrollBy({ left: 296, behavior: "smooth" });
  });
}


/* ================================================
   SECTION 7: نموذج التواصل
   ================================================
   عند إرسال النموذج، نظهر رسالة شكر (بدون backend)
================================================ */

function setupContactForm() {

  const form    = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  const textarea = document.getElementById("feedback-text");

  form.addEventListener("submit", function(event) {
    // event.preventDefault() يمنع الصفحة من إعادة التحميل عند الإرسال
    event.preventDefault();

    if (!textarea.value.trim()) return; // تجاهل النموذج الفارغ

    // إظهار رسالة النجاح
    success.style.display = "block";

    // مسح النص المكتوب
    textarea.value = "";

    // إخفاء الرسالة بعد 4 ثواني
    setTimeout(function() {
      success.style.display = "none";
    }, 4000);
  });
}


/* ================================================
   SECTION 8: الشريط المتحرك في الفوتر
   ================================================
   نملأه برموز ✦ و ✿ بالتناوب
   نكررهم 40 مرة ليبدو الشريط ممتلئاً
================================================ */

function fillMarquee() {

  const marquee = document.getElementById("marquee-content");

  // ننشئ 40 رمزاً بالتناوب
  for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");
    span.className = "marquee-symbol";
    // i % 2 === 0 يعني: إذا كان i زوجي، استخدم ✦، وإلا ✿
    span.textContent = (i % 2 === 0) ? "✦" : "✿";
    marquee.appendChild(span);
  }

  /*
    الشريط يتحرك بالـ CSS animation.
    لكن animation: translateX(-50%) يعني:
    لو الشريط طوله 1000px، يتحرك 500px.
    لكن نحتاج المحتوى أن يعود من البداية بشكل سلس.
    الحل: نضاعف المحتوى — نضيف نسخة ثانية من نفس الرموز.
  */
  const duplicate = marquee.innerHTML;
  marquee.innerHTML += duplicate;
}


/* ================================================
   SECTION 9: تشغيل كل شيء عند تحميل الصفحة
   ================================================
   DOMContentLoaded: يُطلق عندما يكتمل بناء HTML
   هذا يضمن أن كل العناصر موجودة قبل أن نتعامل معها
================================================ */

document.addEventListener("DOMContentLoaded", function() {

  fillCarousels();       // إضافة بطاقات المشاريع والتعلم
  setupCarouselArrows(); // تفعيل أزرار التمرير
  setupContactForm();    // تفعيل نموذج التواصل
  fillMarquee();         // ملء الشريط المتحرك

});
