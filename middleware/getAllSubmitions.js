const axios = require("axios");

const getFormAllByIdSubmissions = async (req, res, next) => {
    const formId = process.env.FORM_ID
    const page = 1
    const limit = 100

    if (!formId) {
        return res.status(400).json({ error: 'El formId es requerido' });
    }

    const url = `https://rest.gohighlevel.com/v1/forms/submissions?page=${page}&limit=${limit}&formId=${formId}`;
    
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY_PAUE}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.data) {
            return res.status(500).json({ error: 'No se pudo obtener los datos' });
        }
        
        req.body.submissions = response.data
        next()
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(error.response?.status || 500).json({ error: 'Error al obtener los datos', details: error.response?.data });
    }
};

module.exports = getFormAllByIdSubmissions;