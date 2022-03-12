module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b90cc4a052aa903dbbb3d234d13894ba'),
  },
});
