'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPikeStore = {
  minHourCust: 23,
  maxHourCust: 65,
  avgCookiesPerCust: 6.3,
  //random number generated for average customers per hour
  avgCustPerHour: function() {
    return Math.ceil(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
  },
  // projected cookies per hour
  cookiesPerHour: function() {
    return parseInt(this.avgCookiesPerCust * this.avgCustPerHour());
  },
  // hourly results in an array
  
};

var results = [];
for (var i = 0; i < hours.length; i++) {
  results.push(firstAndPikeStore.cookiesPerHour());
}