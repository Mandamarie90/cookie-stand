
let paris = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  hourlySales: [],
  generateHourlySales: function() {
    for (let hour = 6; hour <= 19; hour++) {
      let customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      let cookiesSold = Math.round(customers * this.avgCookiesPerSale);
      this.hourlySales.push(cookiesSold);
    }
  },
  render: function() {
    let totalCookies = 0;
    let salesList = document.getElementById('paris-sales');
    for (let hour = 6; hour <= 19; hour++) {
      let cookies = this.hourlySales[hour - 6];
      totalCookies += cookies;
      let listItem = document.createElement('li');
      listItem.textContent = hour + ':00: ' + cookies + ' cookies';
      salesList.appendChild(listItem);
    }
    let totalItem = document.createElement('li');
    totalItem.textContent = 'Total: ' + totalCookies + ' cookies';
    salesList.appendChild(totalItem);
  }
};

paris.generateHourlySales();
paris.render();

