var AcademicBackgroundPage = function () { }

AcademicBackgroundPage.prototype = Object.create({}, {

    universityRegionFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_DegreeUniCol_ddlUniRegion')) } },
    universityFld: { get: function () { return element(by.id('select2-cphChildMaster_cphBody_wzdRegister_DegreeUniCol_ddlUniversity-container')) } },
    degreeTypeFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_ddlDegreeType')) } },
    degreeTitleFld: { get: function () { return element(by.id('select2-cphChildMaster_cphBody_wzdRegister_ddlHesaDegreeTitle-container')) } },
    startDateFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtDateStart')) } },
    endDateFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_txtDateEnd')) } },
    degreeResultFld: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_ddlDegreeResult')) } },
    degreeResultFldOtherOption: { get: function () { return element(by.css('#cphChildMaster_cphBody_wzdRegister_ddlDegreeResult > option:nth-child(6)')) } },
    degreeResultFld1stOption: { get: function () { return element(by.css('#cphChildMaster_cphBody_wzdRegister_ddlDegreeResult > option:nth-child(2)')) } },
    computerCheckBox: { get: function () { return element(by.css('#cphChildMaster_cphBody_wzdRegister_cblALevels > tbody > tr:nth-child(3) > td > label')) } },




    yelowWarningMsg: { get: function () { return element(by.css('#cphChildMaster_cphBody_wzdRegister_pnlResultOther > div')) } },


    universityCountryhFld: { get: function () { return element(by.id('select2-cphChildMaster_cphBody_wzdRegister_DegreeUniCol_ddlUniCountry-container')) } },


    aLevelQualificationsBox: { get: function () { return element(by.css('#cphChildMaster_cphBody_wzdRegister_cblALevels > tbody > tr:nth-child(3) > td > label')) } },

    academicBackgroundPreviousPageBtn: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_FinishNavigationTemplateContainerID_FinishPreviousButton')) } },
    academicBackgroundSubmitBtn: { get: function () { return element(by.id('cphChildMaster_cphBody_wzdRegister_FinishNavigationTemplateContainerID_FinishButton')) } },

    contactInfoPreviousPageCheck: { get: function () { return element(by.id('cphChildMaster_lblSectionTitle')) } },


    //Novi objekti za contact information deo. Salutation objekat
    problemPolje: { get: function () { return element(by.css('#cphChildMaster_cphBody_wzdRegister_ddlSalutations')) } },

    //selektori za university region:
    ukOption: { get: function () { return element(by.css('#cphChildMaster_cphBody_wzdRegister_DegreeUniCol_ddlUniRegion > option:nth-child(2)')) } },

    registrationConfirmationNextPageTittle: { get: function () { return element(by.id('cphChildMaster_activeStageName')) } },

    kontaktirajNasDugme: { get: function () { return element(by.css('#cphChildMaster_appSidebar > div > div:nth-child(3) > button')) } },



})

module.exports = AcademicBackgroundPage