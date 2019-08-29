const knex = require('knex')

const db = require('../data/db-config')

module.exports = knex(config.development)