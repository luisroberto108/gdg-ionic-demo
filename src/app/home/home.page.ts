import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonAccordion, IonLabel, IonAccordionGroup, IonButton, IonCardContent, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonFooter, IonAlert, IonChip, IonAvatar, IonInput } from '@ionic/angular/standalone';
import { Personaje, PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInput, IonAvatar, IonChip, IonAlert, IonFooter, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonCardContent, IonButton, IonAccordionGroup, IonLabel, IonAccordion, IonItem, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {

  private readonly personajesService = inject(PersonajesService);

  personajes: Personaje[] = [];
  pagina: number = 1;
  cargando: boolean = false;

  constructor() {
    
  }
    
  ngOnInit(): void {
    this.cargando = true;
    this.personajesService.cargar(1).subscribe((r) => {
      this.personajes = r;
      this.cargando = false;
    });
  }

  cargarPorPagina(event: CustomEvent) {
    const paginaSeleccionara = event.detail.value;
    this.personajesService.cargar(paginaSeleccionara).subscribe(r => {
      this.personajes = r;
      this.cargando = false;
    })
  }
}
