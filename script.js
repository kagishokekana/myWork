

var names = ["selina", "sophie", "precious"];

const display = document.getElementById("display");

for (let i = 0; i < names.length; i++) {

    display.innerHTML += "<li>" + names[i] + "</li>";
   
    
}
