import React from 'react'
import { useState } from 'react'
import '../css/style.css'

const catalogo = [
    { id: 1, nome: "Homem-Aranha", preco: 30.00, disponivel: true, quantidade: 0 },
    { id: 1, nome: "Odisseia", preco: 30.00, disponivel: true, quantidade: 0 },
    { id: 1, nome: "Toy-Story", preco: 15.00, disponivel: false, quantidade: 0 },
    { id: 1, nome: "Michael", preco: 20.00, disponivel: true, quantidade: 0 }
];

const Ingresso = () => {
    const [items, setItems] = useState(catalogo);
    const [status, setStatus] = useState("");
    const [enviar, setEnviar] = useState(false);


    const taxaServico = 2.50;

    const alterarQuantidade = (id, valor) => {
        setItems(prev =>
            prev.map(item=>
                item.id === id ? {...item, quantidade: Math.max(0, item.quantidade + valor) } : item

            )
        )
    }

    const filmesDisponiveis = items.filter(item => item.disponivel);
    const carrinho = items.filter(item => item.quantidade > 0);

    const subtotal = carrinho.reduce((ac, item) => ac + item.preco * item.quantidade, 0);
    const total = subtotal > 0 ? subtotal + taxaServico : 0;

    const confirmarCompra = () => {
        setEnviar(true);
        setStatus("Enviando Ingressos por Email...")
        setTimeout(() => {
            setStatus("Ingresso enviados com sucesso!")
            setEnviar(false)
        }, 5000);
    }
}


export default Ingresso