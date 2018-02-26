/* global Chart, ScrollReveal */
(function () {
  var skillChartotions = {
    tooltips: {
      enabled: false
    },
    responsive: true,
    cutoutPercentage: 80
  }

  var sitecorecontext = document.getElementById('sitecore').getContext('2d')
  var sitecore = new Chart(sitecorecontext, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [8, 8],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  sitecore.noop()

  var html5context = document.getElementById('html5').getContext('2d')
  var html5 = new Chart(html5context, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [15, 1],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  html5.noop()

  var typo3context = document.getElementById('typo3').getContext('2d')
  var typo3 = new Chart(typo3context, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [14, 2],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  typo3.noop()

  var slimphpcontext = document.getElementById('slimphp').getContext('2d')
  var slimphp = new Chart(slimphpcontext, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [8, 8],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  slimphp.noop()

  var symfony3context = document.getElementById('symfony3').getContext('2d')
  var symfony3 = new Chart(symfony3context, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [10, 6],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  symfony3.noop()

  var nodejscontext = document.getElementById('nodejs').getContext('2d')
  var nodejs = new Chart(nodejscontext, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [11, 5],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  nodejs.noop()

  var css3context = document.getElementById('css3').getContext('2d')
  var css3 = new Chart(css3context, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [15, 1],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  css3.noop()

  var csharpcontext = document.getElementById('csharp').getContext('2d')
  var csharp = new Chart(csharpcontext, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [12, 4],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  csharp.noop()

  var phpcontext = document.getElementById('php').getContext('2d')
  var php = new Chart(phpcontext, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [12, 4],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  php.noop()

  var dotnetcontext = document.getElementById('dotnet').getContext('2d')
  var dotnet = new Chart(dotnetcontext, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [12, 4],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  dotnet.noop()

  var angularcontext = document.getElementById('angular').getContext('2d')
  var angular = new Chart(angularcontext, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [9, 7],
        backgroundColor: ['rgba(255,255,255, 0.7)', 'rgba(0,0,0,0)'],
        hoverBackgroundColor: ['rgba(255,255,255,0.7)', 'rgba(0,0,0,0)'],
        borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
      }]
    },
    options: skillChartotions
  })
  angular.noop()

  var sr = ScrollReveal()

  sr.reveal('.js-reveal')
})()
