var mongoose = require("mongoose");
//The user schema
const WordsSchema = new mongoose.Schema(
  {
    word: {
      require: true,
      //   unique: true,
      type: String,
    },
    meaning: {
      type: String,
    },
    relatedWords: [{ type: mongoose.Schema.Types.ObjectId ,  ref:'Words' }],
    quizCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Words", WordsSchema);
