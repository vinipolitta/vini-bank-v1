import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoasVindas } from './boas-vindas/boas-vindas';
import { Conta } from './conta/conta';

@Component({
  selector: 'app-banner',
  imports: [CommonModule, BoasVindas,Conta],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {


}
