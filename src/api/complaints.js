import api from './config';

export const complaintsAPI = {
  getComplaints: async () => {
    try {
      const { data } = await api.get('/complaints');
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch complaints');
    }
  },

  getComplaintById: async (id) => {
    try {
      const { data } = await api.get(`/complaints/${id}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch complaint');
    }
  },

  createComplaint: async (complaintData) => {
    try {
      const { data } = await api.post('/complaints', complaintData);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create complaint');
    }
  },

  updateComplaint: async (id, updateData) => {
    try {
      const { data } = await api.put(`/complaints/${id}`, updateData);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update complaint');
    }
  },

  deleteComplaint: async (id) => {
    try {
      const { data } = await api.delete(`/complaints/${id}`);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete complaint');
    }
  }
};
