import { useNavigate} from "react-router-dom"
import { CategoriesContext } from "../contexts/CategoryContext";
import { useContext } from "react";

function Start() {
    const navigate = useNavigate();
    const { resetCategories } = useContext(CategoriesContext);


    const handleClick = () => {
        resetCategories()
        navigate('/app')
    }

    return (
        <div className="flex flex-col items-center">
            <div className="text-white text-justify flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4 shadow-inner">
                <h2 className="pb-2">Fonctionnement:</h2>
                <p>Des valeurs personnelles seront affichées à l&apos;écran avec leur définition.</p>
                <div className="my-2 flex flex-col items-center">
                    <p>Il faut les classer dans l&apos;une des trois catégories:</p>
                    <ul>
                        <li>- Pas importante à mes yeux</li>
                        <li>- Importante à mes yeux</li>
                        <li>- Très importante à mes yeux</li>
                    </ul>
                </div>
                <p className="my-3">Un bilan de ces trois catégories sera proposé.</p>
                <p>Il s&apos;agira enfin de choisir les 10 valeurs les plus importantes parmis la liste des valeurs très importantes.</p>
                <button onClick={handleClick} className="bg-slate-600 bg-opacity-80 mt-6 px-3 py-1 rounded-2xl hover:bg-slate-100 hover:bg-opacity-65 shadow-lg">Commencer</button>
            </div>
        </div>
    )
}

export default Start