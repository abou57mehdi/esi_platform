import { useState, useEffect } from 'react';

// Custom hook for managing progress tracking
export const useProgress = () => {
  const [progress, setProgress] = useState<{[key: string]: boolean}>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('esi_progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('esi_progress', JSON.stringify(progress));
  }, [progress]);

  // Mark a resource as viewed/completed
  const markAsCompleted = (resourceId: string) => {
    setProgress(prev => ({
      ...prev,
      [resourceId]: true
    }));
  };

  // Check if a resource has been completed
  const isCompleted = (resourceId: string) => {
    return !!progress[resourceId];
  };

  // Get progress percentage for a semester
  const getProgress = (semester: number) => {
    // This would need to be connected to the actual modules data
    // For now, returning a placeholder implementation
    const semesterKeys = Object.keys(progress).filter(key => 
      key.startsWith(`semester-${semester}`)
    );
    
    const completedCount = semesterKeys.filter(key => progress[key]).length;
    const totalCount = semesterKeys.length;
    
    return totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  };

  return {
    progress,
    markAsCompleted,
    isCompleted,
    getProgress
  };
};