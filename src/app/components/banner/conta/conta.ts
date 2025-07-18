import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-conta',
  imports: [CommonModule],
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {
  saldo = input.required<number>();
}
