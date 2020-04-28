import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from '@react-navigation/native';

import Confirmation from './Confirmation';
import { search } from '../../actions/searchImage';

interface Props {
  route: Route<any>;
}

const ConfirmationContainer = ({ route }: Props) => {
  const dispatch = useDispatch();

  //@ts-ignore
  const { objectText } = route.params;

  return (
    <Confirmation
      fetchImages={(text: string, page: number) => search(text, page)}
      objectText={objectText}
    />
  );
};

export default ConfirmationContainer;
