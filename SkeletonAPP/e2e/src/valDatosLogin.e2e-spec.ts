import { browser, element, by } from "protractor";


fdescribe('Home alumno', () => {
    beforeEach(() => {
    browser.get("/home-alumno");
    });
    it("Button para loguear está deshabilitado",async () => {
        var play = element(by.id('play'));
        expect(play.isEnabled()).toBeFalse;
    });
   
   });