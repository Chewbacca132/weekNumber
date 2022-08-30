function weekNumber(date){
    //the first week of the year is defined as the one with the first thursday in the year
    const thisThursday = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - (date.getDay() || 7) + 4
    );
	const daysPassed = numberOfDaysPassed(thisThursday);
	const weekNO = Math.ceil((daysPassed) / 7);
	return weekNO || 52;
}


//returns the number of days that have passed since jan 1
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