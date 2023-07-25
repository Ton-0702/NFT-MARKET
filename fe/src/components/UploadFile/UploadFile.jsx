import React, {useEffect, useRef} from 'react';

const UploadFile = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'clouddrive',
        uploadPreset: 'hieupham',
      },
      function (err, result) {
        console.log(result);
      }
    );
  }, []);

  return (
    <div>
      <button onClick={widgetRef.current.open}>Upload</button>
    </div>
  );
};

export default UploadFile;
