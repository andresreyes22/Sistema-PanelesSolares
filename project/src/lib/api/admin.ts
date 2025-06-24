import { api } from './axios';
import type { Content } from '../../types';

export const adminApi = {
  updateContent: async (id: string, content: Partial<Content>) => {
    const response = await api.put(`/content/${id}`, content);
    return response.data;
  },

  createContent: async (content: Omit<Content, 'id'>) => {
    const response = await api.post('/content', content);
    return response.data;
  },

  deleteContent: async (id: string) => {
    const response = await api.delete(`/content/${id}`);
    return response.data;
  }
};