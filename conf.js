var HtmlReporter = require('protractor-html-screenshot-reporter');
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./protractor/*.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },
    framework: 'jasmine2',
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './test/testresults',
            filePrefix: 'xmloutput'
        }));
    }
};