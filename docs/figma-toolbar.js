// Figma Send — adds a "Send to Figma" button in the global nav bar
(function() {
  var FIGMA_FILE_KEY = 'IE52Pd1nEcinhqOlSy4efj';
  var CAPTURE_ENDPOINT = 'https://mcp.figma.com/mcp/html-to-design/capture.js';

  // Find the nav and inject the button on the right side
  var nav = document.querySelector('.ds-nav');
  if (!nav) return;

  var wrap = document.createElement('div');
  wrap.className = 'ds-nav-right';
  wrap.innerHTML = [
    '<span id="figma-status" class="figma-status"></span>',
    '<button id="figma-send-btn" class="figma-send-btn">',
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;">',
        '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E"/>',
        '<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262"/>',
        '<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1ABCFE"/>',
        '<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0ACF83"/>',
        '<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#A259FF"/>',
      '</svg>',
      'Send to Figma',
    '</button>'
  ].join('');
  nav.appendChild(wrap);

  function ensureCaptureScript(cb) {
    if (window.__figmaCaptureLoaded) return cb();
    var existing = document.querySelector('script[src*="html-to-design/capture.js"]');
    if (existing) { window.__figmaCaptureLoaded = true; return cb(); }
    var s = document.createElement('script');
    s.src = CAPTURE_ENDPOINT;
    s.onload = function() { window.__figmaCaptureLoaded = true; cb(); };
    s.onerror = function() { setStatus('Failed to load capture script', 'error'); };
    document.head.appendChild(s);
  }

  function setStatus(msg, type) {
    var el = document.getElementById('figma-status');
    el.textContent = msg;
    el.className = 'figma-status' + (type ? ' figma-status--' + type : '');
  }

  function setBtn(text, disabled) {
    var btn = document.getElementById('figma-send-btn');
    btn.lastChild.textContent = text;
    btn.disabled = disabled;
    btn.style.opacity = disabled ? '0.6' : '1';
    btn.style.cursor = disabled ? 'default' : 'pointer';
  }

  document.getElementById('figma-send-btn').addEventListener('click', function() {
    setBtn('Capturing...', true);
    setStatus('Loading...', 'pending');

    ensureCaptureScript(function() {
      setStatus('Capturing page...', 'pending');

      setTimeout(function() {
        if (typeof window.figma === 'undefined' || typeof window.figma.captureForDesign !== 'function') {
          setStatus('Opening capture flow...', 'pending');
          var captureId = crypto.randomUUID();
          var endpoint = 'https://mcp.figma.com/mcp/capture/' + captureId + '/submit';
          window.location.hash = '#figmacapture=' + captureId +
            '&figmaendpoint=' + encodeURIComponent(endpoint) +
            '&figmadelay=2000';
          window.location.reload();
          return;
        }

        var captureId = crypto.randomUUID();
        var endpoint = 'https://mcp.figma.com/mcp/capture/' + captureId + '/submit';

        window.figma.captureForDesign({
          captureId: captureId,
          endpoint: endpoint,
          selector: 'body'
        }).then(function() {
          setStatus('', '');
          setBtn('Send to Figma', false);
          var el = document.getElementById('figma-status');
          el.innerHTML = '<a href="https://www.figma.com/design/' + FIGMA_FILE_KEY +
            '" target="_blank" class="figma-status figma-status--success">Sent! Open in Figma &rarr;</a>';
          setTimeout(function() { setStatus(''); setBtn('Send to Figma', false); }, 15000);
        }).catch(function(err) {
          setStatus('Failed: ' + (err.message || err), 'error');
          setBtn('Send to Figma', false);
        });
      }, 1000);
    });
  });
})();
