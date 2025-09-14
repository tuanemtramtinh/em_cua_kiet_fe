import apiUrl from "../../constants/constant";

const RightProfileSection = ({
  formData,
  editMode,
  onEditClick,
  onSaveClick,
  loading,
  handleAvatarChange,
}) => {
  const getAvatarUrl = () => {
    if (formData.avatar && formData.avatar.startsWith("data:")) {
      return formData.avatar;
    }
    if (formData.avatar && formData.avatar.startsWith("http")) {
      return formData.avatar;
    }
    if (formData.username) {
      return `${apiUrl}user/get-avatar/${formData.username}?t=${Date.now()}`;
    }
    return "/avatar-placeholder.svg";
  };
  return (
    <div className="flex w-1/3 flex-col items-center justify-center">
      <div className="relative mb-6">
        <img
          src={getAvatarUrl()}
          alt="Avatar"
          className="h-72 w-72 rounded-full bg-yellow-200 object-cover"
        />
        {editMode && (
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded bg-white px-2 py-1 text-xs"
            style={{ width: "80%" }}
          />
        )}
      </div>
      {editMode ? (
        <button
          type="button"
          className="rounded-full border-2 border-[#ff9c33] bg-[#ff9c33] px-10 py-2 font-bold text-white"
          style={{ maxWidth: "220px", width: "100%" }}
          onClick={onSaveClick}
          disabled={loading}
        >
          {loading ? "Đang lưu..." : "LƯU"}
        </button>
      ) : (
        <button
          type="button"
          className="rounded-full border-2 border-[#ff9c33] bg-[#ff9c33] px-10 py-2 font-bold text-white"
          style={{ maxWidth: "220px", width: "100%" }}
          onClick={onEditClick}
        >
          CHỈNH SỬA
        </button>
      )}
    </div>
  );
};

export default RightProfileSection;
