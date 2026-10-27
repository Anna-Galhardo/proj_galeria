"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { blogSlides } from "../data/dataBlog";

export default function BlogCarousel() {
  return (
    <div className="w-3/4 mx-auto py-6">
        <div className="text-center mb-10">
        <h2 className="text-4xl font-light">Blog</h2>
        <p className="text-gray-600 mt-3">
            Fique por dentro das últimas novidades do nosso blog.
        </p>
    </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}      // Mostra 3 cards por vez
        spaceBetween={30}
        centeredSlides={false} // Não centraliza o slide ativo
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="rounded-2xl"
      >
        {blogSlides.map((post) => (
          <SwiperSlide key={post.id}>
            <img
              src={post.src}
              alt={post.alt}
              width={1000}  // Largura original da imagem para otimização
              height={600}  // Altura original da imagem para otimização
              className="block w-full h-56 rounded-lg object-cover"
            />
            <span className="block mt-4 text-sm text-blue-600">{post.category}</span>
            <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 text-xs text-gray-500">{post.date} • {post.comments}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}