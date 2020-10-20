export interface Article {
    // id: number;
    id?: any; // string;    
    /* sans le underscore (suggeré par l'analyse du console.log), le _ID auto-généré par mongoose n'est pas visible...
    type ANY est préférable au type NUMBER car l'_ID n'est pas numérique... 
    on peut aussi utiliser le type STRING même si cela cause des problèmes de compatibilité de types
    il faut utiliser les mêmes noms de champs pour le modèle mongoose et pour l'interface de formatage côté front-end
    */
    categorie?: string;
    titre?: string;
    contenu?: string;
    // date?: Date;
    createdAt: Date
}
