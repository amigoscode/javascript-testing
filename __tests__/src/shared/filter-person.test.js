import { 
    filterByGender 
} from '../../../src/shared/filter-person'

describe('Filter Person', () => {
    test('can filter people by gender', () => {
        // Given
        const people = [
            {firstName: 'James', gender: 'M'},
            {firstName: 'Ali', gender: 'M'},
            {firstName: 'Samira', gender: 'F'},
            {firstName: 'Anna', gender: 'F'},
            {firstName: 'Sarah', gender: 'F'}
        ]
        const expected = [
            {firstName: 'Samira', gender: 'F'},
            {firstName: 'Anna', gender: 'F'},
            {firstName: 'Sarah', gender: 'F'}
        ]
        // When
        const actual = filterByGender(people, 'F');
        
        // Then
        expect(actual).toHaveLength(3);
        expect(actual).toEqual(expected);
    });

    test('can filter people by wrong gender', () => {
        // Given
        const people = [
            {firstName: 'James', gender: 'M'},
            {firstName: 'Ali', gender: 'M'},
            {firstName: 'Samira', gender: 'F'},
            {firstName: 'Anna', gender: 'F'},
            {firstName: 'Sarah', gender: 'F'}
        ]
        const expected = []
        // When
        const actual = filterByGender(people, 'P');
        
        // Then
        expect(actual).toHaveLength(0);
        expect(actual).toEqual(expected);
    })
})