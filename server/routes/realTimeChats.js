import express from 'express';
import RealTimeChat from '../models/RealTimeChat.js';

const router = express.Router();

router.post('/message', async (req, res) => {
    const { userId, message } = req.body;

    try {
        const newMessage = new RealTimeChat({
            userId,
            message
        });

        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

router.get('/messages', async (req, res) => {
    try {
        const messages = await RealTimeChat.find().sort({ date: -1 });
        res.json(messages);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

export default router;

