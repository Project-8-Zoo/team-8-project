const mongoose = require('mongoose');
const db = require('../models');
// const router = express.Router()


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zooauthdb", { useNewUrlParser: true });

  const questionsSeed = [
    {
        animal: "Gorilla",
        questions: [
            {
                qid: 0,
                quest: "Where do gorillas live?",
                answer: [
                    "Africa",
                    "South America",
                    "Asia",
                    "USA"
                ],
                correct: 1
            },
            {
                qid: 1,
                quest: "How heavy are Gorrilas?",
                answer: [
                    "1 ton",
                    "440 lb",
                    "150 kilos",
                    "1000 grams"
                ],
                correct: 2
            },

        ],//end quetion Arry

    },
    {
        animal: "Arctic Fox",
        questions: [
            {
                qid: 0,
                quest: "Where do artic foxes live?",
                answer: [
                    "Arctic",
                    "Iceland",
                    "Greenland",
                    "Canada"
                ],
                correct: 1
            },
            {
                qid: 1,
                quest: "What is the lowest temp can an Artic Fox endure?",
                answer: [
                    "-60 C",
                    "-80 C",
                    "-70 C",
                    "-30 C"
                ],
                correct: 3
            },
            {
                qid: 2,
                quest: "During what season do Arctic Foxes give birth?",
                answer: [
                    "Fall",
                    "Winter",
                    "Spring",
                    "Summer"
                ],
                correct: 1
            },
        ]}

    ];


const animalsSeed = [

    
    {
        name: "Gorilla",
    },
    {
        name: "Arctic Fox",
    },
    {
        name: "Llama",
    },
    {
        name: "Boa Constrictor",
    }
    
    

];

db.Animals.deleteMany({})
  .then(() => db.Animals.collection.insertMany(animalsSeed))
  .then((data) => {
    console.log(data.result.n + ' Animals inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Questions.deleteMany({})
  .then(() => db.Questions.collection.insertMany(questionsSeed))
  .then((data) => {
    console.log(data.result.n + ' questions!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
