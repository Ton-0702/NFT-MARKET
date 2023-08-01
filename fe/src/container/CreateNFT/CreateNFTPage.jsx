import {PrimaryLayout} from 'components/Layout';
import styled from 'styled-components';
import {colors} from 'Global';
import {Button} from 'components/Button';
import React, {useState} from 'react';
import axios from 'axios';

import profile_image from '../../assets/profile_detail/profile_image.png';
import {Navigate, useNavigate} from 'react-router-dom';
import {useCurrentUserStore} from 'store/store';
import {BASE_URL} from 'store/url';

const CreateNFTStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .container_profile_detail {
    padding: 30px;
  }

  .container_profile_detail .profile_detail {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 30px;
  }

  .container_profile_detail .profile_detail h2 {
    margin-top: 30px;
    font-size: 51px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
  }

  .profile_detail_form form {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .profile_detail_form form .profile_detail_form_left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60%;
  }

  .profile_detail_form form .profile_detail_form_item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .profile_detail_form form .profile_detail_form_item label {
    font-size: 16px;
    font-weight: 600;
  }

  .profile_detail_form form .profile_detail_form_item input {
    cursor: text;
    border-radius: 12px;
    border: 1px solid ${colors.borderColor};
    text-indent: 12px;
    height: 48px;
    font-size: 16px;
    width: 100%;
  }

  .profile_detail_form form .profile_detail_form_item input:hover {
    transition: box-shadow 0.25s ease-in-out 0s,
      border-color 0.25s ease-in-out 0s;
    border-color: ${colors.backgroundColor2};
  }

  .profile_detail_form form .profile_detail_form_item input:focus {
    outline: none;
    border-color: ${colors.backgroundColor2};
  }

  .ck .ck-sticky-panel__content {
    max-width: 325px;
  }

  .ck.ck-content:not(.ck-comment__input *) {
    min-height: 200px;
    max-width: 305px;
    overflow-wrap: anywhere;
  }

  .profile_detail_form form .profile_detail_form_item textarea {
    cursor: text;
    border-radius: 12px;
    border: 1px solid ${colors.borderColor};
    padding: 12px;
    height: 48px;
    font-size: 16px;
    resize: vertical;
  }

  .profile_detail_form form .profile_detail_form_item textarea:hover {
    transition: box-shadow 0.25s ease-in-out 0s,
      border-color 0.25s ease-in-out 0s;
    border-color: ${colors.backgroundColor2};
  }

  .profile_detail_form form .profile_detail_form_item textarea:focus {
    outline: none;
    border-color: ${colors.backgroundColor2};
  }

  .profile_detail_form form .profile_detail_form_item p {
    font-weight: 500;
    font-size: 12px;
    color: ${colors.blackColor};
  }

  .profile_detail_form form .profile_detail_form_item .social_connect {
    display: flex;
    justify-content: space-between;
  }

  .profile_detail_form
    form
    .profile_detail_form_item
    .social_connect
    .social_connect_left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .profile_detail_form
    form
    .profile_detail_form_item
    .social_connect
    .social_connect_left
    i {
    font-size: 24px;
    color: ${colors.blackColor};
  }

  .profile_detail_form
    form
    .profile_detail_form_item
    .social_connect
    .social_connect_left
    span {
    font-weight: 600;
    font-size: 16px;
  }

  .profile_detail_form form .profile_detail_form_item .link_input {
    position: relative;
  }

  .profile_detail_form form .profile_detail_form_item .link_input i {
    position: absolute;
    font-size: 24px;
    color: ${colors.blackColor};
    top: 13px;
    left: 10px;
  }

  .profile_detail_form form .profile_detail_form_item .link_input input {
    text-indent: 40px;
  }

  .profile_detail_form form .profile_detail_form_item .profile_image_input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .profile_detail_form form .profile_detail_form_item .profile_image_input img {
    max-width: 150px;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .profile_detail_form
    form
    .profile_detail_form_item
    .profile_image_input
    img:hover {
    opacity: 0.7;
  }

  .profile_detail_form
    form
    .profile_detail_form_item
    .profile_image_input
    input[type='file'] {
    display: none;
  }

  .profile_detail_form
    form
    .profile_detail_form_item
    .profile_background_image_input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .profile_detail_form
    form
    .profile_detail_form_item
    .profile_background_image_input
    img {
    max-width: 150px;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }

  .profile_detail_form
    form
    .profile_detail_form_item
    .profile_background_image_input
    img:hover {
    opacity: 0.7;
  }

  .profile_detail_form
    form
    .profile_detail_form_item
    .profile_background_image_input
    input[type='file'] {
    display: none;
  }

  .profile_detail_form form .profile_detail_form_right {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }

  .profile_detail_form form .profile_detail_form_right button {
    width: 100%;
  }

  .profile_detail_form form .profile_detail_form_right button:hover {
    opacity: 0.7;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
  }

  //
  @media (max-width: 575.98px) {
    .container_profile_detail .profile_detail h2 {
      font-size: 38px;
    }

    .ck.ck-content:not(.ck-comment__input *) {
      min-height: unset;
      max-width: unset;
    }

    .profile_detail_form form {
      flex-direction: column;
    }

    .profile_detail_form form .profile_detail_form_left {
      width: unset;
    }

    .profile_detail_form form .profile_detail_form_right {
      width: unset;
      align-items: unset;
      justify-content: space-between;
    }
  }
`;

const CreateNFTPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const userAddressWallet = useCurrentUserStore((state) => state.currentUser);
  console.log('userAddressWallet:', userAddressWallet.account_id);

  const [formValue, setFormValue] = useState({
    nft_name: '',
    description: '',
    price: '',
    // profile_image: document.getElementById('profile_image'),
    profile_image: '',
    date_start_bid: '',
    date_end_bid: '',
    account_id: userAddressWallet.account_id,
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setFormValue((prevState) => ({...prevState, [name]: value}));
  };

  const handleSubmitForm = (e) => {
    const FormData = require('form-data');
    e.preventDefault();
    console.log(formValue);
    const img = `https://drive.google.com/uc?export=view&id=1B8nZDfctt8VyxTNVbYwzzlVZAn5NsHHz`;
    // https://drive.google.com/file/d/1B8nZDfctt8VyxTNVbYwzzlVZAn5NsHHz/view
    const formData = new FormData();
    formData.append('nft_name', formValue.nft_name);
    formData.append('description', formValue.description);
    formData.append('price', formValue.price);
    // formData.append('image', formValue.profile_image);
    formData.append('image', img);
    formData.append('date_start_bid', formValue.date_start_bid);
    formData.append('date_end_bid', formValue.date_end_bid);
    formData.append('account_id', userAddressWallet.account_id);
    console.log(formData.get('profile_image'));

    axios
      .post(`${BASE_URL}/nfts/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function (response) {
        // console.log("response: ", response.data.data[0]);
        navigate(`/nft-detail-page/${response.data.data.nft_id}`, {
          state: {dataNft: response.data.data},
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <PrimaryLayout>
      <CreateNFTStyled>
        <div className="container_profile_detail">
          <div className="profile_detail">
            <h2>Create NFT</h2>
            <div className="profile_detail_form">
              <form>
                <div className="profile_detail_form_left">
                  <div className="profile_detail_form_item">
                    <label htmlFor="nftname">NFT name</label>
                    <input
                      type="text"
                      name="nft_name"
                      id="nft_name"
                      placeholder="Enter NFT name"
                      value={formValue.nft_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="profile_detail_form_item">
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      id="description"
                      cols="20"
                      rows="2"
                      placeholder="Tell the world your story!"
                      value={formValue.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="profile_detail_form_item">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Enter Price"
                      value={formValue.price}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div className="profile_detail_form_right">
                  <div className="profile_detail_form_item">
                    <label
                      htmlFor="profile_image"
                      className="profile_background_image_input"
                    >
                      <span>Image NFT</span>
                      <img src={profile_image} alt="" />
                      <input
                        type="file"
                        name="profile_image"
                        id="profile_image"
                        accept="image/*"
                        value={formValue.profile_image}
                        onChange={handleChange}
                      ></input>
                    </label>
                  </div>
                  <div className="profile_detail_form_item">
                    <label htmlFor="date_start_bid">Date Start Bid</label>
                    <input
                      type="datetime-local"
                      name="date_start_bid"
                      id="date_start_bid"
                      value={formValue.date_start_bid}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="profile_detail_form_item">
                    <label htmlFor="Date_end_bid">Date End Bid</label>
                    <input
                      type="datetime-local"
                      name="date_end_bid"
                      id="date_end_bid"
                      value={formValue.date_end_bid}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    content={'Save'}
                    bgColor={'rgb(71, 30, 84)'}
                    textColor={colors.whiteColor}
                    padding={'10px 0px'}
                    jutifyContent={'center'}
                    borderRadius={'12px'}
                    width={'100%'}
                    onClick={handleSubmitForm}
                  ></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </CreateNFTStyled>
    </PrimaryLayout>
  );
};

// const CreateNFTPage = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formValue, setFormValue] = useState({
//     nft_name: "",
//     description: "",
//     price: "",
//     profile_image: null,
//     date_start_bid: "",
//     date_end_bid: "",
//   });

//   const handleChange = (e) => {
//     e.persist();
//     const { name, value } = e.target;
//     let newValue = value;

//     if (name === "profile_image") {
//       newValue = e.target.files[0];
//     }

//     setFormValue((prevState) => ({ ...prevState, [name]: newValue }));
//   };

//   const handleSubmitForm = (e) => {
//     e.preventDefault();

//     if (isSubmitting) {
//       return;
//     }

//     setIsSubmitting(true);

//     const formData = new FormData();
//     formData.append("nft_name", formValue.nft_name);
//     formData.append("description", formValue.description);
//     formData.append("price", formValue.price);
//     formData.append("profile_image", formValue.profile_image);
//     formData.append("date_start_bid", formValue.date_start_bid);
//     formData.append("date_end_bid", formValue.date_end_bid);

//     axios
//       .post("http://localhost:8080/nfts/create", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then(function (response) {
//         console.log(response);
//         setIsSubmitting(false);
//       })
//       .catch(function (error) {
//         console.log(error);
//         setIsSubmitting(false);
//       });
//   };

//   return (
//     <PrimaryLayout>
//       <CreateNFTStyled>
//         <div className="container_profile_detail">
//           <div className="profile_detail">
//             <h2>Create NFT</h2>
//             <div className="profile_detail_form">
//               <form>
//                 <div className="profile_detail_form_left">
//                   <div className="profile_detail_form_item">
//                     <label htmlFor="nftname">NFT name</label>
//                     <input
//                       type="text"
//                       name="nft_name"
//                       id="nft_name"
//                       placeholder="Enter NFT name"
//                       value={formValue.nft_name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="profile_detail_form_item">
//                     <label htmlFor="description">Description</label>
//                     <textarea
//                       name="description"
//                       id="description"
//                       cols="20"
//                       rows="2"
//                       placeholder="Tell the world your story!"
//                       value={formValue.description}
//                       onChange={handleChange}
//                     ></textarea>
//                   </div>
//                   <div className="profile_detail_form_item">
//                     <label htmlFor="price">Price</label>
//                     <input
//                       type="number"
//                       name="price"
//                       id="price"
//                       placeholder="Enter Price"
//                       value={formValue.price}
//                       onChange={handleChange}
//                     ></input>
//                   </div>
//                 </div>
//                 <div className="profile_detail_form_right">
//                   <div className="profile_detail_form_item">
//                     <label
//                       htmlFor="profile_image"
//                       className="profile_background_image_input"
//                     >
//                       <span>Image NFT</span>
//                       {formValue.profile_image && (
//                         <img
//                           src={URL.createObjectURL(formValue.profile_image)}
//                           alt=""
//                         />
//                       )}
//                       {!formValue.profile_image && <span>No image selected</span>}
//                       <input
//                         type="file"
//                         name="profile_image"
//                         id="profile_image"
//                         accept="image/*"
//                         onChange={handleChange}
//                       ></input>
//                     </label>
//                   </div>
//                   <div className="profile_detail_form_item">
//                     <label htmlFor="date_start_bid">Date Start Bid</label>
//                     <input
//                       type="datetime-local"
//                       name="date_start_bid"
//                       id="date_start_bid"
//                       value={formValue.date_start_bid}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="profile_detail_form_item">
//                     <label htmlFor="Date_end_bid">Date End Bid</label>
//                     <input
//                       type="datetime-local"
//                       name="date_end_bid"
//                       id="date_end_bid"
//                       value={formValue.date_end_bid}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <Button
//                     content={"Save"}
//                     bgColor={"rgb(71, 30, 84)"}
//                     textColor={colors.whiteColor}
//                     padding={"10px 0px"}
//                     jutifyContent={"center"}
//                     borderRadius={"12px"}
//                     width={"100%"}
//                     onClick={handleSubmitForm}
//                   ></Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </CreateNFTStyled>
//     </PrimaryLayout>
//   );
// };

export default CreateNFTPage;
