class HomePage {
    navigateUrl(){
        return cy.visit("https://www.ninjacasino.com")
        
    }
   
    getSearchClick() {
        return cy.get('#search')
    }
    getSearchedGame() {
        cy.get('.sc-nVkyK').trigger('mouseover')
        return cy.get('.sc-nVkyK > .sc-dkPtRN > .sc-gsDKAQ').click()
    }

    validateGameLoaded(){
       return cy.get('.sc-dlVxhl') 
    }

    validateForLanguagesDropdown(){
       return cy.get(':nth-child(1) > .sc-dvQaRk > .sc-fWCJzd > .sc-lhMiDA')
    }
   
    clickLanguageDropDown(lang){
        cy.get('.sc-fTQvRK').click()
       
        cy.wait(3000)


        if (lang == "RU")
        {
             cy.get(':nth-child(3) > .sc-dvQaRk > .sc-fWCJzd > .sc-lhMiDA').click()
             console.log("inside language RU")
        }
        else if(lang == "EE")
        {
             cy.get(':nth-child(2) > .sc-dvQaRk > .sc-fWCJzd > .sc-lhMiDA').click()
              console.log("inside language EE")
        }
        else if(lang == "FI")
        {
            cy.get(':nth-child(2) > .sc-dvQaRk > .sc-fWCJzd > .sc-lhMiDA').click()
             console.log("inside language FI")
        }
        else
        {
            console.log("inside language else")
        }

      }

      validateLanguage(){
          
          return cy.get('.sc-fTQvRK')
         
      }


      validateMenu(){
        cy.get('.sc-kBzgEd').click()
        cy.wait(2000)
        return cy.get('.sc-jftFmt > .sc-gIDmLj > ul ')
      }


      navigateNinjaTreasury(){
          this.validateMenu()
        cy.get(':nth-child(6) > div > .sc-bBHxTw').click({force: true})
        cy.get('.sc-dFtzxp > :nth-child(1) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw').click({force: true})
      }

      validateNinjaTreasury(){
        return cy.get('.ccAOMd > .sc-bjeSbO')
      }

      navigatePromotions(){
        this.validateMenu()
        cy.get(':nth-child(6) > div > .sc-bBHxTw').click({force: true})
        cy.get('.sc-dFtzxp > :nth-child(4) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw').click({force: true})
      }

      validatePromotions(){
          return cy.get('.sc-ciFQTS')
      }

      navigateCustomerSupport(){
        this.validateMenu()
        cy.get(':nth-child(7) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw').click({force: true})
      }

      validateCustomerSupport(){
        return cy.get('.sc-ciFQTS')
      }

      navigateCasinoPopularGame(){
        this.validateMenu()
        cy.get(':nth-child(2) > div > .sc-bBHxTw').click({force: true})
        cy.get('.sc-dFtzxp > :nth-child(1) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw').click({force: true})
        cy.wait(2000)
        return cy.get('.ccAOMd > .sc-bjeSbO')
      }

      navigateCasinoNew(){
        this.validateMenu()
        cy.get(':nth-child(2) > div > .sc-bBHxTw').click({force: true})
        cy.get('.sc-dFtzxp > :nth-child(2) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw').click({force: true})
        cy.wait(2000)
        return cy.get('.ccAOMd > .sc-bjeSbO')
      }

      navigateCasinoSlots(){
        this.validateMenu()
        cy.get(':nth-child(2) > div > .sc-bBHxTw').click({force: true})
        cy.get('.sc-dFtzxp > :nth-child(3) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw').click({force: true})
        cy.wait(2000)
        return cy.get('.ccAOMd > .sc-bjeSbO')
      }


      navigateCasinoJackpots(){
        this.validateMenu()
        cy.get(':nth-child(2) > div > .sc-bBHxTw').click({force: true})
        cy.get('.sc-dFtzxp > :nth-child(4) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw').click({force: true})
        cy.wait(2000)
        return cy.get('.ccAOMd > .sc-bjeSbO')
      }

      navigateCasinoTableGames (){
        this.validateMenu()
        cy.get(':nth-child(2) > div > .sc-bBHxTw').click({force: true})
        cy.get('.sc-dFtzxp > :nth-child(5) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw').click({force: true})
        cy.wait(2000)
        return cy.get('.ccAOMd > .sc-bjeSbO')
      }

      navigateCasinoMegaways(){
        this.validateMenu()
        cy.get(':nth-child(2) > div > .sc-bBHxTw').click({force: true})
        cy.get('.sc-dFtzxp > :nth-child(6) > .sc-dvQaRk > .sc-fWCJzd > .sc-bBHxTw').click({force: true})
        cy.wait(2000)
        return cy.get('.ccAOMd > .sc-bjeSbO')
      }


    }

export default HomePage