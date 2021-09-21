const MongoClient = require('mongodb').MongoClient;
const URL = process.env.MONGODB_URL;
const DEMO_DB = 'demo-db';
const VOTE_COLLECTION = "vote";

const increaseVote = async function () {
    const client = await new MongoClient(URL, {useUnifiedTopology: true}).connect()
    const db = client.db(DEMO_DB)
    const vote = await db.collection(VOTE_COLLECTION).findOne({id: 1})
    if (vote == null) {
        db.collection(VOTE_COLLECTION).insertOne({id: 1, count: 1})
        return {id: 1, count: 1}
    } else {
        await db.collection(VOTE_COLLECTION).updateOne({id: 1}, {$inc: {count: 1}});
        return {id: 1, count: vote.count + 1}
    }
}

module.exports = {increaseVote}