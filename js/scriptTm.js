var teamMembers = [
{name:"Fran TheMan", email:"fran_the_man@index.com",image:"img/person1.jpg", role:"CEO and founder",
 shortBio:"This is the face of Fran TheMan, a true pioneer among wood elves. He stands small among others, despite his lean frame."},
 {name:"Orion Chilton",email:"orionchilton@index.com", image:"img/person2.jpg", role:"Co-founder",
 shortBio:"This is the face of Orion Chilton, a true vanquisher among dwarves. He stands gracefully among others, despite his sturdy frame."},
 {name:"Elmon Stagrunner", email:"elmon.stagrunner@index.com", image:"img/person3.jpg", role:"Head of Marketing",
 shortBio:"This is the face of Elmon Stagrunner, a true idealist among wood elves. He stands high among others, despite his slim frame."},
 {name:"Elyssa Masser",email:"elyssa.masser@index.com", image:"img/person4.jpg", role:"Marketing manager",
 shortBio:"The is the face of Elyssa Masser, a true stargazer among humans. She stands high among others, despite her tough frame."},
 {name:"Katja Klaus",email:"katja_klaus@index.com", image:"img/person5.jpg", role:"Head of HR",
 shortBio:"The is the face of Katja Klaus, a true winner among dwarves. She stands easily among others, despite her delicate frame."},
 {name:"Jeda Sharapova",email:"jeda.sharapova@index.com", image:"img/person6.png", role:"Human Resources",
 shortBio:"The is the face of Jeda Sharapova, a true pioneer among humans. She stands average among others, despite her tough frame."},
 {name:"Georg Rizus",email:"georg_rizus@index.com", image:"img/person7.jpg", role:"Head of Sales",
 shortBio:"This is the face of Georg Rizus a true stargazer among halflings. He stands awkwardly among others, despite his thin frame."}, 
 {name:"Lelselea Stagrunner",email:"lelselea.stagrunner@index.com", image:"img/person8.jpg", role:"Quality Control",
 shortBio:"The is the face of Lelselea Stagrunner, a true champion among night elves. She stands gracefully among others, despite her delicate frame."}];
console.log(teamMembers[7]);

var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
//leftArrow.addEventListener("mouseover", grow(leftArrow));

var name1 = document.getElementById("theName");
var role = document.getElementById("theRole");
var email = document.getElementById("theEmail");
var description = document.getElementById("descriptionText");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");


var allImgs = [img1, img2, img3, img4, img5, img6, img7, img8];
//allImgs = document.getElementsByClassName("pic");
rightArrow.addEventListener("click", toRight, false);
leftArrow.addEventListener("click", toLeft, false);

setTheFirstMemberInfo();
//set all the coresponding images
for(var i=0; i<teamMembers.length; i++){
	allImgs[i].setAttribute("src", teamMembers[i].image)
	console.log(teamMembers[i].image);
}

function toRight() {
	var getFirstMember = teamMembers.shift();
	teamMembers.push(getFirstMember)
	setTheFirstMemberInfo();

	for(var i=0; i<teamMembers.length; i++){
	allImgs[i].setAttribute("src", teamMembers[i].image)
	}
}

function toLeft() {
	var lastMember = teamMembers.pop();
	teamMembers.unshift(lastMember);

setTheFirstMemberInfo();

	for(var i=0; i<teamMembers.length; i++){
	allImgs[i].setAttribute("src", teamMembers[i].image)
	}
}

function setTheFirstMemberInfo() {
	name1.innerHTML = teamMembers[0].name;
	role.innerHTML = teamMembers[0].role;
	email.innerHTML = teamMembers[0].email;
	description.innerHTML = teamMembers[0].shortBio;
	allImgs[0].style.opacity = '1';
}