import { Component, computed, signal } from '@angular/core';
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

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacao) => {
      switch (transacao.tipoTransacao) {
        case TipoTransacao.DEPOSITO:
          return acc + transacao.valorTransacao;
        case TipoTransacao.SAQUE:
          return acc - transacao.valorTransacao;
        case TipoTransacao.TRANSFERENCIA:
          return acc - transacao.valorTransacao;

        default:
          throw new Error('Tipo de transação inválido');
      }

    }, 200);
  });



  onTransacaoCriada(transacao: Transacao) {
    if (transacao.tipoTransacao === TipoTransacao.SAQUE && transacao.valorTransacao > this.saldo()) {
      return alert('Saldo insuficiente');
    }

    this.transacoes.update(transacoes => [transacao, ...transacoes]);
    console.log(transacao);
    console.log(this.transacoes());


  }
}
