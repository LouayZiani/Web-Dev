// Task 1: Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
// ucFirst("john") == "John";

function ucFirst(str) {
    let str1 = str[0].toUpperCase() + str.slice(1);
    return str1;
}

console.log(ucFirst("john"));


// task 2: Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
// The function must be case-insensitive:

function checkSpam(str) {

    let str2 = str.toLowerCase();

    return str2.includes('viagra') != -1 || str2.includes("xxx") != -1;

}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

// task 3: Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength –
// replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string. ellipsis: Alt + 0133 

function truncate(str, maxLength) {
    let new_str;
    let len = str.length;
    if(len > maxLength) {
        new_str = str.substring(0, maxLength-1) + '…';
        return new_str;
    } 

    return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te…"

console.log(truncate("Hi everyone!", 20)); // "Hi everyone!"


// task 4: We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120')); // should be 120