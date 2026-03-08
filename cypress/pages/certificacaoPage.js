class CertificacaoPage {
    elements = {
      txtParaQuem: 'p:contains("Para quem é essa certificação?")', 
      
      
      btnSaibaMais: 'a:contains("Saiba mais")',
  
      formInscricao: {
        section: '#inscreva-se-agora',
        inputNome: 'input[name="pessoa.nome"]',
        inputTel: 'input[name="pessoa.telefonePrincipal"]',
        inputEmail: 'input[name="pessoa.emailPrincipal"]',
        btnAvancar: 'button.rbBtnNext',
        errorBaseLegal: ':contains("É necessário informar a base legal")'
      },
  
      blocoTextoDescritivo: '#icijv',
      fotoDistorcida: '#ihcig',
  
      btnQueroMeCertificar: '#ixy3u1',
  
      primeiroCardCurso: '#inawao',
      setaCurso1: "i27rwk",
      setaCurso2: "i5ddsq",
      setaCurso3: "imis54",
      btnSaibaIncompleto: ':contains("Saiba")',
      setasCursos: '.card-curso .seta-link',
  
      iconYoutube: '#inm1sk',

      fraseBody: '#icijv'
    }
  
    visit() {
      cy.visit('https://qualidade.apprbs.com.br/certificacao');
    }
  }
  
  export default new CertificacaoPage();