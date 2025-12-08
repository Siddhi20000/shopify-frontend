import { useState } from "react";

const ProfilePage = () => {
  const userData = {
    name: "Priya",
    email: "priya123@gmail.com",
    phone: "9876543210",
  };

  const [addresses, setAddresses] = useState([
    { id: 1, title: "Home", details: "123, MG Road, Delhi" },
    { id: 2, title: "Office", details: "Tech Park, Bengaluru" },
  ]);

  const [newAddress, setNewAddress] = useState("");

  const orderHistory = [
    { id: "ORD-1001", product: "Women Winter Jacket", date: "12 Nov 2025", amount: "₹1499" },
    { id: "ORD-1002", product: "Men Sneakers", date: "20 Oct 2025", amount: "₹1999" },
  ];

  // ---------- ADDRESS ACTIONS ----------
  const addAddress = () => {
    if (newAddress.trim() === "") return;

    setAddresses([
      ...addresses,
      {
        id: Date.now(),
        title: "New Address",
        details: newAddress,
      },
    ]);

    setNewAddress("");
  };

  const deleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="container p-4">
      <h2 className="mb-4">My Profile</h2>

      <div className="card p-3 mb-4">
        <h4>User Information</h4>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
      </div>


      <div className="card p-3 mb-4">
        <h4>My Addresses</h4>

        {addresses.map((addr) => (
          <div key={addr.id} className="border p-2 mb-2 d-flex justify-content-between">
            <div>
              <strong>{addr.title}</strong>
              <p className="m-0">{addr.details}</p>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteAddress(addr.id)}
            >
              Delete
            </button>
          </div>
        ))}

        {/* ADD NEW ADDRESS */}
        <div className="mt-3 d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Add New Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addAddress}>
            Add
          </button>
        </div>
      </div>

      {/* ORDER HISTORY */}
      <div className="card p-3 mb-4">
        <h4>Order History</h4>

        {orderHistory.map((order) => (
          <div key={order.id} className="border p-2 mb-2">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Product:</strong> {order.product}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Amount:</strong> {order.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;




