import mongoose from 'mongoose';
import studentModel from './studentModel.js';

const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@cluster0.oonph.mongodb.net/grades?retryWrites=true&w=majority`;
db.student = studentModel(mongoose);

export { db };
