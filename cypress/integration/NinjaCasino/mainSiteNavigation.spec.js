import HomePage from "../pageObjects/pageObjects.js"

const homePage=new HomePage();


Given ('I Navigate to Website',()=>{
    cy.viewport(1300, 850)
    homePage.navigateUrl()
})

And('Validate Menu options on NinjaCasino',()=>{
    cy.viewport(420, 568)
    homePage.navigateUrl()
    homePage.validateMenu().should('contain.text','HomeCASINOLIVE CASINOSPORTS BETTINGLIVE BETTINGPROMOTIONSCustomer Support')
})

When ('I Click on Ninja Treasury',()=>{
    homePage.navigateNinjaTreasury()
})

Then ('Ninja Treasury Page should be redirected',()=>{
    homePage.validateNinjaTreasury().should('contain.text','Ninja Treasures')
})

And ('I Navigate to Promotion page',()=>{
    homePage.navigatePromotions()
})

Then ('Promotion Page should be redirected',()=>{
    homePage.validatePromotions().should('contain.text','Promotions')
})

And ('I Navigate to Customer Support',()=>{
    homePage.navigateCustomerSupport()
})

Then ('Customer Support Center Page should be redirected',()=>{
    homePage.validateCustomerSupport().should('contain.text','Customer Support Centre')
})

And ('Navigate to Popular Games',()=>{
    homePage.navigateCasinoPopularGame().should('contain.text','Popular Games')
})

And ('Navigate to New',()=>{
    homePage.navigateCasinoNew().should('contain.text','New')
})

And ('Navigate to Slots',()=>{
    homePage.navigateCasinoSlots().should('contain.text','Slots')
})

And ('Navigate to Jackpots',()=>{
    homePage.navigateCasinoJackpots().should('contain.text','Jackpots')
})

And ('Navigate to Table Games',()=>{
    homePage.navigateCasinoTableGames().should('contain.text','Casino games')

})

And ('Navigate to Megaways',()=>{
    homePage.navigateCasinoMegaways().should('contain.text','Megaways')
})





