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

var firstAndPikeStore = new Store(23, 65, 6.3);
var seatacAirportStore = new Store(3, 24, 1.2);
var seattleCenterStore = new Store (11, 38, 3.7);
var capitolHillStore = new Store(20, 38, 2.3);
var alkiStore = new Store(2, 16, 4.6);

firstAndPikeStore.render();
seatacAirportStore.render();
seattleCenterStore.render();
capitolHillStore.render();
alkiStore.render();