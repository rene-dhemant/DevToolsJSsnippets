let ret = [];

let getXPath = (element) => {
if (element.id !== '') {
return 'id("' + element.id + '")';
}
if (element === document.body) {
return element.tagName.toLowerCase();
}
var siblings = Array.from(element.parentNode.childNodes).filter(n => n.nodeType === 1 && n.tagName === element.tagName);
var position = siblings.length > 1 ? '[' + (siblings.indexOf(element) + 1) + ']' : '';
return getXPath(element.parentNode) + '/' + element.tagName.toLowerCase() + position;
};

let getCSSPath = (element) => {
let segments = [];
for (; element && element.nodeType === 1; element = element.parentNode) {
if (element.id) {
segments.unshift('#' + element.id);
break;
} else {
let position = Array.from(element.parentNode.children).indexOf(element) + 1;
position = position > 1 ? ':nth-child(' + position + ')' : '';
segments.unshift(element.tagName.toLowerCase() + position);
}
}
return segments.join(' > ');
};

document.querySelectorAll('a:not([href])').forEach(function(item) {
ret.push({
"URL": item.href,
"Anchor Text": item.innerText,
"XPath": getXPath(item),
"CSSSelector": getCSSPath(item) // Changed "CSS Path" to "CSSSelector"
});
});

console.table(ret);