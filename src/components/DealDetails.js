import { useParams } from "react-router-dom";

function DealDetails(){
    const { dealId } = useParams();
    console.log("dealId", dealId);
    return <div>Deal Details</div>
}

export default DealDetails;