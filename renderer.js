// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
function addMatchMediaChangeListener(query, callback) {
	if (typeof query === 'string') {
		query = window.matchMedia(query);
	}
	query.addEventListener('change', callback);
}

function showState() {
    console.log(`isDark ${isDark()}, isHighContrast ${isHighContrast()}`);
}

addMatchMediaChangeListener('(prefers-color-scheme: dark)', () => {
    showState();
});
addMatchMediaChangeListener('(forced-colors: active)', () => {
    showState();
});

function isDark() {
    if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
        return false;
    } else if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
        return true;
    }
    return false;
}

function isHighContrast() {
    if (window.matchMedia(`(forced-colors: active)`).matches) {
        return true;
    }
    return false;
}

showState();