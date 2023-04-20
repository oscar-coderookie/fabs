const functions = require("firebase-functions");
const cookieParser = require('cookie-parser')();

exports.exampleFunction = functions.https.onRequest((req, res) => {
    // Parsea las cookies de la solicitud utilizando cookie-parser
    cookieParser(req, res, () => {
      // Establece la cookie con la opción SameSite configurada en "strict"
      res.cookie('cookie_name', 'cookie_value', { sameSite: 'strict' });
  
      // Envía una respuesta
      res.send('Cookie establecida correctamente');
    });
  });

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
