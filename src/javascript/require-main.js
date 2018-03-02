/* global requirejs */
requirejs.config({
  baseUrl: 'javascript',
  paths: {
    chartlib: '//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min',
    scrollreveallib: '//cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.3.6/scrollreveal.min',
    ga: '//www.google-analytics.com/analytics'
  }
})

requirejs(['modules/analytics'])

var revealElements
revealElements = document.getElementsByClassName('js-reveal')
if (void 0 !== revealElements && revealElements.length > 0) {
  requirejs(['modules/reveals'])
}

var charts
charts = document.getElementsByClassName('skill')

if (void 0 !== charts && charts.length > 0) {
  requirejs(['modules/charts'])
}
