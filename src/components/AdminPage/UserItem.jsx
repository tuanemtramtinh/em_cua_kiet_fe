import { useEffect, useState } from "react";
import api from "../../lib/axios";

const UserItem = ({ onUserClick, refreshTrigger }) => {
  // Base URL đã cấu hình trong axios instance (src/lib/axios.js)

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterApprovalStatus, setFilterApprovalStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = async (
    p = page,
    l = limit,
    type = filterType,
    approvalStatus = filterApprovalStatus,
    query = searchQuery,
  ) => {
    try {
      setLoading(true);
      setError("");

      let endpoint = "/user/list-user";
      const params = { page: p, limit: l };

      if (query && query.trim()) {
        // Nếu có search query, dùng API search
        endpoint = "/user/search";
        params.q = query.trim();
        if (type) {
          params.type = type;
        }
        if (approvalStatus) {
          params.approvalStatus = approvalStatus;
        }
      } else {
        // Nếu không có search query, dùng API list-user
        if (type) {
          params.type = type;
        }
        if (approvalStatus) {
          params.approvalStatus = approvalStatus;
        }
      }

      const res = await api.get(endpoint, { params });
      const data = res.data;
      if (data?.status !== "success") {
        throw new Error(data?.message || "Fetch users failed");
      }
      console.log(data);
      const payload = data.data || {};
      setItems(payload.items || []);
      setTotal(payload.pagination?.total || 0);
      setTotalPages(payload.pagination?.totalPages || 1);
    } catch (e) {
      const msg =
        e?.response?.data?.message || e?.message || "Đã có lỗi xảy ra";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1); // Reset về trang 1 khi filter thay đổi
    fetchUsers(1, limit, filterType, filterApprovalStatus, searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType, filterApprovalStatus, searchQuery]);

  useEffect(() => {
    fetchUsers(page, limit, filterType, filterApprovalStatus, searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  useEffect(() => {
    if (refreshTrigger > 0) {
      fetchUsers(page, limit, filterType, filterApprovalStatus, searchQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshTrigger]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  const getApprovalStatus = (user) => {
    if (user.approved === true) {
      return "Đã duyệt";
    }
    const imageCount = user.images?.length || 0;
    if (imageCount === 2) {
      return "Chưa duyệt";
    }
    return "Chưa tải ảnh";
  };

  const getApprovalStatusColor = (user) => {
    if (user.approved === true) {
      return "text-green-600";
    }
    const imageCount = user.images?.length || 0;
    if (imageCount === 2) {
      return "text-orange-600";
    }
    return "text-gray-600";
  };

  // Skeleton loading component
  const LoadingSkeleton = () => (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="animate-pulse space-y-3 border-b border-gray-200 pb-4"
        >
          <div className="h-4 w-3/4 rounded bg-gray-200"></div>
          <div className="h-4 w-2/3 rounded bg-gray-200"></div>
          <div className="h-4 w-4/5 rounded bg-gray-200"></div>
          <div className="h-4 w-1/2 rounded bg-gray-200"></div>
          <div className="h-4 w-2/5 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm theo username, tên hoặc email..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setPage(1);
              }}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md p-1 text-gray-400 hover:text-gray-600"
              title="Xóa tìm kiếm"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          <div>
            Trang {page}/{totalPages}
          </div>
          <div>Tổng {loading ? "..." : total} người dùng</div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700">Lọc theo loại:</label>
              <select
                className="rounded-md border px-2 py-1"
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value);
                }}
              >
                <option value="">Tất cả</option>
                <option value="Người quan sát">Người quan sát</option>
                <option value="Người kết nối">Người kết nối</option>
                <option value="Người sáng tạo">Người sáng tạo</option>
                <option value="khong">Chưa khảo sát</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700">Trạng thái ảnh:</label>
              <select
                className="rounded-md border px-2 py-1"
                value={filterApprovalStatus}
                onChange={(e) => {
                  setFilterApprovalStatus(e.target.value);
                }}
              >
                <option value="">Tất cả</option>
                <option value="Đã duyệt">Đã duyệt</option>
                <option value="Chưa duyệt">Chưa duyệt</option>
                <option value="Chưa tải ảnh">Chưa tải ảnh</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">Mỗi trang:</label>
            <select
              className="rounded-md border px-2 py-1"
              value={limit}
              onChange={(e) => {
                setPage(1);
                setLimit(parseInt(e.target.value, 10));
              }}
            >
              {[5, 10, 20, 50, 100].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <button
              className={`rounded-md border px-3 py-1 ${
                !canPrev ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={!canPrev}
              onClick={() => canPrev && setPage((p) => p - 1)}
            >
              Trước
            </button>
            <button
              className={`rounded-md border px-3 py-1 ${
                !canNext ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={!canNext}
              onClick={() => canNext && setPage((p) => p + 1)}
            >
              Sau
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="py-3 text-red-600">Lỗi tải danh sách: {error}</div>
      )}

      {loading ? (
        <LoadingSkeleton />
      ) : items.length === 0 ? (
        <div className="py-4 text-gray-600">Không có người dùng</div>
      ) : (
        <div className="divide-y">
          {items.map((u) => (
            <div
              key={u._id}
              className="cursor-pointer p-3 transition-colors hover:bg-gray-100"
              onClick={() => onUserClick && onUserClick(u)}
            >
              <div className="flex w-full flex-col gap-2">
                <p>
                  <span className="font-semibold">Tên:</span> {u.name || "—"}
                </p>
                <p>
                  <span className="font-semibold">Username:</span> {u.username}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {u.email || "—"}
                </p>
                <p>
                  <span className="font-semibold">Giới tính:</span>{" "}
                  {u.sex || "—"}
                </p>
                <p>
                  <span className="font-semibold">Loại người:</span>{" "}
                  {u.type === "khong" ? "Chưa khảo sát" : u.type || "—"}
                </p>
                <p>
                  <span className="font-semibold">Trạng thái duyệt ảnh:</span>{" "}
                  <span className={getApprovalStatusColor(u)}>
                    {getApprovalStatus(u)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          Trang {page}/{totalPages} • Tổng {total} người dùng
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700">Mỗi trang:</label>
          <select
            className="rounded-md border px-2 py-1"
            value={limit}
            onChange={(e) => {
              setPage(1);
              setLimit(parseInt(e.target.value, 10));
            }}
          >
            {[5, 10, 20, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <button
            className={`rounded-md border px-3 py-1 ${
              !canPrev ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={!canPrev}
            onClick={() => canPrev && setPage((p) => p - 1)}
          >
            Trước
          </button>
          <button
            className={`rounded-md border px-3 py-1 ${
              !canNext ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={!canNext}
            onClick={() => canNext && setPage((p) => p + 1)}
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
