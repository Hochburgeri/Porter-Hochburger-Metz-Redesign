
//this is the date shown at the top of the menu page, will show current month and day

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];   //stored month names

var today = new Date();      //establishes a new date variable
var month = months[today.getMonth()];        //grabs the current month from the array of months
var date = month + ' ' + today.getDate();     //creates the current date - the month, plus the day of the month



var el = document.getElementById('dates-drop-button');
el.innerHTML = date;         //replaces the html text with the 'date' variable



//these funtions create the hover effect for the photos on the menu pages - shows nutritional info photo on hover

function newPicture1(){
    document.getElementById('waffles').src="images/waffles-info.JPG";  //grabs img id, and on 'mouse over', shows replacement image
}


function oldPicture1(){
    document.getElementById('waffles').src="images/waffle.jpg";   //grabs img id, and on 'mouse out', shows original image
}

function newPicture2(){
    document.getElementById('pancakes').src="images/pancakes-info.JPG";
}


function oldPicture2(){
    document.getElementById('pancakes').src="images/pancakes.jpg";
}

function newPicture3(){
    document.getElementById('omelet').src="images/omelet-info.JPG";
}


function oldPicture3(){
    document.getElementById('omelet').src="images/omelet.jpg";
}

function newPicture4(){
    document.getElementById('hamburger').src="images/burger-info.JPG";
}


function oldPicture4(){
    document.getElementById('hamburger').src="images/hamburger.jpg";
}

function newPicture5(){
    document.getElementById('pizza').src="images/pizza-info.JPG";
}


function oldPicture5(){
    document.getElementById('pizza').src="images/pizza.jpg";
}

function newPicture6(){
    document.getElementById('fries').src="images/fries-info.JPG";
}


function oldPicture6(){
    document.getElementById('fries').src="images/fries.jpg";
}

function newPicture7(){
    document.getElementById('salad').src="images/salad-info.JPG";
}


function oldPicture7(){
    document.getElementById('salad').src="images/salad.jpg";
}

function newPicture8(){
    document.getElementById('burritos').src="images/burrito-info.JPG";
}


function oldPicture8(){
    document.getElementById('burritos').src="images/burrito.jpg";
}

function newPicture9(){
    document.getElementById('mac-n-cheese').src="images/mac-n-cheese-info.JPG";
}


function oldPicture9(){
    document.getElementById('mac-n-cheese').src="images/mac-n-cheese.jpg";
}


document.getElementById("submit-feedback").onclick=function(){feedbackFunction()};


//used for the 'submit feedback button', displays 'thank you for your feedback' when clicked

function feedbackFunction() {
    document.getElementById ("submit-feedback").innerHTML="Thank you for your feedback!";
}


//for order page - when order button is clicked, a message shows up

function changeText(){

    var confirm = document.getElementById('confirmation'); //grabbing the id of the section from html where text will go

    var changeText = confirm.innerHTML = 'Thank you! You will receive an email of your order summary.' ; //inputs this message in the 'confirm' section id when funtion is called

}










