// Returns the day of the week for the given date.

function dayOfTheWeek(theDate) {
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfTheWeek[theDate.getDay()];
}

function greeting(theDate) {
    return `Hello, world! Happy ${dayOfTheWeek(theDate)}.`
}

