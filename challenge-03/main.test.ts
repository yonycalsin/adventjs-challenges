import { isValid } from "./main";

describe("challenge - 03 -> should return the correct value", () => {
  it("bici coche (balón) bici coche peluche", () => {
    expect(isValid("bici coche (balón) bici coche peluche")).toBe(true);
  });

  it("(muñeca) consola bici", () => {
    expect(isValid("(muñeca) consola bici")).toBe(true);
  });

  it("bici coche (balón bici coche", () => {
    expect(isValid("bici coche (balón bici coche")).toBe(false);
  });

  it("peluche (bici [coche) bici coche balón", () => {
    expect(isValid("peluche (bici [coche) bici coche balón")).toBe(false);
  });

  it("(peluche {) bici", () => {
    expect(isValid("(peluche {) bici")).toBe(false);
  });

  it("() bici", () => {
    expect(isValid("() bici")).toBe(false);
  });

  it("(()) bici", () => {
    expect(isValid("(()) bici")).toBe(false);
  });
});
