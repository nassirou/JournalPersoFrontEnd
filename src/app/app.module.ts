import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticlesComponent } from './articles/articles.component';
import { ErrorComponent } from './error/error.component';
import { ArticleService } from './services/article.service';
import { NouveauComponent } from './nouveau/nouveau.component';

// ajouté manuellement car erreur sur formulaire de NouveauComponent
import { FormsModule } from '@angular/forms';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
//-----
import {HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ArticlesComponent,
    ErrorComponent,
    NouveauComponent,
    DetailsArticleComponent,
    ModifierArticleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ajouté manuellement car erreur sur formulaire de NouveauComponent
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
