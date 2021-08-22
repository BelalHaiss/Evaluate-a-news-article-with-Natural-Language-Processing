require('dotenv').config();
const axios = require('axios');

const express = require('express');
const app = express();
const mockAPIResponse = require('./mockAPI.js');
const path = require('path');
const PORT = 8081;

const cors = require('cors');
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
  // res.sendFile(path.resole('src/client/views/index.html'));
});
app.post('/add-url', async (req, res) => {
  const { url } = req.body;
  try {
    const data = await axios.post(
      `http://api.meaningcloud.com/summarization-1.0?key=${process.env.APIKEY}&url=${url}&sentences=5`
    );

    res.json({ data: data.data.summary });
  } catch (error) {
    res.status(500).json({ message: 'Error with the request' });
  }
});
/* TODO:

    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});

// TODO: export app to use it in the unit testing
