import { Link } from "react-router-dom";
import DealDetails from "./DealDetails";

function Deal({ deal }){
    return (
        <div>
            <Link to={`/deals-details/${deal._id}`}>
                <img
                    src={deal.imageUrl}
                    alt="image"
                />
                <div className="flex justify-content-between">
                    <label>{deal.name}</label>
                    <span>${deal.price}</span>
                </div>
            </Link>
        </div>
    );
}

export default Deal;