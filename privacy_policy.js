(function () {
    const KEY = 'privacyConsent', VALUE = 'accepted';
    const wrap = document.getElementById('privacyConsent');
    const accept = document.getElementById('pcAccept');
    const later = document.getElementById('pcLater');

    function hasConsent() {
        try {
            const x = JSON.parse(localStorage.getItem(KEY) || 'null');
            return x && x.value === VALUE
        } catch (e) {
            return false
        }
    }

    function save() {
        try {
            localStorage.setItem(KEY, JSON.stringify({value: VALUE, at: new Date().toISOString()}));
        } catch (e) {
        }
    }

    function show() {
        wrap?.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function hide() {
        wrap?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (!hasConsent()) show();

    accept?.addEventListener('click', () => {
        save();
        hide();
    });
    later?.addEventListener('click', () => {
        hide();
    });
})();
