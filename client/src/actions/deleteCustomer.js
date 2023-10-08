import axios from "axios";
import host from "../host";
const deleteCustomer = async (customerId) => {
  try {
    const response = await axios.delete(
      `${host.backendUrl} + ${host.apiRoutes}/${customerId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
};
export default deleteCustomer;
