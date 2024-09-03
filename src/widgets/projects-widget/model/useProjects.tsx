import axios from 'axios';
import { useEffect, useState } from 'react';
import { neededProjectsSearch } from '../lib/neededProjectsSearch';

export const useProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const neededProjectsIds = [742777438, 651871385];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await axios.get(`/api/githubprojects?t=${new Date().getTime()}`);
        setProjects(neededProjectsSearch(result.data, neededProjectsIds));
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
