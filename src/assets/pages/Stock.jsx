import React from "react";
import { useParams } from "react-router-dom";
export default function Stock({ stocks }) {
  // Grabbing the stock symbol from the URL Params
  //params is not a string value
  //params is an object with a key value pair whereby the key is 'symbol'
  const params = useParams();

  console.log(params);
  console.log(stocks);

  //filter stocks array of stock objects to get stock objects whereby symbol value matches symbol value of object passed in URL parameter
  const stock = stocks.filter((item) => item.symbol === params.symbol)[0];
  console.log(stock);
  return (
    <div>
      <h3>Name: {stock.name}</h3>
      <h3 className="price">Price: {stock.lastPrice}</h3>
    </div>
  );
}
