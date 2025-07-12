import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
@Component({
  selector: 'app-boas-vindas',
  imports: [CommonModule],
  templateUrl: './boas-vindas.html',
  styleUrl: './boas-vindas.css'
})
export class BoasVindas {
  public dataAtual = new Date();  
}
