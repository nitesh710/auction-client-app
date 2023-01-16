import { useState } from "react";
import AxiosClient from "../apis/axiosClient";
import { Link, useNavigate  } from "react-router-dom";
import ShowNotification from "../Utils/notifications";

function Sell() {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        quantity: 1
    })

    const handleInput = (event) => {
        let { name, value } = event.target
        if(name == "price" || name == "quantity"){
            value =  value ? parseFloat(value) : 0;
        }
        let updatedValue = {[name]: value};
        setProduct(product => ({
            ...product,
            ...updatedValue
        }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("product", product);
        try {
            let response = await AxiosClient.post("/products", product);
            console.log("response", response);
            if(response && response.data.status == "Success"){
                ShowNotification(response.data.message, "SUCCESS");
            }
        } catch (e) {
            console.log("Error: ", e);
            ShowNotification(e.response.data.message, "FAILED");
        }
        setProduct({name: "", description: "", price: 0, quantity: 1});
    };

    return (
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <div className="card">
            <h5 className="card-header">Sell Product</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter product name"
                    value={product.name}
                    onChange={handleInput}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Enter product description"
                    value={product.description}
                    onChange={handleInput}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="Enter price"
                    value={product.price}
                    onChange={handleInput}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input
                    type="text"
                    className="form-control"
                    name="quantity"
                    placeholder="Enter quantity"
                    value={product.quantity}
                    onChange={handleInput}
                    ></input>
                </div>
                <div className="form-group">
                    <button
                    type="submit"
                    className="px-3 py-1.5 bg-blue-500 border-blue-600 text-white rounded outline outline-offset-2 outline-1"
                    >
                    Sell
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Sell;
