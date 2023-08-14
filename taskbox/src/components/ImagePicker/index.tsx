import { launchImageLibraryAsync } from 'expo-image-picker';
import { ImageContainer, ImageViewer } from './styled';

interface IImagePicker {
    image: string | null;
    editable: boolean;
    onChangeImage: (uri: string) => void;
}
export const ImagePicker = ({ image, editable, onChangeImage }: IImagePicker) => {
    const pickImageAsync = async () => {
        if (!editable) return;
        let result = await launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (result.assets) onChangeImage(result.assets[0].uri);
    };

    return (
        <ImageContainer onPress={pickImageAsync}>
            {image && <ImageViewer source={{ uri: image }} />}
        </ImageContainer>
    );
};
