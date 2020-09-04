var mongoose = require("mongoose");
//The user schema
const WordsSchema = new mongoose.Schema(
  {
    word: {
      require: true,
      //   unique: true,
      type: String,
    },
    relatedWords: [{ type: mongoose.Schema.Types.ObjectId }],
    quizCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Words", WordsSchema);
