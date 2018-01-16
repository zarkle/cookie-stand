'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var allStores = [];
var salesTable = document.getElementById('sales-table');

function Store(location, minHourlyCust, maxHourlyCust, avgCookiesPerCust) {
  this.location = location;
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
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  salesTable.appendChild(trEl);
};

var firstAndPikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seatacAirportStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new Store ('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

firstAndPikeStore.render();
seatacAirportStore.render();
seattleCenterStore.render();
capitolHillStore.render();
alkiStore.render();