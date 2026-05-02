function initNavbar() {

  var layananLi  = document.getElementById('bnLayanan');
  if (!layananLi) return;

  var layananBtn = layananLi.querySelector('button');
  var megaMenu   = layananLi.querySelector('.bn-mega');

  // Toggle mega menu
  layananBtn.addEventListener('click', function (e) {
    e.stopPropagation();

    var isOpen = layananLi.classList.contains('open');

    document.querySelectorAll('.bn-links > li.open').forEach(function (li) {
      li.classList.remove('open');
    });

    if (!isOpen) {
      layananLi.classList.add('open');
    }
  });

  // Klik dalam ga nutup
  megaMenu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Klik luar nutup
  document.addEventListener('click', function (e) {
    if (!layananLi.contains(e.target)) {
      layananLi.classList.remove('open');
    }
  });

  // Hamburger
  var hamburger = document.getElementById('bnHamburger');
  var drawer    = document.getElementById('bnDrawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      var opened = drawer.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', opened);
      document.body.style.overflow = opened ? 'hidden' : '';
    });
  }

  // Mobile accordion
  var mobBtn   = document.getElementById('bnMobLayanan');
  var mobPanel = document.getElementById('bnMobLayananPanel');

  if (mobBtn && mobPanel) {
    mobBtn.addEventListener('click', function () {
      var opened = mobPanel.classList.toggle('is-open');
      mobBtn.classList.toggle('is-open', opened);
    });
  }

}