import styled from "styled-components";

import { Card } from "components/Card";
import { Button } from "components/Button";

import rocketIcon from "../../assets/HomePage/RocketIcon.svg";
import rocketIcon2 from "../../assets/HomePage/RocketIcon2.svg";
import banner1 from "../../assets/HomePage/Banner1.svg";
import avatar1 from "../../assets/HomePage/Avatar1.svg";
import trending1 from "../../assets/HomePage/Trending1.svg";
import trending2 from "../../assets/HomePage/Trending2.svg";
import trending3 from "../../assets/HomePage/Trending3.svg";
import trending4 from "../../assets/HomePage/Trending4.svg";
import trending5 from "../../assets/HomePage/Trending5.svg";
import topCreator1 from "../../assets/HomePage/TopCreator/TopCreator1.png";

const trendingCollectionData = [
  {
    img_product: [trending1, trending2, trending3],
    img_artist: avatar1,
    name_artist: "MrFox",
    title: "DSGN Animals",
    type: "TrendingCollection",
  },
  {
    img_product: [trending1, trending2, trending3, trending4],
    img_artist: avatar1,
    name_artist: "MrFox",
    title: "DSGN Animals",
    type: "TrendingCollection",
  },
  {
    img_product: [trending1, trending2, trending3, trending4, trending5],
    img_artist: avatar1,
    name_artist: "MrFox",
    title: "DSGN Animals",
    type: "TrendingCollection",
  },
];

const topCreatorData = [
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
  {
    type: "TopCreatorHomePage",
    img_artist: topCreator1,
    name_artist: "Keepitreal",
    total_sales: 34.53,
  },
];

const HomePageStyled = styled.div`
  padding: 30px;

  .container {
    width: 1050px;
    margin: 0px auto;
  }

  @media (max-width: 991.98px) {
    .container {
      width: auto;
    }
  }

  @media (max-width: 767.98px) {
    .container {
      width: auto;
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 575.98px) {
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

  @media (max-width: 991.98px) {
    margin-bottom: 120px;
    .container {
      width: 100%;
    }

    .banner_left h1 {
      font-size: 38px;
    }

    .banner_left .statistical {
      justify-content: space-between;
      column-gap: 40px;
    }

    .banner_left .statistical h4 {
      font-size: 22px;
    }

    .banner_left .statistical span {
      font-size: 16px;
    }
  }

  @media (max-width: 767.98px) {
    margin-bottom: 80px;
    /* width: max-content; */
    .container {
      width: 100%;
      flex-direction: column;
    }

    .banner_left {
      width: unset;
      margin-bottom: 40px;
    }

    .banner_left h1 {
      font-size: 28px;
    }

    .banner_left p {
      font-size: 16px;
    }

    .banner_left button {
      width: 100%;
    }

    .banner_left .statistical {
      justify-content: space-between;
      column-gap: unset;
    }

    .banner_left .statistical h4 {
      font-size: 22px;
    }

    .banner_left .statistical span {
      font-size: 16px;
    }

    .banner_right {
      width: unset;
    }
  }

  @media (max-width: 575.98px) {
  }
`;

const TrendingCollectionStyled = styled.div`
  margin-bottom: 160px;
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

  .body_trending_collection {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
  }

  @media (max-width: 991.98px) {
    .header_trending_collection {
      margin-bottom: 40px;
    }

    .header_trending_collection h3 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    .header_trending_collection p {
      font-size: 16px;
    }

    .body_trending_collection {
      grid-template-columns: auto auto;
      gap: 30px;
    }

    .body_trending_collection .trending_collection_item:nth-child(n + 3) {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    .body_trending_collection {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .body_trending_collection .trending_collection_item:nth-child(n + 2) {
      display: none;
    }
  }

  @media (max-width: 575.98px) {
  }
`;

const TopCreatorStyled = styled.div`
  .header_top_creator {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 60px;
  }

  .header_top_creator .header_top_creator_left {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .header_top_creator .header_top_creator_left h3 {
    color: #fff;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-transform: capitalize;
  }

  .header_top_creator .header_top_creator_left p {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
  }

  .body_top_creator {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px;
  }

  @media (max-width: 991.98px) {
    .body_top_creator {
      grid-template-columns: auto auto;
    }

    .body_top_creator .top_creator_item:nth-child(n + 7) {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    .header_top_creator {
      flex-direction: column;
      align-items: unset;
      margin-bottom: 40px;
    }

    .header_top_creator .header_top_creator_left {
      margin-bottom: 40px;
    }

    .header_top_creator .header_top_creator_left h3 {
      font-size: 28px;
    }

    .header_top_creator .header_top_creator_left p {
      font-size: 16px;
    }

    .header_top_creator .header_top_creator_right button {
      width: 100%;
    }

    .body_top_creator {
      grid-template-columns: auto;
    }
  }
`;

const CategoriesStyled = styled.div`
  
`

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
            {trendingCollectionData
              ? trendingCollectionData.map((e, index) => (
                  <div className="trending_collection_item">
                    <Card
                      img_product={e.img_product}
                      img_artist={e.img_artist}
                      type={e.type}
                      name_artist={e.name_artist}
                      title={e.title}
                    ></Card>
                  </div>
                ))
              : null}
          </div>
        </div>
      </TrendingCollectionStyled>
      <TopCreatorStyled>
        <div className="container">
          <div className="header_top_creator">
            <div className="header_top_creator_left">
              <h3>Top Creators</h3>
              <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <div className="header_top_creator_right">
              <Button
                bgColor={"none"}
                border={"1px solid #A259FF"}
                content={"View Rankings"}
                borderRadius={"20px"}
                textColor={"#fff"}
                img={rocketIcon2}
              ></Button>
            </div>
          </div>
          <div className="body_top_creator">
            {topCreatorData
              ? topCreatorData.map((e, index) => (
                  <div className="top_creator_item">
                    <Card
                      number_id={index}
                      type={e.type}
                      img_artist={e.img_artist}
                      name_artist={e.name_artist}
                      total_sales={e.total_sales}
                    ></Card>
                  </div>
                ))
              : null}
          </div>
        </div>
      </TopCreatorStyled>
      <CategoriesStyled>
        <div className="header_category">
          <h3>Browse Categories</h3>
        </div>
        <div className="body_category">
          <div className="categories_item">
            <Card></Card>
          </div>
        </div>
      </CategoriesStyled>
    </HomePageStyled>
  );
};

export default HomePage;
