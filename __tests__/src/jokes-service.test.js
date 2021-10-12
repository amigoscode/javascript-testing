import { fetchJoke } from "../../src/jokes-service";
import axios from 'axios';

jest.mock('axios');

describe('Chuck Norris Jokes', () => {
    test('Can fetch joke', async() => {
        const joke = {
            categories: [],
            created_at: '2020-01-05 13:42:30.480041',
            icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'rx8iiOJuR4mk8G4HTj9mag',
            updated_at: '2020-01-05 13:42:30.480041',
            url: 'https://api.chucknorris.io/jokes/rx8iiOJuR4mk8G4HTj9mag',
            value: "Chuck Norris doesn't celebrate christmas christmas celebrates Chuck Norris"
        }
        const res = {
            data: joke
        }
        axios.get.mockResolvedValue(res);

        await expect(fetchJoke()).resolves.toBe(joke.value);
    })

    test('Can handle failures while fetching jokes', async() => {
        axios.get.mockRejectedValue(new Error("failed to fetch joke"));
        try {
            await fetchJoke();
        } catch(err) {
            expect(err).toMatch('failed to fetch joke')
        }
    })
})