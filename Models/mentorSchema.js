import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
    mentorName: String,
    mentorEmail: String,
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
});

const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;