import 'cypress-xpath'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev-in.kiiaccelerators.com/am/ui/login/')

    const iframe = document.getElementById('yourIframeId'); // Replace with your iframe's ID
iframe.contentWindow.postMessage('Your message', 'https://dev-in.kiiaccelerators.com');

     cy.xpath("//input[@name='username']").clear();
     cy.xpath("//input[@name='username']").type("user")
    // cy.wait(2000)
    //  cy.get("#user_pass").clear();   
    //   cy.get("#user_pass").type("user")
  })
})

