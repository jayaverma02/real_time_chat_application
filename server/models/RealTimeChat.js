import mongoose from 'mongoose';

const RealTimeChatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const RealTimeChat = mongoose.model('RealTimeChat', RealTimeChatSchema);

export default RealTimeChat;