(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  btn.addEventListener('click', function () {
    var cur = root.getAttribute('data-theme');
    if (!cur) cur = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
  });
  document.querySelectorAll('.copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      var done = function () { var o = b.textContent; b.textContent = 'Copied'; setTimeout(function () { b.textContent = o; }, 1400); };
      var fallback = function () {
        var s = b.previousElementSibling, r = document.createRange();
        r.selectNodeContents(s); var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      };
      try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
    });
  });
})();