function obliczenia(){
    var a = document.mojformularz.liczbaa.value;
    var b = document.mojformularz.liczbab.value;
    var c = document.mojformularz.liczbac.value;

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    var wynik1 = (Math.pow(a,b)) - c;
    var wynik2 = (a/b) - (a * c);
    var wynik3 = (c/b) + (b/a);

    document.getElementById('wynik_1').innerHTML = "wyrazenie1 = " + wynik1;
    document.getElementById('wynik_2').innerHTML = "wyrazenie2 = " + wynik2;
    document.getElementById('wynik_3').innerHTML = "wyrazenie3 = " + wynik3;
}

//                         === Timer ===

let minuty = 60;
let sekundy = 0;

let czas = minuty * 60 + sekundy;

let tempSeconds = czas;

const convert = (value, inSeconds) => 
{
if (value > inSeconds) 
{
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
} 
};

const setSeconds = (s) => 
{
document.querySelector("#sekundy").textContent = s + "s";
};


const setMinutes = (m) => 
{
document.querySelector("#minuty").textContent = m + "m";
};


var x = setInterval(() => 
{

if (czas <= 0) 
{
    clearInterval(x);
}
setMinutes(convert(tempSeconds, 60));
setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
czas--;
tempSeconds = czas;
}, 1000);

//                         === Slider Zdjęć ===

var i = 0; 
var zdj = [];
var time = 2000;
	 
zdj[0] = "1.jpg";
zdj[1] = "2.jpg";
zdj[2] = "3.jpg";
zdj[3] = "4.jpg";

function obrazki()
{
	document.slider.src = zdj[i];

	if(i < zdj.length - 1)
    {
	  i++; 
	} 
    else 
    { 
		i = 0;
	}
	setTimeout("obrazki()", time);
}
window.onload=obrazki;