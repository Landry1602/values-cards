import { useContext, useState } from "react";
import { CategoriesContext } from "../contexts/CategoryContext";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function TopValues() {
    const { categories, resetCategories } = useContext(CategoriesContext);
    const navigate = useNavigate();

    const handleNewRun = () => {
        resetCategories();
        navigate('/');
    };

    const [selectedValues, setSelectedValues] = useState([]);

    // Toggle selection
    const handleToggleSelect = (value) => {
        setSelectedValues(prevSelected =>
            prevSelected.includes(value)
                ? prevSelected.filter(v => v !== value) // Deselect if already selected
                : prevSelected.length < 10 ? [...prevSelected, value] : prevSelected // Select if not selected (limit to 10)
        );
    };

    // Handle reordering
    const handleMoveUp = (index) => {
        if (index > 0) {
            const newOrder = [...selectedValues];
            [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
            setSelectedValues(newOrder);
        }
    };

    const handleMoveDown = (index) => {
        if (index < selectedValues.length - 1) {
            const newOrder = [...selectedValues];
            [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
            setSelectedValues(newOrder);
        }
    };

    return (
        <div className="text-white flex flex-col items-center">
            <h2>Choisir les 10 valeurs les plus importantes</h2>
            <div className="bg-green-600 bg-opacity-60 mt-6 px-3 py-1 rounded-lg shadow-inner">
                <h3>Très important:</h3>
                <ul>
                    {categories.category3.map((value, index) => (
                        <li
                            key={index}
                            onClick={() => handleToggleSelect(value)}
                            className={`cursor-pointer py-1 px-2 ${selectedValues.includes(value) ? 'border border-yellow-300 rounded-md' : ''}`}
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4 flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4 shadow-inner">
                <h3>Top 10</h3>
                <ol className="list-decimal px-3">
                    {selectedValues.map((value, index) => (
                        <li key={index} className="flex justify-between items-center w-full">
                            {value}
                            <div className="flex items-center">
                            <button onClick={() => handleMoveUp(index)} className="ml-2"><IoIosArrowUp /></button>
                            <button onClick={() => handleMoveDown(index)}><IoIosArrowDown /></button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <button onClick={handleNewRun} className="mt-8 bg-slate-600 hover:bg-slate-700 text-white py-2 px-4 rounded">
                Recommencer
            </button>
        </div>
    );
}

export default TopValues;
