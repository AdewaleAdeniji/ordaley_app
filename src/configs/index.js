const dev = {
    API_URL: 'https://staging.api.transit.mvxchange.com',
};

const prod = {
    API_URL: 'https://api.transit.mvxchange.com',
};

const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default {
    ...config,
};