export function isValid(letter: string) {
  const wrongLetterGroups = letter.match(
    /(\(\))|(\[\])|(\([a-z\s\[\]\{\}]+\))/gi
  );

  return !wrongLetterGroups?.length;
}
