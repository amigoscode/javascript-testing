import validator from '../../../src/shared/email-validator';

describe('Email Validator', () => {

    describe.only('Table Testing', () => {
        describe('Normal Table', () => {
            describe.each([
                ["hello@amigoscode.com", true],
                ["hello@gmail.com", true],
                ["hellogmail.com", false],
                [".com", false],
                ["hello@gmailcom", false],
                ["", false],
                ["0", false],
                ["dsadasdas", false],
            ])('email %s should be %o', (email, expected) => {
                test(`return ${expected}`, () => {
                    // when
                    const actual = validator(email);
                    // then
                    expect(actual).toBe(expected);
                })
            })
        })
        describe('Tagged Template Literal', () => {
            describe.each`
                email                     | expected
                ${"hello@amigoscode.com"} | ${true}
                ${"helloamigoscode.com"}  | ${false}
                ${"hello@amigoscodecom"}  | ${false}
            `('email $email should be $expected', ({ email, expected }) => {
                test(`return ${expected}`, () => {
                    // when
                    const actual = validator(email);
                    // then
                    expect(actual).toBe(expected);
                })
            })
        })
    })

    test('True when valid email', () => {
        // given
        const email = "hello@amigoscode.com";
        // when
        const actual = validator(email);
        // then
        expect(actual).toBe(true);
    })

    test('True when valid email 2', () => {
        // given
        const email = "hello@gmail.com";
        // when
        const actual = validator(email);
        // then
        expect(actual).toBe(true);
    })

    test('False when invalid email', () => {
        // given
        const email = "hellogmail.com";
        // when
        const actual = validator(email);
        // then
        expect(actual).toBe(false);
    })
})