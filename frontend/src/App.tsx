import React from 'react';
import './App.css';
import {Button} from "@mui/material";
import {fetchProductById} from "./product/client/productClient";

function App() {
  return (
    <div>
      <Button variant={"contained"} onClick={async () => {
          const product = await fetchProductById('1')
          console.log(product)
      }}>
        hello world!
      </Button>
    </div>
  );
}

export default App;
