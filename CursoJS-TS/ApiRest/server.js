import app from './app.js';

app.listen(3333, '0.0.0.0', () => {
  console.log('Server is running on http://0.0.0.0:3333');
  console.log('Acesse via: http://192.168.18.192:3333');
});
