
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

//initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);

//initialize express server
const app = express();
const main = express();

//add the path to receive request and set json as bodyParser to process the body 
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

//initialize the database and the collection 
const db = admin.firestore();
const discountCollection = 'discount';

//get all discount
app.get('/discount', async (req, res) => {
    try {
        const discountQuerySnapshot = await db.collection(discountCollection).get();
        const discounts: any[] = [];
        discountQuerySnapshot.forEach(
            (doc)=>{
                discounts.push({
                    id: doc.id,
                    data:doc.data()
            });
            }
        );
        res.status(200).json(discounts);
    } catch (error) {
        res.status(500).send(error);
    }
});

//get a single discount by ID scanning in QRCode
app.get('/discount/:Id', (req,res) => {

    const discountId = req.params.Id; 
    db.collection(discountCollection).doc(discountId).get()
    .then(discount => {
        if(!discount.exists) throw new Error('discount not found');
        res.status(200).json({id:discount.id, data:discount.data()})})
    .catch(error => res.status(500).send(error));
        
});
//define google cloud function name
export const webApi = functions.https.onRequest(main);
