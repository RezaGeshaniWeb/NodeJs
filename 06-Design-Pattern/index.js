const ConnectToMongoDB = require("./singleton")

async function main() {
    const db = await new ConnectToMongoDB().Get()
    const res = await db.collection('user').find({}).toArray()
    console.log(res)
}
main()