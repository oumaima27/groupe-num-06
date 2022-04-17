

var R = document.getElementById("box")
var Jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']
function Semaine(){
    const d = new Date()
    let day = parseInt(d.getDay())
    R.innerHTML = 'On est '+Jours[day]
}