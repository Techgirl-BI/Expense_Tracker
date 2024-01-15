import mongoose from 'mongoose'

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
           useUnifiedTopology: true,
            useNewUrlParser: true,
        })
    } catch (error) {
        console.log(`error ${error}`);
    }
}