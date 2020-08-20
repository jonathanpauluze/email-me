import express from 'express';
import SendEmailService from '../services/SendEmailService';

const routes = express.Router();

routes.post('/', (request, response) => {
  const { formData } = request.body;
  const SendEmail = new SendEmailService();

  const email = SendEmail.execute({ formData });

  response.json(email);
})

export default routes;
