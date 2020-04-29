import React from 'react';
import { Route, NavigationProp } from '@react-navigation/native';

import Confirmation from './Confirmation';
import { search } from '../../actions/searchImage';
import { useDispatch } from 'react-redux';

interface Props {
  route: Route<any>;
  navigation: NavigationProp<any>;
}

const ConfirmationContainer = ({ route, navigation }: Props) => {
  const dispatch = useDispatch();
  //@ts-ignore
  const { objectText } = route.params;

  const confirm = (thing: string, imageUrl: string) => {
    console.log('das');
    dispatch({ type: 'CHOOSE_THING', payload: { thing, imageUrl } });
    navigation.navigate('Tag');
  };

  return (
    <Confirmation
      fetchImages={(text: string, page: number) => search(text, page)}
      objectText={objectText}
      confirm={confirm}
    />
  );
};

export default ConfirmationContainer;
