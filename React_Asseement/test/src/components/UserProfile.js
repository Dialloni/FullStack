import React from 'react';
import UserProfileHeader from './UserProfileHeader';
import UserProfileInfo from './UserProfileInfo';
import UserProfilePosts from './UserProfilePosts';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <UserProfileHeader />
      <UserProfileInfo name={user.name} bio={user.bio} avatarUrl={user.avatar} />
      <UserProfilePosts />
    </div>
  );
}

export default UserProfile;