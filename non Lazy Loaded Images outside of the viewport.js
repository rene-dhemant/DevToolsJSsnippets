/* List all images that don't have loading="lazy" or [data-src] (lazy loading via JS) and are 
not in the viewport when the page loads. This script will help you find candidates for lazy loading. */


// Execute it after the page has loaded without any user interaction (Scroll, click, etc)
function isInViewport(tag) {
  let rect = tag.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
 
function findImgCanidatesForLazyLoading() {
  let notLazyImages = document.querySelectorAll(
    'img:not([data-src]):not([loading="lazy"])'
  );
  const notLazyImagesOutOfViewport = Array.from(notLazyImages).filter((tag) => !isInViewport(tag));
 
  if( notLazyImagesOutOfViewport.length === 0 ) {
    console.log(
      `%c Good job, the site has al the images out of the viewport with lazyloading.`,
      "background: #222; color: lightgreen; padding: 0.5ch",
    );
  } else {
    console.log(
      `%c Consider lazyloading the following images`,
      "background: #222; color: lightcoral; padding: 0.5ch; margin-top: 1em",
    );
    notLazyImagesOutOfViewport.forEach((img) => console.log(img));
  }
  
}
 
findImgCanidatesForLazyLoading();