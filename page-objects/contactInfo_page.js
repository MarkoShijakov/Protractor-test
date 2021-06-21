var ContactPage = function () { }

ContactPage.prototype = Object.create({}, {

    contactContinueBtn: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_StartNavigationTemplateContainerID_StepNextButton2')) } },
    redFldErr: { get: function () { return element(by.id('cphChildMaster_cphBody_uxValidationSummary1')) } },
    mandatoryList: { get: function () { return element(by.css('#cphChildMaster_cphBody_uxValidationSummary1 > ul')) } },
    salutationFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_ddlSalutations')) } },
    salutationFldDrOpt: { get: function () { return element(by.css('#cphChildMaster_cphBody_wzdRegister_ddlSalutations > option:nth-child(7)')) } },
    contactInfoFirstNameFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtFirstName')) } },
    contactInfoLastNameFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtLastName')) } },
    contactInfoMobileNmbFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtMobilePhone')) } },
    contactInfoAddresFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtHomeStreet')) } },
    contactInfoTownFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtHomeTown')) } },
    contactInfoCountyFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtHomeCounty')) } },
    contactInfoPostcodeFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtHomePostcode')) } },
    contactInfoCountryFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtHomeCountry')) } },
    contactInfoCurrentLocMeny: { get: function () { return element(by.id('select2-cphChildMaster_cphBody_wzdRegister_ddlCurrentLocations-container')) } },
    contactInfoCurrentLocLondonOpt: { get: function () { return element(by.css('#cphChildMaster_cphBody_wzdRegister_ddlCurrentLocations > option:nth-child(4)')) } },




    
})

module.exports = ContactPage