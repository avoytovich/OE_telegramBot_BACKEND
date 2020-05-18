require('dotenv').config();

module.exports = {
  key: process.env.JWT_SECRET_KEY,
  refreshKey: process.env.JWT_SECRET_REFRESH,
};
