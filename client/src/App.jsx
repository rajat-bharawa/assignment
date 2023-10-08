import { useState, useEffect } from "react";
import axios from "axios";
import host from "./host";
function App() {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    dateOfBirth: "",
  });

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        host.backendUrl + host.apiRoutes.customer
      );
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const addCustomer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        host.backendUrl + host.apiRoutes.customer,
        newCustomer
      );
      setCustomers([...customers, response.data]);
      setNewCustomer({
        name: "",
        email: "",
        address: "",
        phone: "",
        dateOfBirth: "",
      });
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      console.log(`${host.backendUrl}${host.apiRoutes.customer}/${id}`);
      await axios.delete(`${host.backendUrl}${host.apiRoutes.customer}/${id}`);
      setCustomers(customers.filter((customer) => customer._id !== id));
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  console.log("thisiscustomer", customers);
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Customer List</h1>
      <ul className="space-y-4">
        {customers.map((customer) => (
          <li
            key={customer._id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">{customer.name}</p>
                <p className="text-gray-600">{customer.email}</p>
              </div>
              <button
                onClick={() => deleteCustomer(customer._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add Customer</h2>
        <form>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-700 text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                required
                id="name"
                placeholder="John Doe"
                value={newCustomer.name}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, name: e.target.value })
                }
                className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                value={newCustomer.email}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, email: e.target.value })
                }
                className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="text-gray-700 text-sm font-semibold mb-2"
              >
                Address
              </label>
              <input
                required
                type="text"
                id="address"
                placeholder="123 Main St"
                value={newCustomer.address}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, address: e.target.value })
                }
                className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-gray-700 text-sm font-semibold mb-2"
              >
                Phone
              </label>
              <input
                required
                type="text"
                id="phone"
                placeholder="(555) 555-5555"
                value={newCustomer.phone}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, phone: e.target.value })
                }
                className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="dob"
                className="text-gray-700 text-sm font-semibold mb-2"
              >
                Date of Birth
              </label>
              <input
                required
                type="date"
                id="dob"
                value={newCustomer.dateOfBirth}
                onChange={(e) =>
                  setNewCustomer({
                    ...newCustomer,
                    dateOfBirth: e.target.value,
                  })
                }
                className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <button
            onClick={(e) => {
              addCustomer(e);
            }}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
