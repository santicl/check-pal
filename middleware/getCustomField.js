const axios = require("axios");

function getDateCustomValues(obj) {
  return obj.name.replace('disponible-', '');
}

const getCustomFields = async (req, res, next) => {
    const API_CUSTOM_FIELDS = 'https://rest.gohighlevel.com/v1/custom-values'

    try {
        const response = await axios.get(API_CUSTOM_FIELDS, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY_PAUE}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.data) {
            return res.status(500).json({ error: 'No se pudo obtener los datos' });
        }

        const customValues = response.data.customValues
        
        customValues.forEach(custom => {
            const dateCustom = getDateCustomValues(custom)
            console.log(dateCustom)
        });
    } catch (error) {
        console.error('X Error al obtener los CUSTOM FIELDS')
    }
}

module.exports = getCustomFields