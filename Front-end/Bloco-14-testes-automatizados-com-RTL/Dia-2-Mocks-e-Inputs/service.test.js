const service = require('./service');

describe('Trying mock', () => {
  it('Testa função randomNumber', () => {
    service.randomNumber = jest.fn()
      .mockReturnValueOnce(10)
      .mockImplementationOnce((a, b) => a / b);

    const { randomNumber } = service;
    expect(randomNumber()).toEqual(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);

    const theReturn = randomNumber(12, 2);
    expect(randomNumber).toHaveBeenCalledTimes(2);
    expect(randomNumber).toHaveBeenCalledWith(12, 2);
    expect(theReturn).toEqual(6);
    const expectingError = randomNumber(12, 2);
    expect(expectingError).not.toBe(6);
    expect(expectingError).toBe(undefined);
    expect(randomNumber).toHaveBeenCalledTimes(3);

  });

  it('New mock', () => {
    service.randomNumber = jest.fn()
      .mockImplementation((x, y, z) => x * y * z);

    const { randomNumber } = service;

    const theMultiplyResult = randomNumber(2, 3, 4);
    expect(randomNumber).toHaveBeenCalled()
    expect(randomNumber).toHaveBeenCalledTimes(1)
    expect(theMultiplyResult).toEqual(24);
    expect(randomNumber(1, 2, 3)).toEqual(6);

    randomNumber.mockReset();
    randomNumber.mockImplementation((n) => n * 2);

    const newImplementation = randomNumber(5);
    expect(newImplementation).toEqual(10);
    expect(randomNumber(10, 3, 1)).not.toEqual(30);

  });

  it('Another mock, with 3 funcs now', () => {
    service.theFirstLetter = jest.spyOn(service, 'theFirstLetter')
      .mockImplementation((str) => {
        const splitedStr = str.split('');
        const lastLetter = splitedStr.length - 1;
        return splitedStr[ lastLetter ];
      })

    service.toUpperCase = jest.spyOn(service, 'toUpperCase')
      .mockImplementation((str) => str.toLowerCase());

    service.twoStrIntoOne = jest.spyOn(service, 'twoStrIntoOne')
      .mockImplementation((x, y, z) => `${x} ${y} ${z}`);

    const { theFirstLetter, toUpperCase, twoStrIntoOne } = service;

    expect(theFirstLetter('LeonardoDev')).toBe('v');
    expect(theFirstLetter('Trybe-fi')).toBe('i');
    expect(theFirstLetter).toHaveBeenCalledTimes(2);

    expect(toUpperCase('str')).toBe('str');
    expect(toUpperCase('DEV LEONARDO')).toBe('dev leonardo');
    expect(toUpperCase).toHaveBeenCalledTimes(2);

    expect(twoStrIntoOne('i', 's')).toBe('i s undefined');
    expect(twoStrIntoOne('And here is', 'the new', 'Dev Leonardo')).toBe('And here is the new Dev Leonardo');
    expect(twoStrIntoOne).toHaveBeenCalledTimes(2);

    service.theFirstLetter.mockRestore();
    service.toUpperCase.mockRestore();
    service.twoStrIntoOne.mockRestore();

    expect(service.theFirstLetter('Leonardo')).toBe('L');
    expect(service.toUpperCase('leonardo')).toBe('LEONARDO');
    expect(service.twoStrIntoOne("I'm", 'Leonardo')).toBe("I'm Leonardo");

  });
});