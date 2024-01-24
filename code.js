'use strict';

const axios = require("axios");
const url   = "https://storage.cloud.google.com/searce-bot-holidays-info/searcebot.json"


function verifyWebhook (body) {
  if (!body || body.token !== "--YOUR_VERIFICATION_TOKEN--") {
    const error = new Error('Invalid credentials');
    error.code = 401;
    throw error;
  }
}


function createMessage(query, response) {
  var HEADER = {
    "title": "I received (" + query + ")"
  };

  return {
    "cards": [{
      "header": HEADER,
      "sections": [{
         "widgets": [{
           "textParagraph": {
             "text": response
           }
         }]
      }]
    }]
  };
}

function makeRequest (query) {
  
  return new Promise((resolve,reject) => {
    axios.get(url).then(response => {
      // Return a formatted message
      resolve(createMessage(query,response.data.input[query].list));
    })
    .catch(error => {    
      console.log(error); 
      reject(error);
      return;
    });

  });
  
}

exports.searcebot = (req, res) => {
  return Promise.resolve()
    .then(() => {
      //If the request method is not POST, reject the call
      if (req.method !== 'POST') {
        const error = new Error('Only POST requests are accepted');
        error.code = 405;
        throw error;
      }
    
      // Verify that this request came from Hangouts Chat API
  //    verifyWebhook(req.body);
    
      // Make the request to the Coinbase API
      return makeRequest(req.body.message.text);
    })
    .then((response) => {
      // Send the formatted message back to Hangouts Chat 
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(err.code || 500).send(err);
      return Promise.reject(err);
    });
};
