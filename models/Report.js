const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, enum: ['Roads', 'Water', 'Security', 'Electricity', 'Other'], required: true },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  },
  ward: { type: String, required: true },
  imageUrl: String,
  status: { type: String, enum: ['Open', 'In Progress', 'Resolved'], default: 'Open' },
  contact: String,
  response: String,
  createdAt: { type: Date, default: Date.now }
});

reportSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Report', reportSchema);
