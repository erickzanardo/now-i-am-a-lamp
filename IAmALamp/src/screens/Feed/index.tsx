import React from 'react';
import Feed from './Feed';

const FeedContainer = () => {
  return (
    <Feed
      object="Shoe"
      days={2}
      message="418"
      expireDate="3 days to say good bye"
      avatarUrl="https://s2.glbimg.com/hzJUjecqvH_F_eIdyaUvdEZlZ9k=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/6/d7OX4gSbmIPOBJA5vYpw/cat.jpg"
      tags={['House', 'Car', 'Ship']}
    />
  );
};

export default FeedContainer;
