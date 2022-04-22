//công cụ xử lý logic chung

module.exports = {
    //khi nhận lại một list
    multipleMongooseToObject: function (mongooses){
        return mongooses.map(mongooses => mongooses.toObject());
    },
    //khi nhận lại 1 item
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}