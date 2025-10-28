import { useEffect, useState } from "react";
import api from "../../lib/axios";

const UserItem = () => {
  // Base URL đã cấu hình trong axios instance (src/lib/axios.js)

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async (p = page, l = limit) => {
    try {
      setLoading(true);
      setError("");
      const res = await api.get("/user/list-user", {
        params: { page: p, limit: l },
      });
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
    fetchUsers(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
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

      {loading && <div className="py-4 text-gray-600">Đang tải...</div>}
      {error && (
        <div className="py-3 text-red-600">Lỗi tải danh sách: {error}</div>
      )}

      {!loading && !error && items.length === 0 && (
        <div className="py-4 text-gray-600">Không có người dùng</div>
      )}

      <div className="divide-y">
        {items.map((u) => (
          <div key={u._id} className="py-3">
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
                <span className="font-semibold">Giới tính:</span> {u.sex || "—"}
              </p>
              <p>
                <span className="font-semibold">Loại người:</span>{" "}
                {u.type === "khong" ? "Chưa khảo sát" : u.type || "—"}
              </p>
            </div>
          </div>
        ))}
      </div>

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
