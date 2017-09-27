export const api = (app) => {
  app.get('/api', function(req, res) {
    res.status(200).send('Hello world');
  });
};
