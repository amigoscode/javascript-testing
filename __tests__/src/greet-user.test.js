import 
    { greetUser, greetUser2 }
from '../../src/greet-user'
describe('Greet user', () => {
    test('Can greet user callback', (done) => {
        // given
        const name = "James";
        
        const callback = data => {
            // then
            try {
                expect(data).toBe(name)
                done()
            } catch(err) {
                done(err)
            }
        }

        // when
        greetUser(name, callback)
    })

    test('Can greet user 2 callback using mocks', () => {
        // given
        const name = "James";
        
        const callback = jest.fn((username) => {
            return `Ola ${username}`
        });

        // when
        const actual = greetUser2(name, callback);
        
        // then
        expect(actual).toBe('Ola James');
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith("James");
    })
})