var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
	
});

studentSchema.pre('save', function(next) {
	var currentDate = new Date();
	this.updated = currentDate;

	next();
});

var Student = mongoose.model('students', studentSchema);
module.exports = Student;