export class Transacao {

    constructor(
        public readonly tipoTransacao: string,
        public readonly valorTransacao: number
    ) { }    
}

export enum TipoTransacao {
    DEPOSITO = 'deposito',
    SAQUE = 'saque',
    TRANSFERENCIA = 'transferencia'
}
