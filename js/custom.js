const debutDivCol = '<div class="col">';

const debutDivCard = '<div class="card" style="width: 18rem;">';

const debutDivCardBody = '<div class="card-body">';

const finDiv = '</div>';

var listeItemPlats = [];
var listeItemVolaille = [];
var listeItemBoeuf = [];
var listeItemVeau = [];
var listeItemAgneau = [];
var listeItemPorc = [];

const listePlats = [
  {"image":"./img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."},
  {"image":"./img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."},
  {"image":"./img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."},
  {"image":"./img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."},
  {"image":"./img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."}
];

const listeVolaille = [
  {"image":"./img/viandesVolailles/escalope_dinde.jpg", "title":"Escalope de filet de dinde", "text":"Au four ou à la poêle, cuisinez le filet de dinde à la milanaise, au curry, à la moutarde..."},
  {"image":"./img/viandesVolailles/escalope_dinde.jpg", "title":"Escalope de filet de dinde", "text":"Au four ou à la poêle, cuisinez le filet de dinde à la milanaise, au curry, à la moutarde..."},
  {"image":"./img/viandesVolailles/escalope_dinde.jpg", "title":"Escalope de filet de dinde", "text":"Au four ou à la poêle, cuisinez le filet de dinde à la milanaise, au curry, à la moutarde..."},
  {"image":"./img/viandesVolailles/escalope_dinde.jpg", "title":"Escalope de filet de dinde", "text":"Au four ou à la poêle, cuisinez le filet de dinde à la milanaise, au curry, à la moutarde..."}
];

remplirDiv(listePlats, listeItemPlats, "plats");
remplirDiv(listeVolaille, listeItemVolaille, "volaille");

function remplirDiv(liste, listeItem, idDiv){
  for(let i = 0; i < liste.length; i++) {
    let item = liste[i];
    var itemFinal = debutDivCol + debutDivCard + '<img src="' + item.image + '" className="card-img-top" alt="' + item.title + '">';
    itemFinal = itemFinal + debutDivCardBody + '<h5 class="card-title">' + item.title+ '</h5>' + '<p className="card-text">' + item.text +'</p>';
    itemFinal = itemFinal + finDiv + finDiv + finDiv;

    listeItem.push(itemFinal);
  }
  document.getElementById(idDiv).innerHTML = listeItem.join('\n');
}
