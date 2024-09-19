let ret = [];

// Function to find  URLs
function findImgSrc() {
document.querySelectorAll('img[src]').forEach(function(item) {
if (item.src.includes('/')) {
checkImageStatus(item.src).then(status => {
ret.push({ "Type": "Image", "URL": item.src, "Alt Text": item.alt, "Status": status });
});
}
});
}

// Function to check the status of an image URL
async function checkImageStatus(url) {
try {
const response = await fetch(url, {
method: 'HEAD', // Only get headers to make it faster
});
return response.status;
} catch (error) {
return 'Error';
}
}

// Run the function to find image sources
findImgSrc();

// Wait some time and then output the results
// Note: In a real-world application, you'd wait for all promises to resolve.
// This is just for demonstration.
setTimeout(() => {
console.table(ret);
}, 3000);