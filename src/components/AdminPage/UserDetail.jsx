import { useEffect, useState } from "react";
import api from "../../lib/axios";
import apiUrl from "../../constants/constant";

const UserDetail = ({ user, onClose, onApprovalChange }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isApproving, setIsApproving] = useState(false);

  useEffect(() => {
    if (!user?._id) {
      setLoading(false);
      return;
    }

    const fetchUserInfo = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await api.get(`/user/info/${user._id}`);
        const data = res.data;
        if (data?.status !== "success") {
          throw new Error(data?.message || "Fetch user info failed");
        }
        setUserInfo(data.data?.user || null);
        setImages(data.data?.images || []);
      } catch (e) {
        const msg =
          e?.response?.data?.message || e?.message || "Đã có lỗi xảy ra";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [user?._id]);

  const handleApproveAll = async () => {
    const unapprovedImages = images.filter((img) => !img.approve);
    if (unapprovedImages.length === 0) {
      setError("Không có ảnh nào cần duyệt");
      return;
    }

    try {
      setIsApproving(true);
      setError("");
      // Duyệt từng ảnh chưa duyệt
      await Promise.all(
        unapprovedImages.map((img) =>
          api.post(`/image/approve/${img._id}`, {
            approve: true,
          }),
        ),
      );
      // Refresh user info to get updated images
      const refreshRes = await api.get(`/user/info/${user._id}`);
      if (refreshRes.data?.status === "success") {
        setImages(refreshRes.data.data?.images || []);
        setUserInfo(refreshRes.data.data?.user || null);
        // Trigger refresh in parent component
        if (onApprovalChange) {
          onApprovalChange();
        }
      }
    } catch (e) {
      const msg =
        e?.response?.data?.error ||
        e?.response?.data?.message ||
        e?.message ||
        "Đã có lỗi xảy ra";
      setError(msg);
    } finally {
      setIsApproving(false);
    }
  };

  const handleRejectAll = async () => {
    const unapprovedImages = images.filter((img) => !img.approve);
    if (unapprovedImages.length === 0) {
      setError("Không có ảnh nào cần từ chối");
      return;
    }

    try {
      setIsApproving(true);
      setError("");
      // Từ chối ảnh đầu tiên (theo logic backend, từ chối 1 ảnh sẽ xóa tất cả ảnh của user)
      await api.post(`/image/approve/${unapprovedImages[0]._id}`, {
        approve: false,
      });
      // Refresh user info to get updated images (may be deleted)
      const refreshRes = await api.get(`/user/info/${user._id}`);
      if (refreshRes.data?.status === "success") {
        setImages(refreshRes.data.data?.images || []);
        setUserInfo(refreshRes.data.data?.user || null);
        // Trigger refresh in parent component
        if (onApprovalChange) {
          onApprovalChange();
        }
      }
    } catch (e) {
      const msg =
        e?.response?.data?.error ||
        e?.response?.data?.message ||
        e?.message ||
        "Đã có lỗi xảy ra";
      setError(msg);
    } finally {
      setIsApproving(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Chi tiết người dùng</h3>
        <button
          onClick={onClose}
          className="rounded-md bg-gray-200 px-3 py-1 text-gray-700 transition-colors hover:bg-gray-300"
          title="Đóng"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto">
        {loading ? (
          <div className="space-y-3">
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>
            <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200"></div>
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
          </div>
        ) : error ? (
          <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-600">
            Lỗi: {error}
          </div>
        ) : userInfo ? (
          <>
            <div className="rounded-md border border-gray-200 p-4">
              <p className="mb-2">
                <span className="font-semibold">Tên:</span>{" "}
                {userInfo.name || "—"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Username:</span>{" "}
                {userInfo.username}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span>{" "}
                {userInfo.email || "—"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Giới tính:</span>{" "}
                {userInfo.sex || "—"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Loại người:</span>{" "}
                {userInfo.type === "khong"
                  ? "Chưa khảo sát"
                  : userInfo.type || "—"}
              </p>
              {userInfo.dob && (
                <p className="mb-2">
                  <span className="font-semibold">Ngày sinh:</span>{" "}
                  {userInfo.dob || "—"}
                </p>
              )}
              {userInfo.hobby && (
                <p className="mb-2">
                  <span className="font-semibold">Sở thích:</span>{" "}
                  {userInfo.hobby || "—"}
                </p>
              )}
            </div>
            <div className="rounded-md border border-gray-200 p-4">
              <h4 className="mb-3 text-lg font-semibold">
                Hình ảnh ({images.length > 0 ? images.length : 0})
              </h4>
              {images.length > 0 ? (
                <div className="relative space-y-4">
                  {isApproving && (
                    <div className="bg-opacity-75 absolute inset-0 z-10 flex items-center justify-center rounded bg-white">
                      <div className="text-center">
                        <div className="mx-auto mb-2 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                        <p className="text-sm text-gray-600">Đang xử lý...</p>
                      </div>
                    </div>
                  )}
                  <div className="space-y-4">
                    {images.map((img) => (
                      <div
                        key={img._id}
                        className="overflow-hidden rounded border border-gray-200"
                      >
                        <img
                          src={`${apiUrl}/image/get-images/${img._id}`}
                          alt={`Image ${img._id}`}
                          className="h-auto w-full object-contain"
                          onError={(e) => {
                            if (e.target instanceof HTMLImageElement) {
                              e.target.src =
                                "https://placehold.co/600x400?text=Image+Error&font=roboto";
                            }
                          }}
                        />
                        <div className="bg-gray-50 p-2">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Trạng thái:</span>{" "}
                            {img.approve ? (
                              <span className="text-green-600">Đã duyệt</span>
                            ) : (
                              <span className="text-orange-600">
                                Chưa duyệt
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {images.some((img) => !img.approve) && (
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={handleApproveAll}
                        disabled={isApproving}
                        className="flex-1 rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Xác nhận
                      </button>
                      <button
                        onClick={handleRejectAll}
                        disabled={isApproving}
                        className="flex-1 rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Từ chối
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <img
                    src="https://placehold.co/600x400?text=No+Images&font=roboto"
                    alt="No Images"
                    className="w-full rounded border border-gray-200"
                  />
                  <img
                    src="https://placehold.co/600x400?text=No+Images&font=roboto"
                    alt="No Images"
                    className="w-full rounded border border-gray-200"
                  />
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default UserDetail;
