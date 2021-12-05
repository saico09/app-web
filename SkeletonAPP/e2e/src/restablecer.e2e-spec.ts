import { browser, element, by } from "protractor";
describe('Verificar si funciona botón reestablecer', () => {
    beforeEach(() => {
    browser.get("/home-alumno");
    });
    it("Funciona button Restablecer",async () => {
    await element(by.buttonText('Restablecer')).click;
    browser.driver.sleep(500);

    });
   
   });