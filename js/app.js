'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var allStores = [];
var salesTable = document.getElementById('sales-table');

function Store(location, minHourlyCust, maxHourlyCust, avgCookiesPerCust) {
  this.location = location;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hourlySales = [];
  this.totalCookies = 0;
  allStores.push(this);
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
  // create table row
  var trEl = document.createElement('tr');
  // create location cell (row header), give content
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);
  // create sales projections for each hour, give content
  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales[i];
    trEl.appendChild(tdEl);
  }
  // create total cell for each location, give content
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);
  // add cells to row
  salesTable.appendChild(trEl);
  // create total row (total of each hour)

};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total Per Hour';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    thEl = document.createElement('th');
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].hourlySales[i];
      thEl.textContent = hourlyTotal;
      trEl.appendChild(thEl);
    }
  }
  thEl = document.createElement('th');
  var totalTotal = 0;
  for (var k = 0; k < allStores.length; k++) {
    totalTotal += allStores[k].totalCookies;
  }
  thEl.textContent = totalTotal;
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
}

var firstAndPikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seatacAirportStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new Store ('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

makeHeaderRow();
firstAndPikeStore.render();
seatacAirportStore.render();
seattleCenterStore.render();
capitolHillStore.render();
alkiStore.render();
makeFooterRow();