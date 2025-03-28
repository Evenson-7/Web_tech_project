import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

const accommodations = [
  {
    name: "Standard Villa",
    price: "₱4,000/night",
    img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.6435-9/149003078_2784328328548062_7158994299274107045_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHINgfFuIx0i-sepfXc8aPE1ow5QBEMnyzWjDlAEQyfLCeY6NSRlW6QYnB6UhDLUBej2LXxxV_O-LvVU7XN7PDO&_nc_ohc=kqeLwCqMpDcQ7kNvgEsxDnf&_nc_oc=Adj2Sr40N9IJX5FPTTxgLP390ofXnO_moVYt6z45YmWxvGyEzQMe9OiUmUC-3L9hnz4&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=bnoVq86G5ZPfL-N7E63xcA&oh=00_AYGoODSzc4Jub8V6C3NkV-li7V8J4N_8HirdewNAEoeeKQ&oe=67FCD983",
    rating: 4,
    description: "A cozy villa perfect for a relaxing getaway with all basic amenities included.",
  },
  {
    name: "Deluxe Villa",
    price: "₱5,000/night",
    img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/107971396_2598392643808299_3333561811685891514_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFfnKkpCmSaIKdyhU8x_XNyuMiwY234dGm4yLBjbfh0afKawGGasbtXn8QjJjGTvr1EJtln4jW4uGP8MBcTlBtH&_nc_ohc=mimGXmKhKPkQ7kNvgHep8sr&_nc_oc=Adhts_Tmkpnsu40IPOSeYhM8R4IefsMOeOJMTqq3EGe_7vxadVKqp7fpXO55u_72hwQ&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=0MRaISwm34c7oE2CbSXYZA&oh=00_AYHpP54U_AtiZUqPcTFJjjJMV1LRjPUiGOVvH07RVjR0nA&oe=67FCE004",
    rating: 4.5,
    description: "An upgraded villa with a spacious interior, perfect for families or couples.",
  },
  {
    name: "Duplex Villa",
    price: "₱6,500/night",
    img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/460624795_3734702270177325_4335746731748513488_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGdo3pNGSP4vKvXwIP5QXdCzWcCl0ZkkWnNZwKXRmSRaTgBC7lB5AKR12DTgM4faGyRIYOckezebp22u99lIFQ-&_nc_ohc=YWv9lEI8HDgQ7kNvgEg97Fd&_nc_oc=AdnGU68dQ4s2QHjMXxOWJ-vT3pokDCcDYNhhyooMRU8zx1hPKy9W0k-iO6AMLnpdiHc&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=03mJ5PdUlOLhbWvC7EJMxQ&oh=00_AYEPa0VvdXY91ZRgB10okFxt41nTpc6MyF7gNEokUDUdFg&oe=67EC7F78",
    rating: 5,
    description: "A luxurious duplex villa featuring elegant design and premium furnishings.",
  },
  {
    name: "Suite Room",
    price: "₱7,500/night",
    img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/154985312_106234404854977_2392256233337907263_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHD8ZHSV0hvC0z_iQaxc1bPdiFCMSYRd2Z2IUIxJhF3ZvUl_sQv9j9cmpccc3UAp7uH5w_ijpqpauNfhZ9JbliD&_nc_ohc=CYX1kOkX2_4Q7kNvgGASCew&_nc_oc=AdiBGVLrKHQUfR8lNFJo1UlG1Ye5lyNU35UxiLyfYTPlH0KEsr0UHIEcP7dvqtgC2Z8&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=GsPPwz-VaozG_dfzq5AMMw&oh=00_AYFVuxgAffKHrnuENEH9q8unzfLTmZAiJXkKNNAxbIh9hA&oe=67FCEE0D",
    rating: 4.5,
    description: "A premium suite with stunning views, modern amenities, and ultimate comfort.",
  },
  {
    name: "Panoramic Duplex Villa with Pool",
    price: "₱9,000/night",
    img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/154935284_106234378188313_3008819984754233835_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF2xiBcGGz8x7YS_wI4odMPJrxwtI3ni80mvHC0jeeLzUQKjmFsnHxzw5HJzBWm7JHb1sHN8Xbm5jNfDB16RZ8R&_nc_ohc=30BV4UtHIe0Q7kNvgFD36X1&_nc_oc=Adgoin1S68sIgGUjoFNXHUMQ8TBpQWe5veIcAK46vpzv5ifkyo7811nxuuEE9KDkqxs&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=EMBOV6k-AqnX41OgeWK3RQ&oh=00_AYHQk6Azenhj_UdYRbbSTSKrsWIZPeHQmvGoUL6OAmVT3A&oe=67FC6C86",
    rating: 5,
    description: "An exclusive villa with breathtaking panoramic views and a private pool.",
  }
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-center text-yellow-400 mt-2">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
};

export default function Accommodations() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section id="accommodations" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
          Accommodations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodations.map((room, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-60 object-cover"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
                <p className="text-gray-600 mt-1">{room.price}</p>
                {renderStars(room.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedRoom && (
        <Dialog open={!!selectedRoom} onClose={() => setSelectedRoom(null)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedRoom(null)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
              >
                ✕
              </button>
            </div>
            <img src={selectedRoom.img} alt={selectedRoom.name} className="w-full h-60 object-cover rounded-lg" />
            <h3 className="text-2xl font-bold text-gray-800 mt-4">{selectedRoom.name}</h3>
            <p className="text-gray-600 mt-2">{selectedRoom.description}</p>
            <p className="text-xl font-semibold text-primary mt-4">{selectedRoom.price}</p>
            {renderStars(selectedRoom.rating)}
          </motion.div>
        </Dialog>
      )}
    </section>
  );
}
