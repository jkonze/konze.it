/* global define */
define(function (require) {
  var Chart = require('./createChart')
  Chart.createChart('sitecore', 8)
  Chart.createChart('html5', 15)
  Chart.createChart('typo3', 14)
  Chart.createChart('slimphp', 8)
  Chart.createChart('symfony3', 10)
  Chart.createChart('nodejs', 11)
  Chart.createChart('css3', 15)
  Chart.createChart('csharp', 14)
  Chart.createChart('php', 12)
  Chart.createChart('dotnet', 12)
  Chart.createChart('angular', 9)
  var styles = 'background: #3867d6; color: white;'
  console.log('%c 📈 Beautiful charts with \t\t\t\n\thttp://www.chartjs.org/\t\t\t', styles)
})
