import {format} from '../src';

describe('format', () => {
  it('Should merge SQL with parameters', () => {
    expect(format('SELECT * FROM table WHERE id = ?', ['1'])).toBe(
      "SELECT * FROM table WHERE id = '1'"
    );
  });

  it('Should merge SQL with parameters', () => {
    expect(
      format('SELECT * FROM table WHERE id = ? AND name = ?', ['1', 'John'])
    ).toBe("SELECT * FROM table WHERE id = '1' AND name = 'John'");
  });

  it('Should merge SQL with parameters', () => {
    expect(
      format('SELECT * FROM table WHERE id = ? AND name = ?', [1, 'John'])
    ).toBe("SELECT * FROM table WHERE id = 1 AND name = 'John'");
  });

  it('Should append even if placeholder is inside string', () => {
    expect(
      format("SELECT * FROM table WHERE firstName = 'Umar ?' AND name = ?", [
        'John',
      ])
    ).toBe("SELECT * FROM table WHERE firstName = 'Umar ?' AND name = 'John'");
  });

  it("Should throw an error if placeholder doesn't match with parameters", () => {
    expect(() =>
      format('SELECT * FROM table WHERE id = ? AND name = ?', ['John'])
    ).toThrow('Invalid number of parameters');
  });
});
