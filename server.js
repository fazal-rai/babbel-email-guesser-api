import app from './src/index.js';

const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
