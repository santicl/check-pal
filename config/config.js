const developmentConfig = {
    apiUrl: 'http://localhost:4000'
}

const productionConfig = {
    apiUrl: 'https://api-transport-copy-production.up.railway.app'
}

export default process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;