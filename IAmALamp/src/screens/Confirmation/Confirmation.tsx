import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';

import BackgroundView from '../../components/BackgroundView';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import Link from '../../components/Link';
import { RefreshImageIcon } from '../../components/Icon';
import { HeartIcon } from '../../components/Icon';

import styles from './styles';

interface Props {
  fetchImages: (text: string, pageNumber: number) => Promise<any>;
  objectText: string;
}

const Confirmation = ({ fetchImages, objectText }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState([]);

  const handleFetchImages = () => {
    fetchImages(objectText, pageNumber).then((data) => {
      setImages(data);
    });
  };

  useEffect(() => {
    if (!images.length) {
      handleFetchImages();
    } else {
      setImageUrl(images[imageIndex]);
    }
  }, [images, objectText]);

  const nextImage = () => {
    if (images.length <= imageIndex + 1) {
      setPageNumber(pageNumber + 1);
      setImageIndex(0);

      handleFetchImages();
    } else {
      setImageUrl(images[imageIndex + 1]);
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <BackgroundView customStyle={styles.bodyWrapper}>
      <View style={styles.body}>
        <View style={styles.objectImage}>
          {!!imageUrl && (
            <Image style={styles.image} source={{ uri: imageUrl }} />
          )}

          <View style={styles.refreshImage}>
            <Link onPress={nextImage}>
              <RefreshImageIcon />
            </Link>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Yeah! You’re a
            <Text style={styles.titleObjectText}> {objectText} </Text>now
          </Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitleTextNumber}>32</Text>
          <Text style={styles.subTitleText}>
            people are living as
            <Text style={styles.subTitleObjectText}> {objectText} </Text>right
            now.
          </Text>
        </View>
        <View style={styles.lifeText}>
          <Text style={styles.subTitleText}>
            Are you ok to live
            <Text style={styles.subTitleObjectText}> 7 days </Text>as a
            <Text style={styles.subTitleObjectText}> {objectText}</Text>?
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          width={165}
          onPress={() => {}}
          label="Yes!!!"
          icon={<HeartIcon />}
        />
        <SecondaryButton width={165} onPress={() => {}} label="Cancel" />
      </View>
    </BackgroundView>
  );
};

export default Confirmation;
