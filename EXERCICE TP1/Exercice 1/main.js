//variables globales
var tableau = document.getElementById("notes");
var roww = document.getElementById("roww")
var tri = document.getElementById("tri")
var resultat = document.getElementById("nbrr")
var nbr = 0 
var i = 0;

//tableau de notes

var T = [10, 12, 7, 0, 20, 1, 4, 17, 19, 18];
var T2 = []



function Affiche(){
    var content = "<td> "
    for(i=0; i<T.length;i++){
        content = content + T[i] + "</td> <td>"
        roww.innerHTML = content
    }

}

function Sup(){
    // use filter 
    for (i=0; i<T.length;i++){
        if(T[i]>=10){
            nbr=nbr+1
        }
    }
    resultat.innerHTML = "Nombre d'eleves superieur à 10 : "+ nbr
}

function Moyenne(){
    let somme = 0
    let moy =0
    for (i=0; i<T.length;i++){
        somme = somme + T[i]
    }
    moy = somme/T.length
    document.getElementById("moyy").innerHTML="La moyenne des notes est :"+ moy
}

function Max(){
    let max = 0
    for (i=0; i<T.length;i++){
        if(T[i]>max){
            max = T[i]
        }
    }
    document.getElementById("max").innerHTML="La note maximale est :"+ max
}

function Recherche(){
    let X = parseFloat(prompt("Donner la note cherchée :"))
    if(T.indexOf(X)<0){
        document.getElementById("X").innerHTML="Note non trouvée"

    }else{
        document.getElementById("X").innerHTML="La note cherchée est d'indice :"+T.indexOf(X)
    }
}

function Tri(){
    var content = "<td> "
    T.sort(function(a, b){return a-b});
    for(i=0; i<T.length;i++){
        T2.push(T[i])
    }
    for(i=0; i<T.length;i++){
        content = content + T2[i] + "</td> <td>"
        tri.innerHTML = content
    }
}