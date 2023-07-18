describe('Navigation', () => {
  it('should navigate to the contact page', () => {
    // Start from the index page
    cy.visit('/')
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="contact"]').click()
 
    // The new url should include "/about"
    cy.url().should('include', '/contact')
 
    // The new page should contain an h1 with "About page"
    cy.get('p').contains('Send a message to Big Munny Photos')
    cy.get('button').contains('Send').should('be.disabled')
  })

  it('Contact Back button should navigate back to the home page', () => {
    // Start from the index page
    cy.visit('/contact')
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('a').contains(`Back`).click()
    cy.get('a').contains('Contact').should('be.visible')
  })

  it('Contact Logo should navigate back to the home page', () => {
    // Start from the index page
    cy.visit('/contact')
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('img').click()
    cy.get('a').contains('Contact').should('be.visible')
  })

  it('SendStatus Back button should navigate back to the home page', () => {
    // Start from the index page
    cy.visit('/sendStatus')
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('a').contains(`Back`).click()
    cy.get('a').contains('Contact').should('be.visible')
  })
})

describe('General Content', () => {
  it('Should only have images with alt captions', () => {
    let routes = ['/', '/contact', '/sendStatus', '/sendStatus?message="error"'];
    routes.forEach( (url) => {
      cy.visit(url)

      cy.get('img').each( (image) => {
        cy.wrap(image).should('have.attr', 'alt').then(alttext => {
              expect(alttext.length).to.be.greaterThan(1);
          });
      })
    })
  })
})

describe('Home page content', () => {
  it('All tab should have 13 images with alt captions', () => {
    // Start from the index page
    cy.visit('/')
 
    cy.get('img[alt*="Cable car at night with lights"')
    cy.get('img[alt*="Woman cosplaying"')

    cy.get('img').should('have.length', 13)
  })

  it('People tab should have 13 images with alt captions', () => {
    // Start from the index page
    cy.visit('/')
    cy.get('button').contains('By Category').click()
    cy.get('button').contains('People').click()
 
    cy.get('img[alt*="Couple in wedding gown and suit"')

    cy.get('img').should('have.length', 13)
  })

  it('Rates & Info tab content', () => {
    // Start from the index page
    cy.visit('/')
    cy.get('button').contains('By Category').click()
    cy.get('button').contains('Rates').click()

    cy.get('h3').contains('Rates')
    cy.get('h3').contains('About Me')
  })
})

describe('Test contact form', () => {
  it('Contact form should send an email', () => {
    // Start from the index page
    cy.visit('/contact')
 
    cy.get('[id=name]').type('John Doe')
    cy.get('[id=email]').type('testy@test.com')
    cy.get('[id=subject]').type('Test email from Cypress')
    cy.get('[id=message]').type('Howdy, this is a test message from automated testing')

    cy.get('button').contains('Send').click()

    cy.get('h1').contains('Success')
  })
})
