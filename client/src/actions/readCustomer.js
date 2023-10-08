import axios from "axios";
import host from "../host";
const getCustomers = async () => {
  try {
    const response = await axios.get(host.backendUrl + host.apiRoutes);
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
};

export default getCustomers;
