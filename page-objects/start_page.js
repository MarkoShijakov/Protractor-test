var StartPage = function () { }

StartPage.prototype = Object.create({}, {

    logo: { get: function () { return element(by.css('[alt="Teach First logo"]')) } },
    reisterPage: { get: function () { return element(by.id('cphChildMaster_pnlPageTitle')) } },

    ourCoreReqLbl: { get: function () { return element(by.id('cphChildMaster_lblEligibilityChecker')) } },
    createAccLbl: { get: function () { return element(by.id('cphChildMaster_lblLoginInfo')) } },
    contactInfoLbl: { get: function () { return element(by.id('cphChildMaster_lblContactInfo')) } },
    academicBackndLbl: { get: function () { return element(by.id('cphChildMaster_lblAcademicBackground')) } },

    contactUsBtn: { get: function () { return element(by.buttonText('Contact us')) } },
    nextBtn: { get: function () { return element(by.buttonText('Next')) } },
    contactFormFld: { get: function () { return $(' #modalContactUs > div > div > div.modal-body') } },

    error1: { get: function () { return element(by.css('#cphChildMaster_cphBody_valSumm2 > ul > li:nth-child(1)')) } },
    error2: { get: function () { return element(by.css('#cphChildMaster_cphBody_valSumm2 > ul > li:nth-child(2)')) } },
    error3: { get: function () { return element(by.css('#cphChildMaster_cphBody_valSumm2 > ul > li:nth-child(3)')) } },

    firstNoBtn: { get: function () { return element(by.css('#cphChildMaster_cphBody_rdoWorkPermit > label:nth-child(5)')) } },
    firstNoBtnErrMsg: { get: function () { return element(by.css('#cphChildMaster_cphBody_pnlNoRightsToWork > div > div > p')) } },

    secondQ2Btn: { get: function () { return element(by.css('#cphChildMaster_cphBody_rdoDegreeQualification > label:nth-child(5)')) } },
    secondQ2BtnErrMsg: { get: function () { return element(by.css('#cphChildMaster_cphBody_pnlDegree22 > div > div > p')) } },

    secondQ3Btn: { get: function () { return element(by.css('#cphChildMaster_cphBody_rdoDegreeQualification > label:nth-child(8)')) } },
    secondQ3BtnErrMsg: { get: function () { return element(by.css('#cphChildMaster_cphBody_pnlDegree3rd > div > div > p')) } },

    thirdQnoBtn: { get: function () { return element(by.css('#cphChildMaster_cphBody_rdoBtnGCSE > label:nth-child(5)')) } },
    thirdQnoBtnErrMsg: { get: function () { return element(by.css('#cphChildMaster_cphBody_pnlNoGcses > div > div > p')) } },

    // Positive test objects
    firstYesBtn: { get: function () { return element(by.css('#cphChildMaster_cphBody_rdoWorkPermit > label:nth-child(2)')) } },

    secondQ1Btn: { get: function () { return element(by.css('#cphChildMaster_cphBody_rdoDegreeQualification > label:nth-child(2)')) } },
    secondQ4Btn: { get: function () { return element(by.css('#cphChildMaster_cphBody_rdoDegreeQualification > label:nth-child(11)')) } },

    thirdQyesBtn: { get: function () { return element(by.css('#cphChildMaster_cphBody_rdoBtnGCSE > label:nth-child(2)')) } },

    //Confirmation of success

    finalStepFirstPageBox: { get: function () { return element(by.css('#cphChildMaster_cphBody_pnlFairCollectionNotice > div > div > div.modal-header > h4')) } },

    //Final step with mandatory fields

    firstPageFinalMandatory: { get: function () { return element(by.id('cphChildMaster_cphBody_litDataProtection')) } },
    firstPageLastContinueBtn: { get: function () { return element(by.id('cphChildMaster_cphBody_btnFNContinue')) } },

    firstPageFinal1Btn: { get: function () { return element(by.css('#cphChildMaster_cphBody_pnlFairCollectionNotice > div > div > div.modal-body > div.checkbox.text-left > span:nth-child(1) > label')) } },
    firstPageFinal2Btn: { get: function () { return element(by.css('#cphChildMaster_cphBody_pnlFairCollectionNotice > div > div > div.modal-body > div.checkbox.text-left > span:nth-child(2) > label')) } },
   



})

module.exports = StartPage