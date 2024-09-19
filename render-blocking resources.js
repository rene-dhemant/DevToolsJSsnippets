/*chromium only */

function RenderBlocking({startTime, duration, responseEnd, name, initiatorType}) {
  this.startTime = startTime
  this.duration = duration
  this.responseEnd = responseEnd
  this.name = name
  this.initiatorType = initiatorType
}

function findRenderBlockingResources() {
  return window.performance.getEntriesByType('resource')
    .filter(({renderBlockingStatus}) => renderBlockingStatus === 'blocking')
    .map(({startTime, duration, responseEnd, name, initiatorType}) => new RenderBlocking({startTime, duration, responseEnd, name, initiatorType}));
}

console.table(findRenderBlockingResources())