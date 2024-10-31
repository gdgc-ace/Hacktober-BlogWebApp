import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="relative flex flex-col items-center justify-center mt-32 bg-white shadow-lg p-10 rounded-lg max-w-3xl w-full">
                <div className="absolute top-0 -left-20 flex items-center">
                    <div className="h-28 w-14 bg-[#ea4335] rounded-md mr-4"></div>
                    <div className="h-14 w-10 bg-[#4285f4] rounded-md"></div>
                </div>
                <div className="absolute top-0 -right-20 flex items-center">
                    <div className="h-14 w-10 bg-[#0f9d58] rounded-md mr-4"></div>
                    <div className="h-28 w-14 bg-[#fbbc04] rounded-md"></div>
                </div>
                <div className="text-center w-full">
                    <h2 className="text-4xl font-bold text-gray-700">Your Profile</h2>
                    <p className="text-gray-500 mb-8 text-lg">Welcome back! View and edit your profile below.</p>
                    <div className="space-y-6 text-left text-lg">
                        <div>
                            <p className="text-gray-600 font-semibold">Username</p>
                            <p className="text-gray-800 text-xl">John Doe</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-semibold">Email</p>
                            <p className="text-gray-800 text-xl">johndoe@example.com</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-semibold">Joined</p>
                            <p className="text-gray-800 text-xl">March 2024</p>
                        </div>
                    </div>
                    <h3 className="mt-10 text-3xl font-semibold text-gray-700">Your Blogs</h3>
                    <div className="space-y-6 mt-6">
                        <div className="p-6 border rounded-lg shadow-sm">
                            <h4 className="text-2xl font-medium text-gray-700">My First Blog Post</h4>
                            <p className="text-gray-500 text-lg">Published on March 1, 2024</p>
                            <Link to="" className="text-blue-500 text-lg">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
