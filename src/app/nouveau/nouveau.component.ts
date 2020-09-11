import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../services/article.service';
// import { Article } from '../interfaces/article';
import { ActivatedRoute } from '@angular/router';
// import {NgModule} from '@angular/core';
// import {FormsModule, NgForm} from '@angular/forms';
// Les IMPORT ci-dessus rendus superflus car on an déjà les IMPORT de APP.MODULE


@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent implements OnInit {

  // article: Article;
  id: any;
  // idArticle:any; // attribut à supprimer car devenu inutile
  // ajouter du code pour récuperer l'identifiant transmis par la route paramétrée venant de détails-article
  // dateArticle:Date; // attribut à supprimer car devenu inutile

  constructor(private artService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.dateArticle=new Date() // ligne désactivée car date déjà prise en compte dans la méthode ajouterArticle()
    this.route.paramMap.subscribe(res => {
      this.id = res.get('id');
      // console.log("L'article choisi a pour identifiant " + this.id)
    })

    // this.article = this.artService.trouverArticle(this.id);
  }

  valider(form: NgForm){
    this.artService.ajouterArticle(form.value);
      /*{ DETAILS INUTILES D'AILLEURS SOURCE D'ERREURS
      categorie : form.categorie.value,
      titre : form.titre.value,
      contenu: form.contenu.value,
      date: new Date()
      }*/
    form.resetForm();
  }

}
