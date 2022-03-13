export class TestCases{

    testcases_clickontextbox = '#item-0';
    testcases_fullname = '#userName';
    testcases_email = '#userEmail';
    testcases_currentaddress = '#currentAddress';
    testcases_permanentaddres = '#permanentAddress';
    testcases_clicksubmitbutton = '#submit';

    testcases_clickoncheckbox = '#item-1';
    testcases_clickonhomecheckbox = '.rct-checkbox > .rct-icon';

    testcases_collapse = '.rct-collapse > .rct-icon';
    testcases_clickondtop = '.rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon';
    testcases_clickondloads = ':nth-child(3) > .rct-text > label > .rct-checkbox > .rct-icon';

    testcases_clickonradiobutton = '#item-2';
    testcases_clickonimpressive = '.col-md-6 > :nth-child(2) > :nth-child(3)';

    testcases_clickonbuttons = '#item-4';
    testcases_dblclickonbtn = '#doubleClickBtn';
    testcases_rightclickonbtn = '#rightClickBtn';

    //Click on “Text Box” and enter valid details. And Click on SUBMIT button

    navigate(url){

        cy.visit(url);
        cy.url().should('include','demoqa');
    }

    clickOnTextBox(){

        cy.get(this.testcases_clickontextbox).click();
    }

    enterFullName(fname){

        cy.get(this.testcases_fullname).type(fname);
        cy.wait(1500);
    }

    enterEmail(email){

        cy.get(this.testcases_email).type(email);
        cy.wait(1500);
    }

    enterCurrentAddress(cuaddress){

        cy.get(this.testcases_currentaddress).type(cuaddress);
        cy.wait(1500);
    }

    enterPermanentAddress(paddress){

        cy.get(this.testcases_permanentaddres).type(paddress);
        cy.wait(1500);

    }

    clickSubmitButton(){

        cy.get(this.testcases_clicksubmitbutton).click();

    }

    // Verify Added Details

    verifyFullName(){

        cy.get(this.testcases_fullname).should('have.value','Tharindu Darshana Wijesinghe').clear().should('have.value', '');
        
    }

    VerifyEmail(){

        cy.get(this.testcases_email).should('have.value','darshanawt43@gmail.com').clear().should('have.value', '');
        
    }

    VerifyCurrentAddress(){

        cy.get(this.testcases_currentaddress).should('have.value','Yamuna Akurugoda Kamburupitiya').clear().should('have.value', '');
        
    }

    verifyPermanentAddress(){

        cy.get(this.testcases_permanentaddres).should('have.value','Yamuna Akurugoda Kamburupitiya').clear().should('have.value', '');
        
    }

    //Click on “Check Box” and click on “Home” check box. And verify selected items

    ClickonCheckBox(){

        cy.get(this.testcases_clickoncheckbox).click();
        cy.wait(1500);
    }

    ClickonHomeCheckBox(){

        cy.get(this.testcases_clickonhomecheckbox).click();
        cy.wait(1500);
    }

    VerifyChBoxSItems(){

        cy.get('#result > :nth-child(2)').invoke('text').then((text2) =>{
            expect(text2).to.eq('home');
    })
        cy.get('#result > :nth-child(3)').invoke('text').then((text3) =>{
            expect(text3).to.eq('desktop');
    }) 
        cy.get('#result > :nth-child(4)').invoke('text').then((text4) =>{
            expect(text4).to.eq('notes');
    })
        cy.get('#result > :nth-child(5)').invoke('text').then((text5) =>{
            expect(text5).to.eq('commands');
    })
        cy.get('#result > :nth-child(6)').invoke('text').then((text6) =>{
            expect(text6).to.eq('documents');
    })
        cy.get('#result > :nth-child(7)').invoke('text').then((text7) =>{
            expect(text7).to.eq('workspace');
    })
        cy.get('#result > :nth-child(8)').invoke('text').then((text8) =>{
            expect(text8).to.eq('react');
    })
        cy.get('#result > :nth-child(9)').invoke('text').then((text9) =>{
            expect(text9).to.eq('angular');
    }) 
        cy.get('#result > :nth-child(10)').invoke('text').then((text10) =>{
            expect(text10).to.eq('veu');
    })
        cy.get('#result > :nth-child(11)').invoke('text').then((text11) =>{
            expect(text11).to.eq('office');
    })
        cy.get('#result > :nth-child(12)').invoke('text').then((text12) =>{
            expect(text12).to.eq('public');
    })
        cy.get('#result > :nth-child(13)').invoke('text').then((text13) =>{
            expect(text13).to.eq('private');
    })
        cy.get('#result > :nth-child(14)').invoke('text').then((text14) =>{
            expect(text14).to.eq('classified');
    }) 
        cy.get('#result > :nth-child(15)').invoke('text').then((text15) =>{
            expect(text15).to.eq('general');
    })
        cy.get('#result > :nth-child(16)').invoke('text').then((text16) =>{
            expect(text16).to.eq('downloads');
    })
        cy.get('#result > :nth-child(17)').invoke('text').then((text17) =>{
            expect(text17).to.eq('wordFile');
    })
        cy.get('#result > :nth-child(18)').invoke('text').then((text18) =>{
                expect(text18).to.eq('excelFile');
    })  
    
    }

    // Click on Check Box - Checked only "Desktop" and "Downloads" and verify selected items

    Collapse(){

        cy.get(this.testcases_collapse).click();
    }

    ClickOnDtop(){

        cy.get(this.testcases_clickondtop).click();
    }

    ClickOnDloads(){

        cy.get(this.testcases_clickondloads).click();
        cy.wait(1500);
    }

    VerifyChBoxSItems2(){

        cy.get('#result > :nth-child(2)').invoke('text').then((text3) =>{
            expect(text3).to.eq('desktop');
    })
        cy.get('#result > :nth-child(3)').invoke('text').then((text4) =>{
            expect(text4).to.eq('notes');
    }) 
        cy.get('#result > :nth-child(4)').invoke('text').then((text5) =>{
            expect(text5).to.eq('commands');
    })
        cy.get('#result > :nth-child(5)').invoke('text').then((text16) =>{
            expect(text16).to.eq('downloads');
    })
        cy.get('#result > :nth-child(6)').invoke('text').then((text17) =>{
            expect(text17).to.eq('wordFile');
    })
        cy.get('#result > :nth-child(7)').invoke('text').then((text18) =>{
            expect(text18).to.eq('excelFile');
    })
    
    }

    // Click on Radio Button - Click on "Impressive" and verify selected item

    ClickOnRadioButton(){

        cy.get(this.testcases_clickonradiobutton).click();
        cy.wait(1500);

    }

    ClickOnImpressive(){

        cy.get(this.testcases_clickonimpressive).click();
        cy.wait(1500);

    }

    VerifyRBtnSItem(){

        cy.get('.text-success').invoke('text').then((text1) =>{
            expect(text1).to.eq('Impressive');
    })

    }

    // Click on “Buttons” and click “Double click me” And verify that button is clicked

    ClickOnButtons(){

        cy.get(this.testcases_clickonbuttons).click();
        cy.wait(1500);

    }

    DblClickonBtn(){

        cy.get(this.testcases_dblclickonbtn).dblclick().should('be.visible')

        cy.get('#doubleClickMessage').invoke('text').then((text19) =>{
            expect(text19).to.eq('You have done a double click')
    })
        cy.wait(1500);

    }

    // Click on “Buttons” and click “Right click me” And verify that button is clicked

    RightClickOnBtn(){

        cy.get(this.testcases_rightclickonbtn).rightclick().should('be.visible')

        cy.get('#rightClickMessage').invoke('text').then((text20) =>{
            expect(text20).to.eq('You have done a right click')
    })
        cy.wait(1500);

    }

    //Click on “Buttons” and click “Click me”. And verify that button is clicked

    ClickMeOnBtn(){

        cy.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div[3]/button[1]').click().should('be.visible')

        cy.get('#dynamicClickMessage').invoke('text').then((text21) =>{
            expect(text21).to.eq('You have done a dynamic click')
    })

    }
}