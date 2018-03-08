/* global define */
define(function (require) {
  var ScrollReveal
  ScrollReveal = require('scrollreveallib')
  var reveal
  reveal = ScrollReveal()
  reveal.reveal('.js-reveal')
  var styles = 'background: #2bcbba; color: white;'
  console.log('%c 🙈 Revealing content with \t\t\t\n\thttps://scrollrevealjs.org/\t\t', styles)
})
