// pie Chart start
const ctx = document.getElementById('pie-chart');

new Chart(document.getElementById('pie-chart'), {
    type: 'pie',
    data: {
        labels:['ট্রেড লাইসেন্স', 'হোল্ডিং ট্যাক্স', 'বাণিজ্যিক ট্যাক্স'],
        datasets: [{
            label: '# of Votes',
            backgroundColor:['#fc5185','#364f6b','#43dde6'],
            data:['10','50','70'],
            borderWidth: 1
        }]
    },
    Option:{
        title:{
            display: true,
            text: 'Pie Chart for admin panel',
        },
        responsive: true
    }
})

// pie chart End

//tabs function start
'use strict';

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();

// tabs function rnd