const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  password: '12345678',
  host: 'ec2-54-67-20-5.us-west-1.compute.amazonaws.com',	
  database: 'reservations',
  port: 5432
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  release()		
  console.log('connected')	
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
