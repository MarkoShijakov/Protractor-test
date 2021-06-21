var CreateAccPage = require('../page-objects/createAcount_page')
var StartPage = require('../page-objects/start_page')

describe('Teach First Application Form, Create account', function () {
    var createAccPage
    var startPage


    //Before each test case. Do something
    beforeEach(function () {
        createAccPage = new CreateAccPage()
        startPage = new StartPage()

        browser.ignoreSynchronization = true

        //Open URL
        browser.get('https://ampapply.dev.teachfirst.org.uk/MinimumRequirements.aspx')
        browser.driver.manage().window().maximize();
        browser.sleep(500)

    })

    //After each test case. Do something.
    afterEach(function () {

    })

   
    it('should load the correct URL, and to check for the presence of elements on the page', function () {

        startPage.firstYesBtn.click()
        startPage.secondQ1Btn.click()
        startPage.thirdQyesBtn.click()
        startPage.nextBtn.click()

        browser.sleep(500)
        startPage.firstPageFinal1Btn.click()
        startPage.firstPageFinal2Btn.click()

        startPage.firstPageLastContinueBtn.click()
        browser.sleep(1000)


        expect(createAccPage.createAccPageConfirmation.isDisplayed()).toBe(true)
        browser.sleep(500)

        expect(createAccPage.createAccPageConfirmation.getText()).toContain('Please provide your email address')


        browser.sleep(500)
    })

    it('should check email mandatory fields and correct email fill', function () {

        startPage.firstYesBtn.click()
        startPage.secondQ1Btn.click()
        startPage.thirdQyesBtn.click()
        startPage.nextBtn.click()

        browser.sleep(500)
        startPage.firstPageFinal1Btn.click()
        startPage.firstPageFinal2Btn.click()

        startPage.firstPageLastContinueBtn.click()
        browser.sleep(1000)

        //Empty email fields
        createAccPage.emailFld.sendKeys('')
        createAccPage.confirmEmailFld.sendKeys('')
        createAccPage.validateEmailBtn.click()
        expect(createAccPage.mandatoryErr1.isDisplayed()).toBe(true)
        expect(createAccPage.mandatoryErr2.isDisplayed()).toBe(true)

        //Without '@' sign email field
        createAccPage.emailFld.sendKeys('Test')
        createAccPage.confirmEmailFld.sendKeys('')
        createAccPage.validateEmailBtn.click()
        expect(createAccPage.validEmailAddress.isDisplayed()).toBe(true)
        expect(createAccPage.mandatoryErr2.isDisplayed()).toBe(true)

        //Without domain sign email field
        createAccPage.emailFld.sendKeys('@')
        createAccPage.confirmEmailFld.sendKeys('')
        createAccPage.validateEmailBtn.click()
        expect(createAccPage.validEmailAddress.isDisplayed()).toBe(true)
        expect(createAccPage.mandatoryErr2.isDisplayed()).toBe(true)

        //Without main domain sign email field
        createAccPage.emailFld.sendKeys('gmail')
        createAccPage.confirmEmailFld.sendKeys('')
        createAccPage.validateEmailBtn.click()
        expect(createAccPage.validEmailAddress.isDisplayed()).toBe(true)
        expect(createAccPage.mandatoryErr2.isDisplayed()).toBe(true)

        //Without confirm email field
        createAccPage.emailFld.sendKeys('.com')
        createAccPage.confirmEmailFld.sendKeys('')
        createAccPage.validateEmailBtn.click()
        expect(createAccPage.validEmailAddress.isDisplayed()).toBe(false)
        expect(createAccPage.mandatoryErr2.isDisplayed()).toBe(true)

        //By entering email fields that do not match
        browser.sleep(500)
        createAccPage.emailFld.sendKeys('')
        createAccPage.confirmEmailFld.sendKeys('tester@gmail.com')
        browser.sleep(500)
        createAccPage.validateEmailBtn.click()
        browser.sleep(500)
        createAccPage.validateEmailBtn.click()
        browser.sleep(500)
        expect(createAccPage.validEmailAddress.isDisplayed()).toBe(false)
        expect(createAccPage.matchEmailAddress.isDisplayed()).toBe(true)

        browser.sleep(1000)
    })

    it('Should enter the email address of the existing user', function () {
       
        startPage.firstYesBtn.click()
        startPage.secondQ1Btn.click()
        startPage.thirdQyesBtn.click()
        startPage.nextBtn.click()

        browser.sleep(500)
        startPage.firstPageFinal1Btn.click()
        startPage.firstPageFinal2Btn.click()

        startPage.firstPageLastContinueBtn.click()
        browser.sleep(1000)


        expect(createAccPage.emailFld.isDisplayed()).toBe(true)
        expect(createAccPage.confirmEmailFld.isDisplayed()).toBe(true)
        browser.sleep(500)

        createAccPage.emailFld.sendKeys('testmailzatestiranje@gmail.com')
        createAccPage.confirmEmailFld.sendKeys('testmailzatestiranje@gmail.com')
        createAccPage.validateEmailBtn.click()
        browser.sleep(1000)
        expect(createAccPage.existingEmailAddress.isDisplayed()).toBe(true)
        expect(createAccPage.existingEmailAddress.getText()).toContain('A user has already registered using this email address')

        browser.sleep(1000)
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


        createAccPage.emailFld.sendKeys('testmailzatestiranje12@gmail.com')
        createAccPage.confirmEmailFld.sendKeys('testmailzatestiranje12@gmail.com')
        createAccPage.validateEmailBtn.click()
        browser.sleep(2000)

        //Potvrda prelaska na sledeci korak
       
        expect(createAccPage.nextStepConfirmation.isDisplayed()).toBe(true)
        expect(createAccPage.nextStepConfirmation.getText()).toContain('Contact information')
        browser.sleep(1000)

    })
})
