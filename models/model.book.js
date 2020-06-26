const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    time:[
        {
          id: { type: Number, required: true, unique: true },
          slot:{type:String,required:true},
          isAvail: { type: Boolean, required: true }
          
        }
      ]
}, {
  timestamps: true,
});



const Book = mongoose.model('bookings', bookingSchema);

module.exports = Book;