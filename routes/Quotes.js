const express = require('express')
const router = express.Router()
const Quote = require('../models/Quotes')
const QuotesController = require('../controller/Quotes')

//Get all routes
router.get('/', QuotesController.getQuotes)

//Create new quote
router.post('/new', QuotesController.createQuote)

//Get specific quote
router.get('/get/:id', QuotesController.getSpecificQuote)

//Delete a quote
router.delete('/delete/:id', QuotesController.deleteQuote)

//Update a quote
router.patch('/update/:id', QuotesController.deleteQuote)

//Get random quote
router.get('/random', async (req, res) => {
    const count = await Quote.countDocuments()
    const random = Math.floor(Math.random() * count)
    const quote = await Quote.findOne().skip(random)

    res.json({
        count: count,
        quote: quote
    })
})

module.exports = router