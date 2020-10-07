const FSharp = require('./dist/bundle.fsharp.js');
const Purescript = require('./dist/bundle.purescript.js');
const Rescript = require('./dist/bundle.rescript.js');
const ScalaJS = require('./dist/bundle.scalajs.js');
const Typescript = require('./dist/bundle.typescript.js');

describe('DarkenColor', () => {
  const interpretations = {
    'F#': FSharp,
    'PureScript': Purescript,
    'ReScript': Rescript,
    'ScalaJS': ScalaJS.DarkenColor,
    'TypeScript': Typescript
  };

  Object.entries(interpretations).forEach(([language, DarkenColor]) => {
    describe(`in ${language}`, () => {
      describe('hex2rgb', () => {
        describe('for valid input', () => {
          describe('with hash prefix', () => {
            describe('long HEX', () => {
              const input = '#bede12';

              it('returns correct result', () => {
                expect(DarkenColor.hex2rgb(input)).toMatchObject({ r: 190, g: 222, b: 18 });
              });
            });

            xdescribe('short HEX', () => {
              const input = '#bd7';

              it('returns correct result', () => {
                expect(DarkenColor.hex2rgb(input)).toMatchObject({ r: 187, g: 221, b: 119 });
              });
            });
          });

          describe('no hash prefix', () => {
            describe('long HEX', () => {
              const input = 'bede12';

              it('returns correct result', () => {
                expect(DarkenColor.hex2rgb(input)).toMatchObject({ r: 190, g: 222, b: 18 });
              });
            });

            xdescribe('short HEX', () => {
              const input = 'bd7';

              it('returns correct result', () => {
                expect(DarkenColor.hex2rgb(input)).toMatchObject({ r: 187, g: 221, b: 119 });
              });
            });
          });
        });

        describe('for invalid input', () => {
          describe('invalid HEX string', () => {
            describe('invalid number of digits', () => {
              describe('too few', () => {
                describe('for long HEX', () => {
                  const input = '#bede1';

                  it('does not fail', () => {
                    expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
                  });
                });

                xdescribe('for short HEX', () => {
                  const input = '#be';

                  it('does not fail', () => {
                    expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
                  });
                });
              });

              describe('too many', () => {
                describe('for long HEX', () => {
                  const input = '#bede128';

                  it('does not fail', () => {
                    expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
                  });
                });

                xdescribe('for short HEX', () => {
                  const input = '#bede';

                  it('does not fail', () => {
                    expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
                  });
                });
              });
            });

            describe('invalid letters', () => {
              const input = '#bfghij';

              it('does not fail', () => {
                expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
              });
            });

            describe('invalid characters', () => {
              const input = '#be!?12';

              it('does not fail', () => {
                expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
              });
            });

            describe('spaces', () => {
              const input = '#be de  12';

              it('does not fail', () => {
                expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
              });
            });

            describe('invalid prefix', () => {
              const input = '?bede12';

              it('does not fail', () => {
                expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
              });
            });
          });
        });

        describe('for number', () => {
          describe('positive', () => {
            describe('floating point', () => {
              const input = 3.14;

              it('does not fail', () => {
                expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
              });
            });

            describe('integer', () => {
              const input = 314;

              it('does not fail', () => {
                expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
              });
            });
          });

          describe('negative', () => {
            describe('floating point', () => {
              const input = -3.14;

              it('does not fail', () => {
                expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
              });
            });

            describe('integer', () => {
              const input = -314;

              it('does not fail', () => {
                expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
              });
            });
          });
        });

        describe('for object', () => {
          describe('null', () => {
            const input = null;

            it('does not fail', () => {
              expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
            });
          });

          describe('undefined', () => {
            const input = undefined;

            it('does not fail', () => {
              expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
            });
          });

          describe('NaN', () => {
            const input = NaN;

            it('does not fail', () => {
              expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
            });
          });

          describe('JSON', () => {
            const input = { r: 25, g: 76, b: 120 };

            it('does not fail', () => {
              expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
            });
          });

          describe('array', () => {
            const input = [ 25, 76, 120 ];

            it('does not fail', () => {
              expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
            });
          });

          describe('Boolean', () => {
            const input = true;

            it('does not fail', () => {
              expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
            });
          });

          describe('Map', () => {
            const input = new Map();

            it('does not fail', () => {
              expect(() => DarkenColor.hex2rgb(input)).not.toThrow();
            });
          });
        });
      });
    });
  });
});
