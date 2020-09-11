import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// les import ci-dessus ajouté pour définir le tableau de routage
import { AccueilComponent } from './accueil/accueil.component';
import { ArticlesComponent } from './articles/articles.component';
import { ErrorComponent } from './error/error.component';
import { NouveauComponent } from './nouveau/nouveau.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  // { path: 'articles/:categorie/:titre', component: ArticlesComponent },
  // { path: 'detailsArticle/:dateArt/:categorieArt/:titreArt/:contenuArt', component: DetailsArticleComponent},

  // { path: 'articles/detailsArticle', component: DetailsArticleComponent},

  { path: 'articles/detailsArticle/:id', component: DetailsArticleComponent }, // le préfixe articles/ est obligatoire
  {
    path: 'articles', component: ArticlesComponent
    /* children: [
      {path:'detailsArticle/:id', component: DetailsArticleComponent}
      ] */},
  // { path: 'nouveau/:id', redirectTo: 'nouveau' },
  { path: 'nouveau', component: NouveauComponent },
  { path: 'modifier/:id', component: ModifierArticleComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
