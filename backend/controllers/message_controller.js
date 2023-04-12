import Conversation from "../models/conversation_model.js";
import Message from "../models/message_model.js";
import User from "../models/user_model.js";

export const createMessage = async (req, res, next) => {
  try {
    // for getting user which has messaged
    const user = await User.findById(req.userId);

    const newMessage = new Message({
      ConversationId: req.body.ConversationId,
      UserId: req.userId,
      desc: req.body.desc,
      pic: user.img,
    });

    const savedMessage = await newMessage.save();

    await Conversation.findOneAndUpdate(
      { id: req.body.ConversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).send(savedMessage);
  } catch (err) {
    next(err);
  }
};

export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ ConversationId: req.params.id });

    res.status(200).send(messages);
  } catch (err) {
    next(err);
  }
};
