var crypto = require("crypto");

module.exports = {
  numberwang: function(number) {
    number = String(number);
    let md5sum = crypto.createHash("md5");
    md5sum.update(number);
    let hash = md5sum.digest('hex');
    if (hash.substring(0, 1) === "0") {
      return true;
    }
    return false;
  }
};
