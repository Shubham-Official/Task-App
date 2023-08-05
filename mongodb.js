const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// Create Instance of MongoClient for mongodb
const client = new MongoClient(connectionURL);

// Connect to database
client.connect()
    .then(() => {
        console.log('Connected Successfully')
        const db = client.db(databaseName);

        // db.collection("users").findOne({ _id: new ObjectId("64c78fb3c10c503db65d4ce2") })
        //     .then(result => {
        //         if (result == null) {
        //             return console.log("User not found!")
        //         } else {
        //             console.log(result);
        //         }
        //     })
        //     .catch(err => console.log(err));

        db.collection("users").find({ age: 24 })
            .then(result => result.toArray((error, users) => {
                console.log(users);
            }))
            .catch(err => console.log(err));
    })
    .catch(error => console.log('Failed to connect', error))

