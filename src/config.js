export default {
    API_URI: process.env.NODE_ENV === 'production'
        ? 'https://aesthetic-school.com/'
        : 'https://localhost:8000'
}