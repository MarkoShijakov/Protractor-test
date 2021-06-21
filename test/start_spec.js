var StartPage = require('../page-objects/start_page')

describe('Teach First Application Form, Our core requirements', function () {
    var startPage
    var EC = protractor.ExpectedConditions;

    //Before each test case. Do something
    beforeEach(function () {
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

        var textCheck = element.all(by.css('[class="block"]'));

        expect(startPage.logo.isDisplayed()).toBe(true)
        // expect(startPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.')

        expect(startPage.reisterPage.isDisplayed()).toBe(true)

        expect(textCheck.get(0).getText()).toContain('Welcome to your application for the Teach First Academic Mentoring Programme. The below questions relate to our core eligibility requirements.')
        expect(startPage.ourCoreReqLbl.isDisplayed()).toBe(true)
        expect(startPage.createAccLbl.isDisplayed()).toBe(true)
        expect(startPage.contactInfoLbl.isDisplayed()).toBe(true)
        expect(startPage.academicBackndLbl.isDisplayed()).toBe(true)
        expect(startPage.contactUsBtn.isDisplayed()).toBe(true)
        expect(startPage.nextBtn.isDisplayed()).toBe(true)


        // expect(startPage.emailFld.getAttribute('value')).toEqual('Just Testing')
        //    expect(element(by.id('loginEmail')).getAttribute('value')).toEqual('Just Testing')         Isti kod kao i iznad, samo sto ovaj koristi direktu putanju ("id"), bez objekta.

        browser.sleep(1000)
    })

    it('Should confirm that the "Contact us" button works and opens a form in which we can contact the site management', function () {

        // browser.manage().timeouts().implicitlyWait(40000);
        // var EC = protractor.ExpectedConditions;
        // browser.sleep(500)
        // browser.wait(EC.presenceOf(contactFormFld),5000);
        // browser.manage().timeouts().implicitlyWait(40000);


        startPage.contactUsBtn.click()
        browser.wait(EC.visibilityOf($('#modalContactUs > div > div > div.modal-body')), 50000)

        expect(startPage.contactFormFld.isPresent()).toBeTruthy()

        expect(startPage.contactFormFld.getText()).toContain('If you wish to speak to a member of our Recruitment')

        browser.sleep(500)

    })

    it('Should check that all mandatory fields must be filled in to proceed to the next registration step', function () {

        startPage.nextBtn.click()
        browser.sleep(500)


        expect(startPage.error1.getText()).toEqual('Please specify whether you have the right to remain and work in the UK')
        expect(startPage.error2.getText()).toEqual('Please specify your Degree Result')
        expect(startPage.error3.getText()).toEqual('Please specify your GCSEs')

        browser.sleep(500)

    })


    it('By selecting the "NO" radio button in question: Do you have the right to work in the UK throughout the duration of the Academic Mentoring Program? a notification appears stating that registration is not possible.', function () {

        startPage.firstNoBtn.click()
        browser.sleep(500)
        expect(startPage.firstNoBtnErrMsg.getText()).toContain('We can only accept your application if you have the right to work in the UK.')


    })

    it('By selecting the "2.2" radio button in question: What is your first degree classification? a notification appears with text: We are able to consider a 2.2 result in some circumstances.', function () {

        startPage.secondQ2Btn.click()
        browser.sleep(1500)
        expect(startPage.secondQ2BtnErrMsg.getText()).toContain('We are able to consider a 2.2 result in some circumstances.')


    })


    it('By selecting the "3rd" radio button in question: What is your first degree classification? a notification appears with text: We are unable to accept your application if you have been awarded a 3rd class degree.', function () {

        startPage.secondQ3Btn.click()
        browser.sleep(500)
        expect(startPage.secondQ3BtnErrMsg.getText()).toContain('We are unable to accept your application if you have been awarded a 3rd class degree.')


    })

    it('By selecting the "NO" radio button in question: Do you have a UK GCSE (or equivalent) grade C or above in maths and English Language? a notification appears with text: To be eligible to apply for our Academic Mentoring Programme, you need a grade C (or equivalent) in GCSE maths and English Language.', function () {

        startPage.thirdQnoBtn.click()
        browser.sleep(500)
        expect(startPage.thirdQnoBtnErrMsg.getText()).toContain('To be eligible to apply for our Academic Mentoring Programme, you need a grade C (or equivalent) in GCSE maths and English Language.')


    })
    it('In the question "What is your first degree classification?", by selecting the "2.1 or above" radio button, application should proceed to the second step of registration', function () {

        startPage.firstYesBtn.click()
        browser.sleep(500)
        startPage.secondQ1Btn.click()
        browser.sleep(500)
        startPage.thirdQyesBtn.click()
        browser.sleep(900)
        startPage.nextBtn.click()
        browser.sleep(1000)

        expect(startPage.finalStepFirstPageBox.getText()).toContain('Data Protection - Fair collection notice')
        browser.sleep(500)


    })

    it('In the question "What is your first degree classification?", by selecting the "2.2" radio button, application should proceed to the second step of registration', function () {

        startPage.firstYesBtn.click()
        browser.sleep(500)
        startPage.secondQ2Btn.click()
        browser.sleep(500)
        startPage.thirdQyesBtn.click()
        browser.sleep(500)
        startPage.nextBtn.click()
        browser.sleep(500)

        expect(startPage.finalStepFirstPageBox.getText()).toContain('Data Protection - Fair collection notice')
        browser.sleep(500)


    })

    it('In the question "What is your first degree classification?", by selecting the "Other result" radio button, application should proceed to the second step of registration', function () {

        startPage.firstYesBtn.click()
        browser.sleep(500)
        startPage.secondQ4Btn.click()
        browser.sleep(500)
        startPage.thirdQyesBtn.click()
        browser.sleep(500)
        startPage.nextBtn.click()
        browser.sleep(500)

        expect(startPage.finalStepFirstPageBox.getText()).toContain('Data Protection - Fair collection notice')
        browser.sleep(500)


    })


    it('Should check that all mandatory fields must be filled in to proceed to the next registration step', function () {
        startPage.firstYesBtn.click()
        browser.sleep(700)
        startPage.secondQ1Btn.click()
        browser.sleep(700)
        startPage.thirdQyesBtn.click()
        browser.sleep(700)
        startPage.nextBtn.click()
        browser.sleep(900)

        expect(startPage.finalStepFirstPageBox.getText()).toContain('Data Protection - Fair collection notice')
        browser.sleep(900)

        startPage.firstPageLastContinueBtn.click()
        browser.sleep(900)

        expect(startPage.firstPageFinalMandatory.getText()).toEqual('You must tick the required boxes above to proceed')
        browser.sleep(700)

    })

    it('Should check that all mandatory fields must be filled in to proceed to the next registration step 2.', function () {
        startPage.firstYesBtn.click()
        browser.sleep(500)
        startPage.secondQ1Btn.click()
        browser.sleep(500)
        startPage.thirdQyesBtn.click()
        browser.sleep(500)
        startPage.nextBtn.click()
        browser.sleep(500)

        expect(startPage.finalStepFirstPageBox.getText()).toContain('Data Protection - Fair collection notice')
        browser.sleep(500)

        startPage.firstPageLastContinueBtn.click()
        browser.sleep(500)

        expect(startPage.firstPageFinalMandatory.getText()).toEqual('You must tick the required boxes above to proceed')
        browser.sleep(500)

        startPage.firstPageFinal1Btn.click()
        startPage.firstPageLastContinueBtn.click()
        browser.sleep(500)
        expect(startPage.firstPageFinalMandatory.getText()).toEqual('You must tick the required boxes above to proceed')
        browser.sleep(500)

        startPage.firstPageFinal1Btn.click()
        startPage.firstPageLastContinueBtn.click()
        browser.sleep(500)
        expect(startPage.firstPageFinalMandatory.getText()).toEqual('You must tick the required boxes above to proceed')
        browser.sleep(500)

        startPage.firstPageFinal2Btn.click()
        startPage.firstPageLastContinueBtn.click()
        browser.sleep(500)
        expect(startPage.firstPageFinalMandatory.getText()).toEqual('You must tick the required boxes above to proceed')
        browser.sleep(500)


    })

    it('Should check that all mandatory fields must be filled in to proceed to the next registration step 3.', function () {
        startPage.firstYesBtn.click()
        browser.sleep(500)
        startPage.secondQ1Btn.click()
        browser.sleep(500)
        startPage.thirdQyesBtn.click()
        browser.sleep(500)
        startPage.nextBtn.click()
        browser.sleep(500)

        expect(startPage.finalStepFirstPageBox.getText()).toContain('Data Protection - Fair collection notice')
        browser.sleep(500)

        startPage.firstPageFinal1Btn.click()
        startPage.firstPageFinal2Btn.click()
        browser.sleep(500)
        startPage.firstPageLastContinueBtn.click()
        browser.sleep(3500)


    })



})