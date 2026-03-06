import certificacaoPage from '../pages/certificacaoPage';

describe('Relatório de Qualidade Automatizado - Certificação Rubeus', () => {
  
  beforeEach(() => {
    certificacaoPage.visit();

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Item 01 - Deve validar se o elemento "Para quem é essa certificação" é interativo', () => {
    cy.contains('Para quem é essa certificação?').should('be.visible').should('have.css', 'cursor', 'pointer'); 
  });

  it('Item 02 - Deve validar se o botão Saiba mais possui funcionalidade de link', () => {
    cy.get(certificacaoPage.elements.btnSaibaMais).first().should('be.visible').should('have.attr', 'href').and('not.equal', '#').and('not.equal', '');
  });

  it('Item 03 - Deve validar impedimento de fluxo por erro de Base Legal', () => {
    cy.get(certificacaoPage.elements.formInscricao.inputNome).type('Beatriz QA');
    cy.get(certificacaoPage.elements.formInscricao.inputTel).type('11962653619')
    cy.get(certificacaoPage.elements.formInscricao.inputEmail).type('teste@qa.com');
    cy.get(certificacaoPage.elements.formInscricao.btnAvancar).filter(':visible').click();
    cy.wait(1000);

    cy.get(certificacaoPage.elements.formInscricao.errorBaseLegal).should('not.exist');
  });

  it('Item 04 - Deve validar a presença da imagem distorcida', () => {
    cy.get(certificacaoPage.elements.fotoDistorcida).should('be.visible');
  });

  it('Item 05 - Deve validar a presença do texto desalinhado', () => {
    cy.get(certificacaoPage.elements.blocoTextoDescritivo).should('be.visible');
  });

  it('Item 06 - Deve validar que o botão inferior redireciona para a página da Rubeus', () => {
    cy.get(certificacaoPage.elements.btnQueroMeCertificar).should('be.visible').should('have.attr', 'href', 'https://rubeus.com.br/');
});

  it('Item 07 - Deve validar texto do primeiro card da seção Outros Cursos', () => {
    cy.get(certificacaoPage.elements.primeiroCardCurso).should('contain', 'Saiba mais');
});

  it('Item 08.1 - Deve validar links da seção Outros Cursos', () => {
    cy.get(certificacaoPage.elements.setaCurso1).should('have.attr', 'href').and('not.be.empty');
  });

  it('Item 08.2 - Deve validar links da seção Outros Cursos', () => {
    cy.get(certificacaoPage.elements.setaCurso2).should('have.attr', 'href').and('not.be.empty');
  });

  it('Item 08.3 - Deve validar links da seção Outros Cursos', () => {
    cy.get(certificacaoPage.elements.setaCurso3).should('have.attr', 'href').and('not.be.empty');
  });

  it.only('Item 09 - Deve validar se o ícone Youtube redireciona corretamente', () => {
    cy.get(certificacaoPage.elements.iconYoutube).should('have.attr', 'href', 'https://www.youtube.com/');
  });
});