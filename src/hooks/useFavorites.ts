import { useState, useEffect } from 'react';

// Custom hook for managing favorites
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('esi_favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('esi_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite status for a resource
  const toggleFavorite = (resourceId: string) => {
    setFavorites(prev => {
      if (prev.includes(resourceId)) {
        return prev.filter(id => id !== resourceId);
      } else {
        return [...prev, resourceId];
      }
    });
  };

  // Check if a resource is favorited
  const isFavorite = (resourceId: string) => {
    return favorites.includes(resourceId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
};