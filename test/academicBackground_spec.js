var CreateAccPage = require('../page-objects/createAcount_page')
var StartPage = require('../page-objects/start_page')
var ContactPage = require('../page-objects/contactInfo_page')
var AcademicBackgroundPage = require('../page-objects/academicBackground_page')

describe('Teach First Application Form, Contact information', function () {
    var createAccPage
    var startPage
    var contactPage
    var academicBackgroundPage
    var EC = protractor.ExpectedConditions;

    beforeEach(function () {
        createAccPage = new CreateAccPage()
        startPage = new StartPage()
        contactPage = new ContactPage()
        academicBackgroundPage = new AcademicBackgroundPage()

        browser.ignoreSynchronization = true

        //Open URL
        browser.get('https://ampapply.dev.teachfirst.org.uk/MinimumRequirements.aspx')
        browser.driver.manage().window().maximize();
        browser.sleep(500)

    })

    afterEach(function () {

    })

    it('Should lead to the "Academic background" part and finish registration', function () {

        var x = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        var email = "testmailzatestiranje+" + x + "@gmail.com"


        startPage.firstYesBtn.click()
        startPage.secondQ1Btn.click()
        startPage.thirdQyesBtn.click()
        startPage.nextBtn.click()

        browser.sleep(500)
        startPage.firstPageFinal1Btn.click()
        startPage.firstPageFinal2Btn.click()

        startPage.firstPageLastContinueBtn.click()
        browser.sleep(1000)



        createAccPage.emailFld.sendKeys(email)
        createAccPage.confirmEmailFld.sendKeys(email)

        // createAccPage.emailFld.sendKeys('testmailzatestiranje1@gmail.com')
        // createAccPage.confirmEmailFld.sendKeys('testmailzatestiranje1@gmail.com')
        createAccPage.validateEmailBtn.click()
        browser.sleep(1500)


        academicBackgroundPage.problemPolje.click()
        browser.sleep(500)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.sleep(500)
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(500)

        // contactPage.salutationFldDrOpt.click()

        contactPage.contactInfoFirstNameFld.sendKeys('Test')
        contactPage.contactInfoLastNameFld.sendKeys('Testić')
        contactPage.contactInfoMobileNmbFld.sendKeys('0642244996')
        contactPage.contactInfoAddresFld.sendKeys('Local Street 51')
        contactPage.contactInfoTownFld.sendKeys('London')
        contactPage.contactInfoCountyFld.sendKeys('East')
        contactPage.contactInfoPostcodeFld.sendKeys('24856')
        contactPage.contactInfoCountryFld.sendKeys('Britain')
        contactPage.contactInfoCurrentLocMeny.click()
        contactPage.contactInfoCurrentLocLondonOpt.click()
        contactPage.contactContinueBtn.click()
        browser.sleep(2000)



        //Check if the previous page button leads to the previous page 'Contact information'

        academicBackgroundPage.academicBackgroundPreviousPageBtn.click()
        browser.sleep(2000)
        expect(academicBackgroundPage.contactInfoPreviousPageCheck.getText()).toEqual('Contact information')

        contactPage.contactContinueBtn.click()
        browser.sleep(2000)


        //Provera da li se pojavljuje polje 'University country:' ukoliko se izabere bilo sta osim 'UK'

        academicBackgroundPage.universityRegionFld.click()
        academicBackgroundPage.ukOption.click()
        browser.sleep(1000)
        expect(academicBackgroundPage.universityCountryhFld.isPresent()).toBe(false)

        //Odabir prvog ponudjenog univerziteta
        academicBackgroundPage.universityFld.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Odabir prve ponudjene diplome
        academicBackgroundPage.degreeTypeFld.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Odabir prve ponudjene opcije u degree title
        academicBackgroundPage.degreeTitleFld.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        //Start date
        academicBackgroundPage.startDateFld.sendKeys('11/2012')
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(3000)
        //End date
        academicBackgroundPage.endDateFld.sendKeys('11/2018')
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(3000)

        //Degree result. Izabrana opcija 'Other'. Potvrda zutog polja.
        academicBackgroundPage.degreeResultFld.click()
        academicBackgroundPage.degreeResultFldOtherOption.click()
        browser.sleep(1000)
        expect(academicBackgroundPage.yelowWarningMsg.isPresent()).toBe(true)
        browser.sleep(1000)

        //Degree result. Izabrano '1st' i provera da nema zute poruke.
        academicBackgroundPage.degreeResultFld.click()
        academicBackgroundPage.degreeResultFld1stOption.click()
        browser.sleep(900)
        expect(academicBackgroundPage.yelowWarningMsg.isPresent()).toBe(false)
        browser.sleep(700)

        //Your A-level qualifications (or equivalent). Odabiran Computer Science-ICT box
        academicBackgroundPage.computerCheckBox.click()
        browser.sleep(1500)

        //Final submit button. Zavrsavanje registracije.
        academicBackgroundPage.academicBackgroundSubmitBtn.click()
        browser.wait(EC.visibilityOf($('#cphChildMaster_activeStageName')), 50000)

        // browser.sleep(18000)

        expect(academicBackgroundPage.registrationConfirmationNextPageTittle.isPresent()).toBe(true)
        academicBackgroundPage.kontaktirajNasDugme.click()
        browser.sleep(3000)

                




    })


})