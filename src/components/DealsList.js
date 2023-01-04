import { Link } from "react-router-dom";
import Deal from "./Deal";

function DealsList() {
  let dealsList = [
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 3, name: "name3" },
    { id: 4, name: "name4" },
    { id: 5, name: "name5" }
  ];
  let renderedDealsList = dealsList.map((deal) => {
    return (
      <li className="mr-4 md:mr-6" key={deal.id}>
        <Deal deal={deal} />
      </li>
    );
  });
  return (
    <div>
      <div className="deal-card">
        <h2 className="text-xl text-gray-900 font-bold">Top Deals</h2>
        <ul className="flex flex-wrap items-center justify-center mb-6 text-grey">
          {renderedDealsList}
        </ul>
      </div>
      <div>
        <p className="mt-2" style={{ color: "#ff7f00f0" }}>
          Want to sell your prodcuts, please click to{" "}
          <Link to="/sell" className="text-white">
            Sell
          </Link>{" "}
          here
        </p>
      </div>
    </div>
  );
}

export default DealsList;
