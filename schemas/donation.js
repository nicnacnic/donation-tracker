module.exports = {
    event: { type: String, required: true },
    donor: { type: String, required: true },
    amount: { type: Number, required: true },
    comment: { type: String },
    incentives: { type: Object },
    custom: { type: Object },
    timestamp: { type: Date, default: Date.now },
    verified: { type: Boolean, required: true, default: false },
    visible: { type: Boolean, required: true, default: false },
}