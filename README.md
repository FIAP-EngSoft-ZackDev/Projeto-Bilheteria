# 🎬 Bilheteria de Cinema 

Este é um projeto de simulação de uma bilheteria de cinema digital. O sistema permite listar filmes disponíveis, controlar a quantidade de ingressos selecionados em tempo real, calcular dinamicamente o subtotal, taxas e o valor total, além de simular a confirmação e envio dos ingressos por e-mail.

O design foi desenvolvido com uma identidade visual cinematográfica premium, utilizando uma paleta de cores roxa/neon (estilo cyberpunk/streaming) e tipografia moderna.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas de desenvolvimento web:

* **React (v18+)**: Biblioteca JavaScript para a construção da interface de usuário baseada em componentes.
* **JavaScript (ES6+)**: Utilização de métodos de array avançados (`map`, `filter`, `reduce`) e manipulação de estados assíncronos.
* **CSS3 Custom Properties**: Estilização modular utilizando variáveis CSS para consistência da paleta de cores e tipografia.
* **Google Fonts**: Integração das fontes *Syne* (para títulos impactantes) e *Plus Jakarta Sans* (para excelente legibilidade de textos).

---

## 🧠 Intenção de Aprendizado e Conceitos Praticados

Este projeto foi desenvolvido com o objetivo principal de consolidar conceitos fundamentais do ecossistema React e lógica de programação aplicada à interfaces dinâmicas. Os principais tópicos exercitados foram:

1. **Gerenciamento de Estado (`useState`)**: 
   * Controle do estado complexo do catálogo de filmes (imutabilidade de dados ao atualizar objetos dentro de arrays).
   * Manipulação de estados de interface como carregamento (`enviar`) e notificações temporárias (`status`).

2. **Lógica de Renderização Condicional**:
   * Exibição do carrinho de compras apenas quando houver itens selecionados.
   * Desabilitação do botão de confirmação para evitar cliques duplos durante o processamento.
   * Filtragem de dados em tempo real para exibir apenas os filmes marcados como `disponiveis: true`.

3. **Operações Avançadas com Arrays (`Reduce` e `Math.max`)**:
   * Uso do método `.reduce()` para calcular o subtotal somando os preços multiplicados pela quantidade de cada ingresso de forma limpa e performática.
   * Uso de `Math.max(0, ...)` para garantir que o usuário nunca selecione uma quantidade negativa de ingressos.

4. **Efeitos Assíncronos (`setTimeout`)**:
   * Simulação de uma requisição de API com `setTimeout` para alternar o status do pedido após 5 segundos, reproduzindo a experiência real de envio de dados para um servidor.

---

## 🔧 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
