const mongoose = require('mongoose');
const db = require('../models');
// const router = express.Router()


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zooauthdb", { useNewUrlParser: true });

const questionsSeed = [
    {//start of gorrilla
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
                correct: "South America"
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
                correct: "150 kilos"
            },

        ],//end quetion Arry

    },//end of gorrilla
    {// start of artcic focx
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
                correct: "Arctic"
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
                correct: "-70 C"
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
                correct: "Spring"
            },
        ]
    },//end of artctic fox
    {// start of Llama
        animal: "Llama",
        questions: [
            {
                qid: 0,
                quest: "Where do llamas live?",
                answer: [
                    "Peru",
                    "Colombia",
                    "Africa",
                    "Spain"
                ],
                correct: "Peru"
            },
            {
                qid: 1,
                quest: "How much do llamas weigh?",
                answer: [
                    "100-150 lbs",
                    "200-250",
                    "280-450",
                    "450-550"
                ],
                correct: "280-450"
            },
            {
                qid: 2,
                quest: "What percent of their weight can they carry?",
                answer: [
                    "10-15",
                    "15-20",
                    "20-25",
                    "25-30"
                ],
                correct: "25-30"
            },
        ]
    },//end of llama
    {// start of Boa Constrictor
        animal: "Boa Constrictor",
        questions: [
            {
                qid: 0,
                quest: "Where do boa constrictors live?",
                answer: [
                    "China",
                    "South America",
                    "Florida",
                    "Africa"
                ],
                correct: "South America"
            },
            {
                qid: 1,
                quest: "What type of animal is a Boa Constrictor?",
                answer: [
                    "Reptile",
                    "Amphibian",
                    "Mammal",
                    "Lizard"
                ],
                correct: "Reptile"
            },
            {
                qid: 2,
                quest: "How long can Boa Constrictors get?",
                answer: [
                    "6 ft",
                    "20 ft",
                    "13 ft",
                    "50 ft"
                ],
                correct: "13 ft"
            },
        ]
    }//end of Boa Constrictor

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
