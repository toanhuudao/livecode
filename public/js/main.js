import axios from 'axios';

export const test = async () => {
    try {
        const res = await axios({
            headers: {
                'x-rapidapi-host': 'world-population.p.rapidapi.com',
                'x-rapidapi-key': 'ed74e2be46msha0be35e5f345febp17ac10jsn4262a33cbe07'
            },
            params: {country_name: 'Mexico'},
            method: 'GET',
            url: 'https://world-population.p.rapidapi.com/population',
        });

        if (res.data) {
            console.log(res.data)
        }
    } catch (err) {
        console.log(err.response.data.message);
    }
};

export const getNearestCity = async (lat, lon) => {
    try {
        const res = await axios({
            params: {
                key: "8722b546-3630-4434-9bad-f77ae927f5e2",
                lat,
                lon
            },
            method: 'GET',
            url: 'http://api.airvisual.com/v2/nearest_city',
        });

        if (res.data) {
            console.log(res.data);
            return res.data;
        }
    } catch (err) {
        console.log(err.response.data.message);
    }
};

export const getAllCityOfCountry = async (country) => {
    try {
        const res = await axios({
            params: {
                key: "8722b546-3630-4434-9bad-f77ae927f5e2",
                country
            },
            method: 'GET',
            url: 'http://api.airvisual.com/v2/states',
        });

        if (res.data) {
            return res.data.data;
        }
    } catch (err) {
        console.log(err.response.data.message);
    }
};
