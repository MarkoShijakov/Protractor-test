var RegistrationPage = function () { }

RegistrationPage.prototype = Object.create({}, {

    continueYourAplicationBtn: { get: function () { return element(by.id('cphChildMaster_cphBody_lnkCompleteApp')) } },
    registrationNextPageBtn: { get: function () { return element(by.id('cphChildMaster_cphBody_btnNextPage')) } },
    privacyPolicyLink: { get: function () { return element(by.css('#form1 > footer > div > p:nth-child(2) > a')) } },
    progressBar: { get: function () { return element(by.id('cphChildMaster_cphBody_pnlPartiallyCompleteProgress')) } },
   
   


})

module.exports = RegistrationPage