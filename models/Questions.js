const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const QuestionSchema = new Schema({
    animal: String,
    questions: [
        {
            qid:
            {
              type: Number,  
            },
            quest: {
                type: String,
                required: true
            },
            answer:{
                type: Array,
                required: true,
            },
            correct: {
                type: String,
            },
        
        }
    ]
})


const Questions = mongoose.model("Questions", QuestionSchema)

module.exports = Questions;