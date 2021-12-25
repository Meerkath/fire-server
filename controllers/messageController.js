const Message = require('../models/Message');
const ObjectId = require("mongoose").Types.ObjectId;

const getLastMessage = (req, res) => {
  Message.findOne({
    $or:
    [ 
      { 
        $and: 
        [ 
          { senderId: new ObjectId(req.body.user._id) }, 
          { recipientId: new ObjectId(req.params.userId) } 
        ]
      },
      {
        $and: 
        [
          { senderId: new ObjectId(req.body.user._id) },
          { recipientId: new ObjectId(req.params.userId) }
        ]
      } 
    ]
  }).then((lastMessage) => {
    if(!lastMessage)
      res.sendStatus(404);
    res.send(lastMessage);
  })
}

module.exports = {
  getLastMessage,
}