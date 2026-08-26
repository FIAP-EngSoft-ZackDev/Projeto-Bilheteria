import React from 'react'
import { useState } from 'react'
import '../css/style.css'

const catalogo = [
    { id: 1, nome: "Homem-Aranha", preco: 30.00, disponivel: true, quantidade: 0 },
    { id: 2, nome: "Odisseia", preco: 30.00, disponivel: true, quantidade: 0 },
    { id: 3, nome: "Toy-Story", preco: 15.00, disponivel: false, quantidade: 0 },
    { id: 4, nome: "Michael", preco: 20.00, disponivel: true, quantidade: 0 }
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
        }, 5000)
    }



    return (
        <>
        <div className="container">
            <h2>Bilheteria de Cinema</h2>
            {filmesDisponiveis.map(item => (
                <div key={item.id} className="filme-catalogo">
                    <span>{item.nome}(R$ {item.preco})</span>
                    <div className="filme-controles">
                        <button onClick={() => alterarQuantidade(item.id, -1)} className="btn-qtd">-</button>
                        <span>{item.quantidade}</span>
                        <button onClick={() => alterarQuantidade(item.id, +1)} className="btn-qtd">+</button>
                    </div>
                </div>
            ))}

                <hr className='linha'/>
                <h3>Resumo da Compra</h3>
                {carrinho.length === 0 ? (
                    <p>Seu carrinho está vazio</p>
                ):(
                <>
                    <ul className='resumo-lista'>
                        {carrinho.map(item =>(
                            <li key={item.id}>
                                {item.quantidade} x {item.nome} = R$ {(item.preco * item.quantidade.toFixed(2))}
                            </li>
                        ))}
                    </ul>
                    <p>Subtotal: R${subtotal.toFixed(2)}</p>
                    <p>Taxa de Serviço: R${taxaServico.toFixed(2)}</p>
                    <strong className="total">Total a pagar: R${total.toFixed(2)}</strong>

                    <button className='btn-confirmar' onClick={confirmarCompra} disabled={enviar}>
                            {enviar ? "Enviando..." : "Confirmar Pedido"}
                    </button>
                </>
                    )}

                    {status && (
                        <div className='alerta-status'>
                            <strong>Alerta: </strong>{status}
                        </div>
                    )}

        </div>
        </>
    )

}
export default Ingresso