var state = false;

function Blue(){
 var body = document.body;
 var greet = document.getElementById('greet');
 var info = document.getElementById('info');
 var img = document.getElementById('img')

 if(!state){
 body.style.backgroundColor = "#365887";
 body.style.color = "#ffffff";
 body.style.fontFamily = ""
 greet.innerHTML = "Hi, I'm Josh";
 info.innerHTML = "Reading is my gateway to new worlds; I’m always eager to dive into a great book that sparks my imagination.";
 greet.style.fontFamily = "Verdana";
 greet.style.fontWeight = "700";
 img.style.transform = "translateY(-69%)";
 img.src = "IMG/Me.jpg";
 info.style.marginLeft = "5.3%";
 info.style.fontFamily = "Tahoma";
 info.style.fontWeight = "450";
 state = true;
}
else{
 body.style.backgroundColor = "";
 body.style.color = "";
 greet.innerHTML = "Welcome";
 info.innerHTML = "This is an Activity made by Me";
 greet.style.fontFamily = "";
 greet.style.fontWeight = "";
 img.style.transform = "translateY(-57%)";
 img.src = "IMG/cat.jpg";
 info.style.marginLeft = "";
 info.style.marginLeft = "";
 info.style.fontFamily = "";
 info.style.fontWeight = "";
 state = false;
}
}

var state = false;

function Pink(){
 var body = document.body;
 var greet = document.getElementById('greet');
 var info = document.getElementById('info');
 var img = document.getElementById('img');

 if(!state){
 body.style.backgroundColor = "#f4acb7";
 body.style.color = "#ffffff";
 body.style.fontFamily = ""
 greet.innerHTML = "Hi, I'm Ellie";
 info.innerHTML = "Designing is one of my joys, where I get to blend creativity and problem-solving to bring ideas to life.";
 greet.style.fontFamily = "Fantasy";
 greet.style.fontWeight = "500";
 img.style.transform = "translateY(-69%)";
 img.src = "IMG/Ellie.png";
 info.style.marginLeft = "5%";
 info.style.fontFamily = "Cursive";
 info.style.fontWeight = "500";
 state = true;
}
else{
 body.style.backgroundColor = "";
 body.style.color = "";
 greet.innerHTML = "Welcome";
 info.innerHTML = "This is an Activity made by Me";
 greet.style.fontFamily = "";
 greet.style.fontWeight = "";
 img.style.transform = "translateY(-57%)";
 img.src = "IMG/cat.jpg";
 info.style.marginLeft = "";
 info.style.marginLeft = "";
 info.style.fontFamily = "";
 info.style.fontWeight = "";
 state = false;
}
}

var state = false;

function Brown(){
 var body = document.body;
 var greet = document.getElementById('greet');
 var info = document.getElementById('info');
 var img = document.getElementById('img');

 if(!state){
  body.style.backgroundColor = "#c6ac8f";
  body.style.color = "#ffffff";
  greet.innerHTML = "Hi, I'm Apo";
  info.innerHTML = "The last living traditional tattoo artist from the Kalinga region in the Philippines.";
  greet.style.fontFamily = "Times";
  greet.style.fontWeight = "700";
  greet.style.fontSize = "120px";
  greet.style.marginTop = "10%"; 
  info.style.fontFamily = "Cambria";
  info.style.fontWeight = "500";
  info.style.fontSize = "50px"; 
  img.style.transform = "translateY(-89%)";
  img.src = "IMG/Apo.jpg";
  info.style.marginLeft = "5%";
  state = true;
 } else {
  body.style.backgroundColor = "";
  body.style.color = "";
  greet.innerHTML = "Welcome";
  info.innerHTML = "This is an Activity made by Me";
  greet.style.fontFamily = "";
  greet.style.fontWeight = "";
  greet.style.fontSize = ""; 
  info.style.fontFamily = "";
  info.style.fontWeight = "";
  info.style.fontSize = ""; 
  img.style.transform = "translateY(-57%)";
  img.src = "IMG/cat.jpg";
  info.style.marginLeft = "";
  state = false;
 }
}
