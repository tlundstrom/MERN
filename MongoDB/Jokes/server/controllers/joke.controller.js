const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find({})
        .then((allTheJokes) => {
            
            res.json({ jokes: allTheJokes })
        })
        .catch((err) => {
            
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneJoke = (req, res) => {
    console.log(req.params.id);
    console.log(req.params);
    Joke.findById(req.params.id)
        .then(oneJoke => {
            console.log('Find Joke was successful');
            return res.json({ joke: oneJoke })
        })
        .catch((err) => {
            console.log('Find Joke was unsuccessful');
            return res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            return res.json({ joke: newlyCreatedJoke })
        })
        .catch((err) => {
            return res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            return res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            return res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            return res.json({ result: result })
        })
        .catch((err) => {
            return res.json({ message: 'Something went wrong', error: err })
        });
}