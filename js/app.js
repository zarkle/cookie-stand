'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var allStores = [];
// var storeTable = document.getElementById('table');

function Store(minHourlyCust, maxHourlyCust, avgCookiesPerCust) {
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hourlySales = [];
  this.totalCookies = 0;
}

Store.prototype.avgCustPerHour = function() {
  return Math.ceil(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
};

Store.prototype.cookiesPerHour = function() {
  return Math.round(this.avgCookiesPerCust * this.avgCustPerHour());
};

Store.prototype.salesPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var cookies = this.cookiesPerHour();
    this.hourlySales.push(cookies);
    this.totalCookies += cookies;
  }
};

Store.prototype.render = function() {
  this.salesPerHour();
  var ulEl = document.getElementById('first-and-pike');
  for (var j = 0; j < hours.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[j] + ': ' + this.hourlySales[j] + ' cookies';
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  ulEl.appendChild(liEl);
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
    return Math.round(this.avgCookiesPerCust * this.avgCustPerHour());
  },
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookies = this.cookiesPerHour();
      this.hourlySales.push(cookies);
      this.total += cookies;
    }
  },
  render: function() {
    seatacAirportStore.salesPerHour();
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
    return Math.round(this.avgCookiesPerCust * this.avgCookiesPerHour());
  },
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookies = this.cookiesPerHour();
      this.hourlySales.push(cookies);
      this.total += cookies;
    }
  },
  render: function() {
    seattleCenterStore.salesPerHour();
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
    return Math.round(this.avgCookiesPerCust * this.avgCookiesPerHour());
  },
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookies = this.cookiesPerHour();
      this.hourlySales.push(cookies);
      this.total += cookies;
    }
  },
  render: function() {
    capitolHillStore.salesPerHour();
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
    return Math.round(this.avgCookiesPerCust * this.avgCookiesPerHour());
  },
  salesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookies = this.cookiesPerHour();
      this.hourlySales.push(cookies);
      this.total += cookies;
    }
  },
  render: function() {
    alkiStore.salesPerHour();
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

var firstAndPikeStore = new Store(23, 65, 6,3);

firstAndPikeStore.render();
seatacAirportStore.render();
seattleCenterStore.render();
capitolHillStore.render();
alkiStore.render();