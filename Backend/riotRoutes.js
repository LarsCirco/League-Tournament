const express = require('express');
const { registerProvider } = require('./riot');

const router = express.Router();

// Example endpoint that registers a provider and responds to the client
router.post('/registerProvider', async (req, res) => {
    try {
        const { region, callbackUrl } = req.body;
        const result = await registerProvider(region, callbackUrl);
        if (result) {
            res.json({ success: true, data: result });
        } else {
            res.status(500).json({ success: false, message: "Failed to register provider" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;