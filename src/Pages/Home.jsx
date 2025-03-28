import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    // Booking form state
    const [bookingData, setBookingData] = React.useState({
        name: "",
        contact: "",
        checkIn: "",
        checkOut: "",
        room: "",
    });
     // Function to handle smooth scrolling
     const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <div className="font-sans text-gray-800 bg-light">
            {/* Hero Section */}
            <motion.section 
                id="hero"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24"
            >
                <div className="absolute inset-0 bg-cover bg-center" style={{ 
                        backgroundImage: "url('https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/481145341_1003242775187047_3910267362202590219_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFIFvyjhuZIOG0665OlFeTfFSWa1kzxDcoVJZrWTPENytaPj6cN0SvyVyiZfDKcdAGeFHboLQwpiGL9mxIuwhkG&_nc_ohc=rVow9nfXPO8Q7kNvgGuWNGQ&_nc_oc=Admdk5yovsXCUA0Eb1qDegJmJyYxEJyEcRiv17-fe1C7keFlVZYeULiXWCQ2RVJlMcU&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=uzwU3LklLWGvTfRmSCgg6A&oh=00_AYGbMKUuFCXMO2flFpfs049igbJZjsNKOSlbwRH6_OAOXw&oe=67EC5DD7')"}}>
                    <div className="absolute inset-0 w-full h-full bg-black/50"></div>
                </div>
                <div className="relative text-center px-4 sm:px-6 lg:px-8">
                    <motion.h1 
                        initial={{ y: -50, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif text-white leading-tight"
                    >
                        <span className="text-secondary">Paradise</span> at Residencia del Hamor
                    </motion.h1>
                    <motion.p 
                        initial={{ y: 50, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-4 text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto"
                    >
                        Experience luxury and tranquility in our exclusive beachfront resort, where memories are made to last forever.
                    </motion.p>
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                    <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            onClick={() => scrollToSection("booking")}
                            className="bg-secondary hover:bg-opacity-90 text-cyan-500 font-medium px-6 py-3 rounded-md transition duration-300 text-lg"
                        >
                            Book Your Stay
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            onClick={() => scrollToSection("explore")}
                            className="bg-transparent border-2 border-white text-white hover:bg-black/20 hover:text-primary font-medium px-6 py-3 rounded-md transition duration-300 text-lg"
                        >
                            Explore Resort
                        </motion.button>
                    </div>
                </div>
            </motion.section>

            {/* About Section */}
            <section id="explore" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1 }}
                        className="md:w-1/2 text-center md:text-left"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Welcome to Residencia del Hamor</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Nestled on the pristine shores of a tropical paradise, Residencia del Hamor is a luxurious retreat that combines elegance with natural beauty.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Whether you're seeking a romantic getaway, a family vacation, or an adventure-filled holiday, our dedicated staff is committed to providing an unforgettable experience.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1 }}
                        className="md:w-1/2 grid grid-cols-2 gap-4"
                    >
                        <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/470573607_970677748410634_8427072401073076472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFF15NZyADS5WxTnilF_DO2uqJfUcVofvu6ol9RxWh--2HY8FIywV66PKZ5oJSP6yFxksl4Gy_29lGbax30B48L&_nc_ohc=z4Vc7YIreqkQ7kNvgEcteZ0&_nc_oc=Adhs6Tz_j-SSbOluDVg9-Z5gIW5MESO-o7m8y_WQWBVgIR-hmGkh8mTfh3E09zOrjQc&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=AkLeCNv9MOoEWMK-D6w4_0s&oh=00_AYGr49oQGQwbaj8qiT0uLVOBF9FnDReBaZoRWykBSJmuEg&oe=67D9C0C1" alt="Resort pool" className="rounded-lg shadow-lg w-full object-cover h-48 sm:h-64" loading="lazy" />
                        <img src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/470233731_970677328410676_4476552460940464328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGtXGFbU_6a-5royhb1NChXA10C_d2z0tUDXQL93bPS1StAFudtBodcrqLD0mdqdw54PnPcg08LMI2mpdCdm6fG&_nc_ohc=4rNF5vMwdZ8Q7kNvgFYuFe9&_nc_oc=Adgvab32DKzpakeTrPn_hgGC1e7neodKAKOPJLcEgfp3AvxIfnb8BW45k7Ampq6Y7vw&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=mZye0g5kDr6ASRHmaG57EA&oh=00_AYF8G0yES-bWnnzarJXpIERo9qkSF2IXf7f3IR14NlVRAw&oe=67D9B7B1" alt="Resort restaurant" className="rounded-lg shadow-lg w-full object-cover h-48 sm:h-64" loading="lazy" />
                        <img src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/470578264_970676765077399_4125514856231194751_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEzTw_G32qCgW6uZwd2D6rurKoHR72zenysqgdHvbN6fDzk2mNayM_5CuiFzsf91Uswfy6By8utQJgn0fwx_fuR&_nc_ohc=1Qqb4xtR6SQQ7kNvgGeGvNL&_nc_oc=AdgbDqAWr2pvQfcWONHELZljAvt-oxdTtAVOzfXfGpO8nsakreA65boHXgz_nbL4qXE&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=AucJq_ywveLvF8hWEU6Iukp&oh=00_AYEFcYE_iimKZk4TbgVP0kISMR1F6OXcaZVr_ClHxMROuA&oe=67D9C2CC" alt="Resort spa" className="rounded-lg shadow-lg w-full object-cover h-48 sm:h-64" loading="lazy" />
                        <img src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/470228418_970676651744077_6309960213873275288_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGK5-8Lk7kAjVLW3AsYmYWdx0tTYRGGsxHHS1NhEYazEVY_nwL_5nDgFzhJr2RZlLkIY4Pu08S-ISNyb7vXTRv6&_nc_ohc=2rF3pQSpjkMQ7kNvgEYY9cn&_nc_oc=Adhpf-H-_4IVyQYkZmQA_KEZw9fvq00uGLH3H0zDlQX_JKvOPACQLpeTWAdQ8MghmEI&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=AesGhIHCG5khPClut8IbBc7&oh=00_AYHCwxYg-wE2MHQdXdDpHhhc1FOat4wuWM9olKdgJ9Ohsg&oe=67D9BE29" alt="Resort beach" className="rounded-lg shadow-lg w-full object-cover h-48 sm:h-64" loading="lazy" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
