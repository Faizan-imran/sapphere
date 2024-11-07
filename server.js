import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready');
});
app.get('/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: ' A joke',
      content: 'this is joke'
    },
    {
      id: 2,
      title: ' Second joke',
      content: 'this is another joke'
    },
    {
      id: 3,
      title: ' third joke',
      content: 'this is also another joke'
    },
    {
      id: 4,
      title: ' fourt joke',
      content: 'this is fourth joke'
    },
    {
      id: 5,
      title: ' fifth A joke',
      content: 'this is also joke'
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  // Use backticks for template literals
  console.log(`Serve at http://localhost:${port}`);

});