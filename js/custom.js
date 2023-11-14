const debutDivCol = '<div class="col">';

const debutDivCard = '<div class="card" style="width: 18rem;">';

const debutDivCardBody = '<div class="card-body">';

const finDiv = '</div>';

var listeItemPlats = [];

const listePlats = [{"image":"/img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."},
  {"image":"./img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."},
  {"image":"./img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."},
  {"image":"./img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."},
  {"image":"./img/platsCuisine/choucroute.jpg", "title":"Choucroute", "text":"Une recette traditionnelle et alsacienne, un incontournable pour vos repas en hiver."}];

for(let i = 0; i < listePlats.length; i++) {
  let plat = listePlats[i];
  var itemPlat = debutDivCol + debutDivCard + '<img src="' + plat.image + '" className="card-img-top" alt="' + plat.title + '">';
  itemPlat = itemPlat + debutDivCardBody + '<h5 class="card-title">' + plat.title+ '</h5>' + '<p className="card-text">' + plat.text +'</p>';
  itemPlat = itemPlat + finDiv + finDiv + finDiv;

  listeItemPlats.push(itemPlat);
}

document.getElementById("plats").innerHTML = listeItemPlats.join('\n');
