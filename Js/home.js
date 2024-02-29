let allStores = [];

function Store(location, address, hoursOpen, contactInfo, minCustomers, maxCustomers, avgCookies) {
  this.location = location;
  this.address = address;
  this.hoursOpen = hoursOpen;
  this.contactInfo = contactInfo;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalSales = 0;
  this.hourlySales = [];
  this.generateSalesData();
  allStores.push(this);
}

Store.prototype.generateSalesData = function() {
  let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
  let totalsPerHour = new Array(hours.length).fill(0);

  for (let i = 0; i < hours.length; i++) {
    let customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    let cookiesSold = Math.round(customers * this.avgCookies);
    this.hourlySales.push(cookiesSold);
    totalsPerHour[i] += cookiesSold;
    this.totalSales += cookiesSold;
  }
};

Store.prototype.render = function() {
  let content = `<h2>${this.location}</h2>`;
  content += `<p><strong>Address:</strong> ${this.address}</p>`;
  content += `<p><strong>Hours Open:</strong> ${this.hoursOpen}</p>`;
  content += `<p><strong>Contact Information:</strong> ${this.contactInfo}</p>`;

  let storeInfoContainer = document.getElementById("storeInfo");
  let storeInfoElement = document.createElement("div");
  storeInfoElement.innerHTML = content;
  storeInfoContainer.appendChild(storeInfoElement);
};

function start() {
  console.log("Starting the process");

  let seattle = new Store("Seattle", "123 Main St", "6am - 7pm", "contact@seattle.com", 23, 65, 6.3);
  let tokyo = new Store("Tokyo", "456 Elm St", "6am - 7pm", "contact@tokyo.com", 3, 24, 1.2);
  let paris = new Store("Paris", "789 Oak St", "6am - 7pm", "contact@paris.com", 20, 38, 2.3);
  let dubai = new Store("Dubai", "101 Pine St", "6am - 7pm", "contact@dubai.com", 11, 38, 3.7);
  let lima = new Store("Lima", "202 Maple St", "6am - 7pm", "contact@lima.com", 2, 16, 4.6);

  console.log("Created the stores:", allStores);

  // Render each store
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

start();

