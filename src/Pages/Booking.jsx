import React, { useState } from "react";

export default function Booking() {
  const [bookingData, setBookingData] = useState({
    name: "",
    contact: "",
    checkIn: "",
    checkOut: "",
    room: "",
    adults: 1,
    children: 0,
  });

  const [alert, setAlert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Room Prices Per Night
  const roomPrices = {
    "Deluxe Villa": 5000,
    "Duplex Villa": 6500,
    "Panoramic Duplex Villa with Pool": 9000,
    "Standard Villa": 4000,
    "Suite Room": 7500,
  };
  // Room Images Mapping
const roomImages = {
  "Standard Villa": "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.6435-9/149003078_2784328328548062_7158994299274107045_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHINgfFuIx0i-sepfXc8aPE1ow5QBEMnyzWjDlAEQyfLCeY6NSRlW6QYnB6UhDLUBej2LXxxV_O-LvVU7XN7PDO&_nc_ohc=kqeLwCqMpDcQ7kNvgEsxDnf&_nc_oc=Adj2Sr40N9IJX5FPTTxgLP390ofXnO_moVYt6z45YmWxvGyEzQMe9OiUmUC-3L9hnz4&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=bnoVq86G5ZPfL-N7E63xcA&oh=00_AYGoODSzc4Jub8V6C3NkV-li7V8J4N_8HirdewNAEoeeKQ&oe=67FCD983",
  "Deluxe Villa": "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/107971396_2598392643808299_3333561811685891514_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFfnKkpCmSaIKdyhU8x_XNyuMiwY234dGm4yLBjbfh0afKawGGasbtXn8QjJjGTvr1EJtln4jW4uGP8MBcTlBtH&_nc_ohc=mimGXmKhKPkQ7kNvgHep8sr&_nc_oc=Adhts_Tmkpnsu40IPOSeYhM8R4IefsMOeOJMTqq3EGe_7vxadVKqp7fpXO55u_72hwQ&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=0MRaISwm34c7oE2CbSXYZA&oh=00_AYHpP54U_AtiZUqPcTFJjjJMV1LRjPUiGOVvH07RVjR0nA&oe=67FCE004",
  "Duplex Villa": "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/462104116_3751819008465651_2925014502288275175_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGcV5Dz5FMAAFdvjKcZTzvZXRwBqGWcSMldHAGoZZxIybEhJRGTlZ_mYUBwvmdwMOcRn34vLHvOzzPy8Zh5bXlc&_nc_ohc=C8k0rRgUcwkQ7kNvgEB9X37&_nc_oc=AdhloXajfDQf_J7GcSd-D7G5rR2mf_UCbIogIBrUAZLdd4btTJyqPlr__QHPOA5PC1o&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=YCWJpnz7GA6Y1lOI-QJNqg&oh=00_AYEjaL31UvUzoDiMvwUw7R1b22jZzsj-6l3Qf21JF0gt4A&oe=67DB2D33",
  "Suite Room": "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/154985312_106234404854977_2392256233337907263_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHD8ZHSV0hvC0z_iQaxc1bPdiFCMSYRd2Z2IUIxJhF3ZvUl_sQv9j9cmpccc3UAp7uH5w_ijpqpauNfhZ9JbliD&_nc_ohc=CYX1kOkX2_4Q7kNvgGASCew&_nc_oc=AdiBGVLrKHQUfR8lNFJo1UlG1Ye5lyNU35UxiLyfYTPlH0KEsr0UHIEcP7dvqtgC2Z8&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=GsPPwz-VaozG_dfzq5AMMw&oh=00_AYFVuxgAffKHrnuENEH9q8unzfLTmZAiJXkKNNAxbIh9hA&oe=67FCEE0D",
  "Panoramic Duplex Villa with Pool": "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/154935284_106234378188313_3008819984754233835_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF2xiBcGGz8x7YS_wI4odMPJrxwtI3ni80mvHC0jeeLzUQKjmFsnHxzw5HJzBWm7JHb1sHN8Xbm5jNfDB16RZ8R&_nc_ohc=30BV4UtHIe0Q7kNvgFD36X1&_nc_oc=Adgoin1S68sIgGUjoFNXHUMQ8TBpQWe5veIcAK46vpzv5ifkyo7811nxuuEE9KDkqxs&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=EMBOV6k-AqnX41OgeWK3RQ&oh=00_AYHQk6Azenhj_UdYRbbSTSKrsWIZPeHQmvGoUL6OAmVT3A&oe=67FC6C86",
};

  const calculateTotalPrice = () => {
    if (!bookingData.checkIn || !bookingData.checkOut || !bookingData.room) return 0;

    const nights =
      Math.max(1, (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24));

    const roomPrice = roomPrices[bookingData.room] || 0;
    const adultPrice = bookingData.adults * 2000 * nights;
    const childPrice = bookingData.children * 1000 * nights;

    return (roomPrice * nights) + adultPrice + childPrice;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!bookingData.name.trim() || !bookingData.contact || !bookingData.checkIn || !bookingData.checkOut || !bookingData.room) {
      setAlert({ type: "warning", message: "Please fill out all fields." });
      return;
    }
    // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(bookingData.contact)) {
    setAlert({ type: "warning", message: "Please enter a valid email address." });
    return;
  }
    if (new Date(bookingData.checkIn) >= new Date(bookingData.checkOut)) {
      setAlert({ type: "warning", message: "Check-out date must be after check-in date." });
      return;
    }

    setIsModalOpen(true);
  };

  const handleConfirmBooking = () => {
    setIsModalOpen(false);
    setAlert({ type: "success", message: "Booking confirmed successfully!" });
  };

  const handleClearForm = () => {
    setBookingData({
      name: "",
      contact: "",
      checkIn: "",
      checkOut: "",
      room: "",
      adults: 1,
      children: 0,
    });
    setAlert(null);
  };

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-12 text-center">
          Booking Confirmation
        </h2>

        {alert && (
          <div
            className={`p-4 mb-4 text-sm rounded-lg ${
              alert.type === "success"
                ? "text-green-800 bg-green-400"
                : "text-yellow-800 bg-yellow-400"
            }`}
            role="alert"
          >
            <span className="font-medium">
              {alert.type === "success" ? "Success!" : "Warning!"}
            </span>{" "}
            {alert.message}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={bookingData.name}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, name: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Contact Email</label>
                <input
                  type="email"
                  value={bookingData.contact}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, contact: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Check-In Date</label>
                <input
                  type="date"
                  value={bookingData.checkIn}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, checkIn: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Check-Out Date</label>
                <input
                  type="date"
                  value={bookingData.checkOut}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, checkOut: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Room Type</label>
                <select
                  value={bookingData.room}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, room: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select a room</option>
                  {Object.keys(roomPrices).map((room) => (
                    <option key={room} value={room}>
                      {room} - ₱{roomPrices[room]}/night
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Guest Details & Payment</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Adults</label>
                <input
                  type="number"
                  value={bookingData.adults}
                  min="1"
                  onChange={(e) =>
                    setBookingData({ ...bookingData, adults: Number(e.target.value) })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Children</label>
                <input
                  type="number"
                  value={bookingData.children}
                  min="0"
                  onChange={(e) =>
                    setBookingData({ ...bookingData, children: Number(e.target.value) })
                  }
                  className="w-full p-2 border rounded-md"
                />
                  {/* Room Preview */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Room Preview</h3>
                    {bookingData.room && roomImages[bookingData.room] ? (
                      <img
                        src={roomImages[bookingData.room]}
                        alt={bookingData.room}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    ) : (
                      <p className="text-gray-500">No preview available</p>
                    )}
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleBookingSubmit}
            className="w-1/2 bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
          >
            Submit Booking
          </button>
          <button
            onClick={handleClearForm}
            className="w-1/2 bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition"
          >
            Clear Form
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Confirm Booking</h3>
            <p>Room: {bookingData.room}</p>
            <p>Guests: {bookingData.adults} Adults, {bookingData.children} Children</p>
            <p>Total Price: <span className="font-semibold">₱{calculateTotalPrice()}</span></p>
            <div className="mt-4 flex gap-4">
              <button onClick={handleConfirmBooking} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Confirm</button>
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Modify Booking</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
