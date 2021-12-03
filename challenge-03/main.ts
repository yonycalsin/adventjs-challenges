const cases = [
  "bici coche (balón) bici coche peluche", // -> ✅
  "(muñeca) consola bici", // ✅

  "bici coche (balón bici coche", // -> ❌
  "peluche (bici [coche) bici coche balón", // -> ❌
  "(peluche {) bici", // -> ❌
  "() bici", // ❌
];

function isValid(letter: string) {
  const wrongLetterGroups = letter.match(
    /(\(\))|(\[\])|(\([a-z\s\[\]\{\}]+\))/gi
  );

  return !wrongLetterGroups?.length;
}

cases.forEach((caseItem) => {
  console.log(`"${caseItem}" -> ${isValid(caseItem) ? "✅" : "❌"}`);
});
