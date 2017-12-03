'use strict'

module.exports = {
	port: process.env.PORT || 3000,
	// db:  process.env.PORT || 'mongodb://localhost:27017/alibrate_db',
	db: process.env.PORT || 'mongodb://admin:admin123456@ds115396.mlab.com:15396/alibrate_db',
	user_db: "admin",
	db_pass: "admin123456"
}