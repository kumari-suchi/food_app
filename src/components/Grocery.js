import { useAuth0 } from '@auth0/auth0-react';

const Grocery = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Welcome to Grocery App
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Please sign in to access exclusive features and browse our selection.
          </p>
          <button
            onClick={() => loginWithRedirect()}
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white shadow-md font-semibold text-lg transition-transform transform hover:scale-105 hover:from-teal-500 hover:via-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </div>
      </div>
    )
  );
};

export default Grocery;
