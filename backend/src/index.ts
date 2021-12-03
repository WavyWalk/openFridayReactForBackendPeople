import express from 'express'
import cors from 'cors'
import {getAllProductsHandler, getProductHandler} from "./productHandlers";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())

// app.get('/products/:productId', getProductHandler)
//
// app.get('/products', getAllProductsHandler)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});