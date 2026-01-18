import { createContext, useState, useEffect, ReactNode, useContext } from 'react';

interface FiliereContextType {
  selectedFiliere: string | null;
  setFiliere: (filiereId: string) => void;
  clearFiliere: () => void;
}

export const FiliereContext = createContext<FiliereContextType | undefined>(undefined);

interface FiliereProviderProps {
  children: ReactNode;
}

export const FiliereProvider = ({ children }: FiliereProviderProps) => {
  const [selectedFiliere, setSelectedFiliere] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('esi_selected_filiere');
    if (saved) {
      setSelectedFiliere(saved);
    }
  }, []);

  // Save to localStorage when changed
  const setFiliere = (filiereId: string) => {
    setSelectedFiliere(filiereId);
    localStorage.setItem('esi_selected_filiere', filiereId);
  };

  const clearFiliere = () => {
    setSelectedFiliere(null);
    localStorage.removeItem('esi_selected_filiere');
  };

  return (
    <FiliereContext.Provider value={{
      selectedFiliere,
      setFiliere,
      clearFiliere
    }}>
      {children}
    </FiliereContext.Provider>
  );
};

// Custom hook to use the FiliereContext
export const useFiliereContext = () => {
  const context = useContext(FiliereContext);
  if (!context) {
    throw new Error('useFiliereContext must be used within FiliereProvider');
  }
  return context;
};