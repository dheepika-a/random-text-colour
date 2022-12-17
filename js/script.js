 var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter the colour:");
	input1.setAttribute("id","dheep");
	input1.style.textAlign="center";
	input1.style.height="50px";
	input1.style.width="150px";
	document.body.appendChild(input1);
	document.write('<br/>','<br/>');
	

	document.body.style.textAlign="center";
	document.body.style.marginTop="200px";
	document.body.style.backgroundColor="plum";

    button1=document.createElement("button")
    button1.setAttribute("onclick","sum()")
	button1.style.height="30px";
	button1.style.width="70px";
    button1.innerHTML="click";
    document.body.appendChild(button1);
	


function sum()
{
	var m=document.getElementById("dheep").value
	document.getElementById("dheep").style.color=m;	
        
}


