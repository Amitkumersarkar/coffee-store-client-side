import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UsersProfile = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const [search, setSearch] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6; // Number of users per page

    // delete user method
    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // delete from database
                fetch(`http://localhost:5500/users/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("Deleted User Successfully", data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                        }
                    })
            }
        });
    }
    // Filtered and sorted users
    const filteredUsers = users
        .filter(
            (user) =>
                user.name?.toLowerCase().includes(search.toLowerCase()) ||
                user.userName?.toLowerCase().includes(search.toLowerCase()) ||
                user.email?.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (!a.name || !b.name) return 0;
            return sortAsc
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });

    // Pagination logic
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Users Profile ({users.length})
            </h2>

            {/* Search & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-4 py-2 border rounded-lg w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={() => setSortAsc(!sortAsc)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                    Sort by Name {sortAsc ? "▲" : "▼"}
                </button>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                <table className="min-w-full text-left border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 font-medium text-gray-600">Name</th>
                            <th className="px-6 py-3 font-medium text-gray-600">Username</th>
                            <th className="px-6 py-3 font-medium text-gray-600">Email</th>
                            <th className="px-6 py-3 font-medium text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-500">
                                    No users found.
                                </td>
                            </tr>
                        ) : (
                            currentUsers.map((user) => (
                                <tr
                                    key={user._id || user.email}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="px-6 py-4">{user.name || "Unknown"}</td>
                                    <td className="px-6 py-4">{user.userName || "-"}</td>
                                    <td className="px-6 py-4">{user.email || "-"}</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <button className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
                                            View
                                        </button>
                                        <button onClick={() => handleDeleteUser(user._id)} className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-6 space-x-2">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(idx + 1)}
                            className={`px-3 py-1 rounded-lg transition ${currentPage === idx + 1
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default UsersProfile;
