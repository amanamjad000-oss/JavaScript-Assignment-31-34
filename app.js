//Chapter 31-34(Q NO 01)
//var currentDate = new Date();
//document.write(currentDate);

//Chapter 31-34(Q No 02)
//var months = [  "January", "February", "March", "April", "May", "June",
 // "July", "August", "September", "October", "November", "December"
//];
//var today = new Date();
//var currentMonth = months[today.getMonth()];
//alert("Current month:" + currentMonth.toLowerCase());

//Chapter 31-34(Q No 03)
//var  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//var  today = new Date();
//var dayName = days[today.getDay()].slice(0, 3);

//alert("Today is " + dayName.toLowerCase());

//Chapter 31-34(Q No 04)
//var today = new Date();
//var dayIndex = today.getDay();
//if (dayIndex === 0 || dayIndex === 6) { 
  //  console.log("It's a Fun day"); 
//}

//Chapter 31-34(Q No 05)
//var today = new Date();
//var date = today.getDate();
//if(date < 16) {
 //   console.log("First fifteen days of the month");
//} else{
  //  console.log("Last days of the month");
//}

//Chapter 31-34(Q No 07)
//var now = new Date();
//var hour = now.getHours();
//if(hour < 12) {
  //  alert("Its AM");
//} else{
  //  alert("Its PM");
//}

//Chapter 31-34(Q No 08)
//var laterDate = new Date(2020, 11, 31);
//console.log(laterDate);

//Chapter 31-34(Q No 09)
//var ramadanStart = new Date(2015, 5, 18);
//var today = new Date();
//var diffInMs = today - ramadanStart;
//var daysPast = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
//alert(daysPast + "days has passed since 1st Ramdan, June 18, 2015");

//Chapter 31-34(Q No 10)
//var referenceDate = new Date(0);
//var beginningOf2015 = new Date("January, 1, 2015 00:00:00");
//var diffInMs = beginningOf2015 - referenceDate;
//var elapsedSeconds = diffInMs / 1000;
//document.write("On refernce Date" + referenceDate + "<br>");
//document.write(elapsedSeconds + " seconds had passed since the beginning of 2015");

//Chapter 31-34(Q No 11)
//var currentDate = new Date();
//var pastDate = new Date();
//pastDate.setFullYear(currentDate.getFullYear() - 100);
//document.write("Current Date:" + currentDate + "<br>");
//document.write("100 years back, it was:" + pastDate);

//Chapter 31-34( Q No 12)
//var dateObj = new Date();
//var currentYear = dateObj.getFullYear();
//dateObj.setFullYear(currentYear - 100);
//alert("100 year back, it was:" + dateObj)

//Chapter 31-34(Q No 13)
//var age = prompt("Please enter your age:");
//var currentYear = new Date().getFullYear();
//var birthYear = currentYear - age;
//document.write("Your age is:" + age + "<br>");
//document.write("Your birth year is:" + birthYear)

//Chapter 31-34(Q No 14)
//var customerName = "ABC Customer";

//var months = ["January", "February", "March", "April", "May", "June", 
  //            "July", "August", "September", "October", "November", "December"];
//var currentMonth = months[new Date().getMonth()];

//var units = 410;
//var chargesPerUnit = 16.20;

//var netAmount = units * chargesPerUnit;

//var lateSurcharge = 350.00;

//var grossAmount = netAmount + lateSurcharge;

//document.write("<h1>K-Electric Bill</h1>");
//document.write("Customer Name: <b>" + customerName + "</b><br>");
//document.write("Month: <b>" + currentMonth + "</b><br>");
//document.write("Number of units: <b>" + units + "</b><br>");
//document.write("Charges per unit: <b>" + chargesPerUnit.toFixed(2) + "</b><br><br>");

//document.write("Net Amount Payable (within Due Date): <b>" + netAmount.toFixed(2) + "</b><br>");
//document.write("Late Payment Surcharge: <b>" + lateSurcharge.toFixed(2) + "</b><br>");
//document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount.toFixed(2) + "</b>");
