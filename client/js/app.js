function gotoconteneur(){
    var element = document.getElementById("conteneur");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}



function gotoexperience(){
    document.getElementById("formation").style.display = "none";
    document.getElementById("competences").style.display = "none";
    if (document.getElementById("experience").style.display == "block"){
        document.getElementById("experience").style.display = "none";
    }
    else {
        document.getElementById("experience").style.display = "block";
        document.getElementById("experience").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
}

function gotocompetences(){
    document.getElementById("formation").style.display = "none";
    document.getElementById("experience").style.display = "none";
    if (document.getElementById("competences").style.display == "block"){
        document.getElementById("competences").style.display = "none";
    }
    else {
        document.getElementById("competences").style.display = "block";
        document.getElementById("competences").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
}

function gotoformation(){
    document.getElementById("experience").style.display = "none";
    document.getElementById("competences").style.display = "none";
    if (document.getElementById("formation").style.display == "block"){
        document.getElementById("formation").style.display = "none";
    }
    else {
        document.getElementById("formation").style.display = "block";
        document.getElementById("formation").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
}