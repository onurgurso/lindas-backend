module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '548b63dbdea8c418693c5cc7718c1a7f'),
  },
});
