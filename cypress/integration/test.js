import {TestCases} from "../Pages/TestCases"

/// <reference types="cypress"/>

const testcases = new TestCases()

describe('Click on "text Box" and enter valid details and click on submit button',function(){
    
    it('test case 1',function(){

        testcases.navigate('https://demoqa.com/elements');
        testcases.clickOnTextBox();
        testcases.enterFullName('Tharindu Darshana Wijesinghe');
        testcases.enterEmail('darshanawt43@gmail.com');
        testcases.enterCurrentAddress('Yamuna Akurugoda Kamburupitiya');
        testcases.enterPermanentAddress('Yamuna Akurugoda Kamburupitiya');
        testcases.clickSubmitButton();
    });
});

describe('verify Added Details',function(){
    
    it('test case 2',function(){

        testcases.verifyFullName();
        testcases.VerifyEmail();
        testcases.VerifyCurrentAddress();
        testcases.verifyPermanentAddress();
    });
});

describe('Click on “Check Box” and click on “Home” check box. And verify selected items',function(){

    it('test case 3',function(){

        testcases.navigate('https://demoqa.com/elements');
        testcases.ClickonCheckBox();
        testcases.ClickonHomeCheckBox();
        testcases.VerifyChBoxSItems();
    });
});

describe('Click on “Check Box” and checked only “Desktop” and “Downloads”. And verify selected items',function(){

    it('test case 4',function(){

        testcases.navigate('https://demoqa.com/elements');
        testcases.ClickonCheckBox();
        testcases.Collapse();
        testcases.ClickOnDtop();
        testcases.ClickOnDloads();
        testcases.VerifyChBoxSItems2();
    });
});

describe('Click on “Radio Button” and click on “Impressive”. And verify selected item',function(){

    it('test case 5',function(){

        testcases.navigate('https://demoqa.com/elements');
        testcases.ClickOnRadioButton();
        testcases.ClickOnImpressive();
        testcases.VerifyRBtnSItem();
    });
});

describe('Click on “Buttons” and click “Double click me”. And verify that button is clicked',function(){

    it('test case 6',function(){

        testcases.navigate('https://demoqa.com/elements');
        testcases.ClickOnButtons();
        testcases.DblClickonBtn();
    });
});

describe('Click on “Buttons” and click “Right click me”. And verify that button is clicked',function(){

    it('test case 7',function(){

        testcases.navigate('https://demoqa.com/elements');
        testcases.ClickOnButtons();
        testcases.RightClickOnBtn();
    });
});

describe('Click on “Buttons” and click “click me”. And verify that button is clicked',function(){

    it('test case 8',function(){

        testcases.navigate('https://demoqa.com/elements');
        testcases.ClickOnButtons();
        testcases.ClickMeOnBtn();
        
    
    })


})