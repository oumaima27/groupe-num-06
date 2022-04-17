
//declaration des variables 

var text = document.getElementById("result")


var Film ={
    init : function(titre,annee){
        this.titre = titre;
        this.annee= annee;
    },

    //description du film
    decrire : function(){
        var description = this.titre+" ("+this.annee+")";
        return description
    }
}

//creation d'un tableau de films 

var films=[]

//creation d'un film et rangement dans le tableau 

var film = Object.create(Film)
film.init("Ta'ang",2016)
films.push(film)

//creation d'un film et rangement dans le tableau 

var film = Object.create(Film)
film.init("Divines",2016)
films.push(film)


var film = Object.create(Film)
film.init("Juste la fin du monde",2016)
films.push(film)


//affichage des films du tableau


function show(){
    let content = "<br>"
    films.forEach(function (film) {
    content+= film.decrire() + "<br>"})
    text.innerHTML = content
}


function Create(){
    var film = Object.create(Film)
    let x = prompt("Donner le titre du film : ")
    let a = prompt("Donner l'annee du film : ")
    film.init(x,a)
    films.push(film)
}