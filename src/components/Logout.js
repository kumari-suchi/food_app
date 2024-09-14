import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-8">
                <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">You are logged in!</h2>
                    <p className="text-gray-600 mb-6">Ready to leave? Click the button below to sign out.</p>
                    <button
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white shadow-md font-semibold text-lg transition-transform transform hover:scale-105 hover:from-teal-500 hover:via-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        )
    );
};

export default Logout;
