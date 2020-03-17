var js_intro_course = [
{
    name:"Introduction to Javascript",
    pages:[
    {
      heading:"Introduction to Javascript",
      data:`JavaScript is one of the most popular programming languages on earth and is used to add interactivity to webpages, process data, as well as create various applications (mobile apps, desktop apps, games, and more)`,
      info:`Learning the fundamentals of a language will enable you to create the program you desire, whether client-side or server-side.`, 
    },
    ],
    
},

{
    name:"Create Your First Javascript",
    pages:[
    {
      heading:"Your First Javascript",
      data:`JavaScript Code can be placed in the HTML page's <body> and <head> sections.
In the example below, we placed it within the <body> tag using script tag `,
      info:`Remember that the script, which is placed in the head section, will be executed before the <body> is rendered. If you want to get elements in the body, it's a good idea to place your script at the end of the body tag.`  
    },
    {
     heading: "Formatting Text",
     data:`We Need to use document.write() for formatting text on webpage. The document.write() function writes a string into our HTML document. This function can be used to write text, HTML, or both`,
     info:`The document.write() method should be used only for testing. Other output mechanisms appear in the upcoming lessons.`, 
     code:`document.write("Hello World")
     //Hello World  
     `,  
    },
    ],
    
},

{
    name:"Adding Javascript to Web Page",
    pages:[
    {
      heading:"Javascript in Head Tag",
      data:`You can place any number of scripts in an HTML document.
Typically, the script tag is placed in the head of the HTML document`, 
      info:`There is also a noscript tag. Its content will be shown if the client's browser doesn't support JS scripts.`, 
    },
    {
      heading:"Javascript in Body Tag",
      data:`Alternatively, include the JavaScript in the <body> tag.`, 
      info:`It's a good idea to place scripts at the bottom of the <body> element.
This can improve page load, because HTML display is not blocked by scripts loading.`,  
    },
    ],
    
},

{
    name:"External Javascript",
    pages:[
    {
      heading:"External Javascript",
      data:`External scripts are useful and practical when the same code is used in a number of different web pages.
JavaScript files have the file extension .js.

Below, we've created a new text file, and called it demo.js. `,
      info:`Using External Javascript make your code more readable and easy`, 
    }],
    
},

{
    name:"Comments In Javascript",
    pages:[
    {
      heading:"Adding Comments",
      data:`Not all JavaScript statements are "executed".
      Code after a double slash //, or between /* and */, is treated as a comment.
Comments are ignored, and are not executed.

Single line comments use double slashes.`,
     info:`It's a good idea to make a comment about the logic of large functions to make your code more readable for others`,   
    code:`//This is single Line Comment
    <br>/*This is Multiple Line comment*/`,
    },
    ],
    
},
{
  name:"Variables" ,
  pages:[
  {
      heading:"Variable in Javascript",
      data:`Variables are containers for storing data values. The value of a variable can change throughout the program.
Use the var keyword to declare a variable.
There are some other rules to follow when naming your JavaScript variables:

- You must not use any special symbols, like my#num, num%, etc.
- Be sure that you do not use any of the following JavaScript reserved words.
`,
      info:`JavaScript is case sensitive. For example, the variables lastName and lastname, are two different variables.`,
      code:`var x = 10;`,
  }
  ],
},
{
    name:"Data Types",
    pages:[
    {
      heading:"Data Types in Javascript",
      data:`The term data type refers to the types of values with which a program can work. JavaScript variables can hold many data types, such as numbers, strings, arrays, and more.

Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point, etc.
`,    info:`This variable can be easily changed to other types by assigning to it any other data type value, like num = 'some random string'.`, 
    },
    {
     heading:"String In Javascript",
     data:`As strings must be written within quotes, quotes inside the string must be handled. The backslash (\) escape character turns special characters into string characters.
   The escape character (\) can also be used to insert other special characters into a string.
These special characters can be added to a text string using the backslash sign. `, 
     info:`If you begin a string with a single quote, then you should also end it with a single quote. The same rule applies to double quotes. Otherwise, JavaScript will become confused.`,  
     code:`var name = "Hello "+"Roni"<br>
     document.write(name); //Hello Roni`,
    }
    ],
},
{
    name:"Math Operators",
    pages:[
    {
        heading:`Arithmetic operators`,
        data:`Arithmetic operators perform arithmetic functions on numbers (literals or variables).`,
        info:`You can get the result of a string expression using the eval() function, which takes a string expression argument like eval("10 * 20 + 8") and returns the result. If the argument is empty, it returns undefined.`,
        code:`var x = 7 + 8; //15`,
    },
    {
        heading:`Division and Multiplication Operators`,
        data:`The / operator is used to perform division operations.
       The * operator is used to perform multiplication operators `,
        info:`Remember to handle cases where there could be a division by 0.`,
        code:`
        var x = 10 / 5;
         //2
         <br>
        var y = 10 * 3;
        //30
        `,
    },
    
    
    {
        heading:`Module Operators`,
        data:`Module Operators is used to return the reminder of the division(what is left over) `,
        info:`In JavaScript, the modulus operator is used not only on integers, but also on floating point numbers.`,
        code:`
        var x = 10 % 3;
         //1
         
        `,
    },
    
    {
        heading:`Increment and Decrement Operators`,
        data:`Increment++  
The increment operator increments the numeric value of its operand by one. If placed before the operand, it returns the incremented value. If placed after the operand, it returns the original value and then increments the operand.
Decrement -- 
The decrement operator decrements the numeric value of its operand by one. If placed before the operand, it returns the decremented value. If placed after the operand, it returns the original value and then decrements the operand. `,
        info:`As in school mathematics, you can change the order of the arithmetic operations by using parentheses.
Example: var x = (100 + 50) * 3;`,
        code:`
        var x = 10;<br>
        x++;//11
         <br>
        var y = 10;<br>
        y--;//9
        `,
    }, 
    
    ]
},

{
    name:"Assignment Operators",
    pages:[
    {
      heading:"Assignment Operators",
      data:`Assignment operators assign values to JavaScript variables. `,
      info:`You can use multiple assignment operators in one line, such as x -= y += 9.`, 
      code:`var x = 1;<br>
      x+=2;//x = 3
      `,
    },
    ],
    
},
{
    name:"Comparison Operators",
    pages:[
    {
      heading:"Comparison Operators",
      data:`Comparison operators are used in logical statements to determine equality or difference between variables or values. They return true or false. 

The equal to (==) operator checks whether the operands' values are equal. `,
     
      info:`You can check all types of data; comparison operators always return true or false.`, 
      code:`var x = 10;<br>
      x==2;//false
      `,
    },    
    
    ],
    
},
{
    name:"Logical Or Boolean Operators",
    pages:[
    {
      heading:"Logical Operators",
      data:`Logical Operators, also known as Boolean Operators, evaluate the expression and return true or false.

The table below explains the logical operators (AND, OR, NOT).

1. && = return true if both value are true
2. || = return true if one value is true
3. ! = return true if value is false
 `,
      info:`You can check all types of data; comparison operators always return true or false.`, 
    },
    
    {
        heading:"Logical and Conditonal Operators",
        data:`For this expression to be true, both conditions must be true.
- The first condition determines whether 4 is greater than 2, which is true. 
- The second condition determines whether 10 is less than 15, which is also true. 
Based on these results, the whole expression is found to be true.

Conditional Operators
Another JavaScript conditional operator assigns a value to a variable, based on some condition.
`,
        info:`It allows you to connect as much conditions as you want`,
        code:`
        /*Logical Operators*/
        <br>
   document.write((4 > 2) && (10 < 15));
   <br>//true
   <br>
  /*Conditional Operators*/<br>
   document.write(4>2?"True":"False");
   <br>//True     
        
        `,
    }
    ],
    
},
{
    name:"String Operators",
    pages:[
    {
      heading:"String Operators",
      data:`The most useful operator for strings is concatenation, represented by the + sign. 
Concatenation can be used to build strings by joining together multiple strings, or by joining strings with other types: 
 `,
      info:`Numbers in quotes are treated as strings: "42" is not the number 42, it is a string that includes two characters, 4 and 2.`, 
      code:`var msg = "Hello "+"World";<br>
     document.write(msg) //Hello World
      `,
    },
    ],
    
},

{
    name:"The If Statement",
    pages:[
    {
      heading:"The If Statement",
      data:`It perform different actions based on different conditions.
You can do this by using conditional statements in your code.

Use if to specify a block of code that will be executed if a specified condition is true.`,
      info:`You can skip curly braces if your code under the condition contains only one command.`,
      code:`
     if(condition){<br>
          statements <br>    
     }<br>
      `, 
    },
    ],
    
},
{
    name:"The else if else statement ",
    pages:[
    {
      heading:"The else if statement",
      data:`The Below code says:
- if course is equal to 1, output "HTML Tutorial";
- else, if course is equal to 2, output "CSS Tutorial";
- if none of the above condition is true, then output "JavaScript Tutorial";
`,
      info:`Learning the fundamentals of a language will enable you to create the program you desire, whether client-side or server-side.`, 
      code:`
      var course = 1<br>
if (course == 1) {<br>
    document.write("HTML Tutorial");<br>
} else if (course == 2) {<br>
    document.write("CSS Tutorial");
<br>} else {<br>
    document.write("JavaScript Tutorial");<br>
}<br>
//Output : HTML Tutorial
      `,
    },
    ],
    
},
{
    name:"The if else if else statement",
    pages:[
    {
      heading:"If else if else statement",
      data:`The final else block will be executed when none of the conditions is true.            
Let's take the value of the course variable in our previous example. `,
      info:`The final else statement "ends" the else if statement and should be always written after the if and else if statements.`, 
      code:`      
      var course = 3;<br>
if (course == 1) {<br>
    document.write("HTML Tutorial");<br>
} else if (course == 2) {<br>
    document.write("CSS Tutorial");<br>
} else {<br>
    document.write("JavaScript Tutorial");<br>
}<br>
      //Output : JavaScript Tutorial
      
      `,
    },
    ],
    
},
{
    name:"Switch statement",
    pages:[
    {
      heading:"Switch Statement",
      data:`In cases when you need to test for multiple conditions, writing if else statements for each condition might not be the best solution. 
The switch statement is used to perform different actions based on different conditions.
The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.
      `,
      info:`You can achieve the same result with multiple if...else statements, but the switch statement is more effective in such situations.`, 
      code:`
 switch (expression) { <br>
  case n1: <br>
     statements<br>
     break;<br>
  case n2: <br>
     statements<br>
     break;<br>
  default: <br>
     statements<br>
}<br>
      
      `,
    },
    {
        heading:`The Break Keyword`,
        data:`When JavaScript code reaches a break keyword, it breaks out of the switch block.
This will stop the execution of more code and case testing inside the block.`,
        info:`Usually, a break should be put in each case statement.`,
    },
    {
        heading:`The default Keyword`,
        data:`The default keyword specifies the code to run if there is no case match.`,
        info:`The default block can be omitted, if there is no need to handle the case when no match is found.`,
        code:`
      var color ="yellow";<br>
switch(color) {<br>
    case "blue": <br>
        document.write("This is blue.");<br>
        break;<br>
    case "red": <br>    
        document.write("This is red.");<br>
        break;<br>
    case "green": <br>
        document.write("This is green."); <br>   
        break;<br>
    case "orange": <br> 
        document.write("This is orange.");<br>    
        break;<br>
    default: <br>
        document.write("Color not found.");<br>
}  <br>
//Output : Color not found.
        
        
        `,
    }
    ],
    
},

{
    name:"For loop",
    pages:[
    {
      heading:"Loop",
      data:`Loops can execute a block of code a number of times. They are handy in cases in which you want to run the same code repeatedly, adding a different value each time.

JavaScript has three types of loops: for, while, and do while. 

The for loop is commonly used when creating a loop.

Statement 1 is executed before the loop (the code block) starts.
Statement 2 defines the condition for running the loop (the code block).
Statement 3 is executed each time after the loop (the code block) has been executed.
`,
      info:`As you can see, the classic for loop has three components, or statements.`,
      code:`
      for (statement 1; statement 2; statement 3) {<br>
   code block to be executed<br>
}<br>
      
      `, 
    },
    {
        heading:`For Loop Part-1`,
        data:`
The First example below creates a for loop that prints numbers 1 through 5.         
        In first Example, Statement 1 sets a variable before the loop starts (var i = 1).
Statement 2 defines the condition for the loop to run (i must be less than or equal to 5).
Statement 3 increases a value (i++) each time the code block in the loop has been executed

        `,
        info:`ES6 introduces other for loop types; you can learn about them in the ES6 course later.`,
        code:`
 //First Example Goes from here<br>
   for (var i=1; i<=5; i++) {<br>
    document.write(i + " ");<br>
}   <br>
//OutPut : 1 2 3 4 5  
        
        `,
    },
    {
        heading:`For Loop Part-2`,
        data:`If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.
Statement 2 is also optional.
Statement 3 is used to change the initial variable. It can do anything, including negative increment (i--), positive increment (i = i + 15), or anything else.
Statement 3 is also optional, and it can be omitted if you increment your values inside the loop. `,
        info:`If you omit statement 2, you must provide a break inside the loop. Otherwise, the loop will never end.`,
        code:`
 var i = 0;<br>
for (; i < 10; ) {<br>
    document.write(i);<br>
    i++;<br>
}<br>
        `,
    },
    ],
    
},

{
    name:"While loop",
    pages:[
    {
      heading:"While Loop Part-1",
      data:`The while loop repeats through a block of code, as long as a specified condition is true.
`,
      info:`The condition can be any conditional statement that returns true or false.`,
      code:`
      while(condition){<br>
          code block<br>
      }<br>
      `, 
    },
    {
        heading:`While Loop Part-2`,
        data:`The loop will continue to run as long as i is less than, or equal to, 10. Each time the loop runs, it will increase by 1.

This will output the values from 0 to 10. `,
        info:`Be careful writing conditions. If a condition is always true, the loop will run forever.`,
        code:`
var i=0;<br>
while (i<=10) {<br>
    document.write(i + " ");<br>
    i++;<br>
}<br>
        `,
    },
    {
        heading:`While Loop Part-3`,
        data:`If you forget to increase the variable used in the condition, the loop will never end. 
`,
        info:`Make sure that the condition in a while loop eventually becomes false.`,
    },
    ],
    
},

{
    name:"do while loop",
    pages:[
    {
      heading:"Do While Statement",
      data:`The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.
`,
      info:`The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested.`, 
      code:`
     //Syntax <br>
     do {<br>
   code block<br>
}<br>
while (condition);<br><br>
     
     //Example<br> 
var i=20;<br>
do {  <br>
    document.write(i + " ");<br>
    i++;  <br>
}<br>
while (i<=25); <br>     
      `,
    },
    ],
    
},

{
    name:"Break and continue",
    pages:[
    {
      heading:"Break Statement",
      data:`The break statement "jumps out" of a loop and continues executing the code after the loop.`,
      info:`You can use the return keyword to return some value immediately from the loop inside of a function. This will also break the loop.`,
      code:`
      for (i = 0; i <= 10; i++) {<br>
    if (i == 5) {<br>
        break; <br>
    }<br>
    document.write(i + " ");<br>
}<br>
      `,
    },
    {
        heading:`Continue Statement`,
        data:`The continue statement breaks only one iteration in the loop, and continues with the next iteration.`,
        info:`The value 5 is not printed, because continue skips that iteration of the loop.`,
        code:`
 for (i = 0; i <= 10; i++) {<br>
    if (i == 5) {<br>
        continue;<br>
    }<br>
    document.write(i + " ");<br>
}<br>
        `,
    }
    
    ],
    
},

{
    name:"User Defined Function",
    pages:[
    {
      heading:"Javascript Function",
      data:`A JavaScript function is a block of code designed to perform a particular task.
The main advantages of using functions:
Code reuse: Define the code once, and use it many times.
Use the same code many times with different arguments, to produce different results.`,
      info:`A JavaScript function is executed when "something" invokes, or calls, it.`, 
    },
    {
        heading:`Defining a Function`,
        data:`To define a JavaScript function, use the function keyword, followed by a name, followed by a set of parentheses ().

The code to be executed by the function is placed inside curly brackets {}.`,
        info:`Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).`,
        code:`
        function name() {   <br> 
  //code to be executed<br>
}<br>
        `,
    },
    {
        heading:`Calling a Function`,
        data:`To execute the function, you need to call it.
To call a function, start with the name of the function, then follow it with the arguments in parentheses.
`,
        info:`Always remember to end the statement with a semicolon after calling the function.You can also call a function using this syntax: myFunction.call(). The difference is that when calling in this way, you're passing the 'this' keyword to a function. You'll learn about it later.`,
        code:`
     function myName() {   <br> 
  //code to be executed<br>
}<br>
   myName();//Function is called 
        `,
    },
    ],
    
},

{
    name:"Function Parameters",
    pages:[
    {
      heading:"Function Parameters Part-1",
      data:`Functions can take parameters. 
Function parameters are the names listed in the function's definition.
`,
      info:`As with variables, parameters should be given names, which are separated by commas within the parentheses.`,
      code:`
      //Syntax <br>
     functionName(param1,param2,param3){<br>
         //some code<br>
     }<br>
      `, 
    },
    {
        heading:`Using Parameters`,
        data:`This function takes in one parameter, which is called name. When calling the function, provide the parameter's value (argument) inside the parentheses. 
`,
        info:`Function arguments are the real values passed to (and received by) the function.`,
        code:`
        function sayHello(name) {<br>
    alert("Hi, " + name);<br>
}<br><br>

sayHello("David");<br>
        `
    },
    {
        heading:`Function Parameters Part-2`,
        data:`You can define a single function, and pass different parameter values (arguments) to it.`,
        info:`This will execute the function's code each time for the provided argument.`,
        code:`
function sayHello(name) {<br>
    alert("Hi, " + name);<br>
}<br>
sayHello("David");<br>
sayHello("Sarah");<br>
sayHello("John");<br> 
        `
    },
    ],
    
},

{
    name:"User Multiple Parameters and Functions",
    pages:[
    {
      heading:"Multiple Parameters Part-1",
      data:`You can define multiple parameters for a function by comma-separating them. `,
      info:`The example above defines the function mult to take two parameters.`, 
      code:`
     function mult(x,y){<br>
      //some code<br>   
     } <br>
      `,
    },
    {
        heading:`Multiple Parameters Part-2`,
        data:`The parameters are used within the function's definition.`,
        info:`Function parameters are the names listed in the function definition`,
        code:`
        function sayHello(name, age) {<br>
  document.write( name + " is " + age + " years old.");<br>
}<br>
        `,
    },
    {
        heading:`Multiple Parameters Part-3`,
        data:`When calling the function, provide the arguments in the same order in which you defined them.`,
        info:`If you pass more arguments than are defined, they will be assigned to an array called arguments. They can be used like this: arguments[0], arguments[1], etc.`,
        code:`
        function sayHello(name, age) {<br>
    document.write( name + " is " + age + " years old.");<br>
}<br>
<br>
sayHello("John", 20)<br>
        `,
    },
    {
        heading:`Multiple Parameters Part-4`,
        data:`After defining the function, you can call it as many times as needed. 
JavaScript functions do not check the number of arguments received.`,
        info:`If a function is called with missing arguments (fewer than declared), the missing values are set to undefined, which indicates that a variable has not been assigned a value.`,
        
    },
    ],
    
},

{
    name:"The Return Statement",
    pages:[
    {
      heading:"Function Return Part-1",
      data:`A function can have an optional return statement. It is used to return a value from the function. 

This statement is useful when making calculations that require a result.
`,
      info:`When JavaScript reaches a return statement, the function stops executing.`, 
    },
    {
     heading:`Function Return Part-2`,
     data:`Use the return statement to return a value.

For example, let's calculate the product of two numbers, and return the result.`,
     info:`If you do not return anything from a function, it will return undefined.`,
     code:`
     function myFunction(a, b) {<br>
    return a * b;<br>
}<br>

var x = myFunction(5, 6);<br> 
document.write(x);<br>
     `,   
    },
    {
      heading:`Function Return Part-3`,
     data:`Another Example :-`,
     info:`The document.write command outputs the value returned by the function, which is the sum of the two parameters.`,
     code:`
     function addNumbers(a, b) {<br>
    var c = a+b;<br>
    return c;<br>
}<br>
document.write( addNumbers(40, 2) );<br>
     `,     
    }
    ],
    
},

{
    name:"Alert,Prompt and Confirm",
    pages:[
    {
      heading:"Alert Box",
      data:`JavaScript offers three types of popup boxes, the Alert, Prompt, and Confirm boxes.

Alert Box
An alert box is used when you want to ensure that information gets through to the user.
When an alert box pops up, the user must click OK to proceed.
The alert function takes a single parameter, which is the text displayed in the popup box.`,
      info:`Be careful when using alert boxes, as the user can continue using the page only after clicking OK.`, 
      code:`
   alert("Hello World"); 
     `,
    },
    {
        heading:`Prompt Box`,
        data:`A prompt box is often used to have the user input a value before entering a page.
When a prompt box pops up, the user will have to click either OK or Cancel to proceed after entering the input value.
If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null.

The prompt() method takes two parameters. 
- The first is the label, which you want to display in the text box.
- The second is a default string to display in the text box (optional).`,
        info:`When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. Do not overuse this method, because it prevents the user from accessing other parts of the page until the box is closed`,
        code:`
   var name = prompt("Enter your name");<br>
   alert(name);
        `,
    },
    {
        heading:`Confirm Box`,
        data:`A confirm box is often used to have the user verify or accept something.
When a confirm box pops up, the user must click either OK or Cancel to proceed.
If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false.`,
        info:`Do not overuse this method, because it also prevents the user from accessing other parts of the page until the box is closed.`,
        code:`
       var result = confirm("Do you really want to leave this page?");<br>
if (result == true) {<br>
    alert("Thanks for visiting");<br>
}<br>
else {<br>
    alert("Thanks for staying with us");<br>
}<br> 
        `,
    },
    ],
    
},

{
    name:"Introducing Object",
    pages:[
    {
      heading:"Javascript Object",
      data:`JavaScript variables are containers for data values. Objects are variables too, but they can contain many values.

Think of an object as a list of values that are written as name:value pairs, with the names and the values separated by colons.`,
      info:`JavaScript objects are containers for named values.`,
      code:`
     var person = {<br>
 name: "John", age: 31, <br>
 favColor: "green", height: 183<br>
}; <br>
      `, 
    },
    {
       heading:`Object properties`,
       data:`You can access object properties in two ways.
  This example demonstrates how to access the age of our person object.

 JavaScript's built-in length property is used to count the number of characters in a property or string.`,
       info:`Objects are one of the core concepts in JavaScript.`,
       code:`
       objectName.propertyName<br>
//or<br>
objectName['propertyName']<br><br><br>


//First <br>
var person = {<br>
    name: "John", age: 31,<br> 
    favColor: "green", height: 183<br>
};<br>
var x = person.age;<br>
var y = person['age'];<br>

document.write(x);<br>
document.write(y);<br><br><br>

//Second<br>
var course = {name: "JS", lessons: 41};<br>
document.write(course.name.length);<br>
       `,        
    },
    {
       heading:`Object Methods`,
       data:`An object method is a property that contains a function definition.

Use the following syntax to access an object method.
As you already know, document.write() outputs data. The write() function is actually a method of the document object. 
`,
       info:`Methods are functions that are stored as object properties.`,
       code:`
       //Syntax<br>
objectName.methodName()<br><br>

//Code<br>
document.write("This is some text");<br>
       `,        
    },
    ],
    
},

{
    name:"Create Your Own Object",
    pages:[
    {
      heading:"The Object Constructor",
      data:`In the previous lesson, we created an object using the object literal (or initializer) syntax.
This allows you to create only a single object.
Sometimes, we need to set an "object type" that can be used to create a number of objects of a single type.
The standard way to create an "object type" is to use an object constructor function. 
The above function (person) is an object constructor, which takes parameters and assigns them to the object properties.       
      `,
      info:`The this keyword refers to the current object.
Note that this is not a variable. It is a keyword, and its value cannot be changed.`,
     code:`
     //Initilize Syntax
    var person = {<br>
name: "John", age: 42, favColor: "green"<br>
};<br>
<br>
//Constructor <br>
function person(name, age, color) {<br>
  this.name = name;<br>
  this.age = age;<br>
  this.favColor = color;<br>
}<br>

     `, 
    },
    {
       heading:`Creating Objects Part-1`,
       data:`Once you have an object constructor, you can use the new keyword to create new objects of the same type.`,
       info:`p1 and p2 are now objects of the person type. Their properties are assigned to the corresponding values.`,
       code:`
function person(name, age, color) {<br>
    this.name = name;<br>
    this.age = age;<br>
    this.favColor = color;<br>
}<br>
<br>
var p1 = new person("John", 42, "green");<br>
var p2 = new person("Amy", 21, "red");<br>
<br>
document.write(p1.age); <br>
document.write(p2.name);<br>
       `,        
    },
    {
       heading:`Creating Objects Part-2`,
       data:`
 Consider the Following Example:- 

Access the object's properties by using the dot syntax, as you did before. 
`,

       info:`Understanding the creating of Objects in essential`,
       code:`
       function person (name, age) {<br>
    this.name = name;<br>
    this.age = age;<br>
}<br>
var John = new person("John", 25);<br>
var James = new person("James", 21);<br>
<br>
document.write(John.age);<br>
       `,        
    },
    ],
    
},

{
    name:"Object Initialization",
    pages:[
    {
      heading:"Object Initialization",
      data:`Use the object literal or initializer syntax to create single objects.`,
      info:`Objects consist of properties, which are used to describe an object. Values of object properties can either contain primitive data types or other objects.`, 
      code:`
      var John = {name: "John", age: 25};<br>
var James = {name: "James", age: 21};<br>
      `,
    },
    {
       heading:`Using Object initializer`,
       data:`Spaces and line breaks are not important. An object definition can span multiple lines.
No matter how the object is created, the syntax for accessing the properties and methods does not change.       
       `,
       info:`Don't forget about the second accessing syntax: John['age'].`,
       code:`
      var John = {<br>
    name: "John",<br>
    age: 25<br>
};<br>
var James = {<br>
    name: "James",<br>
    age: 21
};<br>
<br>
document.write(John.age);<br> 
       `,        
    },
    ],
    
},

{
    name:"Adding Object Methods",
    pages:[
    {
      heading:"Methods Part-1",
      data:`Methods are functions that are stored as object properties. 

Use the following syntax to create an object method.

A method is a function, belonging to an object. It can be referenced using the this keyword.
The this keyword is used as a reference to the current object, meaning that you can access the objects properties and methods using it.

Defining methods is done inside the constructor function.

In the example above, we have defined a method named changeName for our person, which is a function, that takes a parameter name and assigns it to the name property of the object. 
this.name refers to the name property of the object.
`,
      info:`The changeName method changes the object's name property to its argument.`, 
      code:`
      //Syntax<br>
methodName = function() { code lines }<br>
<br>
<br>
//Example<br>
function person(name, age) {<br>
    this.name = name; <br> 
    this.age = age;<br>
    this.changeName = function (name) {<br>
        this.name = name;<br>
    }<br>
}<br>
<br>
var p = new person("David", 21);<br>
p.changeName("John");<br>
<br>
document.write(p.name);<br>      
      `,
    },
    {
       heading:`Methods Part-2`,
       data:`You can also define the function outside of the constructor function and associate it with the object.
As you can see, we have assigned the object's yearOfBirth property to the bornYear function.
The this keyword is used to access the age property of the object, which is going to call the method.
`,
       info:`Note that it's not necessary to write the function's parentheses when assigning it to an object.`,
       code:`
   function person(name, age) {<br>
  this.name= name; <br> 
  this.age = age;<br>
  this.yearOfBirth = bornYear;<br>
}<br>
function bornYear() {<br>
  return 2016 - this.age;<br>
}    <br>
       `,        
    },
    {
       heading:`Methods Part-3`,
       data:`Call method as usual`,
       info:`Call the method by the property name you specified in the constructor function, rather than the function name.`,
       code:`
    function person(name, age) {<br>
    this.name= name;<br>
    this.age = age;<br>
    this.yearOfBirth = bornYear;<br>
}<br>
function bornYear() {<br>
    return 2016 - this.age;<br>
}<br>
<br>
var p = new person("A", 22);<br>
<br>
document.write(p.yearOfBirth());<br>         
       `,        
    },
    ],
    
},

{
    name:"Array",
    pages:[
    {
      heading:"Arrays in Javascript",
      data:`Arrays store multiple values in a single variable. 

To store three course names, you need three variables.
But what if you had 500 courses? The solution is an array.
`,
      info:`This syntax declares an array named courses, which stores three values, or elements.`, 
      code:`
     var courses = new Array("HTML", "CSS", "JS"); 
      `,
    },
    {
     heading:`Accessing in arrays Part-1`,
     data:`You refer to an array element by referring to the index number written in square brackets.
This statement accesses the value of the first element in courses and changes the value of the second element. `,
     info:`[0] is the first element in an array. [1] is the second. Array indexes start with 0.`,   
     code:`var courses = new Array("HTML", "CSS", "JS"); <br>
var course = courses[0]; // HTML<br>
courses[1] = "C++"; //Changes the second element
<br>
`,
    },
    {
     heading:`Accessing in arrays Part-2`,
     data:`Attempting to access an index outside of the array, returns the value undefined.`,
     info:`Our courses array has just 3 elements, so the 10th index, which is the 11th element, does not exist (is undefined).`,
     code:`
     var courses = new Array("HTML", "CSS", "JS");<br>
document.write(courses[10]);<br>
     `,   
    },
    ],
    
},


{
    name:"Other Ways to create Arrays",
    pages:[
    {
      heading:"Creating Arrays Part-1",
      data:`You can also declare an array, tell it the number of elements it will store, and add the elements later.`,
      info:`An array is a special type of object.
An array uses numbers to access its elements, and an object uses names to access its members.`, 
      code:`
var courses = new Array(3);<br>
courses[0] = "HTML";<br>
courses[1] = "CSS";<br>
courses[2] = "JS";<br><br>

document.write(courses[2]);<br> 
      `,
    },
    {
        heading:`Creating Arrays Part-2`,
        data:`
JavaScript arrays are dynamic, so you can declare an array and not pass any arguments with the Array() constructor. You can then add the elements dynamically.

Array literal:-
For greater simplicity, readability, and execution speed, you can also declare arrays using the array literal syntax.


`,
        info:`You can access and modify the elements of the array using the index number, as you did before.
The array literal syntax is the recommended way to declare arrays.`,
        code:`
var courses = new Array();<br>
courses[0] = "HTML";<br>
courses[1] = "CSS";<br>
courses[2] = "JS";<br>
courses[3] = "C++";<br>

document.write(courses[2]);<br>        

<br>//Array literal<br>
var courses = ["HTML", "CSS", "JS"];<br> 

document.write(courses[2]);<br>

        `,
    },
    ],
    
},


{
    name:"Array Methods and Properties",
    pages:[
    {
      heading:"The length Property",
      data:`JavaScript arrays have useful built-in properties and methods.

An array's length property returns the number of it's elements.`,
      info:`The length property is always one more than the highest array index.
If the array is empty, the length property returns 0.`, 
      code:`
      var courses = ["HTML", "CSS", "JS"];<br>
document.write(courses.length);<br>
      `,
    },
    {
        heading:`Combining Property`,
        data:`JavaScript's concat() method allows you to join arrays and create an entirely new array.
The courses array that results contains 4 elements (HTML, CSS, JS, C++).
        `,
        info:`
The concat operation does not affect the c1 and c2 arrays - it returns the resulting concatenation as a new array.`,
        code:`
        var c1 = ["HTML", "CSS"];<br>
var c2 = ["JS", "C++"];<br>
var courses = c1.concat(c2);<br>

document.write(courses[2]);<br>
        `,
    },
    ],
    
},


{
    name:"Associative Array",
    pages:[
    {
      heading:"Associative arrays Part-1",
      data:`While many programming languages support arrays with named indexes (text instead of numbers), called associative arrays, JavaScript does not.
However, you still can use the named array syntax, which will produce an object.
Now, person is treated as an object, instead of being an array.
The named indexes "name" and "age" become properties of the person object.

`,
      info:`As the person array is treated as an object, the standard array methods and properties will produce incorrect results. For example, person.length will return 0.`, 
      code:`
      var person = []; //empty array<br>
person["name"] = "John";<br>
person["age"] = 46;<br>
document.write(person["age"]);<br>
      `,
    },
    {
        heading :`Associative arrays Part-2`,
        data:`Remember that JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes.
It is better to use an object when you want the index to be a string (text).
Use an array when you want the index to be a number.
`,
        info:`If you use a named index, JavaScript will redefine the array to a standard object.`,
        
    },
    ],
    
},



{
    name:"The Math Object",
    pages:[
    {
      heading:"Math Object Part-1",
      data:`The Math object allows you to perform mathematical tasks, and includes several properties. `,
      info:`Math has no constructor. There's no need to create a Math object first.`, 
      code:`
    document.write(Math.PI);<br>
//Outputs 3.141592653589793 <br> 
      `,
    },
    {
        heading:`Math Object Methods`,
        data:`The Math object contains a number of methods that are used for calculations.
        
For example, the following will calculate the square root of a number.
`,
        info:`To get a random number between 1-10, use Math.random(), which gives you a number between 0-1. Then multiply the number by 10, and then take Math.ceil() from it:  Math.ceil(Math.random() * 10).`,
        code:`
       var number = Math.sqrt(4);<br> 
document.write(number);<br>
//Outputs 2 <br>
        `,
    },
    {
        heading:`Math Object Part-2`,
        data:`Let's create a program that will ask the user to input a number and alert its square root.`,
        info:`Math is a handy object. You can save a lot of time using Math, instead of writing your own functions every time.`,
        code:`
        var n = prompt("Enter a number", "");<br>
var answer = Math.sqrt(n);<br>
alert("The square root of " + n + " is " + answer);<br>
        `,
    },
    ],
    
},

{
    name:"The Date Object",
    pages:[
    {
      heading:"Set Interval",
      data:`The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
It will continue calling the function until clearInterval() is called or the window is closed.
This will call the myAlert function every 3 seconds (1000 ms = 1 second).
`,
      info:`Write the name of the function without parentheses when passing it into the setInterval method. `, 
      code:`
      function myAlert() {<br>
    alert("Hi");<br>
}<br>
setInterval(myAlert, 3000);<br>
`,
    },
    {
     heading:`Date Object`,
     data:`The Date object enables us to work with dates.
A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.

Using new Date(), create a new date object with the current date and time.

The other ways to initialize dates allow for the creation of new date objects from the specified date and time.
`,
     info:`JavaScript counts months from 0 to 11. January is 0, and December is 11.
Date objects are static, rather than dynamic. The computer time is ticking, but date objects don't change, once created.`,
     code:`
    //Syntax <br>
     var d = new Date();<br>
//d stores the current date and time<br>
new Date(milliseconds)<br>
new Date(dateString)<br>
new Date(year, month, day, hours, minutes, seconds, milliseconds)<br>
<br>
//Example <br>
var d1 = new Date(86400000); 
<br>
//Fri Jan 02 2015 10:42:00<br>
var d2 = new Date("January 2, 2015 10:42:00");
<br>
//Sat Jun 11 1988 11:42:00<br>
var d3 = new Date(88,5,11,11,42,0,0);<br>
     `,   
    },
    {
     heading:`Date Methods`,
     data:`When a Date object is created, a number of methods make it possible to perform operations on it.
We declared a function printTime(), which gets the current time from the date object, and prints it to the screen.
We then called the function once every second, using the setInterval method.  
Lets create a program that print Current time every second   
     `,
     info:`The innerHTML property sets or returns the HTML content of an element.
In our case, we are changing the HTML content of our document's body. This overwrites the content every second, instead of printing it repeatedly to the screen.`,
     code:`
     function printTime() {<br>
    var d = new Date();<br>
    var hours = d.getHours();<br>
    var mins = d.getMinutes();<br>
    var secs = d.getSeconds();<br>
    document.body.innerHTML = hours+":"+mins+":"+secs;<br>
}<br>
setInterval(printTime, 1000);<br>
     
     `,   
    },
    ],
    
},
{
    name:"What is DOM?",
    pages:[
    {
      heading:"The DOM",
      data:`When you open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen.
To accomplish that, the browser builds the Document Object Model of that page, which is an object oriented model of its logical structure.
The DOM of an HTML document can be represented as a nested set of boxes `,
      info:`JavaScript can be used to manipulate the DOM of a page dynamically to add, delete and modify elements.`, 
    },
    {
      heading:`The document Object`,
      data:`There is a predefined document object in JavaScript, which can be used to access all elements on the DOM.
In other words, the document object is the owner (or root) of all objects in your webpage.
So, if you want to access objects in an HTML page, you always start with accessing the document object.
As body is an element of the DOM, we can access it using the document object and change the content of the innerHTML property.`,
      info:`The innerHTML property can be used on almost all HTML elements to change its content.`,
    },
    ],
    
},

{
    name:"Selecting Elements",
    pages:[
    {
      heading:"Selecting Elements Part-1",
      data:`All HTML elements are objects. And as we know every object has properties and methods.
The document object has methods that allow you to select the desired HTML element.
These three methods are the most commonly used for selecting HTML elements
In the example below, the getElementById method is used to select the element with id="demo" and change its content
`,
      info:`The example above assumes that the HTML contains an element with id="demo", for example <div id="demo"></div>.`, 
      code:`
    //Syntax<br>
 //finds element by id<br>
document.getElementById(id)<br><br> 

//finds elements by class name<br>
document.getElementsByClassName(name) <br>
<br>
//finds elements by tag name<br>
document.getElementsByTagName(name) <br>  

<br>
//Example<br> 
var elem = document.getElementById("demo");<br>
elem.innerHTML = "Hello World!";<br>
      `,
    },
    {
       heading:`Selecting Elements Part-2`,
       data:`The getElementsByClassName() method returns a collection of all elements in the document with the specified class name.
For example, if our HTML page contained three elements with class="demo", the following code would return all those elements as an array

Similarly, the getElementsByTagName method returns all of the elements of the specified tag name as an array.
The following example gets all paragraph elements of the page and changes their content `,
       info:`We used the length property of the array to loop through all the selected elements in the above example.`,
       code:`
 var arr =  document.getElementsByClassName("demo");<br>
//accessing the second element<br>
arr[1].innerHTML = "Hi";<br>
     <br> 
/*accessing all the p tags
( consider there are three p tags)*/<br>
var arr = document.getElementsByTagName("p");<br>
for (var x = 0; x < arr.length; x++) {<br>
  arr[x].innerHTML = "Hi there";<br>
}<br>
       
       `, 
    },
    {
       heading:`Working With DOM`,
       data:`
Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element.

We can, for example, select all child nodes of an element and change their content.

Consider we have two pages inside in a div whose class is demo.
Lets try to access the p tags       
       `,
       info:`The code above changes the text of both paragraphs to "new text".`,
       code:`
   var a = document.getElementById("demo");<br>
     var arr = a.childNodes;<br>
     for(var x=0;x<arr.length;x++) {<br>
       arr[x].innerHTML = "new text";<br>
     } <br>    
       `, 
    },
    ],
    
},
{
    name:"Selecting Elements",
    pages:[
    {
      heading:"Changing Attribute",
      data:`Once you have selected the element(s) you want to work with, you can change their attributes. 
As we have seen in the previous lessons, we can change the text content of an element using the innerHTML property.
Similarly, we can change the attributes of elements.
For example, we can change the src attribute of an image`,
      info:`Practically all attributes of an element can be changed using JavaScript. `, 
      code:`
    var el = document.getElementById("myimg");
el.src = "apple.png";<br>
      `,
    },
    {
       heading:`Changing Style`,
       data:`The style of HTML elements can also be changed using JavaScript.
All style attributes can be accessed using the style object of the element. 
`,
       info:`All CSS properties can be set and modified using JavaScript. Just remember, that you cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter. 
For example: the background-color property should be referred to as backgroundColor.`,
       code:`
var x = document.getElementById("demo");<br>
  x.style.color = "6600FF";<br>
  x.style.width = "100px";<br>
       
       `, 
    },
    ],
    
},
{
    name:"Adding or Removing Elements",
    pages:[
    {
      heading:"Creating Elements",
      data:`Use the following methods to create new nodes:
element.cloneNode() clones an element and returns the resulting node.
document.createElement(element) creates a new element node. 
document.createTextNode(text) creates a new text node.

This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods:
element.appendChild(newNode) adds a new child node to an element as the last child node.
element.insertBefore(node1, node2) inserts node1 as a child before node2.
`,
      info:`This creates a new paragraph and adds it to the existing div element on the page. `, 
      code:`
  //creating a new paragraph<br>
  var p = document.createElement("p");<br>
  var node = document.createTextNode("Some new text");<br>
  //adding the text to the paragraph<br>
  p.appendChild(node);<br>
<br>
<br>  
  //adding the paragraph to the body<br>
  document.body.appendChild(p);<br>
      `,
    },
    {
        heading:`Removing Elements`,
        data:`To remove an HTML element, you must select the parent of the element and use the removeChild(node) method.`,
        info:`An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the element we want to remove:
var child = document.getElementById("p1");
child.parentNode.removeChild(child);`,
        code:`

//This rempves the id= p1 from class= demo<br>
var parent = document.getElementById("demo");<br>
var child = document.getElementById("p1");<br>
parent.removeChild(child);        <br>
        `,
    },
    {
        heading:`Replacing Elements`,
        data:`To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used.`,
        info:`The code above creates a new paragraph element that replaces the existing p1 paragraph.`,
        code:`
 var p = document.createElement("p");<br>
var node = document.createTextNode("This is new");<br>
p.appendChild(node);<br>
<br>
var parent = document.getElementById("demo");<br>
var child = document.getElementById("p1");<br>
parent.replaceChild(p, child);<br>
`,
    },
    ],
    
},



];



//firebase 
var db;
var dbRef;


//console.log(quiz_data[0].quizzes[3].question_data.options[0].data);
//🤣😂🤣🤣🤣😂🤣😂
const dom = {};
var editor;
var activeIndex;
var activeQuizIndex;
var counter = 0;
var solved_problem = [];
var points = 0;
var easy_problem_points = 10;
var medium_problem_points = 50;
var hard_problem_points = 100;
var quiz_no = 0;
var quiz_ans = "";
const HIDDEN = `
<span class="fa fa-lock"></span>
This test case is hidden
`;
var current_page = 0;
var course_no = 0;

function id(_){
    return document.getElementById(_);
}
function clas(_){
    return document.getElementsByClassName(_);
}

function loginUser(){
 clas("formContainer")[0].style.visibility="visible";
 clas("formContainer")[0].style.opacity="1";
clas("formContainer1")[0].style.visibility="hidden";
 clas("formContainer1")[0].style.opacity="0";

}
function registerUser(){
 clas("formContainer1")[0].style.visibility="visible";
 clas("formContainer1")[0].style.opacity="1";
clas("formContainer")[0].style.visibility="hidden";
 clas("formContainer")[0].style.opacity="0";
     
}

function login(){
    clas("formContainer")[0].style.visibility="hidden";
 clas("formContainer")[0].style.opacity="0";
clas("formContainer1")[0].style.visibility="hidden";
 clas("formContainer1")[0].style.opacity="0";
}
function registr(){
    clas("formContainer")[0].style.visibility="hidden";
 clas("formContainer")[0].style.opacity="0";
clas("formContainer1")[0].style.visibility="hidden";
 clas("formContainer1")[0].style.opacity="0";
 
var name = clas("userRegisterName")[0].value;
var pasword = clas("userRegisterPassword")[0].value;


//Register
if(name && pasword){
if(!registrUsers.includes(name)){
var ref = db.ref("/users/"+name);
var data = {
   points : 0,
   password: pasword, 
};
ref.set(data);
}
else{
    alert("Cant Register");
}

}





}


function closeRegistrLoginForm(){
    clas("formContainer")[0].style.visibility="hidden";
 clas("formContainer")[0].style.opacity="0";
clas("formContainer1")[0].style.visibility="hidden";
 clas("formContainer1")[0].style.opacity="0";
}

function js_intro(no){
    course_no = no;
    show_points()
 var coursehtml = clas("course_info")[0]; 
    coursehtml.innerHTML=" ";
 var courseName = js_intro_course[no].name;
  //console.log(quizName);
  var courseLen = js_intro_course[no].totalPage;
  var courseData = js_intro_course[no].pages[current_page].data;
  var courseTip = js_intro_course[no].pages[current_page].info;
    coursehtml.innerHTML+=` 
<div class="course_info_header">
<div class="course_info_name">
<span class="course_info_back fa fa-angle-left" onclick="back_course()"></span>
<p class="name_course_info">${courseName}</p>
</div>
</div>
<div class="course_info_data_container">
</div>
`;

for(var i = 0;i<js_intro_course[no].pages.length;i++){
clas("course_info_data_container")[0].innerHTML+=`
<details class="course_info_details">
        <summary class="course_info_summary">
         ${js_intro_course[no].pages[i].heading}
        </summary>
        <p class="data">${js_intro_course[no].pages[i].data}
        </p>
        <p class="data1">${js_intro_course[no].pages[i].info}</p>        
        </details>
`;
clas("data")[i].innerText=js_intro_course[no].pages[i].data;
clas("data1")[i].innerText=js_intro_course[no].pages[i].info;

if(js_intro_course[no].pages[i].code){
clas("data")[i].innerHTML+= `
<b><code class="cCode">${js_intro_course[no].pages[i].code}</code></b>
`;
}

}

  clas("course_info")[0].style.visibility ="visible";
    clas("course_info")[0].style.opacity ="1";
    clas("course_quiz_info")[0].style.visibility ="hidden";
    clas("course_quiz_info")[0].style.opacity ="0";
    clas("course")[0].style.visibility ="hidden";
    clas("course")[0].style.opacity ="0";  
    
    
}
let registrUsers= [];
window.onload = init;
function init(){
    var menu = document.querySelector('.menu');
        var back = document.querySelector('.back');
  menu.addEventListener("click",function(){
    document.querySelector(".navitems").style.left = "0vw";
});
back.addEventListener("click",function(){
    document.querySelector(".navitems").style.left = "-100vw";
});
  setTimeout(()=>{ 
    id("loading").classList.add("remove");
   for(var i=0;i<clas("difficulty").length;i++){
   clas("difficulty")[i].innerText=codes[i].level;
} 
    
   },1000);
   
var items = document.getElementsByClassName("item");
document.getElementById("indicator").style.width = 100/items.length + "%";        
    for(var i = 0; i<items.length; i++){    
      if(items[i].id == "active"){
document.getElementById("indicator").style.left = 100/items.length*i + "%" ;
      }
    }      
  

 firebase.initializeApp({
      databaseURL: "https://fir-app-4ea60.firebaseio.com"
  });     
  
db = firebase.database();
dbRef = db.ref("users/");

  
// registrUsers= [];

dbRef.on("value",(data)=>{
var key = data.val();
let keys = Object.keys(key);
registrUsers = keys;
for(var i = 0;i<keys.length;i++){
    var k = keys[i];
   // console.log(key[k].points)
   // console.log(key[k].password)
}
});    
   
}
function items(e){
var items = document.getElementsByClassName("item");    
    for(var i = 0; i<items.length; i++){      
      items[i].id = ""
    } 
    e.id = "active";            
document.getElementById("indicator").style.width = 100/items.length + "%";        
    for(var i = 0; i<items.length; i++){     
      if(items[i].id == "active"){            
document.getElementById("indicator").style.left = 100/items.length*i + "%" ;
      }
    }
          
}


function top_rankers(e){
    items(e);
    clas("main-heading")[0].innerHTML ="Top Learners";
    clas("course")[0].style.visibility="hidden";
    clas("course")[0].style.opacity="0";  
    clas("code-coach")[0].style.visibility="hidden";
    clas("code-coach")[0].style.opacity="0";
    clas("user-leaderboard")[0].style.visibility="hidden";
    clas("user-leaderboard")[0].style.opacity="0";
    
    clas("top-learner")[0].style.visibility="visible";
    clas("top-learner")[0].style.opacity="1";
    clas("setting-page")[0].style.visibility="hidden";
    clas("setting-page")[0].style.opacity="0";
    current_page=0;
}

function setting_page(e){
    items(e);
    clas("main-heading")[0].innerHTML ="Setting";
    clas("course")[0].style.visibility="hidden";
    clas("course")[0].style.opacity="0";  
    clas("code-coach")[0].style.visibility="hidden";
    clas("code-coach")[0].style.opacity="0";
    clas("user-leaderboard")[0].style.visibility="hidden";
    clas("user-leaderboard")[0].style.opacity="0";
    
    
    clas("top-learner")[0].style.visibility="hidden";
    clas("top-learner")[0].style.opacity="0";
    clas("setting-page")[0].style.visibility="visible";
    clas("setting-page")[0].style.opacity="1";
    current_page=0;
    
    setTimeout(()=>{
    clas("setting-page")[0].innerHTML=" ";  
    clas("setting-page")[0].innerHTML+=`
    <div class="setting-container">
    <center><h2 class="lgn">Login/Register</h2></center>
    <button onclick="loginUser()" class="login-btn">Login</button>
    <button onclick="registerUser()" class="register-btn">Register</button>
    </div>
    `;
    },500);
}
function js_course(e){
    items(e);
    back_course();
    quiz_no =0;
    show_points();
    clas("main-heading")[0].innerHTML ="JavaScript Course";
    clas("course")[0].style.visibility="visible";
    clas("course")[0].style.opacity="1";  
    clas("code-coach")[0].style.visibility="hidden";
    clas("code-coach")[0].style.opacity="0";
    clas("user-leaderboard")[0].style.visibility="hidden";
    clas("user-leaderboard")[0].style.opacity="0";
    
    clas("top-learner")[0].style.visibility="hidden";
    clas("top-learner")[0].style.opacity="0";
    clas("setting-page")[0].style.visibility="hidden";
    clas("setting-page")[0].style.opacity="0";
    current_page=0;
    
}
function coach(e){
    items(e);
    back_course()
    quiz_no =0;
    show_points()
 clas("main-heading")[0].innerHTML ="Code Coach Playground";
 clas("code-coach")[0].style.visibility="visible";
    clas("code-coach")[0].style.opacity="1";
    
 clas("course")[0].style.visibility="hidden";
    clas("course")[0].style.opacity="0";
    clas("user-leaderboard")[0].style.visibility="hidden";
    clas("user-leaderboard")[0].style.opacity="0";
    
    clas("top-learner")[0].style.visibility="hidden";
    clas("top-learner")[0].style.opacity="0";
    clas("setting-page")[0].style.visibility="hidden";
    clas("setting-page")[0].style.opacity="0";
    current_page=0;
}
function leaderboard(e){
    items(e);
    back_course()
    quiz_no =0;
    show_points()
    clas("main-heading")[0].innerHTML ="Leaderboard";
    clas("user-leaderboard")[0].style.visibility="visible";
    clas("user-leaderboard")[0].style.opacity="1";
    
    clas("code-coach")[0].style.visibility="hidden";
    clas("code-coach")[0].style.opacity="0";
    clas("course")[0].style.visibility="hidden";
    clas("course")[0].style.opacity="0";

    clas("top-learner")[0].style.visibility="hidden";
    clas("top-learner")[0].style.opacity="0";
    clas("setting-page")[0].style.visibility="hidden";
    clas("setting-page")[0].style.opacity="0";
    current_page=0;
}



function activateQuiz(no){
    show_points()
var quizhtml = clas("course_quiz_info")[0]; 
quizhtml.innerHTML=" ";
  var quizName = quiz_data[no].name;
  //console.log(quizName);
  var quizLen = quiz_data[no].totalQuiz;
quizhtml.innerHTML+=`
<div class="quizzes_header">
<div class="quizzes_name"><span class="quizzes_back fa fa-angle-left" onclick="back_course()"></span><p class="name_quiz">${quizName}</p></div>
</div>
<main>
         <div class="quizzes_course_questions">
          <p class="quizzes_course_question"></p>
          <div class="quizzes_course_answers">
            <div class="quizzes_course_answer" onclick="slctAns(${0})"><p class="quizzes_course_opt"></p></div>
            <div class="quizzes_course_answer" onclick="slctAns(${1})"><p class="quizzes_course_opt"></p></div>
            <div class="quizzes_course_answer" onclick="slctAns(${2})"><p class="quizzes_course_opt"></p></div>
            <div class="quizzes_course_answer" onclick="slctAns(${3})"><p class="quizzes_course_opt"></p></div>
          </div>
        </div>
        <div>
    <button id="checkButton" onclick="check(${no})">Check</button>
          <div class="quizzes_result_box"><p>Good Luck for Solving Quizzes</p></div>
        </div>
        </main> 
`;

  clas("course_quiz_info")[0].style.visibility ="visible";
    clas("course_quiz_info")[0].style.opacity ="1";
    clas("course_info")[0].style.visibility ="hidden";
    clas("course_info")[0].style.opacity ="0";
    clas("course")[0].style.visibility ="hidden";
    clas("course")[0].style.opacity ="0";
  for(var i = 0;i<quizLen;i++){
  var quizQues = quiz_data[no].quizzes[quiz_no].question_data.question;
 
 clas("quizzes_course_question")[0].innerText =quizQues;
 var quizLen =quiz_data[no].quizzes[quiz_no].question_data.options;
  for(var i = 0;i<quizLen.length;i++){
    clas("quizzes_course_opt")[i].textContent = quizLen[i].data;
  }
  
    }
}


function back_course(){
    clas("course_quiz_info")[0].style.visibility ="hidden";
    clas("course_quiz_info")[0].style.opacity ="0";
    clas("course_info")[0].style.visibility ="hidden";
    clas("course_info")[0].style.opacity ="0";
    clas("course")[0].style.visibility ="visible";
    clas("course")[0].style.opacity ="1";    
    quiz_no =0;
    current_page=0;
}

function slctAns(k){
var ans = clas("quizzes_course_opt")[k].textContent;
   quiz_ans = ans;
}
function check(no){
    //console.log(no)
var quizAns = quiz_data[no].quizzes[quiz_no].question_data.answer;
var correctAns =quiz_data[no].quizzes[quiz_no].question_data.options[quizAns].data;
if(correctAns == quiz_ans){
var quizLen = quiz_data[no].totalQuiz;
if(quiz_no !== quizLen-1){
    quiz_no++;
    activateQuiz(no);
}
else{
    back_course()
}
clas("quizzes_result_box")[0].innerText="Congratulations for solving previous quiz";
} 
else{
     clas("quizzes_result_box")[0].innerText="Try Again";  
   
}
}


function show_points(){
      solved_problem.forEach(function(data){
    clas("solvedInfo")[data].innerText="Solved"; 
     counter =0;
  clas("user-points")[0].innerText ="Points : "+points;  
   });
}



function initDom(){
    
    dom.codeTitle = clas("code-title")[activeIndex];
    dom.codeLevel = id("code-level");
    dom.codeDescription = id("code-description");    
    dom.error = id("error");    
    dom.cases = id("cases");
    
}



function init1(){
    initDom();    
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setValue(codes[activeIndex].code);
    
}

function getEvaluatedValue(value){
    try{
        return eval(value) || value;
    } catch(e){}
    
    return value;
}



function evaluateCode(){
var codeSchema = codes[activeIndex];
    
    dom.cases.innerHTML = "";
    editor.container.style.pointerEvents = "none";
    let solved = true;
    
    for(let testCase of codeSchema.testCases) {
        // add a call to the function with the test value to the user function
        var testCode = editor.getValue() + `${testCase.run}`;
    
        // evaluate the result
        const yourOutput = eval(testCode);
        const expectedOutput = getEvaluatedValue(testCase.expected);
    
        
        const yourText = ` Your Output: ${yourOutput}`;
        const expectedText = testCase.hidden ? HIDDEN : ` Expected Output: ${expectedOutput}`;
    
        const info = `${yourText}<br/>${expectedText}`;
    
    
    if(yourOutput==expectedOutput){
            counter++;
        }
    
        // compare the output to the expected output
        

        const result = yourOutput == expectedOutput ? "Passed":"Failed";
        
        if(!result){
            solved = false;
        }
        dom.cases.innerHTML +=`<div  id='k'class='cases-test''>
            <div>${info}</div>
            <div class='${result ? "green":"red"}'>${result}</div>
        </div>`;
    }
    
    
    editor.container.style.pointerEvents = "unset";
    codeSchema.solved = solved;
    codeSchema.code = editor.getValue();
    
      if(counter==codes[activeIndex].testCases.length){
solved_problem.push(activeIndex);
 if(codes[activeIndex].level=="Easy"){
    points+=easy_problem_points;
       
}
else if(codes[activeIndex].level=="Medium"){
    points+= medium_problem_points;
        
}
else if(codes=[activeIndex].level=="Hard"){
    points+= hard_problem_points;
    
}
  
 if(codes[activeIndex].isSolved==false){
 var data_info = `
  <div onclick="activate_ground(${activeIndex})" class="code-title">${codes[activeIndex].title}
            <div class="problemInfo"><span class="difficulty">${codes[activeIndex].level}</span><span class="solvedInfo">UnSolved</span></div>
            </div>
  `;
 clas("solved_problems")[0].innerHTML +=  data_info;
 codes[activeIndex].isSolved = true;
   };
}
        
}

function activate_ground(no){
   activeIndex = no;
   //console.log(no)
   init1();
   clas("code-container")[0].style.visibility = "hidden";
   clas("code-container")[0].style.opacity= "0";
   id("editor-container").style.visibility ="visible";
   id("editor-container").style.opacity ="1";
   id("controls-container").style.visibility = "visible";
   id("controls-container").style.opacity= "1";
   id("cases").style.visibility ="visible";
   id("cases").style.opacity ="1";
   dom.cases.innerHTML = "";
   show_problem()
   activeIndex = no;
}


function show_problem(){
 dom.cases.innerHTML = 
`<div class="problem-detail">

<h2 class="heading1">${codes[activeIndex].title}</h2>
<div class="intro">${codes[activeIndex].description}</div>

<h3 class="heading2">Task</h3>
<div class="task">${codes[activeIndex].task}</div>

<h3 class="heading2">Input Format</h3>
<div class="inputFormat">${codes[activeIndex].input_format}</div>
<h3 class="heading2">Output Format</h3>
<div class="outputFormat">${codes[activeIndex].output_format}</div>

<h3 class="heading2">Input Sample</h3>
<div class="inputDemo">${codes[activeIndex].input_demo}</div>
<h3 class="heading2">Output Sample</h3>
<div class="outputDemo">${codes[activeIndex].output_demo}</div>

</div><br><br><br><br>`;
 
 
}


function back_home(){
    clas("code-container")[0].style.visibility = "visible";
   clas("code-container")[0].style.opacity= "1";
   id("editor-container").style.visibility ="hidden";
   id("editor-container").style.opacity ="0";
   id("controls-container").style.visibility = "hidden";
   id("controls-container").style.opacity= "0";
   id("cases").style.visibility ="hidden";
   id("cases").style.opacity ="0";
   dom.cases.innerHTML ="";
   show_points();
}

const codes = [
     
     
//Even Number Code coach challenge          
     
     {
        title: "Even Number",
        level: "Easy",
        description: `A Number Which is Divisble By 2 is Even Number`,
        input_format:`A Number which is odd or Even`,
        task:`Show that A Number is Even`,
        output_format:`If a Number is Even then it show "Even" OtherWise It show "Not Even"`,
        input_demo:3,
        output_demo:"Not Even",
        isSolved : false,
        code: `function isEven(input){
    // your code goes here
    
    
}`,
        testCases:  [
            {run: "isEven(2)", expected: "Even",hidden:false},
            {run: "isEven(3)", expected: "Not Even",hidden:false},
            {run: "isEven(6)", expected: "Even", hidden: true},
        ] 
    },
    
    
    
//Odd Number Code Coach Challenge    
    
    
     {
        title: "Odd Number",
        level: "Easy",
        description: `A Number Which is not Divisble By 2 is Odd Number`,
        task:`Show that the number is Odd`,
       input_format:`A Number which is odd or Even`,
        output_format:`If a Number is Odd then it show "Odd" OtherWise It show "Not Odd"`,
        input_demo:7,
        output_demo:"Odd",
        isSolved : false,
        code: `function isOdd(input){
    // your code goes here
    
    
}`,
        testCases:  [
            {run: "isOdd(3)", expected: "Odd" ,hidden:false},
            {run: "isOdd(8)", expected: "Not Odd",hidden:false},
            {run: "isOdd(9)", expected: "Odd", hidden: true},
        ] 
    },
    
    
    
    
    
//Pig Latin Code Coach Challenge    
    
     {
        title: "Pig Latin",
        level: "Medium",
        description: `You have two friends who are speaking Pig Latin to each other! Pig Latin is the same words in the same order except that you take the first letter of each word and put it on the end, then you add 'ay' to the end of that.`,
        task:`Your task is to take a sentence in English and turn it into the same sentence in Pig Latin! `,
        input_format:`A string of the sentence in English that you need to translate into Pig Latin. (no punctuation or capitalization)`,
        output_format:`A string of the same sentence in Pig Latin.`,
        input_demo:"wow",
        output_demo:"owway",
        isSolved : false,
        code: `function pigLatin(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "pigLatin('how are you')", expected: "owhay reaay ouyay" ,hidden:false},
            {run: "pigLatin('go to home')", expected: "ogay otay omehay",hidden:false},
            {run: "pigLatin('ive got it')", expected: "veiay otgay tiay", hidden: true},
            {run: "pigLatin('cool')", expected: "oolay", hidden: true},
        ] 
    },
    
    
    
//Gotham City Code coach Problem  
    
     {
        title: "Gotham City",
        level: "Easy",
        description: `You are a police officer, and you get a report of criminal activity! Should you go on your own, or should you call a superhero to help you fight the crime? If there are less than 5, you can handle this on your own, if there are 5-10, you will want to go with Batman for backup, and if there are more than 10, you should stay where it is safe and let Batman handle this on his own.`,
        task:`Determine whether you need to call backup based on the total number of criminals being reported.`,
        input_format:`An integer that represents the total number of criminals present at the scene.`,
        output_format:`A string that says 'I got this!', 'Help me Batman', or 'Good Luck out there!' depending on the scenario`,
        input_demo:"7",
        output_demo:"Help me Batman",
        isSolved : false,
        code: `function gothamCity(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "gothamCity(1)", expected: "I got this!" ,hidden:false},
            {run: "gothamCity(5)", expected: "Help me Batman",hidden:false},
            {run: "gothamCity(2)", expected: "I got this!", hidden: true},
            {run: "gothamCity(6)", expected: "Help me Batman", hidden: true},
        ] 
    },
    
    
 //Secret Message Code coach Problem
    {
        title: "Secret Message",
        level: "Medium",
        description: `You are trying to send a secret message, and you've decided to encode it by replacing every letter in your message with its corresponding letter in a backwards version of the alphabet.`,
        task:`Create a program that replaces each letter in a message with its corresponding letter in a backwards version of the English alphabet.`,
        input_format:`A string of your message in its normal form.`,
        output_format:`A string of your message once you have encoded it (all lower case).`,
        input_demo:"Hello World",
        output_demo:"svool dliow",
        isSolved : false,
        code: `function secretMsg(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "secretMsg('Sololearn')", expected: "hlolovzim" ,hidden:false},
            {run: "secretMsg('Vegetable Pizza')", expected: "evtvgzyov kraaz",hidden:false},
            {run: "secretMsg('World')", expected: "dliow", hidden: true},
            {run: "secretMsg('Hello')", expected: "svool", hidden: true},
            {run: "secretMsg('Pizza')", expected: "kraaz", hidden: true},
        ] 
    },
    


//Hallowen Candy Code Coach Problem

{
        title: "Hallowen Candy",
        level: "Easy",
        description: `You go trick or treating with a friend and all but three of the houses that you visit are giving out candy. One house that you visit is giving out toothbrushes and two houses are giving out dollar bills. `,
        task:``,
        input_format:`An integer (>=3) representing the total number of houses that you visited.`,
        output_format:`A percentage value rounded up to the nearest whole number.`,
        input_demo:"4",
        output_demo:"50",
        isSolved : false,
        code: `function hallowenCandy(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "hallowenCandy(3)", expected: "67" ,hidden:false},
            {run: "hallowenCandy(10)", expected: "20",hidden:true},
            {run: "hallowenCandy(4)", expected: "50", hidden: true},
        ] 
    },
    


//Dega Vu Js Code coach Problem

   {
        title: "Dega Vu",
        level: "Hard",
        description: `You aren't paying attention and you accidentally type a bunch of random letters on your keyboard. You want to know if you ever typed the same letter twice, or if they are all unique letters.`,
        task:`If you are given a string of random letters, your task is to evaluate whether any letter is repeated in the string or if you only hit unique keys while you typing.`,
        input_format:`A string of random letter characters (no numbers or other buttons were pressed).`,
        output_format:`A string that says 'Deja Vu' if any letter is repeated in the input string, or a string that says 'Unique' if there are no repeats.
`,
        input_demo:"cooddddeeee",
        output_demo:"Deja Vu",
        isSolved : false,
        code: `function degaVu(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "degaVu('bbllam')", expected: "Deja Vu" ,hidden:false},
            {run: "degaVu('coder')", expected: "Unique",hidden:false},
            {run: "degaVu('booootttt')", expected: "Deja Vu", hidden: true},
            {run: "degaVu('got')", expected: "Unique", hidden: true},
            {run: "degaVu('gooootttt')", expected: "Deja Vu", hidden: true},
        ] 
    },
    
//Extra Trestial Js Code Coach Problem    
    
    {
        title: "Extra-Terrestrials",
        level: "Easy",
        description: `You meet a group of aliens, and their language is just like English except that they say every word backwards. 
How will you learn to communicate with them?`,
        task:`Take a word in English that you would like to say, and turn it into language that these aliens will understand.`,
        input_format:`A string of a word in English.`,
        output_format:`A string of the reversed word that represents the original word translated into alien language.`,
        input_demo:"code",
        output_demo:"edoc",
        isSolved : false,
        code: `function rverse(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "rverse('ballon')", expected: "nollab" ,hidden:false},
            {run: "rverse('coder')", expected: "redor",hidden:false},
            {run: "rverse('sololearn')", expected: "nraelolos", hidden: true},
            {run: "rverse('got')", expected: "log", hidden: true},
            {run: "rverse('eatttt')", expected: "ttttae", hidden: true},
        ] 
    },
 
 
 
 
 
 
    
//Password Validator Js code Coach Problem   
     
     
      {
        title: "Password Validator",
        level: "Hard",
        description: `You're interviewing to join a security team. They want to see you build a password evaluator for your technical interview to validate the input.`,
        
        task:`Write a program that takes in a string as input and evaluates it as a valid password. The password is valid if it has at a minimum 2 numbers, 2 of the following special characters ('!', '@', '#', '$', '%', '&', '*'), and a length of at least 7 characters.
If the password passes the check, output 'Strong', else output 'Weak'.`,

        input_format:`A string representing the password to evaluate.
`,

        output_format:`A string that says 'Strong' if the input meets the requirements, or 'Weak', if not.`,
        
        input_demo:"Hello@$World19",
        output_demo:"Strong",
        isSolved : false,
        code: `function validate(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "validate('hello')", expected: "Weak",hidden:false},
            {run: "validate('coderCode$@89')", expected: "Strong",hidden:false},
            {run: "validate('12345678')", expected: "Weak", hidden: true},
            {run: "validate('Sololearn&@&@&@&@12345678')", expected: "Strong", hidden: true}, 
        ] 
    },
     









//Jungle Camping Js code Coach Problem   


{
        title: "Jungle Camping",
        level: "Easy",
        description: `You are camping alone out in the jungle and you hear some animals in the dark nearby. Based on the noise they make, determine which animals they are.`,
        
        task:`You are given the noises made by different animals that you can hear in the dark, evaluate each noise to determine which animal it belongs to. Lions say 'Grr', Tigers say 'Rawr', Snakes say 'Ssss', and Birds say 'Chirp'.`,
        input_format:`A string that represent the noises that you hear with a space between them.`,
        output_format:`A string that includes each animal that you hear with a space after each one. (animals can repeat)
`,
        input_demo:"Rawr Chirp Ssss",
        output_demo:"Tiger Bird Snake",
        isSolved : false,
        code: `function jungle(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "jungle('Chirp Ssss Rawr')", expected: "Bird Snake Tiger" ,hidden:false},
            {run: "jungle('Ssss')", expected: "Snake",hidden:false},
            {run: "jungle('Rawr Ssss')", expected: "Tiger Snake", hidden: true},
        ] 
    },
 








//Vowel Counter Js Code Coach Problem

{
        title: "Vowel Counter",
        level: "Easy",
        description: `You are in an English class, your teacher tells the class that vowels are the glue that hold words and sentences together. 
They want to make sure you understand the importance of vowels in a sentence.  
You are given example sentences and are to give a total amount of vowels that are in each sentence.
`,

        task:`Write a program that takes in a string as input, counts and outputs the number of vowels (A, E, I, O, U).`,
        
        input_format:`A string (letters can be both uppercase or lowercase).`,
        
        output_format:`A number which represents the total number of vowels in the string.
`,
        input_demo:"this is a sentence",
        output_demo:"6",
        isSolved : false,
        code: `function vowelCounter(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "vowelCounter('coder')", expected: "2" ,hidden:false},
            {run: "vowelCounter('Sololearn is best')", expected: "6",hidden:false},
            {run: "vowelCounter('tiger')", expected: "2", hidden: true},
        ] 
    },


//Fruit Bowl Js code Coach Problem

{
        title: "Fruit Bowl",
        level: "Easy",
        description: `You have a bowl on your counter with an even number of pieces of fruit in it. Half of them are bananas, and the other half are apples. You need 3 apples to make a pie.`,

        task:`Your task is to evaluate the total number of pies that you can make with the apples that are in your bowl given to total amount of fruit in the bowl.
`,
        
        input_format:`An integer that represents the total amount of fruit in the bowl.`,
        
        output_format:`An integer representing the total number of whole apple pies that you can make.
`,
        input_demo:"26",
        output_demo:"4",
        isSolved : false,
        code: `function fruitBowl(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "fruitBowl(4)", expected: "0" ,hidden:false},
            {run: "fruitBowl(12)", expected: "2",hidden:false},
            {run: "fruitBowl(6)", expected: "1", hidden: true},
        ] 
    },






//Security Js Code coach Problem

{
        title: "Security",
        level: "Hard",
        description: `You are in an English class, your teacher tells the class that vowels are the glue that hold words and sentences together. 
They want to make sure you understand the importance of vowels in a sentence.  
You are given example sentences and are to give a total amount of vowels that are in each sentence.
`,

        task:`Evaluate a given floor of the casino to determine if there is a guard between the money and the thief, if there is not, you will sound an alarm.`,
        
        input_format:`A string of characters that includes $ (money), T (thief), and G (guard), that represents the layout of the casino floor.  
Space on the casino floor that is not occupied by either money, the thief, or a guard is represented by the character x.`,
        
        output_format:`A string that says 'ALARM' if the money is in danger or 'quiet' if the money is safe.
`,
        input_demo:"xxxxxGxx$xxxT",
        output_demo:"ALARM",
        isSolved : false,
        code: `function security(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "security('xxxxxGxx$xGxT')", expected: "quiet" ,hidden:false},
            {run: "security('xxxxxTxx$xxxG')", expected: "ALARM",hidden:false},
            {run: "security('Gxxxxxxx$xxxT')", expected: "ALARM", hidden: true},
           {run: "security('Gxxxxxxx$xGxT')", expected: "quiet", hidden: true},
            {run: "security('GxxxxGxx$xxxT')", expected: "ALARM", hidden: true},
              
        ] 
    },

//Land Ho! Js Code coach Problem

{
        title: "Land Ho!",
        level: "Easy",
        description: `You are on a large ship and you put down anchor near a beautiful beach. There is a small boat ferrying passengers back and forth, and you get in line for it. How long will you have to wait to get to the beach? You know that 20 people can fit on the boat and each trip to shore takes 10 minutes each way.
`,
        
        task:`Determine your wait time if you know the total number of people ahead of you in line.`,
        input_format:`An integer that represents the total number of people ahead of you in line.`,
        output_format:`An integer that represents the number of minutes that you will have to wait until you are standing on the beach.`,
        input_demo:"15",
        output_demo:"10",
        isSolved : false,
        code: `function landHo(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "landHo(1)", expected: "10" ,hidden:false},
            {run: "landHo(80)", expected: "90",hidden:false},
            {run: "landHo(15)", expected: "10", hidden: true},
        ] 
    },
 
//Izzy The lgauna Js Code Coach Problem

{
        title: "Izzy lgauna",
        level: "Easy",
        description: `Your pet Iguana has run away, and you found it up in a tree! It will come down right away if you brought the right snacks, but if you don't have enough, you will have to wait. You need 10 total snack points to bring it down. Lettuce is worth 5, Carrot is worth 4, Mango is worth 9, and Cheeseburger is worth 0.
`,
        
        task:`Evaluate whether or not you have enough snack points to convince your iguana to come down.`,
        input_format:`Your input is a string that represents the snacks that you have. Snacks are separated by spaces, you can have any number of snacks, and they can repeat.
`,
        output_format:`A string that says 'Come on Down!' if you have enough points, or 'Time to wait' if you do not.`,
        input_demo:"Mango Cheeseburger Carrot",
        output_demo:"Come on Down!",
        isSolved : false,
        code: `function izzy(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "izzy('Cheeseburger')", expected: "Time to wait" ,hidden:false},
            {run: "izzy('Carrot Carrot Carrot')", expected: "Come on Down!",hidden:false},
            {run: "izzy('Mango')", expected: "Time to wait", hidden: true},
        ] 
    },
 
//Road Runner Js Code Coach Problem


{
        title: "Road Runner",
        level: "Medium",
        description: `A coyote is chasing a roadrunner and they start out 50 feet apart. If you know how fast they are both traveling, and how far the roadrunner is from safety, determine whether or not the coyote is able to catch the roadrunner. 
Both animals and the roadrunner's safe place are on a straight line.
`,
        
        task:`Determine whether or not the roadrunner made it to safety.`,
        input_format:`Three integer values, the first value represents the distance the roadrunner is from safety, then the roadrunner's speed (feet/second) and then the coyote's speed (feet/second).
`,
        output_format:`A string that says 'Meep Meep' if the roadrunner made it, or 'Yum' if the coyote caught up to the roadrunner.`,
        input_demo:"10 5 20",
        output_demo:"Meep Meep",
        isSolved : false,
        code: `function run(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "run('100 5 20')", expected: "Yum" ,hidden:false},
            {run: "run('10 5 20')", expected: "Meep Meep",hidden:false},
            {run: "run('5 5 20')", expected: "Yum", hidden: true},
        ] 
    },

 
//How Far? Js code coach Problem

{
        title: "How Far?",
        level: "Medium",
        description: `You are walking from your house to a pond that is down your street. 
How many blocks over will you have to walk until you get to the pond?
`,
        
        task:`Evaluate how many blocks you will have to walk if you are given a representation of your street where H represents your house, P represents the pond, and every B represents a block in between the two.`,
        input_format:`A string of letters representing your house, the pond, and blocks on your street.
`,
        output_format:`An integer value that represents the number of blocks between your house and the pond.`,
        input_demo:"BBHBBBBPBBB",
        output_demo:"4",
        isSolved : false,
        code: `function far(input){
    // your code goes here
    
}`,
        testCases:  [
            {run: "far('BBBBHBBPBB')", expected: "2" ,hidden:false},
            {run: "far('BBHBBBBPBBB')", expected: "4",hidden:false},
            {run: "far('HBBBBBPB')", expected: "5", hidden: true},
        ] 
    },






         
];













//Js quizzes Data

const quiz_data =[

//OverView Quiz Data For Js Course 
{
   name : "OverView Quiz",
   totalQuiz:5, 
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"Chose the Correct Option",
     options:[
     {data:"JavaScript Is Server-Side Language Only"},
     {data:"JavaScript Is Used to Create Web Apps Only"},
     {data:"JavaScript Is Used to Create Intractive Web Elements"},
     {data:"None of these"},
     ],
     answer:2,
     }
   },
   {     
    question_data:{
     question:"Which Tag Contain the JavaScript Code?",
     options:[
     {data:"script"},
     {data:"style"},
     {data:"code"},
     {data:"design"},
     ],
     answer:0,
     }   
   },
      
    {     
    question_data:{
     question:"Where the script tag typically placed?",
     options:[
     {data:"Before Creating Html Tag"},
     {data:"After Closing Html Tag"},
     {data:"In Both Body And Head Tag"},
     {data:"None of these"},
     ],
     answer:2,
     }   
   },
   
   {     
    question_data:{
     question:"How Single Line Comment Looks Like?",
     options:[
     {data:"**This is an Comment"},
     {data:"//This is an Comment"},
     {data:"<!--This is and Comment-->"},
     {data:"##None of these"},
     ],
     answer:1,
    }   
   },
   {
     question_data:{
     question:"Why Does the script tag is mostly Placed Before Closing the body tag?",
     options:[
     {data:"To make the Web Code Fully Loaded in Browser Window"},
     {data:"To Run with Standard"},
     {data:"This is only a Possible Way"},
     {data:"None of these"},
     ],
     answer:0,
    },        
   }],  
},



//Basic Quiz Data For Js Course

{
   name : "Basic Quiz",
   totalQuiz:5,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"Which Character cannot be used in variable name?",
     options:[
     {data:"Special Symbols"},
     {data:"Letters"},
     {data:"Underscore Sign"},
     {data:"Numbers"},
     ],
     answer:0,
     }
   },
   {
     question_data:{
     question:"A floating point number:",
     options:[
     {data:"is always smaller then 0"},
     {data:"is always positive"},
     {data:"is allowed to have a decimal place"},
     {data:"None of these"},
     ],
     answer:2,
     }
   },
    {
     question_data:{
     question:"Increament and decrement are used for:",
     options:[
     {data:"to get the remainder of the division of two numbers"},
     {data:"Addung or Subtracting from a number"},
     {data:"to change the sign of the number to'+' or '_'"},
     {data:"All of these"},
     ],
     answer:1,
     }
   },
   
    {
     question_data:{
     question:"Logical AND(&&) returns true if:",
     options:[
     {data:"one of operands is true,but not both"},
     {data:"both operands are true"},
     {data:"if only one of the operands is true"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   
   
    {
     question_data:{
     question:"Logical NOT return true if",
     options:[
     {data:"the operand is true"},
     {data:"the operand is false"},
     {data:"none of these"},
     {data:"All of these"},
     ],
     answer:1,
     }
   },
    
   ]
    
},





//Loop and Conditonal Statement Quizzes
{
    name : "Loop And Conditional Statement Quiz",
   totalQuiz:7,   
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"What happens if the tested condition is false?",
     options:[
     {data:"Code in the braces is executed any way"},
     {data:"Code does nothing and moves to the next section"},
     {data:"Code execution will be stopped"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   
   
   {
     question_data:{
     question:"The 'else' statement is created to :",
     options:[
     {data:"Tells JavaScript To do something if the condition is false"},
     {data:"Test a new condition for true or false"},
     {data:"Ignore the condition testing"},
     {data:"None of these"},
     ],
     answer:0,
     }
   },
   
   {
     question_data:{
     question:"Which keyword is used to end the else if statement?",
     options:[
     {data:"else"},
     {data:"stop"},
     {data:"end"},
     {data:"None of these"},
     ],
     answer:0,
     }
   },
   
   {
     question_data:{
     question:"The Switch statement can be used to replace :",
     options:[
     {data:"comments"},
     {data:"multiple if else statements"},
     {data:"varible declaration"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   
   {
     question_data:{
     question:"Classic 'for' loop consist of how many components",
     options:[
     {data:"1"},
     {data:"2"},
     {data:"3"},
     {data:"4"},
     ],
     answer:2,
     }
   },
   
   {
     question_data:{
     question:"The result of condition statement is always:",
     options:[
     {data:"A String Value"},
     {data:"A Boolean Value"},
     {data:"A Numerical Value"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   
   
   {
     question_data:{
     question:"The Break Statement:",
     options:[
     {data:"Ends the Execution Of Loop"},
     {data:"Stops the whole script"},
     {data:"Ignores the current iteration and passes to the text"},
     {data:"Break the whole Code"},
     
     ],
     answer:0,
     }
   }]
   
},


//Js function Quizzes
{
   name : "Js Function Quiz",
   totalQuiz:5,   
   solvedQuiz:[],
    quizzes:[
   {
     question_data:{
     question:"What is Function?",
     options:[
     {data:"Prefessions"},
     {data:"A reused code that can use again and agian"},
     {data:"Operators"},
     {data:"None of these"},
     ],
     answer:1,
     }
   },
   {     
     question_data:{
     question:"What do you need to create a Function Parameters?",
     options:[
     {data:"Use 'var' keyword"},
     {data:"Use 'params' keyword"},
     {data:"Write A Variable name in Parantheses"},
     {data:"None of these"},
     ],
     answer:2,
     }  
   },
   {
    question_data:{
     question:"Which Parameter is used to separate function from each other?",
     options:[
     {data:";"},
     {data:","},
     {data:"#"},
     {data:"&"},
     ],
     answer:1,
     }     
   },
   {
     question_data:{
     question:"Where is 'return' statement placed?",
     options:[
     {data:"In End of function"},
     {data:"Out side the function"},
     {data:"In the starting of function"},
     {data:"No need to place it"},
     ],
     answer:0,
     }       
   },
   {
     question_data:{
     question:"How many parameters can be accepted by alert box?",
     options:[
     {data:"3"},
     {data:"1"},
     {data:"4"},
     {data:"No Parameters"},
     ],
     answer:1,
     }     
   },
   ]
},



//Js Object Quizzes
{
   name : "Js Object Quiz",
   totalQuiz:5,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"In reference to an object , color, height , weight and name are all examples of :",
     options:[
     {data:"Variables"},
     {data:"Nouns"},
     {data:"Properties"},
     {data:"Methods"},
     ],
     answer:2,
     }
   },
   {
     question_data:{
     question:"What keyword is used for creating a instance of an object?",
     options:[
     {data:"make"},
     {data:"new"},
     {data:"var"},
     {data:"int"},
     ],
     answer:1,
     }  
   },
   {
     question_data:{
     question:"What built-in property is used to count the number of characters in an object is property?",
     options:[
     {data:"write"},
     {data:"size"},
     {data:"width"},
     {data:"length"},
     ],
     answer:3,
     }  
   },
   {
      question_data:{
     question:"The 'this' keyword in the method means :",
     options:[
     {data:"The name of webpage"},
     {data:"The current object"},
     {data:"The name of the given method"},
     {data:"None of these"},
     ],
     answer:1,
     } 
   },
   {
       question_data:{
     question:"In order to use the objects  properties with a function, we use :",
     options:[
     {data:"The function name"},
     {data:"Just the name of Property"},
     {data:"The 'this' keyword"},
     {data:"The 'var' keyword"},
     ],
     answer:2,
     }
   }
   ]  
},

//Js Core-Object Quizzes
{
   name : "Js Core-Object Quiz",
   totalQuiz:6,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"What is the result of trying to reference an array member which does not exits ?",
     options:[
     {data:"null"},
     {data:"0"},
     {data:"false"},
     {data:"undefined"},
     ],
     answer:3,
     }
   },
   {
       question_data:{
     question:"By entering var example = new Array(); we create an empty array which can be filled :",
     options:[
     {data:"anytime later"},
     {data:"never more"},
     {data:"just after it"},
     {data:"all of these"},
     ],
     answer:0,
     } 
   },
   {
      question_data:{
     question:"'concat' method takes two arrays and ",
     options:[
     {data:"combines them in one new array"},
     {data:"compares their members"},
     {data:"output them to the screen"},
     {data:"It does nothings"},
     ],
     answer:0,
     }  
   },
   {
        question_data:{
     question:"In associative arrays , index numbers are replaced with :",
     options:[
     {data:"constants"},
     {data:"strings"},
     {data:"variables"},
     {data:"functions"},
     ],
     answer:1,
     }
   },
   {
      question_data:{
     question:"In Math Object , Which of the following constants does not exist ?",
     options:[
     {data:"Math.ABC"},
     {data:"Math.E"},
     {data:"Math.PI"},
     {data:"Math.ceil"},
     ],
     answer:0,
     }  
   },
   {
      question_data:{
     question:"What information results from creating a Date Object ?",
     options:[
     {data:"The date when the web page was hosted"},
     {data:"No empty String"},
     {data:"The current time and date"},
     {data:"All of these"},
     ],
     answer:2,
     }  
   }, 
   ]
},

//Js Dom Event Quizzes
{
   name : "Js Dom Event Quiz",
   totalQuiz:5,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"What is DOM ?",
     options:[
     {data:"Document Object Model"},
     {data:"Document Orientation Model"},
     {data:"Definitive Object Model"},
     {data:"Disk Operating Model"},
     ],
     answer:0,
     }
   },
   {
     question_data:{
     question:"The type of function that executes when an event occurs is called ?",
     options:[
     {data:"Event Description"},
     {data:"Event Handler"},
     {data:"Event Function"},
     {data:"Event Name"},
     ],
     answer:1,
     }  
   },
   {
      question_data:{
     question:"To create an animation relative to a container the position of attribute for the container should be set to :",
     options:[
     {data:"box"},
     {data:"absolute"},
     {data:"relative"},
     {data:"fixed"},
     ],
     answer:2,
     } 
   },
   {
      question_data:{
     question:"For making paragraph click event first event to be handled first done by using :",
     options:[
     {data:"Handling"},
     {data:"Capturing"},
     {data:"Nothing"},
     {data:"Bubbling"},
     ],
     answer:3,
     } 
   },
   {
       question_data:{
     question:"Which function is used to stop setInterval ?",
     options:[
     {data:"StopTimer"},
     {data:"StopInterval"},
     {data:"ClearInterval"},
     {data:"ClearTimer"},
     ],
     answer:2,
     }
   }
   ]
   
},

//Js ES6 Quizzes
{
   name : "ECMAScript 6 Quiz",
   totalQuiz:3,
   solvedQuiz:[],
   quizzes:[
   {
     question_data:{
     question:"Which of these are js variables ?",
     options:[
     {data:"let"},
     {data:"var"},
     {data:"const"},
     {data:"All of these"},
     ],
     answer:3,
     }
   },
   {
     question_data:{
     question:"Which of the following is not one of the new ES6 features?",
     options:[
     {data:"Hoisting"},
     {data:"Modules"},
     {data:"Template Literals"},
     {data:"Object Destructing"},
     ],
     answer:0,
     }  
   },
   {
       question_data:{
     question:"Which of these is not an ES6 variable ?",
     options:[
     {data:"let"},
     {data:"var"},
     {data:"const"},
     {data:"All of these"},
     ],
     answer:1,
     }
   }
   ]
},
];



