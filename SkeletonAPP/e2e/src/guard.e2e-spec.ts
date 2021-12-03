import { browser, element, by } from "protractor";
describe("pagealumno", () => {
 beforeEach(() => {
 browser.get("/pagealumno");
 });
 it("La página del alumno está protegida por guard", () => {
 expect(element(by.css(".not-found-selected ionlabel")).getText()).toContain("not-found");
 });

});
