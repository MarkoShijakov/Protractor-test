var CreateAccPage = function () { }

CreateAccPage.prototype = Object.create({}, {

    createAccPageConfirmation: { get: function () { return element(by.css('#cphChildMaster_cphBody_pnlRegisterEmail > div > div')) } },
    emailFld: { get: function () { return element(by.id('cphChildMaster_cphBody_txtEmail')) } },
    confirmEmailFld: { get: function () { return element(by.id('cphChildMaster_cphBody_txtEmail0')) } },
    validateEmailBtn: { get: function () { return element(by.id('cphChildMaster_cphBody_btnCheck')) } },
    mandatoryErr1: { get: function () { return element(by.id('cphChildMaster_cphBody_valEmailReq')) } },
    mandatoryErr2: { get: function () { return element(by.id('cphChildMaster_cphBody_valEmail0Req')) } },
    validEmailAddress: { get: function () { return element(by.id('cphChildMaster_cphBody_valEmailCorrect')) } },
    matchEmailAddress: { get: function () { return element(by.id('cphChildMaster_cphBody_lblEmail')) } },
    existingEmailAddress: { get: function () { return element(by.id('cphChildMaster_cphBody_lblCheck')) } },
    nextStepConfirmation: { get: function () { return element(by.id('cphChildMaster_lblSectionTitle')) } },


    
})

module.exports = CreateAccPage