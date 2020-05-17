module.exports = {
  TIME_TOKEN: '60s',
  TIME_REFRESH_TOKEN: '2d',

  secret_key: {
    development: require('./../../config/jwt.secretkey.json')['key'],
    production: process.env.JWT_SECRET_KEY,
  },

  secret_refresh: {
    development: require('./../../config/jwt.secretkey.json')['refreshKey'],
    production: process.env.JWT_SECRET_REFRESH,
  },

  mailer_config: {
    development: require('./../../config/mailer.config.json'),
    production: {
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      secure: process.env.MAILER_SECURE,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    },
  },
};
