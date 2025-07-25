//your JS code here. If required.

function daysOfYear(year) {
	if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
		return 366;
	}else{
		return 365;
	}
}

let year=prompt("Enter a year:");
let days=daysOfYear(year);
alert(`The year ${year} has ${days} days.`);