/* global define */
define(function (require) {
  /** Thanks to Ishmael Smyrnow on https://stackoverflow.com/a/18280750 **/
  var module
  window.GoogleAnalyticsObject = 'ga'
  window.ga = function () { (window.ga.q = window.ga.q || []).push(arguments) }
  window.ga.l = 1 * new Date()
  window.ga('create', 'UA-110148302-1')
  window.ga('send', 'pageview')
  module = function () { window.ga.apply(this, arguments) }
  require(['https://www.google-analytics.com/analytics.js'])
  var styles = 'background: #4b7bec; color: white;'
  console.log('%c 📸 Tracking views with  \t\t\t\n\thttps://analytics.google.com/\t', styles)
  return module
})
