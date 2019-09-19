import mongoose from 'mongoose';

const student = new mongoose.Schema({
    StudentID: mongoose.Schema.Types.ObjectId,
    RollNumber: String,
    Email: String,
    LastName: String,
    FirstName: String,
    DayOfBirth: String,
    Gender: String,
    CurrentAddress: String,
    PermanentAddress: String,
    PhoneNumber: String,
    IsActive: String,
    MajorID: String //
});

module.exports = mongoose.model('Student', student);
