# DOM HW

## Dom Task1
Start of with Modifying the basic HTML page called math.html
- Create a JavaScript ﬁle called task1.js.
- Modify the HTML and write the JavaScript necessary to create a web page that allows a user to do some basic mathematical computations(addition, multiplication and mod).
- The user should be able to enter numbers and press on a button to show the results of the calculation.
white_check_mark
eyes
raised_hands

## Dom Task2
Start of with the following:
- Use file called `task2.html`.
- Write the JavaScript needed in a ﬁle called `task2.js`.
- Create a function which counts and displays the number of times a `button` has been clicked.
- Create a function to convert rands into dollars, euros and pounds.
- Create a function which creates a drop-down menu with 25 option elements and add it to the HTML page you have created. Each option element should display the number of the option. `Use a loop`.

## Bonus:
- Create a calculator:
	- It should have the layout similar to the calculator on your computer.
    - Use CSS to help you style the layout.
    - Use JavaScript functions to implement its operation.


function ran(){
    document.converter.dollar.value = document.converter.rands.value * 0.049
    document.converter.pound.value = document.converter.rands.value * 0.049434634
    document.converter.euro.value = document.converter.rands.value * 0.05828
    }
function euro(){
    document.converter.dollar.value = document.converter.euro.value * 1.470
    document.converter.pound.value = document.converter.euro.value * 0.717
    document.converter.rands.value = document.converter.euro.value * 165.192
    }
    function dolla(){
    document.converter.euro.value = document.converter.dollar.value * 0.680
    document.converter.pound.value = document.converter.dollar.value * 0.488
    document.converter.rands.value = document.converter.dollar.value * 112.36
    }
    function poun(){
    document.converter.dollar.value = document.converter.pound.value * 2.049
    document.converter.euro.value = document.converter.pound.value * 1.394
    document.converter.rands.value = document.converter.pound.value * 230.27
    }
    