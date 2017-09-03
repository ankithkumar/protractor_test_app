var HtmlReporter = require('protractor-html-screenshot-reporter');
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    // your config here ...
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./protractor/*.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    }
};