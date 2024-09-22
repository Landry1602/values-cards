import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoryContext";
import { useNavigate } from "react-router-dom";

function DisplayCategories() {
    // Access the categorized values from context
    const { categories, resetCategories } = useContext(CategoriesContext);
    const navigate = useNavigate();

    const handleNewRun = () => {
        resetCategories();
        navigate('/')
    }

    const handleContinue = () => {
        navigate('/tri-valeurs')
    }

    return (
        <div className="text-white flex flex-col items-center mt-6">
            <h2 className="mb-3 font-bold">Résultats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-900 bg-opacity-60 mt-6 px-3 py-1 rounded-lg shadow-inner">
                    <h3>Pas important:</h3>
                    <ul>
                        {categories.category1.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-green-800 bg-opacity-60 mt-6 px-3 py-1 rounded-lg shadow-inner">
                    <h3>Important:</h3>
                    <ul>
                        {categories.category2.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-green-600 bg-opacity-60 mt-6 px-3 py-1 rounded-lg shadow-inner">
                    <h3>Très important:</h3>
                    <ul>
                        {categories.category3.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex gap-6 mt-6">
                <button onClick={handleNewRun} className="mt-4 bg-slate-600 hover:bg-slate-700 text-white py-2 px-4 rounded">
                    Recommencer
                </button>
                <button onClick={handleContinue} className="mt-4 bg-slate-600 hover:bg-slate-700 text-white py-2 px-4 rounded">
                    Continuer
                </button>
            </div>
        </div>
    );
};

export default DisplayCategories