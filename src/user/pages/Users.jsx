import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ruby",
      image:
        "https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
