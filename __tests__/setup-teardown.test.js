beforeEach(() => {
    console.log("populating db....");
});

afterEach(() => {
    console.log("deleting db....");
});

describe('Setup and Teardown', () => {
    test('one', () => {
        expect(1+1).toBe(2);
    })
    test('two', () => {
        expect(1+1).toBe(2);
    })
});