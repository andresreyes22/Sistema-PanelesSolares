import { useState, useEffect } from 'react';
import { api } from '../api/axios';
import type { Service } from '../../types';

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/services');
        setServices(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Error fetching services');
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, isLoading, error };
}