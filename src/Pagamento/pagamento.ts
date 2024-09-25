export class Pagamento {
    id: string;
    valor: number;
    formaPagamento: string;
    dataPagamento: Date;

    constructor(id: string, valor: number, formaPagamento: string, dataPagamento: Date) {
        this.id = id;
        this.valor = valor;
        this.formaPagamento = formaPagamento;
        this.dataPagamento = dataPagamento;
    }

    emitirNota() {
        console.log('Emissão de nota concluída')
    }

    validarPagamento() {
        console.log('Pagamento validado')
    }
}