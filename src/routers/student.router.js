import { getStudentList } from '../controllers/student.controller';

export default (app) => {
    app.get('/students', getStudentList);
}
