import { Injectable } from '@angular/core';
import { HttpClient /*, HttpHeaders*/} from '@angular/common/http';
import { Article } from './interfaces/article';

@Injectable({
  providedIn: 'root'
})

/* Version du service ArticleService connecté au réseau 
contrairement à l'ancienne qui sert juste à tester localement le côté front-end */

export class _ArticleService {

  baseUrl: string = "http://localhost:3000";
  
  constructor(private http: HttpClient) { }

  listerArticles() {
    return this.http.get<Article[]>(this.baseUrl + "/liste"); // <Article[]> est-ce vraiment nécessaire ?
  }

  trouverArticle(id: any) {
    return this.http.get<Article>(this.baseUrl + "/liste/" + id); // <Article> est-ce vraiment nécessaire ?
  }

  ajouterArticle(a: Article) {
    return this.http.post(this.baseUrl, a /*, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded') 
    }*/);

  };

  eliminerArticle(id: any) {
    return this.http.delete(this.baseUrl + "/liste/" + id);
   };

  modifierArticle(id: any, a: any /*Article*/) { 
    return this.http.put(this.baseUrl + "/liste/" + id, a)
  };

}
