import { DOCUMENT } from '@angular/common';
import {AfterViewInit, ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {clear} from "tsparticles";

@Component({
  selector: 'home-page', //selecteur html pour appeler le compo
  templateUrl: './home-page.component.html',// template associé
  styleUrls: ['./home-page.component.scss']// style associé pour surcharger les styles principaux

})

// HomePageComponent convention de nommage PascalCase pour les noms de classe
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {

  // variables et functions convention de nomage camelCase
  currentSection = 'home-page';
  timerInterval:any;

  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly changeDetectorRef: ChangeDetectorRef) {


    // exécuté en premier !

    // exemple de log à checker dans la console du navigateur
    console.log('(exemple de log) section courante: ' + this.currentSection); // utilisation de this pour appels à fonctions, variables, ...
  }

  ngOnInit() {
    // exécuté automatiquement à l'initialisation du composant
    // obligatoire si implements OnInit (qui est facultatif)
    // D'autres existent, voir https://angular.io/guide/lifecycle-hooks

  }

  ngAfterViewInit() {
    // exécuté automatiquement après l'initialisation de la vue
    // obligatoire si implements AfterViewInit (qui est facultatif)
    // D'autres existent, voir https://angular.io/guide/lifecycle-hooks
    const html = document.getElementById('homeTitleId');
    if (html){
      const textArray = ['I would be delighted if the sea were full of cucumber.', 'I love bacon, beer, birds, and baboons.', 'Potato wedges probably are not best.']
      let i=0;
      this.timerInterval=setInterval(()=>{
        html.innerHTML=textArray[i];
        i++;
        if (i>2){
          i=0;
        }
      }, 2500);
    }
  }

  // Toujours utiliser public ou private pour les fonctions, variables , constantes ...
  // Si pas précisé, c'est public par défaut mais on s'expose à des soucis de lint
  // NOTE : Pour les appels depuis le html, mettre en public
  public windowScroll(): void {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      // @ts-ignore
      document.getElementById('navbar').style.backgroundColor = '#1a1a1a';
      // @ts-ignore
      document.getElementById('navbar').style.padding = '15px 0px';
    } else {
      // @ts-ignore
      document.getElementById('navbar').style.backgroundColor = '';
      // @ts-ignore
      document.getElementById('navbar').style.padding = '20px';
    }
  }

 // Utiliser void si la fonction ne renvoie rien
  private returnNothing (): void {
    const fake = this.returnABoolean(false)
  }

  // Préciser le type ( boolean, any, unknown ...)
  private returnABoolean (input : boolean): boolean {
    const fake = !input;
    return fake;
  }

  public toggleMenu(): void {
    // @ts-ignore
    document.getElementById('navbarCollapse').classList.toggle('show');
  }


  public onSectionChange(sectionId: string): void {
    this.currentSection = sectionId;
  }

  ngOnDestroy() {
    // exécuté automatiquement avant la desctruction du composant
    // obligatoire si implements OnDestroy (qui est facultatif)
    // Important : Si on a souscrit à des abonnements, se désabonner ici pour éviter les fuites de mémoires
    // D'autres existent, voir https://angular.io/guide/lifecycle-hooks

    clearInterval(this.timerInterval);
  }

  toggleSocialLinks:boolean = true;

  onEmitToggleSocialLinksEvent(event: boolean) {
    if (this.toggleSocialLinks === false){
      this.toggleSocialLinks = !event;
    }else{
      this.toggleSocialLinks = event;
    }
    this.changeDetectorRef.detectChanges();
  }
}
