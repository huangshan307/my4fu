import ExpressConfig from './configuration/ExpressConfig';
import MongooseConfig from './configuration/MongooseConfig';

const app = ExpressConfig();

MongooseConfig();

module.exports = app;
