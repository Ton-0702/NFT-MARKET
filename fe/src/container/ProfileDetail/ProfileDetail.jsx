import styled from "styled-components";
import { colors } from "Global";
import { PrimaryLayout } from "components/Layout";
import { Button } from "components/Button";

import profile_image from "../../assets/profile_detail/profile_image.png";

const ProfileDetailStyled = styled.div`
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

  .progressbar {
    counter-reset: step;
    width: 100%;
    display: flex;
  }

  .progressbar li {
    position: relative;
    list-style: none;
    width: 33.33%;
    text-align: center;
    font-size: 16px;
    z-index: 1;
  }

  /* Circles */
  .progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 40px;
    height: 40px;
    border: 1px solid ${colors.backgroundColor2};
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: ${colors.backgroundColor2};
    color: #ffffff;
    /* Center # in circle */
    line-height: 39px;
  }

  .progressbar li:after {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    background: ${colors.borderColor};
    top: 20px; /*half of height Parent (li) */
    left: -25%;
  }

  .progressbar li:first-child:after {
    content: none;
  }

  .progressbar li.active:before {
    background: rgb(71, 30, 84);
    content: "✔";
    color: #ffffff;
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
    input[type="file"] {
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
    input[type="file"] {
    display: none;
  }

  .profile_detail_form form .profile_detail_form_right {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: end;
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
    .profile_detail_form form {
      flex-direction: column;
    }

    .profile_detail_form form .profile_detail_form_left {
      width: unset;
    }

    .profile_detail_form form .profile_detail_form_right {
      width: unset;
      flex-direction: unset;
      align-items: unset;
      justify-content: space-between;
    }
  }
`;

const ProfileDetail = () => {
  return (
    <PrimaryLayout>
      <ProfileDetailStyled>
        <div className="container_profile_detail">
          <div className="profile_detail">
            <ul class="progressbar">
              <li class="active">Step 1</li>
              <li class="active">Step 2</li>
              <li>Step 3</li>
            </ul>
            <h2>Profile Details</h2>
            <div className="profile_detail_form">
              <form>
                <div className="profile_detail_form_left">
                  <div className="profile_detail_form_item">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="profile_detail_form_item">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      name="bio"
                      id="bio"
                      cols="20"
                      rows="2"
                      placeholder="Tell the world your story!"
                    ></textarea>
                  </div>
                  <div className="profile_detail_form_item">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="bio"
                      id="bio"
                      placeholder="Enter email"
                    ></input>
                  </div>
                  <div className="profile_detail_form_item">
                    <label htmlFor="social">Social Connections</label>
                    <p>
                      Help collectors verify your account by connecting social
                      accounts
                    </p>
                    <div className="social_connect">
                      <div className="social_connect_left">
                        <i class="fa-brands fa-twitter"></i>
                        <span>Twitter</span>
                      </div>
                      <div className="social_connect_right">
                        <Button
                          content={"Connect"}
                          bgColor={"rgb(71, 30, 84)"}
                          borderRadius={"12px"}
                          textColor={colors.whiteColor}
                          padding={"11px 24px"}
                          fontWeight={"600"}
                        ></Button>
                      </div>
                    </div>
                    <div className="social_connect">
                      <div className="social_connect_left">
                        <i class="fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                      </div>
                      <div className="social_connect_right">
                        <Button
                          content={"Connect"}
                          bgColor={"rgb(71, 30, 84)"}
                          borderRadius={"12px"}
                          textColor={colors.whiteColor}
                          padding={"11px 24px"}
                          fontWeight={"600"}
                        ></Button>
                      </div>
                    </div>
                  </div>
                  <div className="profile_detail_form_item">
                    <label htmlFor="link">Link</label>
                    <div className="link_input">
                      <i class="fa-solid fa-earth-americas"></i>
                      <input
                        type="url"
                        name="link"
                        id="link"
                        placeholder="yoursite.io"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="profile_detail_form_right">
                  <div className="profile_detail_form_item">
                    <label
                      htmlFor="profile_image"
                      className="profile_image_input"
                    >
                      <span>Profile Image</span>
                      <img src={profile_image} alt="" />
                      <input
                        type="file"
                        name="profile_image"
                        id="profile_image"
                        accept="image/*"
                      ></input>
                    </label>
                  </div>
                  <div className="profile_detail_form_item">
                    <label
                      htmlFor="profile_background_image"
                      className="profile_background_image_input"
                    >
                      <span>Profile Banner</span>
                      <img src={profile_image} alt="" />
                      <input
                        type="file"
                        name="profile_background_image"
                        id="profile_background_image"
                        accept="image/*"
                      ></input>
                    </label>
                    <Button
                      content={"Save"}
                      bgColor={"rgb(71, 30, 84)"}
                      textColor={colors.whiteColor}
                      padding={"10px 0px"}
                      jutifyContent={"center"}
                      borderRadius={"12px"}
                    ></Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ProfileDetailStyled>
    </PrimaryLayout>
  );
};

export default ProfileDetail;