const { Pool } = require('pg');

const config = {
    host: 'ec2-54-159-176-167.compute-1.amazonaws.com',
    port: "5432",
    user: 'wdubdcqfwuzars',
    password:'77a9ed59b8e487d0b7068772d1cee02fcab03d0afef2f2f0a2874959e6593d8b',
    database: 'd2545sl3d2sgsr',
    ssl: {
        rejectUnauthorized: false
    }
}

const pool = new Pool(config)

module.exports = pool;