var generatebtn = document.getElementById("generatebtn");
var copiedtxt = document.getElementById("copiedtxt");
var colorContainer = document.getElementById("colorContainer");
var code = document.getElementById("code");

// adds a click event listener to the generate button

generatebtn.addEventListener("click",generateColor);

// adds a mouseover event to the colorContainer div

colorContainer.addEventListener("click",copy);
 
 // this function generates random numbers to set the rgba value of the colorContainer

function generateColor(){
	var q = Math.random() * 255;
	var x = Math.random() * 255;
	var y = Math.random() * 255;
	

	colorContainer.style.backgroundColor="rgba("+ q +","+ x +","+ y +")";
	code.innerHTML= colorContainer.style.backgroundColor;


}
function copy(){
	var temp = document.createElement("textarea");
	document.body.appendChild(temp);
	temp.value=code.innerHTML;
	temp.select();
	document.execCommand("copy");
	copiedtxt.style.display="block";
	setTimeout(function(){copiedtxt.style.display="none";}, 1000);
}