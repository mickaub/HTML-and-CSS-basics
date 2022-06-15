//Minimum: Use Math.min to take in two arguments and return their minimum
function findMinimum(a,b) {
    result = Math.min(a,b)
    console.log(result)
};
findMinimum(1,2);

let minimum = document.getElementById("minimum"); //create HTML declaration
minimum.innerHTML = result; //write to HTML
var explainer = document.createTextNode(" <-- This is the minimum of two numbers"); //create new text and declararion
minimum.appendChild(explainer); //append to previous minimum element

//Recursion: Use function isEven to accept a whole number and return a booleon of even or not. Test on 50 and 75 and -1. Test way to fix negative numbers.
function isEven(a) {
    if (a == Math.round(a)) {
        if (a%2 == 0) {
            even = true;
            console.log("true");
        }
        else {
            even = false;
            console.log("false");
        }
    }
    if (a != Math.round(a)) {
        console.log("Not integer. Please write whole number");
        even = "Not Integer";
    }
}
isEven(-2);

let isEvenHTML = document.getElementById("isEven");
isEvenHTML.innerHTML = "Example 2: isEven <br> The result is:" + "<br>" + even;

//Bean counting: "sting"[N] gets a character from a string. Write a function that takes a string as an argument and returns a number that indicates how many uppercase B characters are in the string.
//Next create a countChar function that behaves like countBs except has a second argument that allows any character to be counted
countB = 0;
countAll = 0;
letter ="";
word = "";
function countBs(a) {
    for (let i=0; i<a.length; i++) {
        if( a[i] == "B") {
            countB += 1;
        }
        else{};
    }    
    console.log(countB);    
}
function AnyCount(a,b){
    for (let i=0; i<b.length; i++) {
        if (b[i] == a) {
            countAll += 1;
        }
        else{};
    }
    console.log("countAll is " + countAll);
    letter = a;
    word = b;
}

function go() {
    var text = document.getElementById("textbox").nodeValue;
    alert("The user typed" + text );
}

countBs("Bob");
AnyCount("a","animals");

let allCount = document.getElementById("anyCharacter");
allCount.innerHTML = "Example 3: <br> The result of the anyCount is: <br>" + countAll + "<br> This is the count of the letter: " + letter + " in the word: " + word;