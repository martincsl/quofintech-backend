const express = require ('express');

const routes = express.Router();
const connection = require ('./database/connection');

const MessagesController = require ('./controllers/MessagesController');
const SponsorController = require ('./controllers/SponsorController');
const UsersController = require ('./controllers/UsersController');
const SessionController = require ('./controllers/SessionController');
const CustomerController = require ('./controllers/CustomerController');
const LoanController = require ('./controllers/LoanController');
const CompanyController = require ('./controllers/CompanyController');
const ProfileController = require ('./controllers/ProfileController');

routes.get ('/messages', MessagesController.index);
routes.post ('/messages', MessagesController.create);

routes.get ('/sponsors', SponsorController.index);
routes.post ('/sponsors', SponsorController.create);

routes.get ('/users', UsersController.index);
routes.post ('/users', UsersController.create);

routes.post ('/sessions',SessionController.create);

routes.get ('/customers', CustomerController.getcustomer);
routes.put ('/customers', CustomerController.update);
routes.post ('/customers', CustomerController.create);

routes.get ('/loans', LoanController.index);
routes.post ('/loans', LoanController.create);

routes.get ('/companies', CompanyController.getcompany);
routes.put ('/companies', CompanyController.update);
routes.post ('/companies', CompanyController.create);

routes.get ('/profile', ProfileController.index);
routes.delete ('/profile/:id', ProfileController.delete);
module.exports = routes;