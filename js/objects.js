let name = "Sachin"
let age = 22
let email = "eddygrant000@gmail.com"

// course = new Array()

// courses = ["Jenkins", "Gitlab", "Podman", "Docker"]
//     //            0          1         2          3

// document.getElementById("p2").innerHTML = courses[3];
// document.getElementById("p3").innerHTML = "Length of array: " + courses.length;
// document.getElementById("p4").innerHTML = courses[courses.length - 2];

var car = {
    name: "Mini Cooper",
    color: "Black",
    speed: 200,
    start: function() {
        return "Car has been started"
    }
}


// var x = car.name + " " + car.color + " " + car.speed;
var x = car.start();

document.getElementById("p1").innerHTML = x;
console.log("hi JOshika")