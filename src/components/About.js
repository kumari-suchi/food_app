import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    render() {
        return (
            <div className="bg-gray-50 min-h-screen flex flex-col">
                {/* Hero Section */}
                <header className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 w-full py-32 text-center text-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-5xl font-extrabold mb-4 leading-tight">
                            Welcome to Taste Treasures!
                        </h2>
                        <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">
                            Dive into an unforgettable culinary experience at Taste Treasures. From mouthwatering dishes 
                            crafted with the finest ingredients to exceptional service in a cozy ambiance, we promise to make 
                            every visit a delightful adventure. Join us and indulge in the art of Taste Treasures dining.
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex flex-col items-center my-12 px-4">
                    <section className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full lg:w-3/4 mx-auto transform transition-transform hover:scale-105 duration-300">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h3>
                        <UserClass />
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-orange-600 text-white py-4 w-full text-center">
                    <p className="text-sm">&copy; 2024 Taste Treasures. All rights reserved.</p>
                </footer>
            </div>
        );
    }
}

export default About;
