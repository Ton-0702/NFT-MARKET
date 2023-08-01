import styled from 'styled-components';
import axios from 'axios';

import {Card} from 'components/Card';
import {Button} from 'components/Button';
import {PrimaryLayout} from 'components/Layout';
import {InputFooter} from 'components/Input';

import rocketIcon from '../../assets/HomePage/RocketIcon.svg';
import rocketIcon2 from '../../assets/HomePage/RocketIcon2.svg';
import banner1 from '../../assets/HomePage/Banner1.svg';
import avatar1 from '../../assets/HomePage/Avatar1.svg';
import trending1 from '../../assets/HomePage/Trending1.svg';
import trending2 from '../../assets/HomePage/Trending2.svg';
import trending3 from '../../assets/HomePage/Trending3.svg';
import trending4 from '../../assets/HomePage/Trending4.svg';
import trending5 from '../../assets/HomePage/Trending5.svg';
import topCreator1 from '../../assets/HomePage/TopCreator/TopCreator1.png';
import cate1a from '../../assets/HomePage/Categories/cate1a.png';
import cate1b from '../../assets/HomePage/Categories/cate1b.svg';
import cate2a from '../../assets/HomePage/Categories/cate2a.png';
import cate2b from '../../assets/HomePage/Categories/cate2b.svg';
import cate3a from '../../assets/HomePage/Categories/cate3a.png';
import cate3b from '../../assets/HomePage/Categories/cate3b.svg';
import cate5a from '../../assets/HomePage/Categories/cate5a.png';
import cate5b from '../../assets/HomePage/Categories/cate5b.svg';
import cate6a from '../../assets/HomePage/Categories/cate6a.png';
import cate6b from '../../assets/HomePage/Categories/cate6b.svg';
import cate7a from '../../assets/HomePage/Categories/cate7a.png';
import cate7b from '../../assets/HomePage/Categories/cate7b.svg';
import discoverButton from '../../assets/HomePage/DiscoverMore/Eye.svg';
import mushroom from '../../assets/HomePage/DiscoverMore/NFT_Mushroom.svg';
import how_it_work1 from '../../assets/HomePage/HowItWorks/HowItWork1.svg';
import how_it_work2 from '../../assets/HomePage/HowItWorks/HowItWork2.svg';
import how_it_work3 from '../../assets/HomePage/HowItWorks/HowItWork3.svg';
import getNoti from '../../assets/HomePage/GetNoti/Photo.png';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {BASE_URL} from 'store/url';

const trendingCollectionData = [
  {
    img_product: [trending1, trending2, trending3],
    img_artist: avatar1,
    name_artist: 'MrFox',
    title: 'DSGN Animals',
    type: 'TrendingCollection',
  },
  {
    img_product: [trending1, trending2, trending3, trending4],
    img_artist: avatar1,
    name_artist: 'MrFox',
    title: 'DSGN Animals',
    type: 'TrendingCollection',
  },
  {
    img_product: [trending1, trending2, trending3, trending4, trending5],
    img_artist: avatar1,
    name_artist: 'MrFox',
    title: 'DSGN Animals',
    type: 'TrendingCollection',
  },
];

const topCreatorData = [
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
  {
    type: 'TopCreatorHomePage',
    img_artist: topCreator1,
    name_artist: 'Keepitreal',
    total_sales: 34.53,
  },
];

const CategoriesData = [
  {
    background_img: cate1a,
    img: cate1b,
    title: 'Art',
    type: 'CategoriesHomePage',
  },
  {
    background_img: cate2a,
    img: cate2b,
    title: 'Collectibles',
    type: 'CategoriesHomePage',
  },
  {
    background_img: cate3a,
    img: cate3b,
    title: 'Music',
    type: 'CategoriesHomePage',
  },
  {
    background_img: cate5a,
    img: cate5b,
    title: 'Video',
    type: 'CategoriesHomePage',
  },
  {
    background_img: cate6a,
    img: cate6b,
    title: 'Utility',
    type: 'CategoriesHomePage',
  },
  {
    background_img: cate7a,
    img: cate7b,
    title: 'Sport',
    type: 'CategoriesHomePage',
  },
];

const DiscoverMoreData = [
  {
    type: 'DiscoverMore',
    title: 'Distant Galaxy',
    img: cate5a,
    img_artist: avatar1,
    name_artist: 'MoonDancer',
    price: 1.63,
    highest_bid: 0.33,
  },
  {
    type: 'DiscoverMore',
    title: 'Distant Galaxy',
    img: cate5a,
    img_artist: avatar1,
    name_artist: 'MoonDancer',
    price: 1.63,
    highest_bid: 0.33,
  },
  {
    type: 'DiscoverMore',
    title: 'Distant Galaxy',
    img: cate5a,
    img_artist: avatar1,
    name_artist: 'MoonDancer',
    price: 1.63,
    highest_bid: 0.33,
  },
];

const HomePageStyled = styled.div`
  padding: 30px;

  .container {
    width: 1050px;
    margin: 0px auto;
  }

  @media (max-width: 1199.98px) {
    .container {
      width: auto;
    }
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
  @media (max-width: 1199.98px) {
    .body_trending_collection .trending_collection_item {
      display: flex;
      justify-content: center;
    }
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
      grid-template-columns: 50% 50%;
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
  margin-bottom: 160px;
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

  .body_top_creator .top_creator_item {
    cursor: pointer;
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
  margin-bottom: 160px;

  .header_category {
    margin-bottom: 60px;
  }

  .header_category h3 {
    color: #fff;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-transform: capitalize;
  }

  .body_category {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
  }

  @media (max-width: 991.98px) {
    .body_category {
      grid-template-columns: auto auto;
      gap: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .body_category {
      grid-template-columns: auto;
      gap: 30px;
    }
  }
`;

const DiscoverMoreStyled = styled.div`
  margin-bottom: 160px;
  .header_discover_more {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 60px;
  }

  .header_discover_more .header_discover_more_left {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .header_discover_more .header_discover_more_left h3 {
    color: #fff;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-transform: capitalize;
  }

  .header_discover_more .header_discover_more_left p {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
  }

  .body_discover_more {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    gap: 3%;
    justify-content: space-between;
  }

  .body_discover_more .body_discover_more_item {
    cursor: pointer;
  }

  @media (max-width: 991.98px) {
    .body_discover_more {
      grid-template-columns: 49% 49%;
      gap: 2%;
      justify-content: space-between;
    }

    .body_discover_more_item:nth-child(n + 3) {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    .header_discover_more {
      grid-template-columns: auto;
      flex-direction: column;
      align-items: unset;
      margin-bottom: 40px;
    }

    .header_discover_more .header_discover_more_left {
      margin-bottom: 40px;
    }

    .header_discover_more .header_discover_more_left h3 {
      font-size: 28px;
    }

    .header_discover_more .header_discover_more_left p {
      font-size: 16px;
    }

    .header_discover_more .header_discover_more_right button {
      width: 100%;
    }

    .body_discover_more {
      grid-template-columns: auto;
    }
  }
`;

const ImgBackgroundStyled = styled.div`
  width: -webkit-fill-available;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HowItWorkStyled = styled.div`
  margin-bottom: 120px;

  .header_how_it_work {
    margin-bottom: 48px;
  }

  .header_how_it_work h3 {
    color: #fff;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .header_how_it_work p {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
  }

  .body_how_it_work {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
  }

  .body_how_it_work_item {
    padding: 10px 30px 30px 30px;
    border-radius: 20px;
    background: var(--background-secondary, #3b3b3b);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .body_how_it_work_item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .body_how_it_work_item h5 {
    color: #fff;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
  }

  .body_how_it_work_item p {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  @media (max-width: 991.98px) {
  }

  @media (max-width: 767.98px) {
    .body_how_it_work {
      display: flex;
      flex-direction: column;
    }
  }
`;

const GetNotiStyled = styled.div`
  .get_noti {
    display: flex;
    border-radius: 20px;
    background: #3b3b3b;
    padding: 60px;
    gap: 80px;
  }

  .get_noti_left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .get_noti_left img {
    width: 100%;
    height: 100%;
  }

  .get_noti_right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .get_noti_right .header_get_noti_right {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .get_noti_right .header_get_noti_right h3 {
    color: #fff;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-transform: capitalize;
  }

  .get_noti_right .header_get_noti_right p {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
  }

  @media (max-width: 991.98px) {
    // Subscribe btn
    .input-wrapper {
      /* width: 315px; */
      width: 315px;
      row-gap: 16px;
      flex-direction: column;
      height: 108px;
    }
    .input-footer {
      display: inline-block;
      width: 100%;
      padding: 0;
      height: 46px;
      text-indent: 14px;
    }
    .subscribe-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 46px;
      position: unset;
    }

    .button-icon {
      display: block;
      width: 20px;
      height: 20px;
    }
    .button-icon svg {
      width: 100%;
    }
  }

  @media (max-width: 767.98px) {
    .input-wrapper {
      width: 100%;
    }

    .get_noti {
      flex-direction: column;
    }

    .get_noti_left {
      width: 100%;
    }

    .get_noti_right {
      width: 100%;
    }

    .get_noti_right .header_get_noti_right {
      margin-bottom: 40px;
    }
  }
`;

const HomePage = () => {
  const [topCreator, setTopCreator] = useState();
  const [overall, setOverall] = useState([]);
  const [trendingCollection, setTrendingCollection] = useState();
  const [newTrending, setNewTrending] = useState();
  const [topCreatorID, setTopCreatorID] = useState();
  const [nftId, setNftId] = useState();
  const navigate = useNavigate();

  // console.log("TrendingCollection: ", trendingCollection);
  // console.log("newTrending: ", newTrending);
  // console.log("TopCreator: ", topCreator);
  // console.log("TopCreatorId: ", topCreatorID);

  useEffect(() => {
    function getAllTopCreator() {
      try {
        function getOverall() {
          return axios.get(`${BASE_URL}/api/home/overall-figures`);
        }
        function getTrendingCollection() {
          return axios.get(`${BASE_URL}/api/home/trending-collection`);
        }
        function getTopCreator() {
          return axios.get(`${BASE_URL}/api/home/top-creator`);
        }
        function getNewTrending() {
          return axios.get(`${BASE_URL}/api/home/trending-nft`);
        }
        Promise.all([
          getTopCreator(),
          getOverall(),
          getTrendingCollection(),
          getNewTrending(),
        ]).then((res) => {
          // console.log(res);
          const topCreatorData = res[0].data;
          const overallData = res[1].data[0];
          const trendingCollectionData = res[2].data;
          const newTrendingData = res[3].data;
          console.log('trendingCollectionData: ', trendingCollectionData);

          setTopCreator(topCreatorData);
          setOverall(overallData);
          setTrendingCollection(trendingCollectionData);
          setNewTrending(newTrendingData);
        });
      } catch (error) {
        console.error(error);
      }
    }

    getAllTopCreator();
  }, []);

  const handleClick = (artistId) => {
    axios
      .get(`${BASE_URL}/api/artist/${artistId}`)
      .then((res) => {
        setTopCreatorID(res.data);
        navigate(`/artist/${artistId}`, {
          state: {dataArtist: res.data[0]},
        });
        window.scrollTo(0, 0);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleClickNFT = (nftId) => {
    console.log('nftID: ' + nftId);
    axios
      .get(`${BASE_URL}/nfts/nft-detail-page/${nftId}`)

      .then((res) => {
        setNftId(res.data);
        console.log(res.data);
        navigate(`/nft-detail-page/${nftId}`, {
          state: {dataNft: res.data[0]},
        });
        window.scrollTo(0, 0);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <PrimaryLayout>
      <HomePageStyled>
        <BannerStyled>
          <div className="container">
            <div className="banner_left">
              <h1>Discover digital art & Collect NFTs</h1>
              <p>
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
              <Button
                img={rocketIcon}
                content={'Get Started'}
                borderRadius={'20px'}
                bgColor={'#A259FF'}
                textColor={'#FFF'}
                fontSize={'16px'}
                fontWeight={'600'}
                padding={'22.5px 50px'}
                jutifyContent={'center'}
              ></Button>
              <div className="statistical">
                <div className="statistical_left">
                  <h4>{overall.total_sales}K+</h4>
                  <span>Total Sale</span>
                </div>
                <div className="statistical_middle">
                  <h4>{overall.auctions}+</h4>
                  <span>Auctions</span>
                </div>
                <div className="statistical_right">
                  <h4>{overall.artists}+</h4>
                  <span>Artists</span>
                </div>
              </div>
            </div>
            <div className="banner_right">
              <Card
                title={'Space Walking'}
                img_product={banner1}
                bgColor={'#3B3B3B'}
                borderRadius={'20px'}
                img_artist={avatar1}
                name_artist={'Animakid'}
                price={'12'}
                highest_bid={'26.04'}
              ></Card>
            </div>
          </div>
        </BannerStyled>
        {/* Trending collection */}
        <TrendingCollectionStyled>
          <div className="container">
            <div className="header_trending_collection">
              <h3>Trending Collection</h3>
              <p>Checkout our weekly updated trending collection.</p>
            </div>
            <div className="body_trending_collection">
              {trendingCollection
                ? trendingCollection.map((e, index) => {
                    return (
                      <div className="trending_collection_item" key={index}>
                        <Card
                          img_product={e.nft_image}
                          img_artist={e.avatar}
                          type="TrendingCollection"
                          name_artist={e.username}
                          title={e.collection_name}
                        ></Card>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </TrendingCollectionStyled>
        {/* Top creator */}
        <TopCreatorStyled>
          <div className="container">
            <div className="header_top_creator">
              <div className="header_top_creator_left">
                <h3>Top Creators</h3>
                <p>Checkout Top Rated Creators on the NFT Marketplace</p>
              </div>
              <div className="header_top_creator_right">
                <Button
                  onClick={() => {
                    navigate('/ranking');
                    window.scrollTo(0, 0);
                  }}
                  bgColor={'none'}
                  border={'1px solid #A259FF'}
                  content={'View Rankings'}
                  borderRadius={'20px'}
                  textColor={'#fff'}
                  img={rocketIcon2}
                  padding={'22.5px 50px'}
                  jutifyContent={'center'}
                ></Button>
              </div>
            </div>
            <div className="body_top_creator">
              {topCreator
                ? topCreator.map((e, index) => {
                    return (
                      <div
                        className="top_creator_item"
                        key={e.account_id}
                        onClick={() => handleClick(e.account_id)}
                      >
                        <Card
                          number_id={index}
                          type="TopCreatorHomePage"
                          img_artist={e.avatar}
                          name_artist={e.username}
                          total_sales={e.total_sale}
                        ></Card>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </TopCreatorStyled>
        <CategoriesStyled>
          <div className="container">
            <div className="header_category">
              <h3>Browse Categories</h3>
            </div>
            <div className="body_category">
              {CategoriesData
                ? CategoriesData.map((e, index) => (
                    <div className="categories_item" key={index}>
                      <Card
                        img_product={e.img}
                        background_img={e.background_img}
                        type={e.type}
                        title={e.title}
                      ></Card>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </CategoriesStyled>
        {/* new Trending */}
        <DiscoverMoreStyled>
          <div className="container">
            <div className="header_discover_more">
              <div className="header_discover_more_left">
                <h3>Discover More NFTs</h3>
                <p>Explore new trending NFTs</p>
              </div>
              <div className="header_discover_more_right">
                <Button
                  bgColor={'none'}
                  border={'1px solid #A259FF'}
                  content={'See All'}
                  borderRadius={'20px'}
                  textColor={'#fff'}
                  img={discoverButton}
                  padding={'22.5px 50px'}
                  jutifyContent={'center'}
                ></Button>
              </div>
            </div>
            <div className="body_discover_more">
              {newTrending
                ? newTrending.map((e, index) => (
                    <div
                      className="body_discover_more_item"
                      key={e.nft_id}
                      onClick={() => handleClickNFT(e.nft_id)}
                    >
                      <Card
                        number_id={index}
                        type="DiscoverMore"
                        title={e.nft_name}
                        img_product={e.image}
                        price={e.price}
                        highest_bid={e.highest_bid}
                        img_artist={e.avatar}
                        name_artist={e.username}
                        total_sales={e.total_sales}
                        bgColor={'#3B3B3B'}
                        borderRadius={'20px'}
                      ></Card>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </DiscoverMoreStyled>
      </HomePageStyled>
      <ImgBackgroundStyled>
        <img src={mushroom} alt="" />
      </ImgBackgroundStyled>
      <HomePageStyled>
        <HowItWorkStyled>
          <div className="container">
            <div className="header_how_it_work">
              <h3>How It Works</h3>
              <p>Find out how to get started</p>
            </div>
            <div className="body_how_it_work">
              <div className="body_how_it_work_item">
                <img src={how_it_work1} alt="" />
                <h5>Setup Your wallet</h5>
                <p>
                  Set up your wallet of choice. Connect it to the Animarket by
                  clicking the wallet icon in the top right corner.
                </p>
              </div>
              <div className="body_how_it_work_item">
                <img src={how_it_work2} alt="" />
                <h5>Setup Your wallet</h5>
                <p>
                  Set up your wallet of choice. Connect it to the Animarket by
                  clicking the wallet icon in the top right corner.
                </p>
              </div>
              <div className="body_how_it_work_item">
                <img src={how_it_work3} alt="" />
                <h5>Setup Your wallet</h5>
                <p>
                  Set up your wallet of choice. Connect it to the Animarket by
                  clicking the wallet icon in the top right corner.
                </p>
              </div>
            </div>
          </div>
        </HowItWorkStyled>
        <GetNotiStyled>
          <div className="container">
            <div className="get_noti">
              <div className="get_noti_left">
                <img src={getNoti} alt="" />
              </div>
              <div className="get_noti_right">
                <div className="header_get_noti_right">
                  <h3>Join our weekly digest</h3>
                  <p>
                    Get exclusive promotions & updates straight to your inbox.
                  </p>
                </div>
                <InputFooter
                  placeholder="Enter Your Email Address"
                  type="email"
                ></InputFooter>
              </div>
            </div>
          </div>
        </GetNotiStyled>
      </HomePageStyled>
    </PrimaryLayout>
  );
};

export default HomePage;
