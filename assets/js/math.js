MathJax = {
  options: {
    // Remove <code> tags from the blacklist. Even though we pass an
    // explicit list of elements to process, this blacklist is still
    // applied.
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'annotation', 'annotation-xml'],
    includeHtmlTags: {br: '\n', wbr: '', '#comment': ''},
    processHtmlClass: 'language-math',
  },
  tex: {
    // By default, only \( is enabled for inline math, to prevent false
    // positives. Since we already only process code blocks that contain
    // exactly one math expression and nothing else, it is also fine to
    // use the nicer $...$ construct for inline math.
    inlineMath: { '[+]': [['$', '$']] },
  },
};