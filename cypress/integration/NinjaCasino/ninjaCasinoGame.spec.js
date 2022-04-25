import HomePage from "../pageObjects/pageObjects.js"

const homePage=new HomePage();


Given ('I Navigate to Website',()=>{
    cy.viewport(1300, 850)
    homePage.navigateUrl()
    
})

When ('I clicked Search button',()=>{
    homePage.getSearchClick()
    cy.wait(2000)
})

Then ('I Enter Serach Value in Search button',()=>{
    homePage.getSearchClick().type("BOOK OF DEAD",{force: true})
    cy.wait(2000)
})

Then ('Click on Play button',()=>{
    homePage.getSearchedGame()
})

And ('Validate the Game is loading',()=>{
    homePage.validateGameLoaded().should('be.visible')
})
