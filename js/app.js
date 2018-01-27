'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = [];
var salesTable = document.getElementById('sales-table');
var locationForm = document.getElementById('store-form');

function Store(location, minHourlyCust, maxHourlyCust, avgCookiesPerCust) {
  this.location = location;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hourlySales = [];
  this.totalCookies = 0;
  allStores.push(this);
}

Store.prototype.cookiesPerHour = function() {
  var avgCustPerHour = Math.ceil(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  return Math.round(this.avgCookiesPerCust * avgCustPerHour);
};

Store.prototype.salesPerHour = function() {
  // this.hourlySales.length = 0;
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
};

function renderAllStores() {
  for (var i in allStores) {
    //need to reset hourlySales array
    allStores[i].hourlySales.length = 0;
    allStores[i].render();
  }
}

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
  thEl.textContent = 'Daily Location Total';
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
    var tdEl = document.createElement('td');
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].hourlySales[i];
      tdEl.textContent = hourlyTotal;
      trEl.appendChild(tdEl);
    }
  }
  tdEl = document.createElement('td');
  var totalTotal = 0;
  for (var k = 0; k < allStores.length; k++) {
    totalTotal += allStores[k].totalCookies;
  }
  tdEl.textContent = totalTotal;
  trEl.appendChild(tdEl);
  salesTable.appendChild(trEl);
}

function addNewLocation(event) {
  event.preventDefault();
  var newLocation = event.target.newLocation.value;
  var newMinHourlyCust = parseInt(event.target.minHourlyCust.value);
  var newMaxHourlyCust = parseInt(event.target.maxHourlyCust.value);
  var newAvgCookiesPerCust = event.target.avgCookiesPerCust.value;

  new Store(newLocation, newMinHourlyCust, newMaxHourlyCust, newAvgCookiesPerCust);
  
  //two ways to reset form field after submit
  locationForm.reset();
  // event.target.reset();
  
  salesTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

locationForm.addEventListener('submit', addNewLocation);

makeHeaderRow();
renderAllStores();
makeFooterRow();