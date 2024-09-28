import axios from 'axios';

const API_BASE_URL = 'https://bookissuebackend.onrender.com'; // Adjust the base URL accordingly

// API calls
export const getBooksByName = (name: string) =>
  axios.get(`${API_BASE_URL}/api/books/search/name?name=${name}`);

export const getBooksByRentRange = (minRent: number, maxRent: number) =>
  axios.get(`${API_BASE_URL}/api/books/search/rent?minRent=${minRent}&maxRent=${maxRent}`);

export const getBooksByCategoryAndRent = (category: string, term: string, minRent: number, maxRent: number) =>
  axios.get(`${API_BASE_URL}/api/books/search/category-rent?category=${category}&term=${term}&minRent=${minRent}&maxRent=${maxRent}`);

export const getAllUsers = () =>
  axios.get(`${API_BASE_URL}/api/books/allUsers`);

export const getAllBooks = () =>
  axios.get(`${API_BASE_URL}/api/books/allBooks`);

export const issueBook = (bookName: string, userName: string, issueDate: string) =>
  axios.post(`${API_BASE_URL}/api/transactions/issue`, { bookName, userName, issueDate });

export const returnBook = (bookName: string, userName: string, returnDate: string) =>
  axios.post(`${API_BASE_URL}/api/transactions/return`, { bookName, userName, returnDate });

export const getBookIssuers = (bookName: string) =>
  axios.get(`${API_BASE_URL}/api/transactions/issuers?bookName=${bookName}`);

export const getTotalRentGenerated = (bookName: string) =>
  axios.get(`${API_BASE_URL}/api/transactions/rent?bookName=${bookName}`);

export const getUserIssuedBooks = (username: string) =>
  axios.get(`${API_BASE_URL}/api/transactions/userBooks?username=${username}`);

export const getBooksIssuedInDateRange = (startDate: string, endDate: string) =>
  axios.get(`${API_BASE_URL}/api/transactions/dateRange?startDate=${startDate}&endDate=${endDate}`);
