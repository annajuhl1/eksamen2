
//FLIPS + PANEL
$(document).ready(function(){
    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip4").click(function(){
        $("#panel4").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip5").click(function(){
        $("#panel5").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip6").click(function(){
        $("#panel6").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip7").click(function(){
        $("#panel7").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip8").click(function(){
        $("#panel8").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip9").click(function(){
        $("#panel9").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip10").click(function(){
        $("#panel10").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip11").click(function(){
        $("#panel11").slideToggle("slow");
    });
});

// CAROUSEL AF UDTALELSER
// VARIABLE:
const output = document.getElementById("output");

const udtalelse1 = document.getElementById("udtalelse1");
const udtalelse2 = document.getElementById("udtalelse2");
const udtalelse3 = document.getElementById("udtalelse3");
const udtalelse4 = document.getElementById("udtalelse4");
const udtalelse5 = document.getElementById("udtalelse5");
const udtalelse6 = document.getElementById("udtalelse6");
const udtalelse7 = document.getElementById("udtalelse7");
const udtalelse8 = document.getElementById("udtalelse8");
const udtalelse9 = document.getElementById("udtalelse9");
const udtalelse10 = document.getElementById("udtalelse10");

const hoejrePil = document.getElementById("hoejrePil");
const venstrePil = document.getElementById("venstrePil");

// ARRAYET
const carousel = [udtalelse1, udtalelse2, udtalelse3, udtalelse4, udtalelse5, udtalelse6, udtalelse7, udtalelse8, udtalelse9, udtalelse10];

carousel[0].style.display = "block";
carousel[1].style.display = "none";
carousel[2].style.display = "none";
carousel[3].style.display = "none";
carousel[4].style.display = "none";
carousel[5].style.display = "none";
carousel[6].style.display = "none";
carousel[7].style.display = "none";
carousel[8].style.display = "none";
carousel[9].style.display = "none";

// KNAPPER:
hoejrePil.addEventListener("click", naesteBillede);
venstrePil.addEventListener("click", forrigeBillede);

// FUNKTIONER:
function naesteBillede(){
    carousel[0].style.display = "none"; // skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[carousel.length-1]);
    carousel.pop();
    carousel[0].style.display = "block";
    }

// ANIMATIONER:

AOS.init();

