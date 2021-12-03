import { browser,element,by } from "protractor";


describe('Home', () => {
    beforeEach(() => {
    browser.get("/");
    });
    it("La pestaña home se muestra por defecto", () => {
    expect(element(by.css(".home-selected ionlabel")).getText()).toContain("home");
    });
   
   });
   