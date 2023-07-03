import styled from "styled-components";
import { Button } from "../../Component/Button";

import rocketIcon from "../../Assets/HomePage/RocketIcon.svg";

const HomePageStyled = styled.div`
  .container {
    width: 1050px;
    margin: 0px auto;
  }
`;

const BannerStyled = styled.div`
  display: flex;

  .banner_left {
    width: 50%;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }

  .banner_left h1 {
    color: #fff;
    font-size: 67px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    text-transform: capitalize;
    display: flex;
    width: 510px;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
  }

  .banner_left p {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
  }

  .banner_left .statistical {
    display: flex;
    justify-content: start;
    column-gap: 80px;
  }

  .banner_left .statistical h4 {
    color: #fff;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    text-transform: capitalize;
  }

  .banner_left .statistical span {
    color: #fff;
    font-size: 23.99px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
  }

  .banner_right {
    width: 50%;
  }
`;

const HomePage = () => {
  return (
    <HomePageStyled>
      <BannerStyled>
        <div className="container">
          <div className="banner_left">
            <h1>Discover digital art & Collect NFTs</h1>
            <p>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <Button
              img={rocketIcon}
              content={"Get Started"}
              borderRadius={"20px"}
              bgColor={"#A259FF"}
              textColor={"#FFF"}
            ></Button>
            <div className="statistical">
              <div className="statistical_left">
                <h4>240k+</h4>
                <span>Total Sale</span>
              </div>
              <div className="statistical_middle">
                <h4>100k+</h4>
                <span>Auctions</span>
              </div>
              <div className="statistical_right">
                <h4>240k+</h4>
                <span>Artists</span>
              </div>
            </div>
          </div>
          <div className="banner_right"></div>
        </div>
      </BannerStyled>
    </HomePageStyled>
  );
};

export default HomePage;
