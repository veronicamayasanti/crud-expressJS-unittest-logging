import express from 'express';
import db from '../db.js';
import logger from '../logger.js';
const router = express.Router();

// create
router.post('/', (req, res) => {
    const { name, age } = req.body;
    const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';

    db.query(sql, [name, age], (err, result) => {
        if (err) {
            logger.error(`Error inserting data: ${err}`);
            return res.status(500).send(err);
        }
        logger.info(`user created with id: ${result.insertId}`);
        res.status(201).send(result);
    });
});

// read
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) {
            logger.error(`Error fetching data: ${err}`);
            return res.status(500).send(err);
        } else {
            logger.info('Fetched all users successfully');
            return res.status(200).send(result);
        }    
    });
});

// update
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const sql = 'UPDATE users SET name = ?, age = ? WHERE id = ?';
    db.query(sql, [name, age, id], (err, result) => {
        if (err) {
            logger.error(`Error updating user with id ${id}: ${err}`);
            return res.status(500).send(err);
        }    
        logger.info(`User with id ${id} updated successfully`);
        res.status(200).send(result);
    }); 
});

// delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            logger.error(`Error deleting user with id ${id}: ${err}`);
            return res.status(500).send(err);

        }    
        logger.info(`User with id ${id} deleted successfully`);
        res.status(200).send(result);
    }); 
});

export default router;