const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname+ '/db.json')
const db = low(adapter)

db.defaults({ records: [] }).write()

module.exports = db