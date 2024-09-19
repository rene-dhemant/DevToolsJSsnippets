let ret = [];
const canonical = document.querySelector('link[rel="canonical"]');
const hreflangs = document.querySelectorAll('link[rel="alternate"]');

// Check if canonical link is found
if (canonical) {
ret.push({ "Type": "Canonical", "URL": canonical.href, "Language": "N/A" });
}

// Check if hreflang links are found
if (hreflangs.length > 0) {
hreflangs.forEach(link => {
const lang = link.getAttribute('hreflang');
const url = link.getAttribute('href');
if (lang && url) {
ret.push({ "Type": "Hreflang", "URL": url, "Language": lang });
}
});
}

console.table(ret);