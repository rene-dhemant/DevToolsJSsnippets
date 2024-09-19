var AllImgs = [... document.getElementsByTagName('img') ]; 
var hiddenImgs = [];
AllImgs.map(e => {
    if ( 
        (e.clientHeight === 0 && e.currentSrc !== "") &&
        (e.getAttribute("loading") !== "lazy") && 
        !(typeof window.lazySizes === "object" && e.classList.contains("lazyload"))
    ) {
        hiddenImgs.push(e);
    }    
})

console.log(hiddenImgs);