import isNil from "../internal/is-nil";

export function isValid(letter: string) {
  const characters = letter.split("");

  const tokens = {
    start: null,
    end: null,
  };

  for (let i = 0; i < characters.length; i++) {
    switch (characters[i]) {
      case "(":
        tokens.start = i;
        break;
      case ")":
        tokens.end = i;
    }
  }

  if (!isNil(tokens.start) && isNil(tokens.end)) {
    return false;
  }

  const group = letter.substring(tokens.start, tokens.end + 1);

  const hasWrongGroupContent = /[\[\{]/gi.test(group);

  if (hasWrongGroupContent) {
    return false;
  }

  const hasEmptyGroupContent = group.replace(/(^\()|(\)$)/gi, "").length;

  if (hasEmptyGroupContent === 0) {
    return false;
  }

  return true;
}
