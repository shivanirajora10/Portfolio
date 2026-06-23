function toggleMenu(){

document
.getElementById("sidebar")
.classList
.toggle("active");

}



document
.querySelectorAll("#sidebar a")
.forEach(link=>{

link
.addEventListener(
"click",

()=>{

document
.getElementById("sidebar")
.classList
.remove("active");

}

);

});