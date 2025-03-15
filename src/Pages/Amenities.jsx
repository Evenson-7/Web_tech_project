import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Amenities() {
  const amenities = [
    { title: "Infinity Pool", img: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/154983982_106234348188316_713084819664658169_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGlYT6KV2dSGJZpLo-p-Kr-EgL7dlJNA7USAvt2Uk0DtXLwKUiIXQRGxEQw6Aiyz-Cd2zV-Us5tmXAHgRUW4Foq&_nc_ohc=KgyvpSQkr1oQ7kNvgEf6HNv&_nc_oc=AdjD6uRP7moIIpmi7nA6xlZ_2sd7tczTg2v_rXGk6IqR9BzNYRnZYDsfP8ydpbQG7I4&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=Al5rjQef27l7pLiAxhEUg6-&oh=00_AYHbnMO7EhQKNIXxmP8FF6Cv0AMclLunSYq9QDiFyMQIVg&oe=67FB344E" },
    { title: "Spa Retreat", img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/461989182_3749908871989998_425009998706302428_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE_Yx-Nd3K82g5IpNS7sesiZjJ9fEryniFmMn18SvKeIUTk0kPd4-ZX05MplFQDZvyk2p9xCPIAplIzGbUGMP0I&_nc_ohc=tlh5qce16vcQ7kNvgFAtrL2&_nc_oc=AdiyqEKKjNyaglrIkpd5y_yC0bAwNm9bCP2kaizYKyNoHx6X4WGkK6Ee6l7a0wfZY5g&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=ASGk5vecg1UA207MNs4ettV&oh=00_AYEEBB9kp4MzC-iqPrk42eN_KtG2GWQ0gTLDIFRH7G6iOg&oe=67D9C961" },
    { title: "Gourmet Dining", img: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/154313216_103497465128671_305379590174978461_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF5sP0Ph52WSnUJsJ1DMm6C5rtuzFzkVyjmu27MXORXKENmvFEB0njnyJOMKMrfpeFL9gRaXFPSTFhByhFwkeCa&_nc_ohc=vLG8fdcyU4sQ7kNvgGByPi0&_nc_oc=AdhLRfB1WSVT3y0eYVwmOfenVEoVE-YYqUiMXoyouKhA4R1Nf9eLo0vIjo29hIpH5RA&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=ASRN-RzhflGvY73jfYZ3qcb&oh=00_AYFaxilfMsgwkBmyIhufyxmkzM8CInOSN57GDhcWWsbseg&oe=67FB51BE" },
    { title: "Beach Adventures", img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/470222313_969877911823951_1662872119914141456_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHirmtn5psgbxXb8bFnWf2LKfz2jpVH6_gp_PaOlUfr-J_kbkBowSeLQyAfKz1OvLjMnPVxJLfW9mpkpNtAz1Kz&_nc_ohc=7DOHk9zUyKQQ7kNvgEzypt2&_nc_oc=AdjjfKOaNsXCr2_i34P9ag0aQaLIA7XwP1Ion_5GYHDDdbymON-6NVn7Y439-QvdG3k&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=AHwSFabHveGEy4GR_lP1sRc&oh=00_AYF7HGzgA4ugGEeg7vno5oU8o5vnlDE3Wh1UH6KhWvQf_Q&oe=67D99F49" },
  ];

  return (
    <section id="amenities" className="py-16 bg-white relative">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-fixed opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598300184474-a0c16e52e78f')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
          Amenities & Activities
        </h2>

        {/* Swiper.js Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop
          className="rounded-lg shadow-lg overflow-hidden"
        >
          {amenities.map((amenity, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[400px]">
                <img
                  src={amenity.img}
                  alt={amenity.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">{amenity.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
