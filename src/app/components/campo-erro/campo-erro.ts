import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-campo-erro',
  standalone: true,
  templateUrl: './campo-erro.html',
  styleUrl: './campo-erro.css'
})
export class CampoErroComponent {
  @Input({ required: true }) control!: AbstractControl | null;
  @Input() fieldName?: string;

  get errorMessage(): string | null {
    if (!this.control || !this.control.errors || !this.control.touched) return null;

    if (this.control.errors['required']) {
      return `${this.fieldName || 'Este campo'} é obrigatório.`;
    }
    if (this.control.errors['minlength']) {
      const requiredLength = this.control.errors['minlength'].requiredLength;
      return `${this.fieldName || 'Este campo'} deve ter pelo menos ${requiredLength} caracteres.`;
    }
    if (this.control.errors['maxlength']) {
      const requiredLength = this.control.errors['maxlength'].requiredLength;
      return `${this.fieldName || 'Este campo'} deve ter no máximo ${requiredLength} caracteres.`;
    }
    if (this.control.errors['min']) {
      return `${this.fieldName || 'Este campo'} deve ser maior ou igual a ${this.control.errors['min'].min}.`;
    }
    if (this.control.errors['max']) {
      return `${this.fieldName || 'Este campo'} deve ser menor ou igual a ${this.control.errors['max'].max}.`;
    }
    // Adicione outros erros conforme necessário
    return 'Campo inválido.';
  }
} 