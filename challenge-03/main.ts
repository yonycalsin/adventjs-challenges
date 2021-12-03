const isNil = (value: any) => value === null || value === undefined;

export function isValid(letter: string) {
  const characters = letter.split("");

  const tokens = {
    start: null,
    end: null,
  };

  for (let i = 0; i < characters.length; i++) {
    switch (characters[i]) {
      case "(":
        if (tokens.start !== null) {
          break;
        }

        tokens.start = i;
        break;
      case ")":
        tokens.end = i;
        break;
    }
  }

  if (!isNil(tokens.start) && isNil(tokens.end)) {
    return false;
  }

  const group = letter.substring(tokens.start, tokens.end + 1);

  const groupContent = group.replace(/(^\()|(\)$)/gi, "");

  const hasEmptyGroupContent = groupContent.length;

  if (hasEmptyGroupContent === 0) {
    return false;
  }

  const hasWrongGroupContent = /[\[|\{]|\(|\)/gi.test(groupContent);

  if (hasWrongGroupContent) {
    return false;
  }

  return true;
}
