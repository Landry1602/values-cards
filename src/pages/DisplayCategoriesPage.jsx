import DisplayCategories from "../components/DisplayCategories";
import { CategoriesProvider } from "../contexts/CategoryContext";

function DisplayCategoriesPage() {
    return(
        <CategoriesProvider>
        <DisplayCategories/>
        </CategoriesProvider>
    )
}

export default DisplayCategoriesPage
