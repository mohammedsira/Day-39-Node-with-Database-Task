// import mongoose from "mongoose";

// const studentSchema = mongoose.Schema({
//     studentName:String,
//     studentEmail:String,
//     mentor:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Mentor"
//     }
// })

// const Student = mongoose.model('Student',studentSchema)

// export default Student;

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentName: String,
    studentEmail: String,
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor"
    },
    previousMentors: [
        {
            mentor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Mentor"
            },
            assignedDate: Date
        }
    ]
});

const Student = mongoose.model('Student', studentSchema);

export default Student;