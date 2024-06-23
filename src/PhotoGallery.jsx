import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import WavyText from './magicui/WavyText';
import api from './Axios';

const PhotoGallery = () => {

  const [ImageData, setImageData] = useState([])

  useEffect(() => {
    fetchPhotos()
  }, [])

  const photos = [
    { src: 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'France' },
    { src: 'https://plus.unsplash.com/premium_photo-1661963476845-78adb576dcbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Portugal' },
    { src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'City' },
    { src: 'https://plus.unsplash.com/premium_photo-1683408267588-ebc95a4cf9a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Forest' },
    { src: 'https://images.unsplash.com/photo-1556609894-0ae309cb8354?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Lake' },
    { src: 'https://plus.unsplash.com/premium_photo-1676139860147-0305ab85bdca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Lake' },
    { src: 'https://images.unsplash.com/photo-1613356522023-e95206f99214?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Lake' },
    { src: 'https://plus.unsplash.com/premium_photo-1680102981920-cbdc911b7556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Lake' },
    { src: 'https://images.unsplash.com/photo-1544002177-fce4696659d8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Lake' },
    { src: 'https://images.unsplash.com/photo-1612769254949-deb42c1fbbf7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Lake' },
    { src: 'https://images.unsplash.com/photo-1541438633571-9578b70ae5bf?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Lake' },
    { src: 'https://images.unsplash.com/photo-1583364481915-dacea3e06d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Lake' },
  ];

  const getPhotoColumns = (photos, numCols) => {
    const columns = Array.from({ length: numCols }, () => []);
    photos.forEach((photo, index) => {
      columns[index % numCols].push(photo);
    });
    return columns;
  };

  const fetchPhotos = async () => {
    try {
      const response = await api.get('/photos');
      if (response.status === 200) {
        setImageData(response.data)
      }
    } catch (error) {
      console.log(`error on fetchPhotos: ${error}`);
    }
  }

  const columns = getPhotoColumns(ImageData, 4);
  
  return (
    <div className="container mx-auto p-4">
      <WavyText
        word="Travel Gallery"
        className="text-4xl font-bold text-black mb-10"
      />
      <div className="md:flex gap-5">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="h-fit space-y-5">
            {col.map((photo, photoIndex) => (
              <motion.div
                key={photoIndex}
                className="relative overflow-hidden rounded-lg shadow-lg h-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                  {photo.caption}
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
