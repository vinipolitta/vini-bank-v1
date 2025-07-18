export class Transacao {

    constructor(
        public readonly tipoTransacao: string,
        public readonly valorTransacao: number
    ) { }    
}

export enum TipoTransacao {
    DEPOSITO = 'Depósito',
    SAQUE = 'Saque',
    TRANSFERENCIA = 'Transferência'
}
