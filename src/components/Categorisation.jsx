import data from '../assets/values.json';
import { useState, useContext } from 'react';
import { CategoriesContext } from '../contexts/CategoryContext';
import { useNavigate } from 'react-router-dom';

function Categorisation() {
    const entries = Object.entries(data);
    const totalValues = entries.length;
    const navigate = useNavigate();

    const [isFinished, setIsFinished] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Access context to use the `addToCategory` function
    const { addToCategory } = useContext(CategoriesContext);
  
    const handleCategorySelection = (category) => {
      const currentValue = entries[currentIndex][0]; // Get the current value (key)
  
      // Add the value to the selected category
      addToCategory(category, currentValue);
  
      // Move to the next value
      if (currentIndex < totalValues - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsFinished(true)
      }
    };

    const handleNavigateToResults = () => {
      navigate('/resultats');
    }

    // Get the current value and definition
    const [currentKey, currentDefinition] = entries[currentIndex];

    return (
        <div className='text-white flex flex-col items-center mt-6'>
            <div className='m-3'>
                <p>{currentIndex + 1} / {totalValues}</p>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4 shadow-inner max-w-md w-72 h-40 pb-6">
                <h2 className='mb-3 font-bold'>{currentKey}</h2>
                <p className='text-center'>{currentDefinition}</p>
            </div>
            {!isFinished && (
            <div className='mt-3 whitespace-nowrap'>
                <button onClick={() => handleCategorySelection('category1')} className='mx-3 shadow-lg bg-red-900 rounded-md px-2 hover:bg-red-950 hover:bg-opacity-95'>Pas important</button>
                <button onClick={() => handleCategorySelection('category2')} className='mx-3 shadow-lg bg-green-800 rounded-md px-2 hover:bg-green-900 hover:bg-opacity-95'>Important</button>
                <button onClick={() => handleCategorySelection('category3')} className='mx-3 shadow-lg bg-green-600 rounded-md px-2 hover:bg-green-900 hover:bg-opacity-95'>Très Important</button>
            </div>
          )}
            {isFinished && (
                      <button onClick={handleNavigateToResults} className="bg-slate-600 bg-opacity-80 mt-6 px-3 py-1 rounded-2xl hover:bg-slate-100 hover:bg-opacity-65 shadow-lg">Accéder aux résultats</button>
                    
            )}
        </div>
    )
}

export default Categorisation