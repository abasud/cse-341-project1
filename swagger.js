/* eslint-disable no-undef */
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts App',
    description: 'Automatic documentation for Project1 - CSE 341',
  },
  host: 'localhost:3000', 
  schemes: ['http'],
}

const outputFile = './swagger.json'; 

const routes = ['./server.js']; 

swaggerAutogen(outputFile, routes, doc);