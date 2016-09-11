const mongoose = require('mongoose');
const Canvas = mongoose.model(
  "Canas",
  { canvas[[String]],
    pallet:{
      colors: [String],
      selectedColor: String
    },
  }
);

module.exports = Canvas;