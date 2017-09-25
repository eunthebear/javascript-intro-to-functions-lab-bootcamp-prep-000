function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

function sayHiToGrandma(string) {
  if(string.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if(string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if(string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}