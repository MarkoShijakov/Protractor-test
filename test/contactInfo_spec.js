var CreateAccPage = require('../page-objects/createAcount_page')
var StartPage = require('../page-objects/start_page')
var ContactPage = require('../page-objects/contactInfo_page')

describe('Teach First Application Form, Contact information', function () {
    var createAccPage
    var startPage
    var contactPage

    //Before each test case. Do something
    beforeEach(function () {
        createAccPage = new CreateAccPage()
        startPage = new StartPage()
        contactPage = new ContactPage()

        browser.ignoreSynchronization = true

        //Open URL
        browser.get('https://ampapply.dev.teachfirst.org.uk/MinimumRequirements.aspx')
        browser.driver.manage().window().maximize();
        browser.sleep(500)

    })

    //After each test case. Do something.
    afterEach(function () {

    })

    it('Should enter a new email address and successfully proceed to the next registration step', function () {

        startPage.firstYesBtn.click()
        startPage.secondQ1Btn.click()
        startPage.thirdQyesBtn.click()
        startPage.nextBtn.click()

        browser.sleep(500)
        startPage.firstPageFinal1Btn.click()
        startPage.firstPageFinal2Btn.click()

        startPage.firstPageLastContinueBtn.click()
        browser.sleep(1000)


        createAccPage.emailFld.sendKeys('testmailzatestiranje13@gmail.com')
        createAccPage.confirmEmailFld.sendKeys('testmailzatestiranje13@gmail.com')
        createAccPage.validateEmailBtn.click()
        browser.sleep(2000)

        //Potvrda prelaska na sledeci korak

        expect(createAccPage.nextStepConfirmation.isDisplayed()).toBe(true)
        expect(createAccPage.nextStepConfirmation.getText()).toContain('Contact information')
        browser.sleep(1000)

        //Mandatory fields check
        contactPage.contactContinueBtn.click()
        browser.sleep(1000)
        expect(contactPage.contactContinueBtn.isDisplayed()).toBe(true)
        browser.sleep(1000)







        // Elimination of mandatory fields: Salutation
        contactPage.salutationFld.click()
        contactPage.salutationFldDrOpt.click()
        contactPage.contactContinueBtn.click()
        expect(contactPage.mandatoryList.getText()).not.toContain('Please specify your salutation')

        // Elimination of mandatory fields: First Name
        contactPage.contactInfoFirstNameFld.sendKeys('Test')
        contactPage.contactContinueBtn.click()
        expect(contactPage.mandatoryList.getText()).not.toContain('Please specify a first name')

        // Elimination of mandatory fields: Last Name
        contactPage.contactInfoLastNameFld.sendKeys('Testić')
        contactPage.contactContinueBtn.click()
        expect(contactPage.mandatoryList.getText()).not.toContain('Please specify a last name')

        // Elimination of mandatory fields: Mobile Phone
        contactPage.contactInfoMobileNmbFld.sendKeys('0642244996')
        contactPage.contactContinueBtn.click()
        expect(contactPage.mandatoryList.getText()).not.toContain('Please specify a mobile phone number')
        

        // Elimination of mandatory fields: Home addres Number and street
        contactPage.contactInfoAddresFld.sendKeys('Local Street 51')
        contactPage.contactContinueBtn.click()
        expect(contactPage.mandatoryList.getText()).not.toContain('Please specify a home address number and street')
        
        // Elimination of mandatory fields: Home addres Town
        contactPage.contactInfoTownFld.sendKeys('London')
        contactPage.contactContinueBtn.click()
        expect(contactPage.mandatoryList.getText()).not.toContain('Please specify a home address town/city')
        
        // Elimination of mandatory fields: Home addres County
        contactPage.contactInfoCountyFld.sendKeys('East')
        contactPage.contactContinueBtn.click()
        expect(contactPage.mandatoryList.getText()).not.toContain('Please specify a home address county')
        
        // Elimination of mandatory fields: Home addres Postcode
        contactPage.contactInfoPostcodeFld.sendKeys('24856')
        contactPage.contactContinueBtn.click()
        expect(contactPage.mandatoryList.getText()).not.toContain('Please specify a home address postcode')
        
        // Elimination of mandatory fields: Home addres Country
        contactPage.contactInfoCountryFld.sendKeys('Britain')
        contactPage.contactContinueBtn.click()
        expect(contactPage.mandatoryList.getText()).not.toContain('Please specify a home address country')
        expect(contactPage.mandatoryList.getText()).toEqual('Please specify your current location')
        browser.sleep(1000)

        
        // Elimination of mandatory fields: Current location   And finish 'Contact information' step

        contactPage.contactInfoCurrentLocMeny.click()
        contactPage.contactInfoCurrentLocLondonOpt.click()
        contactPage.contactContinueBtn.click()
        browser.sleep(1000)









    })


})