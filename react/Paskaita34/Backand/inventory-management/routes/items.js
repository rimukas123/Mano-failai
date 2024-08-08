const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Item = require('../models/Item');

const itemSchema = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required()
});

router.get('/', async (req, res) => {
    const sortField = req.query.sortBy || 'name';
    const items = await Item.find().sort({ [sortField]: 1 });
    res.json(items);
});

router.post('/', async (req, res) => {
    try {
        const { error } = itemSchema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let item = new Item(req.body);
        item = await item.save();
        res.send(item);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { error } = itemSchema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).send('Item not found');
        res.send(item);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndRemove(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        res.send(item);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
