import React from 'react';
import BookList from './components/BookList';
import UserList from './components/UserList';
import IssuedBooks from './components/IssuedBooks';
import SearchBook from './components/SearchBooks';
import RentDetails from './components/RentDetails';
import IssueBook from './components/IssueBook';
import ReturnBook from './components/ReturnBook';
import BookIssuers from './components/BookIssuers';
import TotalRentGenerated from './components/TotalRentGenerated';
import UserIssuedBooks from './components/UserIssuedBooks';

const App: React.FC = () => {
  return (
    <div className="App min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Books and their Issuers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <BookList />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <UserList />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <SearchBook />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <IssuedBooks />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <RentDetails />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <IssueBook />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ReturnBook />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <BookIssuers />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <TotalRentGenerated />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <UserIssuedBooks />
        </div>
      </div>
    </div>
  );
};

export default App;
