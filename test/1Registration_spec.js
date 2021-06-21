var CreateAccPage = require('../page-objects/createAcount_page')
var StartPage = require('../page-objects/start_page')
var ContactPage = require('../page-objects/contactInfo_page')
var AcademicBackgroundPage = require('../page-objects/academicBackground_page')
var RegistrationPage = require('../page-objects/1Registration_page')

fdescribe('Teach First Application Form, Contact information', function () {
    var createAccPage
    var startPage
    var contactPage
    var academicBackgroundPage
    var registrationPage
    var EC = protractor.ExpectedConditions;
       

    beforeEach(function () {
        createAccPage = new CreateAccPage()
        startPage = new StartPage()
        contactPage = new ContactPage()
        academicBackgroundPage = new AcademicBackgroundPage()
        registrationPage = new RegistrationPage()

        browser.ignoreSynchronization = true

        //Open URL
        browser.get('https://ampapply.dev.teachfirst.org.uk/MinimumRequirements.aspx')
        browser.driver.manage().window().maximize();
        browser.sleep(1500)

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
        createAccPage.validateEmailBtn.click()
        browser.sleep(1500)


        academicBackgroundPage.problemPolje.click()
        browser.sleep(500)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.sleep(500)
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(500)


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


        // Selection of the first offered university
        academicBackgroundPage.universityFld.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        // Selection of the first offered diploma
        academicBackgroundPage.degreeTypeFld.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        // Select the first option offered in the degree title
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


        //Degree result. Selected '1st'.
        academicBackgroundPage.degreeResultFld.click()
        academicBackgroundPage.degreeResultFld1stOption.click()
        browser.sleep(900)

        //Your A-level qualifications (or equivalent). Computer Science-ICT box selected
        academicBackgroundPage.computerCheckBox.click()
        browser.sleep(1500)

        //Final submit button. Completing registration.
        academicBackgroundPage.academicBackgroundSubmitBtn.click()
        
        browser.wait(EC.visibilityOf($('#cphChildMaster_activeStageName')), 50000)


        // expect(registrationPage.continueYourAplicationBtn.isDisplayed()).toBe(true)
        // expect(registrationPage.registrationNextPageBtn.isDisplayed()).toBe(true)
        // expect(registrationPage.privacyPolicyLink.isDisplayed()).toBe(true)
        // expect(registrationPage.progressBar.isDisplayed()).toBe(true)
        // registrationPage.registrationNextPageBtn.click()
        // browser.sleep(5000)

      

    })
    it('Should check the presence of elements on the page', function () {


        browser.get('https://ampapply.dev.teachfirst.org.uk/YourApplication.aspx?registration=success')
        expect(registrationPage.continueYourAplicationBtn.isDisplayed()).toBe(true)
        expect(registrationPage.registrationNextPageBtn.isDisplayed()).toBe(true)
        expect(registrationPage.privacyPolicyLink.isDisplayed()).toBe(true)
        expect(registrationPage.progressBar.isDisplayed()).toBe(true)
        registrationPage.registrationNextPageBtn.click()
        browser.sleep(3000)


    })





})