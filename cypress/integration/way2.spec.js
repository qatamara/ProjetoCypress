///<reference types="cypress"/>



describe('way2automation',() =>{
    it('devem conseguir realizar o cadastro site',() => {
        cy.visit('http://way2automation.com/way2auto_jquery/index.php');
        //cy.get - busca um elemento
        //.type - insere um texto
        cy.get('[name="name"]').type('Tamara Testando');
        cy.get('[name="phone"]').type('5123467890');
        cy.get('[name="email"]').type('teste@gmail.com.br');
        cy.get('select').select('Argentina');
        cy.get('[name="city"]').type('Buenos Aires');
        cy.get(':nth-child(10) > input').type('tamara');
        cy.get(':nth-child(11) > input').type('123455');
        cy.get(':nth-child(12) > .span_1_of_4 > .button').click();
        
    });
});
