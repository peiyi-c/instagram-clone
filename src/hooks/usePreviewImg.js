import { useState } from "react";
import useShowToast from "./useShowToast";

<<<<<<< HEAD
const usePreviewImg = () => {
=======
function usePreviewImg() {
>>>>>>> 23f6736714ca4bd2a5d21ae3246f5faf5bf819d6
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        showToast("Error", "File size must be less than 2MB", "error");
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      showToast("Error", "Please select an image file", "error");
      setSelectedFile(null);
    }
  };
  return { selectedFile, setSelectedFile, handleImageChange };
<<<<<<< HEAD
};
=======
}
>>>>>>> 23f6736714ca4bd2a5d21ae3246f5faf5bf819d6

export default usePreviewImg;
