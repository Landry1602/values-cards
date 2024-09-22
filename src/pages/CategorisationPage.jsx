import Categorisation from "../components/Categorisation";
import { CategoriesProvider } from "../contexts/CategoryContext";

function CategorisationPage() {
    return(
        <CategoriesProvider>
        <Categorisation/>
        </CategoriesProvider>
    )
}

export default CategorisationPage