var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
	name: String,
	quate: String,
	form: String,
	living: String,
	fav_tich: String,
	img: String,
	face_link:String,
	twitt_link:String,
	linked_link:String,
	updated: Date
});

studentSchema.pre('save', function(next) {
	var currentDate = new Date();
	this.updated = currentDate;

	next();
});

var Student = mongoose.model('students', studentSchema);
module.exports = Student;