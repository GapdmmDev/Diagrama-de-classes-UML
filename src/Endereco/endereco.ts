export class Endereco {
    cep: number;
    numero: number;

    constructor(cep: number, numero: number,) {
        this.cep =  cep;
        this.numero = numero;
    }

    validarEndereco() {
        console.log('Endereço validado!')
    }

    calcularFrete() {
        console.log('Valor do frete é X')
    }
}