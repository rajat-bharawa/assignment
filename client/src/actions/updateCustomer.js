import axios from "axios";
import host from "../host";

const updateCustomer = async (customerId, updatedData) => {
  try {
    const response = await axios.put(
      `${host.backendUrl} + ${host.apiRoutes}/${customerId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
  }
};
export default updateCustomer;
