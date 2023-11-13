import { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { DefaultImageContent, ProfileImageContainer } from "./styles";
import { AntDesign } from '@expo/vector-icons'

export default function ProfilePhoto(){
    const [imageUri, setImageUri] = useState<string | null>(null);

    return (
      <TouchableOpacity>
        <ProfileImageContainer >
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} />
          ) : (
            <AntDesign name="smile-circle" size={160} color={"white"}/>
          )}
        </ProfileImageContainer>
      </TouchableOpacity>
    );
};
