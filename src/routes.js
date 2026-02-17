const authRoutes = require('@routes/authRoutes');
const notificationRoutes = require('@routes/notificationRoutes');
const contentRoute = require('@routes/contentRoute');

module.exports = (app) => {
  app.use('/auth', authRoutes);
  app.use('/notification', notificationRoutes);
  app.use('/content', contentRoute);
};
