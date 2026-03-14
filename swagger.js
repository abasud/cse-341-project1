/* eslint-disable no-undef */
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts App',
    description: 'Automatic documentation for Project1 - CSE 341',
  },

  host: 'cse-341-project1-dj2a.onrender.com', 
  schemes: ['https'],
};

const outputFile = './swagger.json'; 

const routes = ['./server.js']; 

swaggerAutogen(outputFile, routes, doc);