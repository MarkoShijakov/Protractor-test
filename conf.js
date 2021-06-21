const SpecReporter = require('jasmine-spec-reporter').SpecReporter
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',     //Odredjuje folder gde se cuvaju slike (dokazi)
    filename: 'my-report.html',     //Ime HTML fajla koji se napravi na kraju testa 
    reportOnlyFailedSpecs: false,   //U HTML stranici koju pravi, prijavljuje sve testove (i uspesne i pale)
    captureOnlyFailedSpecs: true,    //Ovaj kod brise slike uspesnih testova i cuva samo one koji su pali
    reportTitle: "Report Title"     //Naslov rezultata
});
exports.config = {

    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome',

        'goog:chromeOptions': {
            w3c: false
        }
    },

    specs: [
           './test/start_spec.js' ,
           './test/createAcount_spec.js',
           './test/contactInfo_spec.js',
           './test/academicBackground_spec.js',
           './test/1Registration_spec.js'

    ],

    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print() {
        }
    },
    // Setup the report before any tests start
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },


    logLevel: 'WARN',
    onPrepare() {
        jasmine.getEnv().addReporter(reporter);

        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayStacktrace: true,
                },
                summary: {
                    displayDuration: false,
                },
            })
        )
    },
}
