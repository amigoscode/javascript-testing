import fetchData from '../../src/fetch-data'
describe('Fetch data', () => {
    test('Can fetch data', () => {
        // return fetchData().then(data => {
        //     expect(data).toBe("data back from the server")
        // })
        return expect(fetchData()).resolves.toBe('data back from the server')
    })

    test('Can fetch data async', async () => {
        // const data = await fetchData();
        // expect(data).toBe("data back from the server")
        await expect(fetchData()).resolves.toBe('data back from the server')
    })

    test.only('Can catch error while fetching data', () => {
        // expect.assertions(1);
        // return fetchData().catch(e => {
        //     expect(e).toMatch('oops error')
        // })
        return expect(fetchData()).rejects.toMatch('oops error')
    })

    test('Can catch error while fetching data with async', async () => {
        // expect.assertions(1);
        // try {
        //     await fetchData();
        // } catch(err) {
        //     expect(err).toMatch('oops error')
        // }
        await expect(fetchData()).rejects.toMatch('oops error')
    })
})