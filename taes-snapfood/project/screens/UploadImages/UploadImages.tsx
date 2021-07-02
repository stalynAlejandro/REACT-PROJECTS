import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

interface IImage {
  localrUri: string
}

function UploadImages() {
  const [image, setImage] = useState<IImage | undefined>(undefined);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled) {
      return;
    }

    setImage({ localrUri: pickerResult.uri })
  }

  return (
    <View>
      {(image) &&
        <View>
          <Image source={{ uri: image.localrUri }} style={{ resizeMode: 'contain', width: 300, height: 300 }}></Image>
        </View>}

      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text style={{ marginTop: 40 }}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

export { UploadImages }