import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import ";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Video = () => {
  return (
    <>
      <div className="bg-[url(/background.svg)] bg-cover bg-center">
        <div className="container mx-auto">
          <div className="py-10">
            <h2 className="mb-10 text-center text-5xl font-bold text-[#ff9c33]">
              Video
            </h2>
            <div className="h-[500px] rounded-3xl bg-[#ffd89b] p-10">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CTV-sZ4r1t0?si=CtH8K_4dL3jpIl8_"
                    title="YouTube video player"
                    // @ts-ignore
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
