describe('Mocks', () => {
  describe('Functions', () => {
      test('jest.fn', () => {
        // given
        const mock = jest.fn();
        
        // when
        mock();

        // then
        expect(mock()).toBeUndefined();
        expect(mock).toHaveBeenCalled();        
        expect(mock).toHaveBeenCalledTimes(2);
      })

      test('jest.fn using mock property', () => {
        // given
        const myFunc = jest.fn();
        
        // when
        myFunc();
        myFunc();
        
        // then
        expect(myFunc.mock.results[0].value).toBeUndefined();
        expect(myFunc.mock.results[1].value).toBeUndefined();
        expect(myFunc.mock.calls.length).toBe(2);
      })


      test('jest.fn capturing arguments', () => {
        // given
        const myFunc = jest.fn();
        
        // when
        myFunc("hello", "foo");
        myFunc("world");
        
        // then
        expect(myFunc).toHaveBeenCalledWith("hello", "foo");
        
        expect(myFunc.mock.calls[0][0]).toBe("hello");
        expect(myFunc.mock.calls[0][1]).toBe("foo");
        
        expect(myFunc).toHaveBeenCalledWith("world");
        expect(myFunc.mock.calls[1][0]).toBe("world");

        expect(myFunc).toHaveBeenCalledTimes(2);
      });

      describe('mock implementation', () => {
        test("with callbacks", () => {
            const mock = jest.fn((text) => {
                return text.toUpperCase();
            });
            expect(mock("hello")).toBe("HELLO");
        })

        test("with .mockImplementation", () => {
            const mock = jest.fn().mockImplementation((text) => {
                return text.toUpperCase();
            });
            expect(mock("hello")).toBe("HELLO");
            expect(mock("amigoscode")).toBe("AMIGOSCODE");
        })

        test("with .mockImplementationOnce", () => {
            const mock = jest.fn().mockImplementationOnce((text) => {
                return text.toUpperCase();
            });
            expect(mock("hello")).toBe("HELLO");
            expect(mock("amigoscode")).toBeUndefined();
            expect(mock("amigoscode")).toBeUndefined();
            expect(mock("amigoscode")).toBeUndefined();
        })
        
      });

      test('mock return values', () => {
          const myFunc = jest.fn();
          expect(myFunc()).toBeUndefined();

          myFunc.mockReturnValueOnce(1);
          myFunc.mockReturnValueOnce(2);
          myFunc.mockReturnValueOnce(3);
          myFunc.mockReturnValue(-1);
          
          expect(myFunc()).toBe(1);
          expect(myFunc()).toBe(2);
          expect(myFunc()).toBe(3);
          expect(myFunc()).toBe(-1);
          expect(myFunc()).toBe(-1);
          expect(myFunc()).toBe(-1);

      })

      test('mocking promises', () => {
        const myFunc = jest.fn();
        myFunc.mockResolvedValue(["james", "ali"])
        expect(myFunc()).resolves.toEqual(["james", "ali"]);
      });
  })  
})