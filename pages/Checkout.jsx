import { useState } from "react";

const Checkout = () => {
  // Saved addresses (temporary static data)
  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      name: "Priyannshi Sharma",
      phone: "9876543210",
      address: "12 MG Road, Andheri",
      city: "Mumbai",
      pincode: "400001",
      state: "Maharashtra",
    },
    {
      id: 2,
      name: "Office Address",
      phone: "9988776655",
      address: "22 Tech Park Street",
      city: "Pune",
      pincode: "411001",
      state: "Maharashtra",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // New address data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    state: ""
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveAddress = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode ||
      !formData.state
    ) {
      alert("Please fill all fields");
      return;
    }

    const newAddress = {
      id: savedAddresses.length + 1,
      ...formData,
    };

    setSavedAddresses([...savedAddresses, newAddress]);
    setShowForm(false);
    setFormData({
      name: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
      state: ""
    });
  };

  const placeOrder = () => {
    if (!selectedAddress) {
      alert("Please select an address before placing order");
      return;
    }
    alert("Order Placed Successfully!");
  };

  return (
    <div className="container my-4">
      <h2 className="mb-3">Checkout</h2>

      <div className="row">
        {/* LEFT SIDE: ADDRESS SELECTION */}
        <div className="col-md-8">
          <div className="card p-3 mb-3">
            <h5>Saved Addresses</h5>
            {savedAddresses.map((addr) => (
              <div
                key={addr.id}
                className="border p-2 my-2 rounded d-flex align-items-start"
              >
                <input
                  type="radio"
                  name="address"
                  className="mt-1 me-2"
                  onChange={() => setSelectedAddress(addr.id)}
                />
                <div>
                  <strong>{addr.name}</strong> ({addr.phone})  
                  <br />
                  {addr.address}, {addr.city} - {addr.pincode}  
                  <br />
                  {addr.state}
                </div>
              </div>
            ))}

            <button
              className="btn btn-dark mt-2"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Close Form" : "+ Add New Address"}
            </button>
          </div>

          {/* NEW ADDRESS FORM */}
          {showForm && (
            <div className="card p-3 mb-4">
              <h5>Add New Address</h5>

              <div className="row">
                <div className="col-md-6">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-md-6">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-12 mt-2">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-md-4 mt-2">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-md-4 mt-2">
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    className="form-control"
                    value={formData.pincode}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-md-4 mt-2">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    value={formData.state}
                    onChange={handleInput}
                  />
                </div>

                <button
                  className="btn btn-success mt-3 w-100"
                  onClick={saveAddress}
                >
                  Save Address
                </button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: ORDER SUMMARY */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Order Summary</h5>
            <p>Items: ₹1500</p>
            <p>Delivery: ₹40</p>
            <hr />
            <h6>Total: ₹1540</h6>

            <button
              className="btn btn-primary mt-3 w-100"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

