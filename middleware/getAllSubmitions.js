const axios = require("axios");

// Función reutilizable para obtener submissions
const getSubmissions = async (url) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY_PAUE}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.submissions; // Me aseguro de devolver solo el array de datos
    } catch (error) {
        console.error('Error en getSubmissions:', error.message);
        throw error;
    }
};

const getFormAllByIdSubmissions = async (req, res, next) => {
    const formId = process.env.FORM_ID;
    const secondFormId = process.env.FORM_SECOND_ID;
    const page = 1;
    const limit = 100;

    if (!formId || !secondFormId) {
        return res.status(400).json({ error: 'El formId y secondFormId son requeridos' });
    }

    const firstFormUrl = `https://rest.gohighlevel.com/v1/forms/submissions?page=${page}&limit=${limit}&formId=${formId}`;
    const secondFormUrl = `https://rest.gohighlevel.com/v1/forms/submissions?page=${page}&limit=${limit}&formId=${secondFormId}`;

    try {
        // Ejecutamos ambas llamadas en paralelo
        const [primeraRespuesta, segundaRespuesta] = await Promise.all([
            getSubmissions(firstFormUrl),
            getSubmissions(secondFormUrl)
        ]);

        // Combinamos ambas respuestas en un solo array
        const combinedSubmissions = [
            ...primeraRespuesta,
            ...segundaRespuesta
        ];

        //console.log(combinedSubmissions, 'combinedSubmissions all')

        // Asignamos al body para el siguiente middleware
        req.body.submissions = combinedSubmissions;

        next();
    } catch (error) {
        console.error('Error al obtener datos:', error.message);
        res.status(error.response?.status || 500).json({
            error: 'Error al obtener los datos',
            details: error.response?.data || error.message
        });
    }
};

module.exports = getFormAllByIdSubmissions;
