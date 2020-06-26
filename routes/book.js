
const router = require('express').Router();

let book = require('../models/model.book');




router.route('/').get((req, res) => {
  book.find()
    .then(details => res.json(details))
    .catch(err => res.status(400).json('Error: ' + err));
});


// get slot day wise

router.route('/:id').get((req,res)=>{
    
  book.find({"_id":req.params.id})

  .then(details=>{
      const arr=details[0].time.filter(val=>val.isAvail==true);
      //console.log(arr)
      res.json(arr)
    

  })
  
  .catch(err=>res.status(400).json('Error: '+err))
});


// book slot
router.route('/:id/:slot').post((req,res)=>{
    console.log(req.params.id)
    book.findOneAndUpdate(
        {
          _id: req.params.id,
          'time._id': req.params.slot
        },
        {
          $set: {
            'time.$.isAvail': false
          }
        })

    .then(()=>res.json("Booking successfull!!"))
    
    .catch(err=>res.status(400).json('Error: '+err))

  
  

});


//cancel booking

router.route('/cancel/:id/:slot').post((req,res)=>{
    console.log(req.params.id)
    book.findOneAndUpdate(
        {
          _id: req.params.id,
          'time._id': req.params.slot
        },
        {
          $set: {
            'time.$.isAvail': true
          }
        })

    .then(details=>res.json("Your Booking has been cancelled!"))
    
    .catch(err=>res.status(400).json('Error: '+err))

  
  

});





module.exports = router;