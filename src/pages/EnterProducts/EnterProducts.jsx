
import Dashboard from "../../components/DashBoard/DashBoard";

import { getCategoriesAsync } from "../../utils/MockData";
import { importProducts } from "../../firebase/importProducts";

function EnterProducts() {

    return (
        <Dashboard>
            <button onClick={importProducts}>Import primera vez</button>
        </Dashboard>
    )
}
export default EnterProducts;

