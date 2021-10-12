describe('My First Test', () => {
    describe('addition', () => {
        describe('positive numbers', () => {
            test('it should add 1 + 2', () => {
                expect(1 + 2).toBe(3);
            })
            
            test('can add 3 + 3', () => {
                expect(3 + 3).toBe(6);
            })
        })
    
        describe('negative numbers', () => {
            test('it subtract 1 - 1', () => {
                expect(1 - 1).toBe(0);
            })
            
            test('can add 3 - 4', () => {
                expect(3 - 4).toBe(-1);
            })
        })
    })    
})
