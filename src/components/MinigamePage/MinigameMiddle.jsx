import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../contexts/AppContext";
import api from "../../lib/axios";
import apiUrl from "../../constants/constant";

const MinigameMiddle = () => {
  const { user } = useContext(AppContext);
  const [images, setImages] = useState({
    image1: null,
    image2: null,
  });

  const [previews, setPreviews] = useState({
    image1: null,
    image2: null,
  });

  const [uploadedImages, setUploadedImages] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchUserImages = async () => {
      if (!user?._id) {
        setFetching(false);
        return;
      }

      try {
        setFetching(true);
        const res = await api.get(`/user/info/${user._id}`);
        if (res.data?.status === "success") {
          setUserInfo(res.data.data?.user || null);
          const userImages = res.data.data?.images || [];
          setUploadedImages(userImages);

          // Set previews từ ảnh đã upload
          if (userImages.length > 0) {
            const newPreviews = { image1: null, image2: null };
            userImages.forEach((img, index) => {
              if (index === 0) {
                newPreviews.image1 = `${apiUrl}/image/get-images/${img._id}`;
              } else if (index === 1) {
                newPreviews.image2 = `${apiUrl}/image/get-images/${img._id}`;
              }
            });
            setPreviews(newPreviews);
          }
        }
      } catch (e) {
        console.error("Error fetching user images:", e);
      } finally {
        setFetching(false);
      }
    };

    fetchUserImages();
  }, [user?._id]);

  const getStatusMessage = () => {
    if (!userInfo) return "";
    const imageCount = uploadedImages.length;

    if (imageCount === 2 && userInfo.approved === true) {
      return "Đã duyệt";
    } else if (imageCount === 2 && userInfo.approved === false) {
      return "Chưa duyệt";
    } else if (imageCount === 0) {
      return "Chưa tải hình lên hoặc hình bị từ chối";
    }
    return "";
  };

  const canUpload = () => {
    if (!userInfo) return true;
    const imageCount = uploadedImages.length;
    return imageCount < 2;
  };

  const handleImageUpload = (e, imageKey) => {
    if (!canUpload()) {
      setError("Bạn đã upload đủ 2 ảnh. Không thể upload thêm.");
      return;
    }

    const file = e.target.files[0];
    if (file) {
      setImages((prev) => ({
        ...prev,
        [imageKey]: file,
      }));

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreviews((prev) => ({
        ...prev,
        [imageKey]: previewUrl,
      }));
    }
  };

  const handleSubmit = async () => {
    if (!images.image1 || !images.image2) {
      setError("Vui lòng tải lên đủ 2 ảnh");
      return;
    }

    if (!user?._id) {
      setError("Vui lòng đăng nhập để tải ảnh lên");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const formData = new FormData();
      formData.append("images", images.image1);
      formData.append("images", images.image2);
      formData.append("userId", user._id);

      const res = await api.post("/image/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data?.message) {
        setSuccess(res.data.message);
        // Reset images after successful upload
        setImages({ image1: null, image2: null });
        setPreviews({ image1: null, image2: null });
        // Refresh user images
        const refreshRes = await api.get(`/user/info/${user._id}`);
        if (refreshRes.data?.status === "success") {
          setUserInfo(refreshRes.data.data?.user || null);
          const userImages = refreshRes.data.data?.images || [];
          setUploadedImages(userImages);
          if (userImages.length > 0) {
            const newPreviews = { image1: null, image2: null };
            userImages.forEach((img, index) => {
              if (index === 0) {
                newPreviews.image1 = `${apiUrl}/image/get-images/${img._id}`;
              } else if (index === 1) {
                newPreviews.image2 = `${apiUrl}/image/get-images/${img._id}`;
              }
            });
            setPreviews(newPreviews);
          }
        }
      }
    } catch (e) {
      const msg =
        e?.response?.data?.error ||
        e?.response?.data?.message ||
        e?.message ||
        "Đã có lỗi xảy ra khi tải ảnh lên";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#ff9c33] border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Đang tải thông tin...</p>
      </div>
    );
  }

  const statusMessage = getStatusMessage();
  const allowUpload = canUpload();

  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-6 text-2xl font-bold text-[#ff9c33]">
        HÃY LƯU LẠI NHỮNG KHOẢNH KHẮC ĐẸP CỦA BẠN
      </h3>

      {statusMessage && (
        <div
          className={`mb-4 rounded-md px-4 py-2 text-center font-semibold ${
            statusMessage === "Đã duyệt"
              ? "bg-green-100 text-green-700"
              : statusMessage === "Chưa duyệt"
                ? "bg-orange-100 text-orange-700"
                : "bg-gray-100 text-gray-700"
          }`}
        >
          {statusMessage}
        </div>
      )}

      <div className="grid w-full max-w-6xl grid-cols-2 gap-16">
        {/* First Image Upload Section */}
        <div className="flex flex-col items-center">
          <label
            className={`relative aspect-[16/9] w-full overflow-hidden rounded-lg border-4 bg-white transition-colors ${
              allowUpload
                ? "cursor-pointer border-[#ff9c33] hover:border-[#e88e2e]"
                : "cursor-not-allowed border-gray-300 opacity-60"
            }`}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "image1")}
              disabled={!allowUpload}
              className="hidden"
            />
            {previews.image1 ? (
              <img
                src={previews.image1}
                alt="Preview 1"
                className="h-full w-full object-contain"
                onError={(e) => {
                  if (e.target instanceof HTMLImageElement) {
                    e.target.src =
                      "https://placehold.co/600x400?text=Image+Error&font=roboto";
                  }
                }}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center text-2xl font-bold text-[#ff9c33]">
                <span>PREVIEW</span>
                <span className="mt-2 text-base">
                  {allowUpload ? "Click để thêm hình" : "Đã upload đủ ảnh"}
                </span>
              </div>
            )}
          </label>
          <p className="mt-4 text-center font-medium text-gray-700">
            Nhiệm vụ 1
          </p>
        </div>

        {/* Second Image Upload Section */}
        <div className="flex flex-col items-center">
          <label
            className={`relative aspect-[16/9] w-full overflow-hidden rounded-lg border-4 bg-white transition-colors ${
              allowUpload
                ? "cursor-pointer border-[#ff9c33] hover:border-[#e88e2e]"
                : "cursor-not-allowed border-gray-300 opacity-60"
            }`}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "image2")}
              disabled={!allowUpload}
              className="hidden"
            />
            {previews.image2 ? (
              <img
                src={previews.image2}
                alt="Preview 2"
                className="h-full w-full object-contain"
                onError={(e) => {
                  if (e.target instanceof HTMLImageElement) {
                    e.target.src =
                      "https://placehold.co/600x400?text=Image+Error&font=roboto";
                  }
                }}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center text-2xl font-bold text-[#ff9c33]">
                <span>PREVIEW</span>
                <span className="mt-2 text-base">
                  {allowUpload ? "Click để thêm hình" : "Đã upload đủ ảnh"}
                </span>
              </div>
            )}
          </label>
          <p className="mt-4 text-center font-medium text-gray-700">
            Nhiệm vụ 2
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 flex flex-col items-center gap-4">
        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-2 text-red-600">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-md border border-green-200 bg-green-50 px-4 py-2 text-green-600">
            {success}
          </div>
        )}
        <button
          onClick={handleSubmit}
          disabled={loading || !images.image1 || !images.image2 || !allowUpload}
          className="rounded-lg bg-[#ff9c33] px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-[#e88e2e] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span>Đang tải lên...</span>
            </div>
          ) : (
            "Tải ảnh lên"
          )}
        </button>
      </div>
    </div>
  );
};

export default MinigameMiddle;
