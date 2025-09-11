import React, { useState } from 'react';
import LeftProfileSection from './LeftProfileSection';
import RightProfileSection from './RightProfileSection';

const ProfileSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    favoriteSubject: "",
    username: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-between max-w-6xl mx-auto">
      <div>
        <LeftProfileSection formData={formData} handleChange={handleChange} />
      </div>
      <RightProfileSection formData={formData} />
    </div>
  );
};

export default ProfileSection;