import styled from "styled-components";
import { colors } from "Global";
import { PrimaryLayout } from "components/Layout";

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
              <form action="">
                
              </form>
            </div>
          </div>
        </div>
      </ProfileDetailStyled>
    </PrimaryLayout>
  );
};

export default ProfileDetail;
