const { MongoClient, ObjectId } = require("mongodb")

const DB_URL = 'mongodb://localhost:27017'
const DB_NAME = 'mongodb'

const client = new MongoClient(DB_URL)

async function main() {
    await client.connect()
    const db = client.db(DB_NAME)
    const userCollection = db.collection('user')

    /*
    const result = await userCollection.insertOne({
        firstName: "Amir",
        lastNane: "Khanjani",
        age: 17,
        skills: ['html', 'css', 'js'],
        identity: "1234567890",
        birthday: '1978',
        address: {
            province: 'hamedan',
            city: 'tuyserkan',
            street: 'geshani'
        }
    })

    const result = await userCollection.insertMany([
        { firstName: 'mahdi', age: 30 },
        { firstName: 'amirmahdi', age: 31 },
        { firstName: 'younes', age: 32 },
    ])
    */


    // userCollection.countDocuments().then(res => console.log(res))


    /*
    const result = await userCollection.deleteOne({ _id: new ObjectId('69984165eb4f82916e776900') })
    console.log(result)

    const result = await userCollection.deleteMany({ age: 30 })
    console.log(result)
    
    const result = await userCollection.findOneAndDelete({ firstName: 'Reza' })
    console.log(result);
    */


    /*
    const users = await userCollection.find({}).toArray()
    
    const users = await userCollection.find({ skills: 'nodejs' }).toArray()
    
    // const users = await userCollection.find({ age: { $gte: 28 } }).toArray()
    const users = await userCollection.find({ age: { $lte: 28 } }).toArray()
    
    const users = await userCollection.find({ 'address.province': { $in: ['tehran', 'hamedan'] } }).toArray()
    
    const user = await userCollection.findOne({ firstName: 'Amir' })
    console.log(user)
    */


    /*
    const result = await userCollection.updateOne({ _id: new ObjectId('69984165eb4f82916e7768ff') }, {
        $set: { age: 26 }
    })
    
    const result = await userCollection.updateOne({ _id: new ObjectId('69984165eb4f82916e7768ff') }, {
        $push: { skills: 'nestjs' }
    })
    
    const result = await userCollection.updateOne({ _id: new ObjectId('69984165eb4f82916e7768ff') }, {
        $pull: { skills: 'nestjs' }
    })
    
    const result = await userCollection.updateOne({ _id: new ObjectId('69984165eb4f82916e7768ff') }, {
        // $inc: { age: 1 }
        $inc: { age: -1 }
    })
    
    const result = await userCollection.updateOne({ _id: new ObjectId('69984165eb4f82916e7768ff') }, {
        $rename: { age: 'userAge' }
    })
    
    const result = await userCollection.updateOne({ _id: new ObjectId('69984165eb4f82916e7768ff') }, {
        $unset: { identity: 1 }
    })
    
    const result = await userCollection.updateMany({ firstName: 'Ali' }, {
        $inc: { userAge: 1 }
    })
    
    const result = await userCollection.findOneAndUpdate({ firstName: 'Ali' }, {
        $inc: { userAge: 1 }
    })
    console.log(result)
    */


    /*
    const users = await userCollection.findOne({ firstName: 'Ali' }, {
        projection: {
            // skills: 0,
            // birthday: 0,

            address: 1,
        },
    })
    
    const users = await userCollection.find({}, {
        // skip: 1,
        
        // limit: 1,
        
        sort: { _id: -1 }
    }).toArray()
    console.log(users)
    */


    /*
    const result = await userCollection.aggregate([]).toArray()
    
    const result = await userCollection.aggregate([
        {
            $match: {
                firstName: 'Ali'
            }
        },
        {
            $project: {
                userAge: 0
            }
        },
        {
            $addFields: {
                "newField": "new"
            }
        }
    ]).toArray()
    
    const result = await userCollection.aggregate([
        {
            $match: {
                firstName: 'Ali'
            }
        },
        {
            $addFields: {
                "age": "$userAge"
            }
        },
        {
            $project: {
                userAge: 0
            }
        }
    ]).toArray()
    console.log(result)
    */
}
main()
