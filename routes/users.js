const express= require('express');
const config = require('config');

const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err =>
        res.status(404).json({ nopostfound: 'No post found with that ID' })
      );
  });
  

router.post('/',[check('name','name is required').not().isEmpty(),
check('phone','please enter phone number of 10 digits').isLength({min:10,max:10}),
check('start','movie starting time is required').not().isEmpty()],

async(req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    else
    {
        res.json({"succes":"ticket is booked successfully"});
    }

    const {name,phone,start}=req.body;

    try {
        const freq = await Ticket.find({ start });
        if (freq.length >= 20) {
            return res.status(400).json({ msg: 'housefull' });
        }
    } catch (err) {
            console.log("server error");
            res.status(500).send("Server Error");
    }
});

router.delete(
    '/:id',
    (req, res) => {
        User.findById(req.params.id)
          .then(user => {
            // Delete
            user.remove().then(() => res.json({ success: "ticket deleted" }));
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    }
  );
  
module.exports = router;
