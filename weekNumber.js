function weekNumber(date){
	const daysPassed = numberOfDaysPassed(date);
	const jan1 = new Date(
		date.getFullYear(),
		0, 1
	);
	const offset = 8 - jan1.getDay();
	const weekNO = Math.ceil((daysPassed - offset) / 7);
	return weekNO || 52;
}


//number of days that have passed since jan 1
function numberOfDaysPassed(until){
	const year = until.getFullYear();
	const untilMonth = until.getMonth();
	let days = 0;
	for (let month = 0; month < untilMonth; month++){
		const lastDayOfMonth = new Date(year, month + 1, 0);
		days += lastDayOfMonth.getDate();
	}
	days += until.getDate();
	return days;
}