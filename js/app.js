'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPikeStore = {
  minHourCust: 23,
  maxHourCust: 65,
  avgCookiesPerCust: 6.3,
  hourlySales: [],
  total: 0,
  //random number generated for average customers per hour
  avgCustPerHour: function() {
    return Math.ceil(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
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
    liEl.textContent = 'Total: ' + this.total;
    ulEl.appendChild(liEl);
  }
};
// run hourly sales method to generate hourly sales array
firstAndPikeStore.salesPerHour();
// render list
firstAndPikeStore.render();