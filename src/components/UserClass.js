import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/kumari-suchi");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <img 
                    src={avatar_url} 
                    alt="Avatar" 
                    className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Name: {name}</h2>
                <h3 className="text-lg text-gray-600 mb-4">Location: {location}</h3>
                <h4 className="text-md text-blue-600">Contact: @kumari-suchi</h4>
            </div>
        );
    }
}

export default UserClass;
