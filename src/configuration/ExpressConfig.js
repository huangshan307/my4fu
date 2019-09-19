import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import studentRoute from '../routers/student.router';

export default () => {
    const app = express();

    // Log request
    app.use(morgan('dev'));

    // Parsing the body 
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    studentRoute(app);

    // Handling errors
    app.use((req, res, next) => {
        const error = Error('Not Found');
        error.status = 404;
        next(error);
    });

    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message
            }
        });
    });

    return app;
}
