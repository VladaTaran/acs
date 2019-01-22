export default {
    API_URI: process.env.NODE_ENV === 'producrion'
        ? 'https://ac-school.herokuapp.com'
        : 'https://localhost:8000'
}