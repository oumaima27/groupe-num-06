
var resultat = document.getElementById('result')

//fonction cercle 

function Cercle(){
    let r= parseFloat(prompt("Inserer le rayon du cercle : "))
    let p = (r*2*Math.PI).toFixed(2)
    alert('le perimetre du cercle est : '+ p)
    resultat.innerHTML= 'le perimetre du cercle est : '+ p
    console.log('le perimetre de cercle est :' + p) 
}


//fonction triangle

function Rectangle(){
    let a = parseFloat(prompt('Inserer la longueur : '))
    let b = parseFloat(prompt('Inserer la largeur : '))
    let p= ((a+b)*2).toFixed(2)
    alert('Le perimetre du rectangle est :'+p)
    resultat.innerHTML= 'le perimetre du rectangle est : '+ p
    console.log('le perimetre du rectangle est :' + p)
}