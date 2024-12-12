import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/get-all-user")
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching users");
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.address.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        All Users
      </h1>
      <input
        type="text"
        placeholder="Search by name or address..."
        value={search}
        onChange={handleSearch}
        className="w-full p-3 mb-6 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredUsers.map((user) => (
          <div
            key={user._id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={user.photo}
              alt={user.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
            />
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              {user.name}
            </h2>
            <p className="text-gray-600 text-center">{user.email}</p>
            <p className="text-gray-500 text-center mt-2">{user.description}</p>
            <p className="text-gray-400 text-center mt-1">{user.address}</p>
            <p className="text-gray-400 text-center mt-1">{user.hobby}</p>

            <button
              onClick={() => openModal(user)}
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Show Location
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="User Location"
        className="modal-content bg-white p-8 rounded-lg shadow-lg"
        overlayClassName="modal-overlay bg-opacity-50 bg-black"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Location of {selectedUser?.name}
        </h2>
        <MapContainer
          center={["23.2599", "77.4126"]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={["23.2599", "77.4126"]}>
            <Popup>{selectedUser?.address}</Popup>
          </Marker>
        </MapContainer>
        <button
          onClick={closeModal}
          className="mt-6 py-2 px-6 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AllUser;
