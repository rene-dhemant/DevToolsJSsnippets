const rels = [
  "preload",
  "prefetch",
  "preconnect",
  "dns-prefetch",
  "preconnect dns-prefetch",
  "prerender",
  "modulepreload",
];

rels.forEach((element) => {
  const linkElements = document.querySelectorAll(`link[rel="${element}"]`);
  const dot = linkElements.length > 0 ? "🟩" : "🟥";
  console.log(`${dot} ${element}`);
  linkElements.forEach((el) => console.log(el));
});