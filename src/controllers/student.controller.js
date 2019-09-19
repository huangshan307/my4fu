import Student from "../models/student";

export async function getStudentList(req, res) {
    try {
        let studentList = await Student.find();
        if (studentList && studentList.length < 1) {
            res.status(200).json(studentList);
        } else {
            res.status(400).json({
                sucess: false,
                message: `It's Empty`
            });
        }
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message
        });
    }
}
