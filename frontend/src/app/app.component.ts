import { Component } from '@angular/core';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CabecalhoComponent]
})
export class AppComponent {

  title = 'field';
  
  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
