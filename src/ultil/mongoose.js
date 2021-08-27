module.exports = {
    multipleMongoose: function (mongooses) {
        return mongooses.map((mongooses) => mongooses.toObject());
    },
    mongoose: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
