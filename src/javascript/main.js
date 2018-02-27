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
  console.log(sitecore.canvas.id)

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
  console.log(html5.canvas.id)

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
  console.log(typo3.canvas.id)

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
  console.log(slimphp.canvas.id)

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
  console.log(symfony3.canvas.id)

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
  console.log(nodejs.canvas.id)

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
  console.log(css3.canvas.id)

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
  console.log(csharp.canvas.id)

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
  console.log(php.canvas.id)

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
  console.log(dotnet.canvas.id)

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
  console.log(angular.canvas.id)

  var sr = ScrollReveal()
  sr.reveal('.js-reveal')

/**
 *  function getInTouch (fromJson, url, successCallback) {
 *    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
 *  xhr.open('POST', url);
 *  xhr.onreadystatechange = function() {
 *        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
 *   };
 *
 *    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
 *    xhr.setRequestHeader('Content-Type', 'application/json')
 *    xhr.setRequestHeader('X-Headers-Are', 'Awesome')
 *    xhr.send(fromJson);
 *    return xhr;
 *  }
 **/

  function toJSONString (form) {
    var obj = {}
    var elements = form.querySelectorAll('input, textarea')
    console.log(elements.canvas.id)
    for (var i = 0; i < elements.length; ++i) {
      var element = elements[i]
      var name = element.name
      var value = element.value
      if (name) {
        obj[name] = value
      }
    }
    return JSON.stringify(obj)
  }

  var contactForm = document.getElementById('contactform')
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()
    var formDataJson = toJSONString(this)
    console.log(formDataJson)
  })
})()
