
var result= document.getElementById('table')

//fonction Multi

function Multi(){
    let n = parseFloat(prompt("Inserer un nombre :"))
    result.innerHTML= 
    "<ul> <li>"+n+" x 1 ="+n+
    "</li> <br> <li>"+n+" x 2 ="+(n*2)+
    "</li> <br><li>"+n+" x 3 ="+(n*3)+
    "</li> <br> <li>"+n+" x 4 ="+(n*4)+
    "</li> <br> <li>"+n+" x 5 ="+(n*5)+
    "</li> <br> <li>"+n+" x 6 ="+(n*6)+
    "</li> <br> <li>"+n+" x 7 ="+(n*7)+
    "</li> <br> <li>"+n+" x 8 ="+(n*8)+
    "</li> <br> <li>"+n+" x 9 ="+(n*9)+
    "</li> <br> <li>"+n+" x 10 ="+(n*10)+"</li> </ul>"

}