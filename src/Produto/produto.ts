export class Produto {
    id: string;
    nome: string;
    descricao: string;
    foto: string;
    valor: number;

    constructor(
        id: string,
        nome: string,
        descricao: string,
        foto: string,
        valor: number,
    ) {

        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.foto = foto;
        this.valor = valor;

    }

    adicionar(){
        console.log(`Produto ${this.nome} criado!`)
    }

    editar(novoNome: string, novaDescricao: string, novaFoto: string, novoValor: number) {
        this.nome = novoNome;
        this.descricao = novaDescricao;
        this.foto = novaFoto;
        this.valor = novoValor;
    }

    excluir() {
        console.log(`Produto ${this.nome} excluido!`)
    }
}