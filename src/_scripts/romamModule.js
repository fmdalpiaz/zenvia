var romanModule = (function (window, undefined) {
    'use strict';

    var toNumeralMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        },
        toRomanMap = {
            'M' : 1000,
            'CM': 900,
            'D': 500,
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5,
            'IV': 4,
            'I': 1
        },
        validRomanCharsRegex = /^[IVXLCDM]+$/gi;


    function convertRomanToNumeral (roman) {
        var numeral = 0;

        while (roman.length) {
            if (roman.length === 1) {
                numeral += toNumeralMap[roman.shift()];
            } else if (toNumeralMap[roman[0]] < toNumeralMap[roman[1]]) {
                numeral -= toNumeralMap[roman.shift()];
            } else {
                numeral += toNumeralMap[roman.shift()];
            }
        }

        return numeral;
    }


    function convertNumeralToRoman (numeral) {
        var roman = '';

        for (var romanLetter of Object.keys(toRomanMap)) {
            var n = Math.floor(numeral / toRomanMap[romanLetter]);

            numeral -= n * toRomanMap[romanLetter];
            roman += romanLetter.repeat(n);
        }

        return roman;
    }


    return {

        convertToNumeral: function (inputValue) {
            if (this.hasOnlyRomanChars(inputValue)) {
                inputValue = inputValue.trim().toUpperCase().split('');

                return convertRomanToNumeral(inputValue);
            } else {
                return 'Error: Input must be a valid roman number.';
            }
        },


        convertToRoman: function (inputValue) {
            if (this.isNaturalBiggerThanZero(inputValue)) {
                return convertNumeralToRoman(inputValue);
            } else {
                return 'Error: Input must be a valid natural number and bigger than zero.';
            }
        },


        isNaturalBiggerThanZero: function (inputValue = '') {
            return typeof inputValue === 'number' && inputValue % 1 === 0 && inputValue > 0;
        },


        isEmpty: function (inputValue = '') {
            return String(inputValue).trim().length === 0;
        },


        isString: function (inputValue = null) {
            return typeof inputValue === 'string';
        },


        hasOnlyRomanChars: function (inputValue = '') {
            if (!this.isEmpty(inputValue) && this.isString(inputValue)) {
                inputValue = inputValue.trim();

                return inputValue.match(validRomanCharsRegex) === null ? false : true;
            } else {
                return false;
            }
        }

    };
})(window, undefined);
