const express = require('express');
const wikiRouter = express.Router();
const { Page } = require('../models');
const { main, addPage, editPage } = require('../views');

wikiRouter.get('/', async (req, res, next) => {
  try{
    console.log('hello from / get')
    const pages = await Page.findAll();
    res.send(main(pages));
  }catch(error){next(error)}
})

wikiRouter.get('/add', (req, res, next) => {
  try{
  const page = addPage();
  res.send(page);
  }catch(error){next(error)}
})

wikiRouter.post('/', async (req, res, next) => {
  try{
    console.log('hello from / post')
  }catch(error){next(error)}
})

module.exports = wikiRouter;
