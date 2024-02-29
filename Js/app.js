let allStores = [];
let hours = ["6am","7am", "8am", "9am", "10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
let totalsPerHour = [0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0];
let totalSales = 0;


function Store(location, minCustomers, maxCustomers, avgCookies) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalSales = 0;


  this.hourlySales = [];

  this.generateSalesData();

  allStores.push(this);
}

Store.prototype.generateSalesData = function() {
  for (let i = 0; i < hours.length; i++) {
    let customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    let cookiesSold = Math.round(customers * this.avgCookies);
    this.hourlySales.push(cookiesSold);
    totalsPerHour[i] += cookiesSold;
    this.totalSales += cookiesSold;
    totalSales += cookiesSold;
  }
};

Store.prototype.render = function() {
  let body = document.getElementById("salesTableBody");

  let row = document.createElement("tr");
  body.appendChild(row);

  let location = document.createElement("td");
  location.textContent = this.location;
  row.appendChild(location);

  for(let i=0; i<this.hourlySales.length; i++) {
    let td = document.createElement("td");
    td.textContent = this.hourlySales[i];
    row.appendChild(td);
  }

  let total = document.createElement("td");
  total.textContent = this.totalSales;
  row.appendChild(total);
};


function createTableHeader() {


  let header = document.getElementById("salesTableHeader");

  let row = document.createElement("tr");
  header.appendChild(row);


  let location = document.createElement("th");
  location.textContent = "Location";
  row.appendChild(location);

  
  for(let i=0; i<hours.length; i++) {
    let th = document.createElement("th");
    th.textContent = hours[i];
    row.appendChild(th);
  }

  
  let totals = document.createElement("th");
  totals.textContent = "Location Totals";
  row.appendChild(totals);

}


function createTableFooter() {

  let footer = document.getElementById("salesTableFooter");

 
  let row = document.createElement("tr");
  footer.appendChild(row);

  let totalLabel = document.createElement("td");
  totalLabel.textContent = "Totals by the hour";
  row.appendChild(totalLabel)

  for(let i=0; i<totalsPerHour.length; i++) {
    let td = document.createElement("td");
    td.textContent = totalsPerHour[i];
    row.appendChild(td);
  }


  let mainTotal = document.createElement("td");
  mainTotal.textContent = totalSales;
  row.appendChild(mainTotal);

}


function start() {
  console.log("Starting the process");

  let seattle = new Store("Seattle", 23, 65, 6.3);
  let tokyo = new Store("Tokyo", 3, 24, 1.2);
  let paris= new Store("Paris", 20, 38, 2.3);
  let duabi= new Store("Dubai", 11, 38, 3.7);
  let lima= new Store("Lima", 2, 16, 4.6);



  console.log("Created the stores:", allStores);

  createTableHeader();

  // print each location to the table
  for(let i=0; i<allStores.length; i++) {
    allStores[i].render();
  }

  createTableFooter();

}

start();
