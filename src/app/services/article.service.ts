import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { HttpClient } from '@angular/common/http' //'selenium-webdriver/http';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  // articles: Array<Article> = new Array<Article>(); // revoir syntaxe de déclaration des tableaux
  articles: Article[] = [{
    "id": 1,
    "categorie": "SPORT",
    "titre": "Finale PSG-Bayern",
    "contenu": "Déception...",
    "date": new Date()
  },
  {
    "id": 2,
    "categorie": "POLITIQUE",
    "titre": "Négociation junte-Cedeao",
    "contenu": "Transition de 3 ans proposée..",
    "date": new Date()
  },
  {
    "id": 3,
    "categorie": "ECONOMIE",
    "titre": "résultats semestriel de Sicable",
    "contenu": "Performance explosive...",
    "date": new Date()
  }
  ];

  // url:string = "http://localhost:4200"; //

  constructor(/*private http:HttpClient*/) { } //

  ajouterArticle(a: Article) {
    a.id = this.articles.length + 1;
    /* vérifier si problème de ID en doublon en RAM et disque en cas de suppression d'éléments du tableau 
    */

    a.date=new Date();
    this.articles.push(a);
    
    /*
    this.http.post(this.url,a);
    */

  };

  listerArticles() {
    return this.articles;
    // return this.http.get<Article[]>(this.url+'/articles');
  }

  trouverArticle(id: any) {
    return this.articles.find(a => a.id == id);
  }

  eliminerArticle(a: Article) {
    // this.listeArticles=this.artService.articles

    var index = this.articles.indexOf(a);
    if (index > -1) {
      this.articles.splice(index, 1);
    }
    
  }

  modifierArticle(id:any, a: Article) {
    var i=id-1;
    this.articles[i].date=a.date;
    this.articles[i].categorie=a.categorie; 
    this.articles[i].titre=a.titre;    
    this.articles[i].contenu=a.contenu;
  }

}
