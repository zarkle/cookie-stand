'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPikeStore = {
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesPerCust: 6.3,
  hourlySales: [],
  total: 0,
  //random number generated for average customers per hour
  avgCustPerHour: function() {
    return Math.ceil(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  // projected cookies per hour
  cookiesPerHour: function() {
    return parseInt(this.avgCookiesPerCust * this.avgCustPerHour());
  },
  // loop through each hour and add to total
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookies = this.cookiesPerHour();
      this.hourlySales.push(cookies);
      this.total += cookies;
    }
  },
  // add to HTML
  render: function() {
    // access the ul
    var ulEl = document.getElementById('first-and-pike');
    // create list items
    for (var j = 0; j < hours.length; j++) {
      var liEl = document.createElement('li');
      // give content
      liEl.textContent = hours[j] + ': ' + this.hourlySales[j] + ' cookies';
      // append li
      ulEl.appendChild(liEl);
    }
    // create total list item
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.total + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seatacAirportStore = {
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiesPerCust: 1.2,
  hourlySales: [],
  total: 0,
  avgCustPerHour: function() {
    return Math.ceil(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  cookiesPerHour: function() {
    return parseInt(this.avgCookiesPerCust * this.avgCustPerHour());
  },
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookies = this.cookiesPerHour();
      this.hourlySales.push(cookies);
      this.total += cookies;
    }
  },
  render: function() {
    var ulEl = document.getElementById('seatac-airport');
    for (var j = 0; j < hours.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[j] + ': ' + this.hourlySales[j] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.total + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seattleCenterStore = {
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiesPerCust: 3.7,
  hourlySales: [],
  total: 0,
  avgCookiesPerHour: function() {
    return Math.ceil(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  cookiesPerHour: function() {
    return parseInt(this.avgCookiesPerCust * this.avgCookiesPerHour());
  },
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookies = this.cookiesPerHour();
      this.hourlySales.push(cookies);
      this.total += cookies;
    }
  },
  render: function() {
    var ulEl = document.getElementById('seattle-center');
    for (var j = 0; j < hours.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[j] + ': ' + this.hourlySales[j] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.total + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var capitolHillStore = {
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiesPerCust: 2.3,
  hourlySales: [],
  total: 0,
  avgCookiesPerHour: function() {
    return Math.ceil(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  cookiesPerHour: function() {
    return parseInt(this.avgCookiesPerCust * this.avgCookiesPerHour());
  },
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookies = this.cookiesPerHour();
      this.hourlySales.push(cookies);
      this.total += cookies;
    }
  },
  render: function() {
    var ulEl = document.getElementById('capitol-hill');
    for (var j = 0; j < hours.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[j] + ': ' + this.hourlySales[j] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.total + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var alkiStore = {
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookiesPerCust: 4.6,
  hourlySales: [],
  total: 0,
  avgCookiesPerHour: function() {
    return Math.ceil(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  },
  cookiesPerHour: function() {
    return parseInt(this.avgCookiesPerCust * this.avgCookiesPerHour());
  },
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookies = this.cookiesPerHour();
      this.hourlySales.push(cookies);
      this.total += cookies;
    }
  },
  render: function() {
    var ulEl = document.getElementById('alki');
    for (var j = 0; j < hours.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[j] + ': ' + this.hourlySales[j] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.total + ' cookies';
    ulEl.appendChild(liEl);
  }
};

// run hourly sales method to generate hourly sales array
firstAndPikeStore.salesPerHour();
// render list
firstAndPikeStore.render();
// run rest of the stores
seatacAirportStore.salesPerHour();
seatacAirportStore.render();
seattleCenterStore.salesPerHour();
seattleCenterStore.render();
capitolHillStore.salesPerHour();
capitolHillStore.render();
alkiStore.salesPerHour();
alkiStore.render();