import { Link } from "react-router-dom";

export default function Dashboard({ stocks }) {
  return (
    <div>
      {stocks.map((stock) => {
        const { name, symbol } = stock;
        return (
          <Link key={symbol} className={symbol} to={`/stock/${symbol}`}>
            <h2>{name}</h2>
            <p>{symbol}</p>
          </Link>
        );
      })}
    </div>
  );
}
