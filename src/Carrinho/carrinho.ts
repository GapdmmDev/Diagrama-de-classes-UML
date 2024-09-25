import { Produto } from "../Produto/produto";

export class Carrinho { 
    id: string;
    produtos: Produto[];
    totalQuantidade: number;
    totalPreco: number;

    constructor( id: string) {
        this.id = id;
        this.produtos = [];
        this.totalQuantidade = 0;
        this.totalPreco = 0;
    }

    adicionarProduto() {
        console.log(`Produto adicionado`)
    }

    removerProduto() {
        console.log(`Produto removido`)
    }
}