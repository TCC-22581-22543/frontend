import { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { DefaultImageContent, ProfileImageContainer } from "./styles";

export default function ProfilePhoto(){
    const [imageUri, setImageUri] = useState<string | null>(null);

    return (
      <TouchableOpacity>
        <ProfileImageContainer >
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} />
          ) : (
            <DefaultImageContent size={50}/>
          )}
        </ProfileImageContainer>
      </TouchableOpacity>
    );
};
