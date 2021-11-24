const bcrypt = require('bcrypt');

module.exports = {
    hash : (pass) => bcrypt.hash(pass, 10),
    verify : (pass, savedPass) => bcrypt.compare(pass, savedPass)
}