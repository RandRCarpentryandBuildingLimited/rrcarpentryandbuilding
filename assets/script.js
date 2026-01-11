(function () {
  // Mobile nav
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.mobile-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Highlight active link
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });

  // "Email form" without backend: creates a mailto: link and opens user's email client.
  const form = document.querySelector('form[data-mailto]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const to = form.getAttribute('data-mailto');
      const name = form.querySelector('[name="name"]')?.value?.trim() || '';
      const phone = form.querySelector('[name="phone"]')?.value?.trim() || '';
      const message = form.querySelector('[name="message"]')?.value?.trim() || '';
      const subject = `Website enquiry - R&R Carpentry and Building`;
      const bodyLines = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        ``,
        `Message:`,
        message
      ];
      const body = bodyLines.join('\n');
      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
  
// ✅ Homepage showcase (only runs if the image exists)
  const showcaseImg = document.getElementById("showcaseImage");
  if (!showcaseImg) return;

  const images = [
    "assets/showcase/showcase-01.jpg",
    "assets/showcase/showcase-02.jpg",
    "assets/showcase/showcase-03.jpg",
    "assets/showcase/showcase-04.jpg",
    "assets/showcase/showcase-05.jpg",
    "assets/showcase/showcase-06.jpg",
    "assets/showcase/showcase-07.jpg",
    "assets/showcase/showcase-08.jpg",
    "assets/showcase/showcase-09.jpg",
    "assets/showcase/showcase-10.jpg",
  ];

  let i = 0;

  setInterval(() => {
    showcaseImg.style.opacity = 0;

    setTimeout(() => {
      i = (i + 1) % images.length;
      showcaseImg.src = images[i];
      showcaseImg.style.opacity = 1;
    }, 350);
  }, 4000);
})();
