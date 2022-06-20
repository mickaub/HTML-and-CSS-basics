//1. write a function called range, that takes start and end arguments, returns an array that contains all numbers from start up to and including end.
//next write a sum function that takes an array of numbers and returns the sum of those numbers, run the program and see if it returns 55
//bonus: modify range to include third argument that indicates the step value used when building array. The argument should be optional. Should also work with negative step values that goes down.
let rangeArray = new Array;
let altArray = new Array;
function range (start,end,step) {
if(step%1 == 0){
    s = step;
}
if(step%1 !=0 ){
    s= 1;
}
first = Math.min(start,end);
last = Math.max(start,end);
aa = 0;
for(let n = first; n<=last; n++) {
    rangeArray[(n-first)] = n;
    console.log(rangeArray[n-first]);
    if((n+1)%s == 0){
        altArray[aa] = n;
        aa++;
    }
    else{

     }
}
console.log(first,last);
};

function sum (a) {
    total = 0;
    for(let ar= 0; ar<=(a.length-1); ar++) {
        total += a[ar];
        console.log(total);
    }
};
range(10,5,2);
sum(rangeArray);
console.log(s);
console.log(altArray.toString());


let teste1 = document.getElementById("example1");
teste1.innerHTML = "<h3>Example 1</h3>" +"<br>" + "range: " + rangeArray.toString() + "<br>" + "sum of range Array: " + total + "<br>" + "Array with " + s + " steps: " + altArray.toString();

//2. write reverseArray that takes array as argument and produces new array that is in reverse order.
// reverseArrayInPlace function modifies the array given by reversing the elements. Neither can use the reverse methods. Which one will be more useful or faster.
e2Reversed = new Array;
e2ArrayArg = new Array;
e2SplicedArray = new Array;
e2SplicedArrayOri = new Array;

function reverseArray(e2Array){
    e2ArrayArg = e2Array;
    for(let i2=0; i2<=(e2Array.length - 1); i2++){
        e2Reversed[i2] = e2Array[((e2Array.length - 1) - i2)];
    }
    console.log(e2Array.toString());
    console.log(e2Reversed.toString());
}

function reverseArrayInPlace(e22Array){  
    
    for(let i22=0; i22<e22Array.length; i22++){      
        e22Array.splice((0+i22),0,e22Array[(e22Array.length-1)]);
        e22Array.pop();
           
        console.log(e22Array);        
    }
    e2SplicedArray = e22Array;
    
}

reverseArray([1,2,3,4,5]);
e2SplicedArrayOri = [6,7,8,9,10,12];
reverseArrayInPlace([6,7,8,9,10,12]);


let example2 = document.getElementById("example2");
example2.innerHTML = "<h3>Example 2</h3>" + "<br>" + "Given Array: " + e2ArrayArg.toString() + "<br>" + "Reversed Array: " + e2Reversed.toString() + "<br>" + "Given Array to Reverse in Place: " + e2SplicedArrayOri.toString() + "<br>" + "Spliced Reversed Array: " + e2SplicedArray.toString();

//push+ and pop-, end of array. shift- and unshift+, start of array.

//3. list = { value:1, rest: {value:2, rest: {value:3, rest: null}}}
//write a function arraytoList that builds a list structure when given array of [1,2,3] as argument
//write listToArray that produces array from a a list. Add helper function prepend that takes element and a list, and creates a new list with element in front of original list.
//write nth which takes a list and number that returns the element at given position on list, 0 being first, or undefined when no element exists.
//write recursive version on nth

let list1String = new String;
let listIsString = "{ value:";

function arrayToList(array){
    let value0 = array[0];
    let list1 = new Array;
        
    value0 = "{ value:" + value0.toString() + ", rest: ";
    list1[0] = value0;
    listIsString += ((array[0].toString()) + ", rest: ");
    if (array.length>1) {
        for (let i=1;i<array.length;i++) {
           // list1[i] = "{value:" + (array[i]).toString() + ", rest: ";
           // list1[i+3] = "}";
            listIsString += ("{value:" + (array[i]).toString() + ", rest: ");
        }
      //  list1[array.length] = "null}";
        listIsString += "null}";

        for (let i2=1;i2<array.length;i2++){
            listIsString += "}";
        }
    }
    else {
        //value0 = value0 + "null}";
        listIsString += "null}";
    }
    
    console.log(listIsString);    
}

arrayToList([1,2,3]);

console.log(listIsString.indexOf("e:"));

let words = listIsString.split("e:");
//words[1] = words[1].charAt(0);
let wordSmall = new Array;
words[1].charAt(0);
wordSmall[0] = words[1].charAt(0);
wordSmall[1] = words[2].charAt(0);
wordSmall[2] = words[3].charAt(0);

console.log(words);
console.log(wordSmall);

let example3 = document.getElementById("example3");
example3.innerHTML = "<h3>Example 3</h3>" + "<br>" + listIsString;

//4. write deepequal that takes two values and returns true only if they are the same value or objects with same property, where the values of the properties are equal when compared with a recursive call to deepequal. Use typeof to find if arguments are objects or values. exeption is typeof null equals object. The object.keys function will be useful when you need to go over properties of objects to compare.

let test = document.getElementById("end");
test.innerHTML = "This is the end of the page.";