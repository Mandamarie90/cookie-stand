
function CookieStand(location, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hourlySales = [];
}


CookieStand.prototype.generateHourlySales = function() {
  for (let hour = 6; hour <= 19; hour++) {
    let customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    let cookiesSold = Math.round(customers * this.avgCookiesPerSale);
    this.hourlySales.push(cookiesSold);
  }
};


CookieStand.prototype.render = function() {
  let salesTable = document.getElementById('sales-table');
  let row = document.createElement('tr');


  let locationCell = document.createElement('td');
  locationCell.textContent = this.location;
  row.appendChild(locationCell);

  let dailyTotal = 0; 
 
  for (let cookies of this.hourlySales) {
    let cell = document.createElement('td');
    cell.textContent = cookies;
    row.appendChild(cell);
    dailyTotal += cookies; 
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = dailyTotal;
  row.appendChild(totalCell);

  salesTable.appendChild(row);
};

renderHeaderRow();


let seattle = new CookieStand('Seattle', 23, 65, 6.3);
let tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
let dubai = new CookieStand('Dubai', 11, 38, 3.7);
let paris = new CookieStand('Paris', 20, 38, 2.3);
let lima = new CookieStand('Lima', 2, 16, 4.6);


let cookieStands = [seattle, tokyo, dubai, paris, lima];
for (let stand of cookieStands) {
  stand.generateHourlySales();
  stand.render();
}


function renderHeaderRow() {
  let salesTable = document.getElementById('sales-table');
  let headerRow = document.createElement('tr');
  headerRow.innerHTML = '<th>Location</th>';

 
  for (let hour = 6; hour <= 19; hour++) {
    let time = hour > 12 ? hour - 12 + ' PM' : hour + ' AM';
    headerRow.innerHTML += `<th>${time}</th>`;
  }

  headerRow.innerHTML += '<th>Daily Location Total</th>';
  salesTable.appendChild(headerRow);
}

function renderFooterRow() {
  let salesTable = document.getElementById('sales-table');
  let footerRow = document.createElement('tr');
  footerRow.innerHTML = '<td>Totals</td>';

 
  let hourlyTotals = new Array(14).fill(0);

  
  for (let stand of cookieStands) {
    for (let i = 0; i < stand.hourlySales.length; i++) {
      hourlyTotals[i] += stand.hourlySales[i];
    }
  }

  
  for (let total of hourlyTotals) {
    footerRow.innerHTML += `<td>${total}</td>`;
  }

  let grandTotal = hourlyTotals.reduce((acc, val) => acc + val, 0);
  footerRow.innerHTML += `<td>${grandTotal}</td>`;

  salesTable.appendChild(footerRow);
}

renderFooterRow();






