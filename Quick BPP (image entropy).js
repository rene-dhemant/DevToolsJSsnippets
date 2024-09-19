console.table(
  [...document.images]
    .filter(
      (img) => img.currentSrc != "" && !img.currentSrc.includes("data:image")
    )
    .map((img) => [
      img.currentSrc,
      (performance.getEntriesByName(img.currentSrc)[0]?.encodedBodySize * 8) /
        (img.width * img.height),
    ])
    .filter((img) => img[1] !== 0)
);