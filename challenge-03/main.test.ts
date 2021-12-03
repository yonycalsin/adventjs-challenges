import { isValid } from "./main";

describe("challenge - 03", () => {
  it("should return the correct value", () => {
    expect(isValid("bici coche (balón) bici coche peluche")).toBeTruthy();

    expect(isValid("(muñeca) consola bici")).toBeTruthy();

    expect(isValid("bici coche (balón bici coche")).toBeFalsy();

    expect(isValid("peluche (bici [coche) bici coche balón")).toBeFalsy();

    expect(isValid("(peluche {) bici")).toBeFalsy();

    expect(isValid("() bici")).toBeFalsy();
  });
});
