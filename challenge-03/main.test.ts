import { isValid } from "./main";

describe("challenge - 03 -> should return the correct value", () => {
  it("bici coche (balón) bici coche peluche", () => {
    expect(isValid("bici coche (balón) bici coche peluche")).toBeTruthy();
  });

  it("(muñeca) consola bici", () => {
    expect(isValid("(muñeca) consola bici")).toBeTruthy();
  });

  it("bici coche (balón bici coche", () => {
    expect(isValid("bici coche (balón bici coche")).toBeFalsy();
  });

  it("peluche (bici [coche) bici coche balón", () => {
    expect(isValid("peluche (bici [coche) bici coche balón")).toBeFalsy();
  });

  it("(peluche {) bici", () => {
    expect(isValid("(peluche {) bici")).toBeFalsy();
  });

  it("() bici", () => {
    expect(isValid("() bici")).toBeFalsy();
  });
});
