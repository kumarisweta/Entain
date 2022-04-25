
import HomePage from "../pageObjects/pageObjects.js"

const homePage=new HomePage();

Given ('I Navigate to Website',()=>{
    cy.viewport(1300, 850)
    homePage.navigateUrl()
    
})

And ('I clicked on the language dropdown select Finnish',()=>{
    homePage.clickLanguageDropDown("FI")
    cy.wait(3000)
})

Then ('Application should get loaded in Finish Language',()=>{
    homePage.validateLanguage().should('contain.text','FI')
   
})

And ('I clicked on the language dropdown select Estonian',()=>{
    homePage.clickLanguageDropDown("EE")
    cy.wait(3000)
})
Then ('Application should get loaded in Estonian Language',()=>{
    homePage.validateLanguage().should('contain.text','EE')
})

And ('I clicked on the language dropdown Select Russian',()=>{
    homePage.clickLanguageDropDown("RU")
    
})
Then ('Application should get loaded in Russian Language',()=>{
    homePage.validateLanguage().should('contain.text','RU')
})
