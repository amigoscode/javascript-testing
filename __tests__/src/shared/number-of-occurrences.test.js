// const underTest = require('../../../src/shared/number-of-occurrences')
import numberOfOccurrences from '../../../src/shared/number-of-occurrences'

describe('Number of Occurrences', () => {
    test('Can find correct number of occurrences for a given number', () => {
        // Given
        const numbers = [1, 2, 3, 3, 3, 4, 4, 5];
        const searchNumber = 3;
        const expected = 3;
        
        // When
        const actual = numberOfOccurrences(numbers, searchNumber);
        
        // Then
        expect(actual).toBe(expected);
    })
    
    test('Can find correct number of occurrences when not found', () => {
        // Given
        const numbers = [1, 2, 3, 3, 3, 4, 4, 5];
        const searchNumber = 10;
        const expected = 0;
        
        // When
        const actual = numberOfOccurrences(numbers, searchNumber);
        
        // Then
        expect(actual).toBe(expected);
    })

     test('Can find correct number of occurrences when list is empty', () => {
        // Given
        const numbers = [];
        const searchNumber = 10;
        const expected = 0;
        
        // When
        const actual = numberOfOccurrences(numbers, searchNumber);
        
        // Then
        expect(actual).toBe(expected);
    })

    test('will throw error when input not a number', () => {
        // Given
        const numbers = [];
        const searchNumber = 'A';
        
        // When
        // Then
        expect(() => numberOfOccurrences(numbers, searchNumber))
            .toThrow(`${searchNumber} is not a number`)
    });
})