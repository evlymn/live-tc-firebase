import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const addMensagem = functions.database.
ref('mensagens/{id}').onCreate((snapshot, context) => {
  admin
    .database()
    .ref('mensagens_log/' + snapshot.key)
    .set(snapshot.val()).catch(err=> console.log(err));
});
