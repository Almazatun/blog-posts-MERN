const express = require('express')
const router = express.Router()
const Quote = require('../models/Quotes')

//Get all routes
router.get('/', async (req, res) => {
    const quotes = await Quote.find()

    res.json(quotes)
})

//Create new quote
router.post('/new', async (req, res) => {

    const {content, author} = req.body
    //console.log("REQ_BODY", req.body)

    const newQuote = new Quote({
        content: content,
        author: author
    })

    const saveQuote = await newQuote.save()

    res.json(saveQuote)
})

//Get specific quote
router.get('/get/:id', async (req, res) => {

    const quote = await Quote.findById({_id: req.params.id})

    res.json(quote)
})

//Delete a quote
router.delete('/delete/:id', async (req, res) => {

    const result = await Quote.findByIdAndDelete({_id: req.params.id})

    res.json(result)
})

//Update a quote
router.patch('/update/:id', async (req, res) => {
    const quote = await Quote.updateOne({_id: req.params.id}, {$set: req.body})

    res.json(quote)
})

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