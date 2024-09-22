import TopValues from '../components/TopValues'
import { CategoriesProvider } from '../contexts/CategoryContext'

function TopValuesPage() {
    return (
        <CategoriesProvider>
            <TopValues />
        </CategoriesProvider>
    )
}

export default TopValuesPage