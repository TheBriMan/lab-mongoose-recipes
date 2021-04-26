const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    //Iteration 2
    //const recipe1 = { title: 'Enchiladas', cuisine: 'Mexican', creator: 'Brian'};
    //Recipe.create(recipe1)
    //  .then(recipe => console.log(`The recipe is saved and its value is: ${recipe1.title}`))
    
    //Iteration 3
    //Recipe.insertMany(data)
    //  .then(data => {
    //      for (let i = 0; i < data.length; i++) {
    //        console.log(`${data.title}`)
    //      }
    //  })

    //Iteration 4
    //Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
    //.then(console.log('success!'))
    //.catch(console.log('error!')) //do I need this if catch included below?

    //Iteration 5
    //Recipe.deleteOne({ title: 'Carrot Cake' })
    //.then(console.log('success!'))

    //Iteration 6
    mongoose.connection
    .close()
    .then(() => {
    console.log("Connection with Mongo closed!");
    })
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


  