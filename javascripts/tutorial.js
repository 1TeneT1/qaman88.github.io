/*
* @Author: Tlamangile Expert Ngobeni
* @Department: TeneT Trademarks
* @University:University of CapeTown
* @Student Number: NGBTLA003
* @Date: 19 November 2014
*/
/*
* @Author: Tlamangile Expert Ngobeni
* @Department: TeneT Trademarks
* @University:University of CapeTown
* @Student Number: NGBTLA003
* @Date: 19 November 2014
*/

// JavaScript - Variable, later to be stored in mySQL

/*String*/
var firstName = "Tlamangile";
var lastName = "Ngobeni";
var intro = "Hey. I'm Tlamagile Ngobeni specialist in computer science,  digital and embedded system. I enjoy enrolling electrical and computer engineering at UCT."



/* Array*/
var activies = ["Air Hockey", "Snooker", "Adventure", "Programming", "Digital Electronics"];

/*Dictionary / Hash Table*/
var courses = {
    "CSC3023F": "Computer Science", "MAM2084F": "Mathematics", "EEE3035F": "Signal and System", "EEE3044S": "Energy Conversation", "EEE3074W": "Embedded System",
    "EEE3064W": "Digital System", "MEC2026S": "Project Management", "Communication Network": "EEE3084W", "EEE3000X": "Practical Training"
};

/*Boolean*/
var graduted = false;
var text = "I love my job as a developer and designer for both software and hardware. ";
function fullIntro() {
    var div = document.getElementById("intro");
    text = div.textContent + text;  // retrieve element text 
    div.textContent = text;
    document.getElementById("pageBody").innerHTML = text;
}

function courseName(code) {
    return courses[code];
}
/*
*Note it requires parameters nam and sur to be strig object e.g. var nam= new String()
*/
function computeStuNum(nam, sur) {
    return nam.subtring(0, 2) + sur.subtring(0, 2) + "001";

}


/*
* Handle Menu Events
*/
function goHome() {
    document.getElementById("pageBody").innerHTML = '<a href="../index.html"></a>';
}
function homeHover() {
    // alert("Hello Pop");

}

function goElecEng() {
    document.getElementById("pageBody").innerHTML = "Electrical Engineering";
}

function elecEngHover() {
    $("body").css({ "background-color": "yellow", "font-size": "200%" });
}


function goComSci() {
    document.getElementById("pageBody").innerHTML = "Computer Science <img class=\"image\" src=\"images/me.jpg\" width=\"350\" height=\"263\" alt=\"Klematis\">";
} function goAbout() {
    document.getElementById("pageBody").innerHTML = "About";
}

// About Form Submission
function goSubmit() {


    var name = document.getElementById("commentName").value;
    var email = document.getElementById("commentEmail").value;
    var msg = document.getElementById("commentMessage").value;
    document.WriteLine("Date: " + Date() + "\nName: " + name + "\n" + "Email: " + email + "\nMessage: " + msg);

}

/*
* @Author: Tlamangile Expert Ngobeni
* @Department: TeneT Trademarks
* @University:University of CapeTown
* @Student Number: NGBTLA003
* @Date: 19 November 2014
*/


var Person = {
    name: "Tlamangile",
    surname: "Ngobeni", age: 23,
    cell: "0732732920", email: "ngbtla003@myuct.ac.za",
    initials: "TE",
    course: "BSc Electrical and Computer Engineering",
    comments: ""
};

function getName() {
    return Person.name;
}

function getSurname() {
    return Person.surname;
}

function getAge() {
    return Person.age;
}

function yearOfBirth() {
    return 2014 - Person.age;
}