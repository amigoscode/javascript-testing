describe.skip('My second test', () => {
    test.skip('my second test 1', () => {
        expect(1 + 2).toBe(3);
    })
    
    test('my second test 2', () => {
        expect(1 + 2).toBe(3);
    })
    
    test('my second test 3', () => {
        expect(1 + 2).toBe(3);
    })
})