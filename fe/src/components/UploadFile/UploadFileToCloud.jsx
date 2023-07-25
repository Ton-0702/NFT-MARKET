import React, {useState} from 'react';

const UploadFileToCloud = () => {
  const token = '245|2149ij1Ok6kXDnI0Hu07VtktIho1UNFxDv67uhjJ';
  const [image, setImage] = useState('');

  console.log(image);
  console.log('name', image.name);
  console.log('webkitRelativePath', image.webkitRelativePath);

  const handleChangeImage = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    console.log('image: ', image);
    const formData = new FormData();

    formData.append('file', image);
    console.log(formData);

    const fetchData = fetch(`https://helurl.com/api/v1/uploads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: formData,
    }).then((res) => res.json);
    console.log('fetchData: ', fetchData);
  };

  return (
    <div>
      <input type="file" name="file" onChange={handleChangeImage} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadFileToCloud;
