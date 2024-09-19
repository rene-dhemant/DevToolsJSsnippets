let ret = [];
const renderedCanonical = document.querySelector('link[rel="canonical"]');

// Check if rendered canonical link is found
if (renderedCanonical) {
    ret.push({ "Type": "Rendered Canonical", "URL": renderedCanonical.href });
}

// Fetch the source HTML and get its canonical
fetch(window.location.href)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const sourceCanonical = doc.querySelector('link[rel="canonical"]');
        if (sourceCanonical) {
            ret.push({ "Type": "Source Canonical", "URL": sourceCanonical.href });
        }

        console.table(ret);
    })
    .catch(err => {
        console.error("Error fetching original source:", err);
    });