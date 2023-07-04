import styled from "styled-components";

import { Card } from "components/Card";
import { Button } from "components/Button";

import rocketIcon from "../../assets/HomePage/RocketIcon.svg";
import banner1 from "../../assets/HomePage/Banner1.svg";
import avatar1 from "../../assets/HomePage/Avatar1.svg";


const HomePageStyled = styled.div`
  .container {
    width: 1050px;
    margin: 0px auto;
  }
`;
 
const BannerStyled = styled.div`
  margin-bottom: 160px;

  .container {
    display: flex;
    column-gap: 30px;
  }

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

const TrendingCollectionStyled = styled.div`
  .header_trending_collection h3 {
    color: #fff;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-transform: capitalize;
  }

  .header_trending_collection p {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
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
              fontSize={"16px"}
              fontWeight={"600"}
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
          <div className="banner_right">
            <Card
              title={"Space Walking"}
              img_product={banner1}
              bgColor={"#3B3B3B"}
              borderRadius={"20px"}
              img_artist={avatar1}
              name_artist={"Animakid"}
            ></Card>
          </div>
        </div>
      </BannerStyled>
      <TrendingCollectionStyled>
        <div className="container">
          <div className="header_trending_collection">
            <h3>Trending Collection</h3>
            <p>Checkout our weekly updated trending collection.</p>
          </div>
          <div className="body_trending_collection">
            <Card img_artist={avatar1} type={"TrendingCollection"} name_artist={"MrFox"} title={"DSGN Animals"}></Card>
          </div>
        </div>
      </TrendingCollectionStyled>
    </HomePageStyled>
  );
};

export default HomePage;
