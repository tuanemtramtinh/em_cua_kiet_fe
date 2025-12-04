// @ts-nocheck
import React, { useCallback, useContext, useEffect, useState } from "react";
import MucLuc from "../components/PassportPage/MucLuc";

import { FaEarthAmericas } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaCertificate } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import AppContext from "../contexts/AppContext";
import apiUrl from "../constants/constant";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";

const Passport = () => {
  const navigate = useNavigate();

  const { user } = useContext(AppContext);
  const [message, setMessage] = useState("");

  const typeList = [
    {
      title: "Người kết nối",
      videoUrl: "https://www.youtube.com/embed/Jma_23zeSgY?si=8OVkDb3AUVAh9yoU",
      pdfUrl:
        "https://drive.google.com/file/d/1vd544InBoqWeQRkFl2dnBP6KchxgCHIn/view?usp=drive_link",
    },
    {
      title: "Người sáng tạo",
      videoUrl: "https://www.youtube.com/embed/khtEMEvWi0Q?si=OtKMRdEcky1B2c71",
      pdfUrl:
        "https://drive.google.com/file/d/1noDWIY_HpXgeV25V35eN4-NY_ykWleNo/view?usp=drive_link",
    },
    {
      title: "Người quan sát",
      videoUrl: "https://www.youtube.com/embed/BRUFc5rCMn0?si=xLsKFEdk61kHaYyR",
      pdfUrl:
        "https://drive.google.com/file/d/1MauYMVGCuTsPbOjT4HaVsaDibNQiFveq/view?usp=drive_link",
    },
  ];

  let videoLink, pdfLink;

  if (user) {
    videoLink = typeList.find((type) => type.title === user.type)?.videoUrl;
    pdfLink = typeList.find((type) => type.title === user.type)?.pdfUrl;
  }

  const fetchUserApi = useCallback(async () => {
    const respsonse = await api.get(`user/info/${user.id}`);
    const data = respsonse.data.data;

    if (data.user.approved === false && data.images.length == 2) {
      setMessage(
        "Nhiệm vụ của bạn đang được xét duyệt. Bạn sắp sửa hoàn thành hộ chiếu bản sắc số",
      );
    } else if (data.user.approved === true) {
      setMessage(
        "CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH MỘT CHẶNG TRONG HÀNH TRÌNH MỞ KHÓA BẢN SẮC SỐ",
      );
    } else {
      setMessage(
        "Hãy nhanh chóng hoàn thành minigame để hoàn thiện hộ chiếu bản sắc số",
      );
    }
  }, [user.id]);

  useEffect(() => {
    fetchUserApi();
  }, []);

  return (
    <>
      {user ? (
        user.type === "Người kết nối" ||
        user.type === "Người sáng tạo" ||
        user.type === "Người quan sát" ? (
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
                        <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-[#fbf9d7] p-5">
                          <h2 className="text-2xl font-bold">
                            THÔNG TIN TÀI KHOẢN
                          </h2>
                          <div>
                            <div className="flex flex-col items-center">
                              <div className="aspect-square w-[100px]">
                                <img
                                  src={
                                    user
                                      ? `${apiUrl}user/get-avatar/${user.username}`
                                      : "https://avatar.iran.liara.run/public/33"
                                  }
                                  alt="avatar"
                                  className="h-full w-full rounded-full object-cover shadow-lg"
                                  onError={(e) => {
                                    e.target.src =
                                      "https://avatar.iran.liara.run/public/33";
                                  }}
                                />
                              </div>
                              <div className="mt-2 text-center">
                                <div className="font-bold">{user.name}</div>
                                <div className="text-sm text-gray-500">
                                  Học sinh
                                </div>
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
                                  <div className="text-lg text-gray-500">
                                    Email:
                                  </div>
                                  <div className="font-bold">{user.email}</div>
                                </div>
                                <div className="flex justify-between">
                                  <div className="text-lg text-gray-500">
                                    Giới tính:
                                  </div>
                                  <div className="font-bold capitalize">
                                    {user.sex}
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <div className="text-lg text-gray-500">
                                    Sở thích:
                                  </div>
                                  <div className="font-bold">{user.hobby}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>Trang 1</div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#08083C] p-7">
                        <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-[#fbf9d7] p-5">
                          <h2 className="text-2xl font-bold">
                            ĐỊNH DANH BẢN THÂN
                          </h2>
                          <div className="flex h-full flex-col items-center justify-center gap-5">
                            <h2 className="text-4xl font-semibold">
                              BẠN CHÍNH LÀ
                            </h2>
                            <div className="text-5xl font-bold text-[#FF9C33] italic">
                              {user.type}
                            </div>
                            <div className="text-center text-xl">
                              LƯỚT QUA TRANG KẾ ĐỂ XEM VIDEO VÀ CẨM NANG
                            </div>
                          </div>
                          <div>Trang 2</div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#08083C] p-7">
                        <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-[#fbf9d7] p-5">
                          <h2 className="text-2xl font-bold">VIDEO</h2>
                          <div className="">
                            <div className="mb-5 text-2xl">
                              Bạn hãy xem video để hiểu rõ hơn về tính cách bản
                              thân mình nhé
                            </div>
                            <iframe
                              className="aspect-video w-full rounded-xl shadow-lg"
                              src={videoLink}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div>Trang 3</div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#08083C] p-7">
                        <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-[#fbf9d7] p-5">
                          <h2 className="mb-10 text-2xl font-bold">CẨM NANG</h2>
                          <div className="flex flex-col items-center text-center text-lg">
                            <a className="mb-8" href={pdfLink}>
                              <IoDocumentTextSharp className="text-8xl hover:text-blue-500" />
                            </a>
                            <div className="text-3xl">
                              Bạn hãy bấm vào icon để tải cẩm nang về{" "}
                              <span className="font-bold text-[#FF9C33] italic">
                                {user.type}
                              </span>{" "}
                            </div>
                          </div>
                          <div>Trang 4</div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#08083C] p-7">
                        <div className="relative flex h-full w-full flex-col justify-between rounded-2xl bg-[#fbf9d7] p-5">
                          <div>
                            <h2 className="flex flex-col items-center justify-center gap-4 text-4xl font-bold">
                              CHỨNG NHẬN
                              <img src="star.png" />
                            </h2>
                            <div className="flex flex-col gap-2 text-2xl font-semibold italic">
                              <div className="text-[#FF9C33]">{message}</div>
                              <a href="/minigame" className="text-lg">
                                Nhấn vào đây để truy cập trang Minigame
                              </a>
                            </div>
                          </div>

                          {message ===
                            "CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH MỘT CHẶNG TRONG HÀNH TRÌNH MỞ KHÓA BẢN SẮC SỐ" && (
                            <div className="absolute right-5 bottom-10 w-1/3">
                              <img
                                src="confirmed.png"
                                className="w-full"
                                alt=""
                              />
                            </div>
                          )}

                          <div>Trang 5</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-[80vh] flex-col items-center justify-center bg-[url(/background.svg)] bg-cover bg-center">
            <div className="flex flex-col rounded-2xl bg-white/70 p-10 shadow-lg">
              <h2 className="mb-5 text-3xl font-bold">
                Bạn cần phải làm quiz để thông tin được hiển thị
              </h2>
              <button
                onClick={() => navigate("/quiz")}
                className="cursor-pointer rounded-3xl bg-[#FF9C33] px-5 py-2 text-xl font-bold text-white transition hover:bg-[#e68a00]"
              >
                Làm quiz ngay
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="flex h-[80vh] flex-col items-center justify-center bg-[url(/background.svg)] bg-cover bg-center">
          <div className="flex flex-col rounded-2xl bg-white/70 p-10 shadow-lg">
            <h2 className="mb-5 text-3xl font-bold">
              Bạn cần đăng nhập để xem trang này
            </h2>
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer rounded-3xl bg-[#FF9C33] px-5 py-2 text-xl font-bold text-white transition hover:bg-[#e68a00]"
            >
              Đăng nhập ngay
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Passport;
