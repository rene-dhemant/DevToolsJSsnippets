/* List all image resources and sort by (name, transferSize, encodedBodySize, decodedBodySize, initiatorType) */

function getImgs(sortBy) {
  const imgs = [];

  const resourceListEntries = performance.getEntriesByType("resource");
  resourceListEntries.forEach(
    ({
      name,
      transferSize,
      encodedBodySize,
      decodedBodySize,
      initiatorType,
    }) => {
      if (initiatorType == "img") {
        imgs.push({
          name,
          transferSize,
          decodedBodySize,
          encodedBodySize,
        });
      }
    }
  );

  const imgList = imgs.sort((a, b) => {
    return b[sortBy] - a[sortBy];
  });

  return imgList;
}
console.table(getImgs("encodedBodySize"));