import React from 'react';
import ProfileSection from '../components/ProfilePage/ProfileSection';

const Profile = () => {
  return (
    <div className="bg-[url(/background.svg)] bg-cover bg-center min-h-screen">
      <div className="container mx-auto py-10">
        <h2 className="text-7xl text-center font-bold mb-4" style={{ color: '#ff9c33' }}>THÔNG TIN TÀI KHOẢN</h2>
        <div className="mt-16">
          <ProfileSection />
        </div>
      </div>
    </div>
  );
};

export default Profile;