import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {
  
  article: Article ;//= { 'id': this.artService.articles.length+1 /*'date': new Date(), 'categorie': 'testCat', 'titre': 'testTitre', 'contenu': 'testCont' */};
  id: any;
  articleModif: Article;
  
  constructor(private artService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /* this.article = { 'id': this.artService.articles.length+1, 'date': new Date(), 'categorie': 'testCat', 'titre': 'testTitre', 'contenu': 'testCont' };
    console.dir(this.article); */

    this.route.paramMap.subscribe(res => {
      this.id = res.get('id');
      // console.log("L'article choisi a pour identifiant " + this.id)
    })

    this.article = this.artService.trouverArticle(this.id);
  }

  enregistrer(form: NgForm) {
    this.artService.modifierArticle(form.value.id,form.value);
    /*
    { DETAILS INUTILES D'AILLEURS SOURCE D'ERREURS
    categorie : form.categorie.value,
    titre : form.titre.value,
    contenu: form.contenu.value,
    date: new Date()
    }
    */
    /*this.articleModif=this.artService.trouverArticle(form.value.id)//=form.value;

    this.articleModif=form.value;*/

    console.dir(this.artService.articles);

    form.resetForm();
    
  }

}
