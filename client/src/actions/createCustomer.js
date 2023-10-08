import axios from "axios";
import host from "../host";

const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(
      host.backendUrl + host.apiRoutes,
      customerData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating customer:", error);
  }
};

export default createCustomer;
