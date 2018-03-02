/* global define */
define(function (require) {
  var _skillChartoptions = {
    tooltips: {
      enabled: false
    },
    responsive: true,
    cutoutPercentage: 80
  }
  var _chartJS = require('chartlib')
  return {
    createChart: function (element, percentage) {
      var percentages = [percentage, (16 - percentage)]
      return new _chartJS(element, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: percentages,
            backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
            hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
            borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
          }]
        },
        options: _skillChartoptions
      }
      )
    }
  }
})
