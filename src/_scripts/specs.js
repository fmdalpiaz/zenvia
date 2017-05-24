describe('Validating roman number input', function () {
    it('should not be empty', function () {
        expect(romanModule.isEmpty('')).toBe(true);
        expect(romanModule.isEmpty(' ')).toBe(true);
        expect(romanModule.isEmpty('XII')).toBe(false);
        expect(romanModule.isEmpty('12')).toBe(false);
        expect(romanModule.isEmpty(12)).toBe(false);
        expect(romanModule.isEmpty(true)).toBe(false);
        expect(romanModule.isEmpty()).toBe(true);
    });

    it('should be a string', function () {
        expect(romanModule.isString('')).toBe(true);
        expect(romanModule.isString(' ')).toBe(true);
        expect(romanModule.isString('XII')).toBe(true);
        expect(romanModule.isString('12')).toBe(true);
        expect(romanModule.isString(12)).toBe(false);
        expect(romanModule.isString(true)).toBe(false);
        expect(romanModule.isString()).toBe(false);
    });

    it('should contain only roman chars', function () {
        expect(romanModule.hasOnlyRomanChars('XII')).toBe(true);
        expect(romanModule.hasOnlyRomanChars('MCL')).toBe(true);
        expect(romanModule.hasOnlyRomanChars('DXIII')).toBe(true);
        expect(romanModule.hasOnlyRomanChars('XIP')).toBe(false);
        expect(romanModule.hasOnlyRomanChars('QA')).toBe(false);
        expect(romanModule.hasOnlyRomanChars('IIIU')).toBe(false);
        expect(romanModule.hasOnlyRomanChars('')).toBe(false);
        expect(romanModule.hasOnlyRomanChars(' ')).toBe(false);
        expect(romanModule.hasOnlyRomanChars('12')).toBe(false);
        expect(romanModule.hasOnlyRomanChars(12)).toBe(false);
        expect(romanModule.hasOnlyRomanChars(true)).toBe(false);
        expect(romanModule.hasOnlyRomanChars()).toBe(false);
    });
});

describe('Converting roman numbers to numeral', function () {
    it('should convert roman number to its numeral correspondent', function () {
        expect(romanModule.convertToNumeral('V')).toBe(5);
        expect(romanModule.convertToNumeral('IX')).toBe(9);
        expect(romanModule.convertToNumeral('XXVIII')).toBe(28);
        expect(romanModule.convertToNumeral('CCCLXXIV')).toBe(374);
        expect(romanModule.convertToNumeral('MCCCXXXIX')).toBe(1339);
        expect(romanModule.convertToNumeral('MDCCCXXXIV')).toBe(1834);
        expect(romanModule.convertToNumeral('MMMCCCXXXII')).toBe(3332);
    });

    it('should return an error message when there is not a valid input', function () {
        expect(romanModule.convertToNumeral()).toContain('Error');
        expect(romanModule.convertToNumeral('')).toContain('Error');
        expect(romanModule.convertToNumeral('K')).toContain('Error');
        expect(romanModule.convertToNumeral('XK')).toContain('Error');
        expect(romanModule.convertToNumeral('87')).toContain('Error');
        expect(romanModule.convertToNumeral(87)).toContain('Error');
        expect(romanModule.convertToNumeral(false)).toContain('Error');
    });
});

describe('Validating numeral number input', function () {
    it('should be a numeral number bigger than zero', function () {
        expect(romanModule.isNaturalBiggerThanZero(1)).toBe(true);
        expect(romanModule.isNaturalBiggerThanZero(300)).toBe(true);
        expect(romanModule.isNaturalBiggerThanZero(1293.1)).toBe(false);
        expect(romanModule.isNaturalBiggerThanZero(-1)).toBe(false);
        expect(romanModule.isNaturalBiggerThanZero(0)).toBe(false);
        expect(romanModule.isNaturalBiggerThanZero('12')).toBe(false);
        expect(romanModule.isNaturalBiggerThanZero(true)).toBe(false);
        expect(romanModule.isNaturalBiggerThanZero()).toBe(false);
    });
});

describe('Converting numeral numbers to roman', function () {
    it('should convert numeral number to its roman correspondent', function () {
        expect(romanModule.convertToRoman(5)).toBe('V');
        expect(romanModule.convertToRoman(9)).toBe('IX');
        expect(romanModule.convertToRoman(28)).toBe('XXVIII');
        expect(romanModule.convertToRoman(374)).toBe('CCCLXXIV');
        expect(romanModule.convertToRoman(1339)).toBe('MCCCXXXIX');
        expect(romanModule.convertToRoman(1834)).toBe('MDCCCXXXIV');
        expect(romanModule.convertToRoman(3332)).toBe('MMMCCCXXXII');
    });
});
