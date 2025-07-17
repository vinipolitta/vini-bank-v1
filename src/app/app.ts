import { Component, signal } from '@angular/core';
import { Banner } from './components/banner/banner';
import { FormNovaTransacao } from './components/form-nova-transacao/form-nova-transacao';
import { TipoTransacao, Transacao } from './models/transacao-model';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vini-bank-v1');
  transacoes = signal<Transacao[]>([]);

  onTransacaoCriada(transacao: Transacao) {
    this.transacoes.update(transacoes => [...transacoes, transacao]);
    console.log(transacao);
    console.log(this.transacoes());
    
  }
}
