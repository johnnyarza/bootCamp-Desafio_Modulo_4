import express from 'express';
import controller from '../controllers/gradeController.js';

const app = express();

app.post('/grade/', controller.create); //ok
app.get('/grade/', controller.findAll); //ok
app.get('/grade/:id', controller.findOne); //ok
app.put('/grade/:id', controller.update); //ok
app.delete('/grade/:id', controller.remove); //ok
app.delete('/grade/', controller.removeAll); // ok

export { app as gradeRouter };
