import { fetchData, postData, updateData, deleteData } from '../utils/api';

export const dataService = {
  getUsers: async () => {
    return await fetchData('/users');
  },

  getUserById: async (id) => {
    return await fetchData(`/users/${id}`);
  },

  createUser: async (userData) => {
    return await postData('/users', userData);
  },

  updateUser: async (id, userData) => {
    return await updateData(`/users/${id}`, userData);
  },

  deleteUser: async (id) => {
    return await deleteData(`/users/${id}`);
  },

  getPosts: async () => {
    return await fetchData('/posts');
  },

  getPostById: async (id) => {
    return await fetchData(`/posts/${id}`);
  },

  createPost: async (postData) => {
    return await postData('/posts', postData);
  },

  updatePost: async (id, postData) => {
    return await updateData(`/posts/${id}`, postData);
  },

  deletePost: async (id) => {
    return await deleteData(`/posts/${id}`);
  },

  getComments: async () => {
    return await fetchData('/comments');
  },

  getCommentById: async (id) => {
    return await fetchData(`/comments/${id}`);
  },

  createComment: async (commentData) => {
    return await postData('/comments', commentData);
  },
};
