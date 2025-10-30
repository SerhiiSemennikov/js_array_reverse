"use strict";

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require("./arrayReverse");

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(["Abra", "Cadabra"]);
    expect(result).toEqual(["arba", "daCarbA"]);
    expect(result).toContain("arba", "daCarbA");
    expect(result[0]).toMatch(/arba/);
    expect(result[1]).toMatch("daCarbA");
    expect(result).toBeInstanceOf(Array);
    expect(arrayReverse(result)).toEqual(["Abra", "Cadabra"]);
  });

  it(`an empty array
    `, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`1 word`, () => {
    expect(arrayReverse(["Casablanca"])).toEqual(["acnalbasaC"]);
  });

  it(`2 words`, () => {
    expect(arrayReverse(["Mate", "Academy"])).toEqual(["ymed", "acAetaM"]);
  });

  it(`an empty strings
    `, () => {
    expect(arrayReverse(["", "", ""])).toEqual(["", "", ""]);
  });

  it(`an empty string in the beginning
    `, () => {
    expect(arrayReverse(["", "Academy"])).toEqual(["", "ymedacA"]);
  });

  it(`an empty string in the end
    `, () => {
    expect(arrayReverse(["Academy", ""])).toEqual(["ymedacA", ""]);
  });

  it(`an empty string in the middle
    `, () => {
    expect(arrayReverse(["Mate", "", "Academy"])).toEqual([
      "ymed",
      "",
      "acAetaM",
    ]);
  });

  it(`'words' === ['Hell0']`, () => {
    expect(arrayReverse(["Hell0"])).toEqual(["0lleH"]);
  });

  it(`few words`, () => {
    expect(arrayReverse(["I", "am", "a", "student!"])).toEqual([
      "!",
      "tn",
      "e",
      "dutsamaI",
    ]);
  });
});
