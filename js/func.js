// syntax of functions

// create a function 
// function functionName(p1, p2) {
//     statement1
//     statement2
//     statement3
//     statement4
// }

// invoke a function 
// functionName(a, b)

// function myfunc() {
//     var name = "Eddy Grant";
//     document.getElementById("func1").innerHTML = name;
// }

// myfunc()

// function eddygrant(param1, size) {
//     document.getElementById(param1).style.fontSize = size;
// }

// function eddygrant2() {
//     document.getElementById("func1").style.fontSize = "1em";
// }

function poonam(x, y, z) {
    var add;
    add = x + y + z;
    document.getElementById("param").innerHTML = add;
}

poonam(10, 20, 40);