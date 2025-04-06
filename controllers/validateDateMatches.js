const validateDateMatches = async (req, res, next) => {
    const { fecha } = req.body;
    const { submissions } = req.body;
    const { numberPerson } = req.body;
    const numberAvailable = 85;

    console.log(req.body)

    if (!fecha) {
        return res.status(400).json({ error: 'La fecha es requerida' });
    }

    try {
        const submissionsData = submissions.submissions || [];

        let totalAdditionalPeople = 0;

        submissionsData.filter(submission => {
            const submissionDate = submission.byn83cFhzqjbcoELPxSo;
            const personas = Number(submission['8gdQMzcZPfR6G0sNkmKX']) || 0;

        
            // Se suma la fecha si coincide
            if (submissionDate === fecha) {
                console.log('Existe coincidencia', submissionDate, personas)
                totalAdditionalPeople += personas;
            }
        
            return submissionDate === fecha;
        }).length;
        

        // Cantidad de personas total
        const availablePlaces = numberAvailable - totalAdditionalPeople;
        const avaNumber = numberAvailable - totalAdditionalPeople;

        // Cupos a solicitar es mayor a cupos disponibles
        if (numberPerson > availablePlaces) {
            return res.json({
                msg: 'No hay Cupos Suficientes',
                ava: false,
                avaNumber: avaNumber
            });
        }

        // Colocar disponibilidad para una siguiente fecha mas cercana o en el formulario colocar mensaje al usuario de buscar disponibilidad para otras fechas

        // Cupos suficientes
        if (availablePlaces <= numberAvailable) {
            return res.json({
                msg: 'Hay Cupos Suficientes',
                ava: true,
                avaNumber: avaNumber
            });
        }

        return { submitions: submissions }

    } catch (error) {
        console.error('Error al validar las fechas:', error);
        res.status(error.response?.status || 500).json({ error: 'Error al validar las fechas', details: error.response?.data });
    }
};

module.exports = validateDateMatches;
