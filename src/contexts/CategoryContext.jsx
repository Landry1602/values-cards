import { createContext, useState, useEffect } from 'react';

// Create the context
export const CategoriesContext = createContext();

// Create a provider component
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => {
    // Load categories from local storage or initialize with empty arrays
    const storedCategories = localStorage.getItem('categories');
    return storedCategories ? JSON.parse(storedCategories) : { category1: [], category2: [], category3: [] };
  });

  useEffect(() => {
    // Fetch categories from local storage
    const storedCategories = localStorage.getItem("categories");
    if (storedCategories) {
        setCategories(JSON.parse(storedCategories));
    }
}, []);

  // Function to add a value to a category
  const addToCategory = (category, value) => {
    setCategories(prevCategories => {
      const updatedCategories = {
        ...prevCategories,
        [category]: [...prevCategories[category], value]
      };
      // Save updated categories to local storage
      localStorage.setItem('categories', JSON.stringify(updatedCategories));
      return updatedCategories;
    });
  };

  const resetCategories = () => {
    setCategories({ category1: [], category2: [], category3: [] });
    localStorage.removeItem('categories');
  };

  return (
    <CategoriesContext.Provider value={{ categories, addToCategory, setCategories, resetCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
