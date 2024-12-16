import React, { useState, useEffect } from "react";
import { getImage } from "../../api/services/image";
import noImage from "../../assets/images/no-img.jpg";

const ImageComponent = ({ imageId, width }) => {
  const [src, setSrc] = useState("");
  const [imgWidth, setImgWidth] = useState(width || "25%");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageUrl = await getImage(imageId);
        if (imageUrl) {
          setSrc(imageUrl + "?t=" + new Date().getTime());
        } else {
          setSrc(noImage);
        }
      } catch (error) {
        setSrc(noImage);
        // console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [imageId]);

  return <img src={src} width={imgWidth} alt="Image" />;
};

export default ImageComponent;
