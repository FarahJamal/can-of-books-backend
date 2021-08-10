'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;




const booksSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  imageUrl: String,
});




const userSchema = new mongoose.Schema({
    email: String,
    books: [booksSchema],
  });
  
  const Users = mongoose.model('Users', userSchema);
function bookSeeds(){


const user1=new Users({
    email:'farahsarese@gmail.com',
    books:[
        {title: 'Harry Potter and the Philosopher\'s Stone',
description:"Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world. The magic starts here.Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. The magic starts here!These editions of the classic and internationally bestselling Harry Potter series feature thrilling jacket artwork by award-winning illustrator Jonny Duddle. They are the perfect starting point for anyone who's ready to lose themselves in the greatest children's story of all time.",
status:'done great!',
imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51ifu1aebKL._SX332_BO1,204,203,200_.jpg'},
{ title: 'Harry Potter and the Chamber of Secrets (Harry Potter 2)',
description:"Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
status:'done great!',
imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51F7MMxbhOL._SX324_BO1,204,203,200_.jpg'},
{
title: 'Harry Potter and the Deathly Hallows Paperback',
description:"Harry Potter is preparing to leave the Dursleys and Privet Drive for the last time. But the future that awaits him is full of danger, not only for him, but for anyone close to him - and Harry has already lost so much. Only by destroying Voldemort's remaining Horcruxes can Harry free himself and overcome the Dark Lord's forces of evil.In this dramatic conclusion to the Harry Potter series, Harry must leave his most loyal friends behind, and in a final perilous journey find the strength and the will to face his terrifying destiny: a deadly confrontation that is his alone to fight.",
status:'done great!',
imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61pU4py9cZL._SX324_BO1,204,203,200_.jpg'}
    ]
})
const user2=new Users({
    email:'farahsarese98@gmail.com',
    books:[
        { title: 'Harry Potter and the Chamber of Secrets (Harry Potter 2)',
        description:"Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
        status:'done great!',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51F7MMxbhOL._SX324_BO1,204,203,200_.jpg'},
        {title: 'Harry Potter and the Deathly Hallows Paperback',
description:"Harry Potter is preparing to leave the Dursleys and Privet Drive for the last time. But the future that awaits him is full of danger, not only for him, but for anyone close to him - and Harry has already lost so much. Only by destroying Voldemort's remaining Horcruxes can Harry free himself and overcome the Dark Lord's forces of evil.In this dramatic conclusion to the Harry Potter series, Harry must leave his most loyal friends behind, and in a final perilous journey find the strength and the will to face his terrifying destiny: a deadly confrontation that is his alone to fight.",
status:'done great!',
imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61pU4py9cZL._SX324_BO1,204,203,200_.jpg'}

    ]
})
const user3=new Users({
    email:'9982054831.UPS@htu.edu.jo',
    books:[
        { title: 'Harry Potter and the Deathly Hallows Paperback',
        description:"Harry Potter is preparing to leave the Dursleys and Privet Drive for the last time. But the future that awaits him is full of danger, not only for him, but for anyone close to him - and Harry has already lost so much. Only by destroying Voldemort's remaining Horcruxes can Harry free himself and overcome the Dark Lord's forces of evil.In this dramatic conclusion to the Harry Potter series, Harry must leave his most loyal friends behind, and in a final perilous journey find the strength and the will to face his terrifying destiny: a deadly confrontation that is his alone to fight.",
        status:'done great!',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61pU4py9cZL._SX324_BO1,204,203,200_.jpg'},
        { title: 'Harry Potter and the Cursed Child - Parts One and Two: The Official Playscript of the Original West End Production',
description:"it was always difficult being Harry Potter and it isn\'t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children.While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.The playscript for Harry Potter and the Cursed Child was originally released as a 'special rehearsal edition' alongside the opening of Jack Thorne's play in London's West End in summer 2016. Based on an original story by J.K. Rowling, John Tiffany and Jack Thorne, the play opened to rapturous reviews from theatregoers and critics alike, while the official playscript became an immediate global bestseller.",
status:'will read on 25th of Aug',
imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ZgWfRAYbL._SX317_BO1,204,203,200_.jpg'}

    ]
})

const user4=new Users({
    email:'jamalfarah98@outlook.com',
    books:[],
})


user1.save();
user2.save();
user3.save();
user4.save();

}


bookSeeds();

Users.find((err, person) => {
  if(err) return console.error(err);
  console.log({person})
});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('connected!');
});
module.exports = Users ;
