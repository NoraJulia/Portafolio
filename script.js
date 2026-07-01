document.addEventListener('DOMContentLoaded', () => {

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

  /* ---- EYE CANVAS ANIMATION ---- */
  const canvas = document.getElementById('eye-canvas');
  const ctx = canvas.getContext('2d');
  let eyes = [];
  let lastTime = 0;

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
      this.pupilTargetX = (Math.random() - 0.5) * 0.5;
      this.pupilTargetY = (Math.random() - 0.5) * 0.4;
      this.pupilTimer = Math.random() * 3;
      this.pupilChange = 2 + Math.random() * 3;
    }

    update(dt) {
      this.phase += dt * this.speed;
      if (this.phase > 1) this.phase -= 1;
      this.wobblePhase += dt * this.wobbleSpeed;

      this.pupilTimer += dt;
      if (this.pupilTimer > this.pupilChange) {
        this.pupilTimer = 0;
        this.pupilChange = 1.5 + Math.random() * 3;
        this.pupilTargetX = (Math.random() - 0.5) * 0.5;
        this.pupilTargetY = (Math.random() - 0.5) * 0.4;
      }
      this.pupilX += (this.pupilTargetX - this.pupilX) * dt * 4;
      this.pupilY += (this.pupilTargetY - this.pupilY) * dt * 4;
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
