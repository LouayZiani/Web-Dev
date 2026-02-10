// task 1: Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
// Show it using alert.

let la_date = new Date(2012, 1, 20, 3, 12);
alert(la_date);

// task 2: Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"

// task 3: European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7).
// Write a function getLocalDay(date) that returns the “European” day of week for date.

function getLocalDay(date) {
    let day = date.getDay();

    if(day == 0) {
        day = 7;
    }
    return day;
}

let date1 = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date1) );       // tuesday, should show 2

// task 4: Create a function getDateAgo(date, days) to return the day of month days ago from the date.
// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
// Should work reliably for days=365 or more:

function getDateAgo(date, days) {
    let copy = new Date(date);

    copy.setDate(date.getDate() - days);
    return copy.getDate();
}

let date2 = new Date(2015, 0, 2);

alert( getDateAgo(date2, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date2, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date2, 365) ); // 2, (2 Jan 2014)
// P.S. The function should not modify the given date.

// task 5: Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
// Parameters:
// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

function getLastDayOfMonth(year, month) {
    // we will manipulate the autoadjust feature in date here
    let datata = new Date(year, month + 1, 0); // so like since there is no day 0, we set the next month and it will autoadjust to last
                                                // day of previous month xd
    return datata.getDate();
}

// task 6: Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
// For instance, if now were 10:00 am, and there was no daylight savings shift, then:
// getSecondsToday() == 36000 // (3600 * 10)

function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let result = now - today;
    // now we convert the result to seconds

    return Math.round(result / 1000);
}
// The function should work in any day. That is, it should not have a hard-coded value of “today”.


// task 7: Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
// For instance, if now is 23:00, then:
// getSecondsToTomorrow() == 3600
// P.S. The function should work at any day, the “today” is not hardcoded.

function getSecondsToTomorrow() {
    let now = new Date();

    let tmrw = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let resu = tmrw - now;

    // converting to seconds
    return Math.round(resu / 1000);
}

// task 8: Write a function formatDate(date) that should format date as follows:
// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

function formatDate(date){
    let diff = new Date() - date;

    if(diff < 1000) { 
        return 'right now';
    }
    // because its in ms, lets convert to secs
    let sec = Math.floor(diff / 1000);

    if(sec < 60) {
        return `${sec} sec. ago`;
    }
    let min = Math.floor(diff / 60000);
    if(min < 60) {
        return `${min} min. ago`;
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        ''+ d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );