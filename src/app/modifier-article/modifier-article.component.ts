import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { _ArticleService } from '../-article.service';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {

  article: Article;//= { 'id': this.artService.articles.length+1 /*'date': new Date(), 'categorie': 'testCat', 'titre': 'testTitre', 'contenu': 'testCont' */};
  id: any;
  // articleModif: Article;
  listeCategorie: String[] = ['POLITIQUE', 'ECONOMIE', 'SOCIETE', 'CULTURE', 'SPORT', 'INTERNATIONAL', 'HIGH-TECH'];

  constructor(private artService: _ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /* this.article = { 'id': this.artService.articles.length+1, 'date': new Date(), 'categorie': 'testCat', 'titre': 'testTitre', 'contenu': 'testCont' };
    console.dir(this.article); */

    this.route.paramMap.subscribe(res => {
      this.id = res.get('id');
      console.log("L'article choisi a pour identifiant " + this.id)
    })

    /*this.article = */ this.artService.trouverArticle(this.id).subscribe(
      (data) => { this.article = data /*as Article*/},
      (err) => { });
  }

  enregistrer(form: NgForm) {
    if (confirm("SOUHAITEZ-VOUS VRAIMENT METTRE A JOUR CET ARTICLE ?")) {
      this.artService.modifierArticle(/*form.value.id*/ this.id , form.value).subscribe( // diférences entre thid.id et form.value.id
        (data) => {
          alert("L'ARTICLE A ETE MODIFIE AVEC SUCCES");
        },
        (err) => { });
    };
    /*
    { DETAILS INUTILES D'AILLEURS SOURCE D'ERREURS
    categorie : form.categorie.value,titre : form.titre.value,contenu: form.contenu.value,date: new Date()
    }
 
    this.articleModif=form.value; */

    // console.dir(this.artService.articles);

    this.article = null;
    /* si on n'insère pas la ligne ci-dessus, le champ de formulaire mis à jour reste affiché après validation
    (exploite property binding avec valeur nulle => on efface-vide la source de donnée sinon le resetForm()
     va maintenir afficher les données déjà enregistrées)
    
      this.article = {
      id: form.value.id, categorie : "test", titre : "test", contenu: "test", date: new Date()
      }
    // bloc de test de property binding après validation de la modification. Résultat, ça marche !
    form.resetForm(null);
    */
    form.resetForm(); // cette ligne actualise (rafraichit) seulement le formulaire ou bien le vide avant de reactualiser ?
    // alert("L'ARTICLE A ETE MODIFIE AVEC SUCCES")

  }
}

