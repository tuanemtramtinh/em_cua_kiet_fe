// @ts-nocheck
import React from "react";
import MucLuc from "../components/PassportPage/MucLuc";

import { FaEarthAmericas } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const Passport = () => {
  return (
    <>
      <div className="flex-1 bg-[url(/background.svg)] bg-cover bg-center">
        <div className="container mx-auto py-10">
          <div className="flex justify-between">
            <MucLuc />
            <div className="flex h-[650px] w-[calc((100%*3/4)-20px)] items-center justify-center">
              <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  769: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                }}
                scrollbar={true}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="passportSwiper"
              >
                <SwiperSlide>
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#08083C] py-7">
                    <div className="flex h-full flex-col items-center justify-between text-3xl font-bold text-[#fbf9d7]">
                      <h2>HỘ CHIẾU SỐ</h2>
                      <FaEarthAmericas className="text-9xl" />
                      <div>TRƯỜNG THCS VÂN ĐỒN</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#08083C] p-7">
                    <div className="h-full w-full rounded-2xl bg-[#fbf9d7] p-5">
                      <h2 className="mb-5 text-2xl font-bold">
                        THÔNG TIN TÀI KHOẢN
                      </h2>
                      <div className="flex flex-col items-center">
                        <div className="aspect-square w-[100px]">
                          <img
                            src="https://avatar.iran.liara.run/public/33"
                            alt="avatar"
                            className="h-full w-full rounded-full object-cover shadow-lg"
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <div className="font-bold">Nguyễn Văn A</div>
                          <div className="text-sm text-gray-500">Học sinh</div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between">
                            <div className="text-lg text-gray-500">
                              Ngày tham gia:
                            </div>
                            <div className="font-bold">11/09/2025</div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-lg text-gray-500">Email:</div>
                            <div className="font-bold">
                              nguyenvana@gmail.com
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-lg text-gray-500">
                              Giới tính:
                            </div>
                            <div className="font-bold">Nam</div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-lg text-gray-500">
                              Sở thích:
                            </div>
                            <div className="font-bold">Gooning</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#08083C] p-7">
                    <div className="h-full w-full rounded-2xl bg-[#fbf9d7] p-5">
                      <div className="flex h-full flex-col items-center justify-center gap-5">
                        <h2 className="font-semibold">BẠN CHÍNH LÀ</h2>
                        <div className="text-3xl font-bold text-[#FF9C33] italic">
                          GOONER SỐ 1
                        </div>
                        <div className="text-center text-sm">
                          LƯỚT QUA TRANG KẾ ĐỂ XEM VIDEO VÀ CẨM NANG
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#08083C] p-7">
                    <div className="h-full w-full rounded-2xl bg-[#fbf9d7] p-5">
                      <h2 className="mb-10 text-2xl font-bold">VIDEO</h2>
                      <div className="">
                        <div className="mb-5">
                          Bạn hãy xem video để hiểu rõ hơn về tính cách bản thân
                          mình nhé
                        </div>
                        <iframe
                          className="aspect-video w-full rounded-xl shadow-lg"
                          src="https://www.youtube.com/embed/Jma_23zeSgY?si=8sj0C6qOr0QmhM4x"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#08083C] p-7">
                    <div className="h-full w-full rounded-2xl bg-[#fbf9d7] p-5">
                      <h2 className="mb-20 text-2xl font-bold">CẨM NANG</h2>
                      <div className="flex flex-col items-center text-center text-lg">
                        <IoDocumentTextSharp className="mb-5 text-5xl" />
                        <div>
                          Bạn hãy bấm vào{" "}
                          <a
                            href="https://drive.google.com/file/d/1vd544InBoqWeQRkFl2dnBP6KchxgCHIn/view?usp=drive_link"
                            className="text-blue-500 underline"
                            target="_blank"
                          >
                            đây
                          </a>{" "}
                          để tải cẩm nang chi tiết về bản thân mình về nhé
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Passport;
