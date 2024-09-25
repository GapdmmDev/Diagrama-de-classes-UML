export class finalizarCompra{
    id: string;
    statusPagamento: string;
    dataEntrega: Date;

    constructor(id: string, statusPagamento: string, dataEntrega: Date) {
        this.id = id;
        this.statusPagamento = statusPagamento;
        this.dataEntrega = dataEntrega;
    }

    processarPedido() {
        
    }
}