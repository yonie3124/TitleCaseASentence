


// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
// For this algorithm, you can use the split() method.
// titleCase("I'm a little tea pot")should return a string.
// titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".

// how to do it
// First: split above sentence into array of words, breaking at spaces
// Then: iterate over the array, change the first character to uppercase for each word
// Finally: join the words to form the string again


let titleCase = "I'm a little tea pot";


let arr = titleCase.split(" ");


for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}


str = arr.join(" ");

console.log(str);