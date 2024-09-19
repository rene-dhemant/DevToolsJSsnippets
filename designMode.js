// Disable anchor links
window.addEventListener('click', event => event.preventDefault(), false)
// Disable click eventlisteners
window.addEventListener("click", event => event.stopPropagation(), true)
// Enable design mode
document.designMode = "on"