import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Video = () => {
  const videoList = [
    {
      title: "Video về người kết nối",
      url: "https://www.youtube.com/embed/Jma_23zeSgY?si=8OVkDb3AUVAh9yoU",
    },
    {
      title: "Video về người sáng tạo",
      url: "https://www.youtube.com/embed/khtEMEvWi0Q?si=OtKMRdEcky1B2c71",
    },
    {
      title: "Video về người quan sát",
      url: "https://www.youtube.com/embed/BRUFc5rCMn0?si=xLsKFEdk61kHaYyR",
    },
  ];

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
                {videoList.map((video, index) => (
                  <SwiperSlide>
                    <div key={index}>
                      <h2 className="mb-5 text-center text-2xl font-bold">
                        {video.title}
                      </h2>
                      <iframe
                        width="560"
                        height="315"
                        src={video.url}
                        title="YouTube video player"
                        // @ts-ignore
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="rounded-xl"
                      ></iframe>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
