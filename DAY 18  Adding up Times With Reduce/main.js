const timeNodes = [...document.querySelectorAll('[data-time]')];
console.log(timeNodes)


const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => { // Turns time nodes from an array of list items to an array of strings.
        const [mins, secs] = timeCode.split(':').map(parseFloat); //ES6 destructuring syntax, .map(parseFloat) converts the returned string to an array of numbers.

        //We can say .map(function(str) {
        // return parseFloat(str)
        // })

        return (mins * 60) + secs; // Converts the return values to seconds.
    }).reduce((total, vidSeconds) => total + vidSeconds)

// This return statement is done in one line above.
//{
//  return total + seconds
//})

// We now want to chop the seconds variable into hours, minutes and seconds.

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600; // Mod calculates the remaining seconds after the whole hours math.floor produced.

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);













/* 
1.Grab the nodelist.

2. Turn it into an array: You can use ES6 Spread syntax or Array.from 

3. We need to convert (i.e split ) the string values of time Nodes into actual seconds.But this will be quite wrong values, because when you split a string, it will return strings which will not be added but concatenated. 

4. To solve the problem in number 3 we map the entire logic and call parseFloat into it, forcing the strings to return floating point numbers.

5. .. The return statement  on line 14 actually provides the logic that determines how the answer from number 4 should be calculated.

6. Now to add all the values together, we use a reduce method, pass it the parameters, and add the parameters together. *I am not sure how this works or how the parameters collated the results, but the reduce method seems to retun an accumulated value*

Now we want to chop the final value into minutes hours and seconds;  

7. We create a variable  that will be a running tally of the seconds left.

8. Next we define an hour variable that will be the answer above divided by 3600 and use Math.Floor to chop it down to whole numbers. 

9. Now to figure out the remaining seconds from the above, we reassign the secondsLeft variable, and call % on it.

10. Now to calculate for minutes we define a minute  variable that will be the answer above divided by 60 and use Math.Floor to chop it down to whole numbers. 

11. Now to figure out the remaining seconds from the above, we reassign the secondsLeft variable, and call % on it.

12. This last reassigning of the secondsLeft variable is now the actual seconds left.

*/


/* 
Questions
1.what is the difference betwen reduce and reduceright

2. How does the reduce mehod on line 15 achieve the collation of the values.

3. What do the params in the reduce statement above do.
*/