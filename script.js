document.addEventListener('DOMContentLoaded', () => {

  /* ---- TRANSLATION ---- */
  const translations = {
    'nav-inicio': { es: 'Inicio', en: 'Home' },
    'nav-sobre-mi': { es: 'Sobre mí', en: 'About me' },
    'nav-proyectos': { es: 'Proyectos', en: 'Projects' },
    'nav-links': { es: 'Links', en: 'Links' },
    'nav-habilidades': { es: 'Habilidades', en: 'Skills' },
    'nav-contacto': { es: 'Contacto', en: 'Contact' },
    'nav-cv': { es: 'CV', en: 'CV' },
    'hero-tagline': { es: 'Game Developer | JR 3D Character Artist | JR 3D Environment Artist', en: 'Game Developer | JR 3D Character Artist | JR 3D Environment Artist' },
    'hero-scroll-text': { es: 'Scroll', en: 'Scroll' },
    'hero-btn-proyectos': { es: 'Ver proyectos', en: 'View projects' },
    'hero-btn-links': { es: 'Ver mis links', en: 'View my links' },
    'about-title': { es: 'Sobre mí', en: 'About me' },
    'about-text': {
      es: 'Hago que las historias cobren vida diseñando mundos inmersivos como desarrollador de videojuegos y artista 3D. Actualmente enfoco mi carrera en el modelado 3D de personajes y entornos, dominando herramientas clave para la creación de escenarios envolventes y modelos listos para integrarse en el motor de juego. Me apasiona resolver los retos técnicos que conectan el arte con la programación, buscando siempre que la estética visual potencie la jugabilidad. Mi meta en cada proyecto es asegurar que cada asset visual esté lo mejor optimizado posible para el motor de juego, garantizando un rendimiento fluido y un acabado visual de alta calidad.',
      en: 'I bring stories to life by designing immersive worlds as a video game developer and 3D artist. I currently focus my career on 3D character and environment modeling, mastering key tools for creating engaging scenarios and models ready to integrate into the game engine. I am passionate about solving the technical challenges that connect art with programming, always ensuring that visual aesthetics enhance gameplay. My goal in every project is to make sure every visual asset is as optimized as possible for the game engine, guaranteeing smooth performance and high-quality visual results.'
    },
    'proyectos-title': { es: 'Proyectos', en: 'Projects' },
    'loader-transfer': { es: 'TRANSFIRIENDO DATOS...', en: 'TRANSFERRING DATA...' },
    'rol-heading': { es: 'Rol y responsabilidades', en: 'Role & responsibilities' },
    'proyecto-0-name': { es: 'THE DREAM STALKER', en: 'THE DREAM STALKER' },
    'proyecto-0-desc': { es: 'Es un tenso juego de terror ambientado dentro del sueño fracturado de un niño. Juegas como un guardián encargado de dividir un retorcido híbrido de Pesadilla y Sueño. Acechado por Mothroach — una grotesca mezcla de tus peores fobias a los insectos y el engañoso pelaje de una polilla bebé — debes buscar pilas para la linterna, mantener a la criatura a raya y desentrañar las dos partes opuestas del monstruo. Purifica ambas mitades para sanar el sueño y salvar al niño dormido antes de que la pesadilla lo devore por completo.', en: 'A tense horror game set inside a child\'s fractured dream. You play as a guardian tasked with splitting a twisted hybrid of Nightmare and Dream. Stalked by Mothroach — a grotesque blend of your worst insect phobias and the deceptive fluff of a baby moth — you must scavenge for flashlight batteries, keep the creature at bay, and unravel the monster\'s two opposing fragments. Purify both halves to heal the dream and save the sleeping child before the nightmare swallows them whole.' },
    'proyecto-0-rol-1': { es: 'Programación del Juego', en: 'Game Programming' },
    'proyecto-0-rol-1-li-1': { es: 'Programé el comportamiento del enemigo y sus estados', en: 'I programmed the enemy behavior and its states' },
    'proyecto-0-rol-1-li-2': { es: 'Ayudé con la corrección de errores en la programación del player', en: 'Helped fix bugs in the player programming' },
    'proyecto-0-rol-2': { es: 'Diseño del videojuego', en: 'Game Design' },
    'proyecto-0-rol-2-li-1': { es: 'Ayudé a crear la idea del juego', en: 'Helped conceive the game idea' },
    'proyecto-0-rol-2-li-2': { es: 'Ayudé a pensar el funcionamiento del enemigo', en: 'Helped think through the enemy\'s behavior' },
    'proyecto-0-participacion': { es: 'Este fue el proyecto que presenté para la Game Jam interna de Generation, creado junto a otros 3 compañeros. Me encargué de programar el comportamiento del enemigo y sus estados; fue un reto para mí ya que no he tenido muchas oportunidades de programar máquinas de estados. Aunque actualmente me quiero desarrollar más en el área del arte, decidí asumir este desafío por gusto propio.', en: 'This was the project I presented for Generation\'s internal Game Jam, created with 3 other teammates. I was in charge of programming the enemy behavior and its states; it was a challenge for me since I haven\'t had many opportunities to program state machines. Although I currently want to develop more in the art area, I decided to take on this challenge by choice.' },
    'proyecto-1-desc': { es: 'En este juego te embarcas a proteger el bosque mágico que está siendo atacado por criaturas de la oscuridad que desean apagar todo el brillo de este hermoso bosque.', en: 'In this game you embark on a quest to protect the magical forest being attacked by creatures of darkness who seek to extinguish all the light of this beautiful woodland.' },
    'proyecto-1-rol-1': { es: 'Programación del Juego', en: 'Game Programming' },
    'proyecto-1-rol-1-li-1': { es: 'Programé el boss final y su sistema de combate', en: 'Programmed the final boss and its combat system' },
    'proyecto-1-rol-1-li-2': { es: 'Participé en la mecánica de los enemigos y su programación', en: 'Worked on enemy mechanics and programming' },
    'proyecto-1-rol-1-li-3': { es: 'Programé el puzzle del juego', en: 'Programmed the game puzzle' },
    'proyecto-1-rol-2': { es: 'Diseño de nivel', en: 'Level Design' },
    'proyecto-1-rol-2-li-1': { es: 'Diseñé y agregué una parte del bosque mágico', en: 'Designed and built a section of the magical forest' },
    'proyecto-1-rol-2-li-2': { es: 'Diseñé el puzzle y lo implementé', en: 'Designed and implemented the puzzle' },
    'proyecto-1-rol-3': { es: 'Arte 3D', en: '3D Art' },
    'proyecto-1-rol-3-li-1': { es: 'Modelé las plataformas', en: 'Modeled the platforms' },
    'proyecto-1-rol-3-li-2': { es: 'Modelé las piedras de los puzzles', en: 'Modeled the puzzle stones' },
    'proyecto-1-rol-3-li-3': { es: 'Creé las partículas de los enemigos e implementé todo al motor', en: 'Created enemy particles and implemented everything in the engine' },
    'proyecto-1-participacion': { es: 'Este fue el proyecto final que presenté para la carrera de desarrollo de videojuegos y entornos interactivos, creado con otros dos compañeros. Participé en la creación de varios modelos 3D como las plataformas flotantes y las rocas de los puzzles, entre otros. También creé partículas como las de los enemigos y el boss al recibir daño, e implementé estos assets y partículas en el motor buscando siempre el rendimiento del juego. Participé en el desarrollo del mapa y su sistema de parkour. Otra parte importante en la que trabajé fue en la implementación del jefe final con sus mecánicas y estados de combate, arreglé algunos errores que tenían los enemigos y su máquina de estados, y programé el puzzle antes del jefe final.', en: 'This was the final project I presented for the video game development and interactive environments degree, created with two other teammates. I participated in creating several 3D models such as floating platforms and puzzle rocks, among others. I also created particles for enemies and the boss when taking damage, and implemented these assets and particles in the engine always aiming for game performance. I worked on the map development and its parkour system. Another important part I worked on was implementing the final boss with its mechanics and combat states, fixing some bugs in the enemies and their state machine, and programming the puzzle before the final boss.' },
    'proyecto-2-desc': { es: 'En este juego lleno de color debes adentrarte junto a un compañero en un mundo de plataformas, donde la comunicación es clave para resolver puzzles y superar niveles con un giro que añade dificultad a cada desafío.', en: 'In this colorful game you venture alongside a partner into a platforming world, where communication is key to solving puzzles and clearing levels — with a twist that adds challenge at every turn.' },
    'proyecto-2-rol-1': { es: 'Arte 3D', en: '3D Art' },
    'proyecto-2-rol-1-li-1': { es: 'Creé assets y entornos tridimensionales para el juego', en: 'Created 3D assets and environments for the game' },
    'proyecto-2-rol-1-li-2': { es: 'Modelé y texturicé personajes y escenarios', en: 'Modeled and textured characters and scenarios' },
    'proyecto-2-rol-1-li-3': { es: 'Optimicé los modelos 3D para mejorar el rendimiento en el motor', en: 'Optimized 3D models for better engine performance' },
    'proyecto-2-participacion': { es: 'Este proyecto fue creado para la Global Game Jam. Me encargué de todo el arte 3D, desde la creación de assets hasta la optimización de los modelos para el motor. También trabajé en la creación del entorno y el nivel.', en: 'This project was created for the Global Game Jam. I was in charge of all the 3D art, from asset creation to model optimization for the engine. I also worked on creating the environment and the level.' },
    'proyecto-3-desc': { es: 'En este juego eres un borrachito que estuvo bebiendo toda la noche y ahora debe encontrar el camino al trabajo. Debes estar atento, porque nada es lo que parece y podrías llegar al lugar equivocado.', en: 'In this game you are a little drunk who has been drinking all night and now must find the way to work. Stay alert, because nothing is as it seems and you might end up in the wrong place.' },
    'proyecto-3-rol-2': { es: 'Level Design', en: 'Level Design' },
    'proyecto-3-rol-2-li-1': { es: 'Diseñé escenarios urbanos con rutas engañosas y puntos de referencia cambiantes', en: 'Designed urban scenarios with deceptive routes and shifting landmarks' },
    'proyecto-3-rol-2-li-2': { es: 'Implementé puntos de control y elementos interactivos en el entorno', en: 'Implemented checkpoints and interactive elements in the environment' },
    'proyecto-3-rol-3': { es: '3D Art', en: '3D Art' },
    'proyecto-3-rol-3-li-1': { es: 'Modelé entornos urbanos y escenas para el juego', en: 'Modeled urban environments and scenes for the game' },
    'proyecto-3-rol-3-li-2': { es: 'Texturicé los assets y optimicé los modelos para el motor', en: 'Textured the assets and optimized models for the engine' },
    'proyecto-3-participacion': { es: 'Este proyecto fue creado para la Woman Game Jam. Participé en el modelado 3D de los entornos urbanos y en el diseño de nivel. Me centré en crear un entorno que hiciera perder al jugador pero que a la vez fuera llamativo. Trabajé estrechamente con el área de diseño 2D y animación 2D para poder llegar al producto final y al estilo que deseábamos.', en: 'This project was created for the Woman Game Jam. I participated in 3D modeling of urban environments and in level design. I focused on creating an environment that would disorient the player while still being visually striking. I worked closely with the 2D design and 2D animation team to achieve the final product and the style we wanted.' },
    'thumbnail': { es: 'Thumbnail', en: 'Thumbnail' },
    'links-title': { es: 'Links', en: 'Links' },
    'links-itch-desc': { es: 'Juegos publicados', en: 'Published games' },
    'links-github-desc': { es: 'Código y proyectos', en: 'Code & projects' },
    'links-artstation-desc': { es: 'Portafolio 3D', en: '3D Portfolio' },
    'links-linkedin-desc': { es: 'Perfil profesional', en: 'Professional profile' },
    'contacto-title': { es: 'Contacto', en: 'Contact' },
    'contacto-text': { es: '¿Tienes un proyecto en mente? Hablemos.', en: 'Have a project in mind? Let\'s talk.' },
    'habilidades-title': { es: 'Habilidades y Programas', en: 'Skills & Software' },
    'skill-motores': { es: 'Motores', en: 'Engines' },
    'skill-programacion': { es: 'Lenguajes de Programación', en: 'Programming Languages' },
    'skill-modelado': { es: 'Modelado 3D', en: '3D Modeling' },
    'skill-diseno': { es: 'Diseño', en: 'Design' },
    'skill-control-versiones': { es: 'Control de Versiones', en: 'Version Control' },
    'skill-otros': { es: 'Otros', en: 'Other' },
    'cv-title': { es: 'Currículum', en: 'Resume' },
    'cv-text': { es: 'Descarga mi currículum para conocer más sobre mi experiencia y formación.', en: 'Download my resume to learn more about my experience and education.' },
    'participacion-heading': { es: 'Mi participación', en: 'My role' },
    'cv-btn': { es: 'Descargar CV', en: 'Download CV' },
    'footer': { es: '&copy; 2026 Julián David González Quiroga — NoraJulia', en: '&copy; 2026 Julián David González Quiroga — NoraJulia' },
  };

  let currentLang = localStorage.getItem('lang') || 'es';

  function applyTranslation() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[key] && translations[key][currentLang]) {
        el.innerHTML = translations[key][currentLang];
      }
    });
    document.documentElement.lang = currentLang === 'es' ? 'es' : 'en';
    langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
    localStorage.setItem('lang', currentLang);
  }

  const langBtn = document.getElementById('lang-btn');
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyTranslation();
  });

  applyTranslation();

  /* ---- GALLERY (shared state for image/video navigation) ---- */
  let galleryItems = [];
  let galleryIndex = -1;

  function buildGallery() {
    const panel = document.querySelector('.proyecto-panel.active');
    if (!panel) return [];
    const items = [];
    panel.querySelectorAll('.media-item').forEach(el => {
      const img = el.querySelector('.media-img');
      if (!img) return;
      const isVideo = el.classList.contains('media-video');
      const entry = { type: isVideo ? 'video' : 'image', src: img.src, alt: img.alt, videoId: null };
      if (isVideo) {
        const btn = el.querySelector('.media-play-btn');
        if (btn) {
          const m = btn.getAttribute('onclick').match(/openVideo\('([^']+)'\)/);
          if (m) entry.videoId = m[1];
        }
      }
      items.push(entry);
    });
    return items;
  }

  function showGalleryItem(index) {
    const item = galleryItems[index];
    if (!item) return;
    galleryIndex = index;

    if (item.type === 'image') {
      document.getElementById('video-modal').classList.remove('open');
      document.getElementById('video-iframe').src = '';
      const img = document.getElementById('img-modal-img');
      img.src = item.src;
      img.alt = item.alt;
      document.getElementById('img-modal').classList.add('open');
    } else {
      document.getElementById('img-modal').classList.remove('open');
      document.getElementById('img-modal-img').src = '';
      const iframe = document.getElementById('video-iframe');
      iframe.src = `https://www.youtube.com/embed/${item.videoId}?autoplay=1`;
      document.getElementById('video-modal').classList.add('open');
    }
    document.body.style.overflow = 'hidden';
  }

  window.navMedia = function (dir) {
    if (galleryItems.length === 0) return;
    const newIndex = (galleryIndex + dir + galleryItems.length) % galleryItems.length;
    showGalleryItem(newIndex);
  };

  /* ---- VIDEO MODAL ---- */
  window.openVideo = function (id) {
    galleryItems = buildGallery();
    galleryIndex = galleryItems.findIndex(i => i.type === 'video' && i.videoId === id);
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeVideo = function () {
    document.getElementById('video-modal').classList.remove('open');
    document.getElementById('video-iframe').src = '';
    document.body.style.overflow = '';
  };

  /* ---- IMAGE MODAL ---- */
  window.openImg = function (src, alt) {
    galleryItems = buildGallery();
    galleryIndex = galleryItems.findIndex(i => i.type === 'image' && i.src === src);
    const modal = document.getElementById('img-modal');
    const img = document.getElementById('img-modal-img');
    img.src = src;
    img.alt = alt || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeImg = function () {
    document.getElementById('img-modal').classList.remove('open');
    document.getElementById('img-modal-img').src = '';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.media-image').forEach(el => {
    el.addEventListener('click', () => {
      const img = el.querySelector('.media-img');
      if (img) {
        const items = buildGallery();
        const idx = items.findIndex(i => i.type === 'image' && i.src === img.src);
        if (idx !== -1) {
          galleryItems = items;
          showGalleryItem(idx);
        }
      }
    });
  });

  document.addEventListener('keydown', e => {
    const imgOpen = document.getElementById('img-modal').classList.contains('open');
    const vidOpen = document.getElementById('video-modal').classList.contains('open');
    if (!imgOpen && !vidOpen) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); navMedia(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); navMedia(1); }
    else if (e.key === 'Escape') {
      if (imgOpen) closeImg();
      if (vidOpen) closeVideo();
    }
  });

  /* ---- MEDIA GRID SCROLL ---- */
  function setupMediaScroll() {
    document.querySelectorAll('.media-grid').forEach(grid => {
      const parent = grid.closest('.proyecto-media');
      if (!parent) return;

      const leftBtn = document.createElement('button');
      leftBtn.className = 'media-scroll-btn media-scroll-left';
      leftBtn.innerHTML = '‹';
      leftBtn.setAttribute('aria-label', 'Scroll left');

      const rightBtn = document.createElement('button');
      rightBtn.className = 'media-scroll-btn media-scroll-right';
      rightBtn.innerHTML = '›';
      rightBtn.setAttribute('aria-label', 'Scroll right');

      parent.appendChild(leftBtn);
      parent.appendChild(rightBtn);

      function update() {
        const manyItems = grid.children.length > 4;
        const atStart = grid.scrollLeft <= 2;
        const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 2;
        leftBtn.classList.toggle('visible', manyItems && !atStart);
        rightBtn.classList.toggle('visible', manyItems && !atEnd);
      }

      leftBtn.addEventListener('click', () => grid.scrollBy({ left: -grid.clientWidth * 0.75, behavior: 'smooth' }));
      rightBtn.addEventListener('click', () => grid.scrollBy({ left: grid.clientWidth * 0.75, behavior: 'smooth' }));
      grid.addEventListener('scroll', update);
      window.addEventListener('resize', update);
      new ResizeObserver(() => update()).observe(grid);
      update();
    });
  }
  setupMediaScroll();

  /* ---- MOBILE NAV TOGGLE ---- */
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });

  /* ---- SCROLL REVEAL ---- */
  const revealElements = document.querySelectorAll('.section');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  /* ---- SCROLL TO TOP ---- */
  const scrollBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- SMOOTH SCROLL ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---- PROYECTO TABS ---- */
  const tabs = document.querySelectorAll('.proyecto-tab');
  const panels = document.querySelectorAll('.proyecto-panel');
  const loadingBar = document.getElementById('proyecto-loading-bar');
  const plbLogo = document.getElementById('plb-logo');

  const panelTexts = new Map();
  panels.forEach(panel => {
    const walker = document.createTreeWalker(panel, NodeFilter.SHOW_TEXT, null, false);
    const texts = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const t = node.textContent;
      if (t.trim().length > 0) {
        texts.push({ node, original: t });
      }
    }
    panelTexts.set(panel, texts);
  });

  let switching = false;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (switching) return;
      const idx = tab.dataset.tab;
      const activePanel = document.querySelector('.proyecto-panel.active');
      if (!activePanel || activePanel.dataset.panel === idx) return;

      switching = true;

      const tabLogo = tab.querySelector('.proyecto-tab-logo img');
      if (tabLogo) {
        plbLogo.src = tabLogo.src;
        plbLogo.alt = tabLogo.alt;
      }

      loadingBar.classList.add('active');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      panels.forEach(p => p.classList.remove('active'));
      const newPanel = document.querySelector(`.proyecto-panel[data-panel="${idx}"]`);
      newPanel.classList.add('active');

      const texts = panelTexts.get(newPanel);
      const totalChars = texts.reduce((sum, t) => sum + t.original.length, 0);

      texts.forEach(t => { t.node.textContent = ''; });

      let written = 0;
      const start = performance.now();
      const DURATION = 1200;

      function frame() {
        const elapsed = performance.now() - start;
        const progress = Math.min(elapsed / DURATION, 1);
        const target = Math.floor(progress * totalChars);

        let n = 0;
        for (const t of texts) {
          const avail = Math.max(0, Math.min(t.original.length, target - n));
          t.node.textContent = avail > 0 ? t.original.slice(0, avail) : '';
          n += t.original.length;
          if (n >= target) break;
        }
        written = target;

        if (written < totalChars) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);

      setTimeout(() => {
        loadingBar.classList.remove('active');
        switching = false;
      }, 900);
    });
  });

  /* ---- EYE CANVAS ANIMATION ---- */
  const canvas = document.getElementById('eye-canvas');
  const ctx = canvas.getContext('2d');
  let eyes = [];
  let lastTime = 0;
  let mouseX = 0.5;
  let mouseY = 0.5;

  document.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width;
    mouseY = (e.clientY - rect.top) / rect.height;
  });

  class Eye {
    constructor(x, y, size, phase) {
      this.baseX = x;
      this.baseY = y;
      this.baseSize = size;
      this.phase = phase;
      this.speed = 0.2 + Math.random() * 0.4;
      this.rotation = (Math.random() - 0.5) * 0.8;
      this.wobblePhase = Math.random() * Math.PI * 2;
      this.wobbleSpeed = 0.6 + Math.random() * 1.4;
      this.pupilX = 0;
      this.pupilY = 0;
      this.pupilTargetX = 0;
      this.pupilTargetY = 0;
    }

    update(dt) {
      this.phase += dt * this.speed;
      if (this.phase > 1) this.phase -= 1;
      this.wobblePhase += dt * this.wobbleSpeed;

      const dx = mouseX - this.baseX / canvas.width;
      const dy = mouseY - this.baseY / canvas.height;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 0.01) {
        this.pupilTargetX = (dx / dist) * Math.min(dist * 2, 0.4);
        this.pupilTargetY = (dy / dist) * Math.min(dist * 2, 0.3);
      } else {
        this.pupilTargetX = 0;
        this.pupilTargetY = 0;
      }
      this.pupilX += (this.pupilTargetX - this.pupilX) * dt * 6;
      this.pupilY += (this.pupilTargetY - this.pupilY) * dt * 6;
    }

    getOpenAmount() {
      const blinkStart = 0.78;
      const blinkDuration = 0.22;
      if (this.phase < blinkStart) return 1;
      const t = (this.phase - blinkStart) / blinkDuration;
      if (t < 0.4) return 1 - t / 0.4;
      if (t < 0.55) return 0;
      if (t < 0.85) return (t - 0.55) / 0.3;
      return 1;
    }

    draw(ctx) {
      const open = this.getOpenAmount();

      const wobX = Math.sin(this.wobblePhase) * 2.5;
      const wobY = Math.cos(this.wobblePhase * 0.7) * 2;
      const wobScl = 1 + Math.sin(this.wobblePhase * 1.3) * 0.03;

      const x = this.baseX + wobX;
      const y = this.baseY + wobY;
      const size = this.baseSize * wobScl;
      const halfW = size;
      const halfH = size * 0.5;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(this.rotation);

      ctx.beginPath();
      ctx.ellipse(0, 0, halfW, halfH, 0, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.fillRect(-halfW, -halfH, halfW * 2, halfH * 2);

      if (open > 0.15) {
        const pupilR = halfW * 0.28;
        const pOffX = halfW * this.pupilX;
        const pOffY = halfH * this.pupilY * open;
        ctx.beginPath();
        ctx.arc(pOffX, pOffY, pupilR, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      }

      const visHalfH = halfH * open;
      const topLidBottom = -visHalfH;
      const bottomLidTop = visHalfH;

      ctx.fillStyle = '#0a0a0a';

      if (topLidBottom > -halfH) {
        ctx.fillRect(-halfW, -halfH, halfW * 2, topLidBottom + halfH);
      }

      if (bottomLidTop < halfH) {
        ctx.fillRect(-halfW, bottomLidTop, halfW * 2, halfH - bottomLidTop);
      }

      ctx.restore();

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(this.rotation);

      const lineOff = Math.sin(this.wobblePhase * 2) * 0.4;
      ctx.beginPath();
      ctx.ellipse(lineOff, 0, halfW, halfH, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
    }
  }

  /* ---- SPACE PARTICLES ---- */
  class Particle {
    constructor(w, h) {
      this.reset(w, h, true);
    }

    reset(w, h, init) {
      this.x = Math.random() * w;
      this.y = init ? Math.random() * h : h + 10;
      this.size = 0.5 + Math.random() * 2.5;
      this.speedX = (Math.random() - 0.5) * 0.15;
      this.speedY = -(0.1 + Math.random() * 0.4);
      this.alpha = 0.15 + Math.random() * 0.5;
      this.twinkleSpeed = 0.5 + Math.random() * 2;
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.hue = 160 + Math.random() * 100;
      this.hueSpeed = (Math.random() - 0.5) * 30;
      this.saturation = 40 + Math.random() * 40;
      this.lightness = 40 + Math.random() * 30;
    }

    update(dt) {
      this.x += this.speedX;
      this.y += this.speedY;
      this.twinklePhase += dt * this.twinkleSpeed;
      this.hue += dt * this.hueSpeed;
      if (this.hue > 280) this.hue = 160;
      if (this.hue < 140) this.hue = 260;
      if (this.y < -10) this.reset(canvas.width, canvas.height, false);
    }

    draw(ctx) {
      const twinkle = 0.5 + 0.5 * Math.sin(this.twinklePhase);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha * twinkle})`;
      ctx.fill();
    }
  }

  let particles = [];

  function createParticles(w, h) {
    const count = Math.min(120, Math.floor((w * h) / 6000));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(w, h));
    }
  }

  function createEyes(w, h) {
    const list = [];
    const positions = [
      { x: 0.12, y: 0.15, s: 38 },
      { x: 0.50, y: 0.10, s: 50 },
      { x: 0.88, y: 0.15, s: 34 },
      { x: 0.08, y: 0.40, s: 45 },
      { x: 0.25, y: 0.65, s: 28 },
      { x: 0.72, y: 0.60, s: 42 },
      { x: 0.92, y: 0.50, s: 32 },
      { x: 0.18, y: 0.82, s: 36 },
      { x: 0.50, y: 0.45, s: 55 },
      { x: 0.78, y: 0.82, s: 38 },
      { x: 0.50, y: 0.78, s: 26 },
      { x: 0.96, y: 0.32, s: 30 },
    ];
    positions.forEach(p => {
      list.push(new Eye(w * p.x, h * p.y, p.s, Math.random()));
    });
    return list;
  }

  function resizeCanvas() {
    const hero = document.querySelector('.hero');
    const w = hero.offsetWidth;
    const h = hero.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    eyes = createEyes(w, h);
    createParticles(w, h);
  }

  function animate(time) {
    const dt = lastTime ? (time - lastTime) / 1000 : 0.016;
    lastTime = time;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.update(dt);
      p.draw(ctx);
    }

    for (const eye of eyes) {
      eye.update(dt);
      eye.draw(ctx);
    }

    requestAnimationFrame(animate);
  }

  resizeCanvas();
  requestAnimationFrame(animate);

  window.addEventListener('resize', resizeCanvas);
});
