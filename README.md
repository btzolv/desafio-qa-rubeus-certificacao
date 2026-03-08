Desafio de Automação Rubeus - Certificação

Este repositório contém a automação de testes para a página de certificação da Rubeus, utilizando Cypress e o padrão Page Objects. O objetivo foi identificar e documentar bugs de usabilidade, conteúdo e funcionalidade.

🚀 Tecnologias Utilizadas
- Cypress
- JavaScript
- Node.js

🏗️ Estrutura do Projeto
cypress/e2e/desafio_rubeus.cy.js: Arquivo contendo os casos de teste.

cypress/support/pages/certificacaoPage.js: Mapeamento de elementos.

🐞 Bugs Identificados e Automatizados
Abaixo, os itens validados que geraram falhas controladas para evidência:

Página (Certificação):  https://qualidade.apprbs.com.br/certificacao

Item 01 – Ausência de interação no elemento informativo
Tipo: Correção
Classificação: Usabilidade
Prioridade: Média
Descrição: O texto "Para quem é essa certificação?" não apresenta comportamento (passar o mouse), não é clicável e não exibe nenhuma informação adicional, frustrando a expectativa de navegação do usuário.

Item 02 – Botão de Saiba Mais inoperante
Tipo: Correção
Classificação: Utilidade
Prioridade: Alta
Descrição: O botão "Saiba mais" localizado na seção superior não possui funcionalidade de clique, impedindo que o usuário acesse detalhes complementares sobre o conteúdo.

Item 03 – Bloqueio no fluxo  "Inscreva-se agora"
Tipo: Correção
Classificação: Utilidade
Prioridade: Alta
Descrição: No formulário "Inscreva-se agora", após o preenchimento de todos os campos visíveis, o sistema impede o avanço ao exibir o erro "informe a base legal". Como não há campo disponível para esta seleção, o fluxo de inscrição é totalmente interrompido.

Item 04 – Inconsistência na formatação de blocos de texto
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: Os campos de texto descritivos apresentam falhas de estilização (alinhamento e espaçamento), prejudicando a hierarquia visual e a legibilidade da página.

Item 05 – Inadequação de elemento visual (foto)
Tipo: Melhoria
Classificação: Desejabilidade
Prioridade: Baixa
Descrição: A imagem localizada abaixo do bloco de texto descritivo apresenta distorção ou enquadramento incorreto, impactando negativamente a estética profissional da página.

Item 06 – Redirecionamento de link externo inválido
Tipo: Correção
Classificação: Utilidade
Prioridade: Alta
Descrição: O botão "Quero me certificar" da barra inferior está configurado incorretamente, redirecionando o usuário para o domínio do Google em vez da página de checkout ou inscrição.

Item 07 – Erro de ortografia e falha de interação em card de curso
Tipo: Correção
Classificação: Usabilidade / Desejabilidade
Prioridade: Média
Descrição: No primeiro item da seção "Outros Cursos", o rótulo do botão apresenta erro de digitação ("Saiba" em vez de "Saiba mais"). Além disso, nem o botão nem a seta indicativa possuem funcionalidade de clique.

Item 08 – Falha de navegação nos cards de "Outros Cursos"
Tipo: Correção
Classificação: Usabilidade
Prioridade: Média
Descrição: Todas as setas indicativas nos cards de cursos, que deveriam funcionar como links de navegação para detalhes, encontram-se inativas e sem opção de interação.

Item 09 – Mapeamento incorreto de ícone de rede social
Tipo: Correção
Classificação: Usabilidade
Prioridade: Média
Descrição: O ícone correspondente ao Youtube no rodapé da página está redirecionando o tráfego para a plataforma TikTok, caracterizando um erro de vinculação de links externos.

🛠️ Como rodar o projeto
Clone o repositório:
git clone https://github.com/btzolv/desafio-qa-rubeus-certificacao.git

Instale as dependências:
npm install

Abra o Cypress:
npx cypress open ou rode em modo headless: npx cypress run
