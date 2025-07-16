import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CampoErro } from '../../shared/campo-erro/campo-erro';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, ReactiveFormsModule, CampoErro],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css'
})
export class FormNovaTransacao implements OnInit {
  valorTransacao = "";
  formNovaTransacao!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formNovaTransacao = this.fb.group({
      tipoTransacao: ['', Validators.required],
      valorTransacao: ['', Validators.required]
    });
  }

  confirmarTransacao() {
    if (this.formNovaTransacao.invalid) {
      this.marcarTodosComoTocados(this.formNovaTransacao);
      return;
    }
    console.log(this.formNovaTransacao.value);

    this.formNovaTransacao.reset({
      tipoTransacao: '',
      valorTransacao: ''
    });
  }

  private marcarTodosComoTocados(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.marcarTodosComoTocados(control);
      } else {
        control.markAsTouched();
      }
    });
  }

}
