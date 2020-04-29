import React from 'react';
import Feed from './Feed';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';

const FeedContainer = () => {
  const thing = useSelector((state: RootState) => state.user.thing);

  const messages = [
    {
      thing: 'Glasses',
      message: 'Red glasses to see better',
      avatarUrl:
        'https://cdn5.colorir.com/desenhos/color/201627/oculos-modernos-moda-pintado-por-jujutop-1271473.jpg',
      expireDate: '3 days to say good bye',
    },
    {
      thing: 'Lamp',
      message: 'What?!',
      avatarUrl: 'https://cdn5.colorir.com/desenhos/pintar/abajur.png',
      expireDate: '1 day to say good bye',
    },
  ];
  return (
    <Feed
      object={thing!.name}
      days={2}
      avatarUrl={thing!.imageUrl}
      tags={thing!.tags}
      messages={messages}
    />
  );
};

export default FeedContainer;
