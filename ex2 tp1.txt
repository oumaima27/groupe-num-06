var tabEleve = [];
function creerEleve(nom, note) {
    let eleve={};
    eleve.nom=nom;
    eleve.note=note;
    return eleve;
};

tabEleve.push(creerEleve('tata',8));
tabEleve.push(creerEleve('tate',12));
tabEleve.push(creerEleve('tota',9));
tabEleve.push(creerEleve('taitau',12));
tabEleve.push(creerEleve('titu',17));
tabEleve.push(creerEleve('tuti',18));
tabEleve.push(creerEleve('tete',15));
tabEleve.push(creerEleve('tato',13));


//*********** Affichage en console ************//
console.log('Affichage du tableau complet en console');
console.log(tabEleve); 

//Affichage du tableau par objet en console
afficherConsole(tabEleve); 


// Fonction Afficher le tableau par objet dans la console
function afficherConsole(tab){
	console.log('Contenu du tableau par objet en console');
	for(i=0; i<tab.length; i++){
		console.log(tab[i]);
	}
}


//******** Fonction Affichage du tableau ********//
function afficherHTMLdiv(tab){
	let innerHTML = '<table border>';
		innerHTML+='<tr><th>nom</th><th>note</th></tr>';
	for(i=0; i<tab.length; i++){
		innerHTML+='<tr>';
		innerHTML+='<td>'+tab[i].nom+'</td>';
        innerHTML+='<td>'+tab[i].note+'</td>';
		innerHTML+='</tr>';
	}
	innerHTML+='</table>';
document.getElementById("resultats").innerHTML+=innerHTML;
}

 

// fonction nombre de notes superieures à 10
function nbNotesSup10(tab){
	let cpt=0; 
	for(let i=0; i<tab.length; i++){
		if(tab[i]>=10){
			cpt++;
		}
	}
	return cpt;
}
// fonction moyenne des notes
function moyTab(tab){ // le tab[-5] est pris en compte
	let cpt=0;
	let somme=0;
	for(key in tab){
		somme+=tab[key]
		cpt++;
	}
	console.log(cpt);
	return somme/cpt;
}



//******** Affichage dans la div ********//
var balise=document.getElementById("resultats")
balise.innerHTML+='<p>Tableau de départ : <p>';
afficherHTMLdiv(tabEleve);

//nbNotes
var nbNotes=nbNotesSup10(tab);
balise.innerHTML+='<p>Nombre de notes supérieures à 10 : '+nbNotes+' <p>';

//moyenne
var moyenne=moyTab(tab);
balise.innerHTML+='<p>Moyenne des notes : '+moyenne+' <p>';

//tri
tab.sort(function(a, b){return a-b});
balise.innerHTML+='<p>Tableau trié : <p>';
afficherHTMLdiv(tab);