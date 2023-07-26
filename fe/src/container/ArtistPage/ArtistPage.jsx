import styled from "styled-components";
import { colors } from "../../Global";
import { PrimaryLayout } from "components/Layout";
import { Button } from "components/Button";
import { Card } from "components/Card";

import globe from "../../assets/Artist/Links/Globe.svg";
import discord from "../../assets/Artist/Links/DiscordLogo.svg";
import youtube from "../../assets/Artist/Links/YoutubeLogo.svg";
import twitter from "../../assets/Artist/Links/TwitterLogo.svg";
import insta from "../../assets/Artist/Links/InstagramLogo.svg";
import background1 from "../../assets/Artist/background_img.png";
import avatar1 from "../../assets/Artist/avatar1.png";
import button1 from "../../assets/Artist/Button1.svg";
import button2 from "../../assets/Artist/Button2.svg";
import cate5a from "../../assets/HomePage/Categories/cate5a.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const CreatedArtistData = [
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

const ArtistStyled = styled.div`
  .img_background {
    width: 100%;
    height: 350px;
    background: linear-gradient(
        180deg,
        rgba(151, 71, 255, 0) 71.88%,
        rgb(151, 71, 255) 95.31%
      ),
      url(${background1}), lightgray 50%;
    background-repeat: round;
  }

  .header_artist {
    border-bottom: 1px solid ${colors.borderColor};
    padding: 90px 40px 40px;
  }

  .header_artist .infor_artist {
    position: relative;
  }

  .header_artist .infor_artist .avatar {
    position: absolute;
    width: 120px;
    height: 120px;
    top: -155px;
  }

  .header_artist .infor_artist .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header_artist .infor_artist .body_infor_artist {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .header_artist .infor_artist .body_infor_artist .header_body_infor_artist {
    display: flex;
    justify-content: space-between;
  }

  .header_artist
    .infor_artist
    .body_infor_artist
    .header_body_infor_artist
    .body_infor_artist_button {
    display: flex;
    gap: 20px;
  }

  .header_artist .infor_artist .body_infor_artist h2 {
    color: ${colors.whiteColor};
    font-size: 51px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    text-transform: capitalize;
  }

  .header_artist .infor_artist .body_infor_artist .statistical {
    display: flex;
    gap: 70px;
  }

  .header_artist .infor_artist .body_infor_artist .statistical h4 {
    color: ${colors.whiteColor};
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    text-transform: capitalize;
  }

  .header_artist .infor_artist .body_infor_artist .statistical span {
    color: ${colors.whiteColor};
    font-family: 'Work Sans';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
  }

  .header_artist .infor_artist .body_infor_artist .bio h5 {
    color: ${colors.borderColor};
    font-family: Space Mono;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .header_artist .infor_artist .body_infor_artist .bio p {
    color: ${colors.whiteColor};
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: capitalize;
  }

  .header_artist .infor_artist .body_infor_artist .links h5 {
    color: ${colors.borderColor};
    font-family: Space Mono;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  ul li {
    user-select: none;
  }

  .header_artist .infor_artist .body_infor_artist .links ul {
    display: flex;
    gap: 10px;
  }

  .header_artist .infor_artist .body_infor_artist .links ul li {
    width: 32px;
    height: 32px;
    list-style-type: none;
  }

  .header_artist .infor_artist .body_infor_artist .links ul li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .artist-filter-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    overflow: auto;
  }
  .artist-filter-item {
    position: relative;
    width: 100%;
    font-size: 22px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    height: 60px;
    color: ${colors.borderColor};
    padding: 0 10px;
  }

  .artist-filter-item::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: ${colors.borderColor};
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .artist-filter-item_title {
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    margin-right: 16px;
  }

  .artist-filter-item_count {
    font-size: 16px;
    font-style: normal;
    font-family: 'Space Mono';
    font-weight: 400;
    line-height: 140%;
    padding: 5px 10px;
    background-color: ${colors.backgroundColor2};
    border-radius: 20px;
  }

  .active {
    color: ${colors.whiteColor};
  }
  .active::after {
    transform: scaleX(1);
  }

  .active .artist-filter-item_count {
    background-color: ${colors.borderColor};
  }

  .artist-body-list {
    background-color: ${colors.backgroundColor2};
  }

  .artist-body-list .artist-body-grid {
    padding: 80px 40px;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    .artist-body-list .artist-body-grid {
      grid-template-columns: auto auto;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    .header_artist .infor_artist .body_infor_artist .header_body_infor_artist {
      gap: 30px;
      flex-direction: column;
    }
  }

  //
  @media (max-width: 575.98px) {
    .artist-body-list .artist-body-grid {
      grid-template-columns: auto;
    }

    .header_artist .infor_artist .body_infor_artist .statistical {
      justify-content: space-between;
      gap: unset;
    }

    .header_artist
      .infor_artist
      .body_infor_artist
      .header_body_infor_artist
      .body_infor_artist_button {
      flex-direction: column;
    }

    .header_artist
      .infor_artist
      .body_infor_artist
      .header_body_infor_artist
      .body_infor_artist_button
      button {
      width: 100%;
    }

    .header_artist .infor_artist .body_infor_artist .statistical h4 {
      font-size: 22px;
    }

    .header_artist .infor_artist .body_infor_artist .statistical span {
      font-size: 16px;
    }
  }
`;

const ArtistPage = () => {
  const location = useLocation();
  const { dataArtist } = location.state;
  const [selectedClass, setSelectedClass] = useState("created");
  const [listDataNFT, setListDataNFT] = useState();
  const [dataNFTID, setDataNFTID] = useState();
  const navigate = useNavigate();

  console.log(dataArtist.account_id);

  useEffect(() => {
    function getListNFTById() {
      axios
        .get(`http://localhost:8080/nfts/created-nft/${dataArtist.account_id}`)
        .then((res) => {
          console.log(res.data);
          setListDataNFT(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getListNFTById();
  }, []);

  const handleClickActiveClass = (activeClass) => {
    if (activeClass === 'created') {
      setSelectedClass(activeClass);
    }
    if (activeClass === 'owned') {
      setSelectedClass(activeClass);
    }
    if (activeClass === 'collection') {
      setSelectedClass(activeClass);
    }
  };

  const handleClick = (nftID) => {
    axios
      .get(`http://localhost:8080/nfts/nft-detail-page/${nftID}`)
      .then((res) => {
        navigate(`/nft-detail-page/${nftID}`, {
          state: { dataNft: res.data[0] },
        });
        window.scrollTo(0, 0);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <PrimaryLayout>
      <ArtistStyled>
        <div className="img_background"></div>
        {/* {dataArtist
          ? dataArtist.map((e, index) => ( */}
        <div className="header_artist">
          <div className="container">
            <div className="infor_artist">
              <div className="avatar">
                <img src={dataArtist.avatar} alt="" />
              </div>
              <div className="body_infor_artist">
                <div className="header_body_infor_artist">
                  <h2>{dataArtist.username}</h2>
                  <div className="body_infor_artist_button">
                    <Button
                      img={button1}
                      bgColor={'#A259FF'}
                      borderRadius={'20px'}
                      padding={'15px 30px'}
                      jutifyContent={'center'}
                      textColor={colors.whiteColor}
                      content={'0xc0E3...B79C'}
                      fontSize={'16px'}
                      fontWeight={'600'}
                    ></Button>
                    <Button
                      img={button2}
                      bgColor={'unset'}
                      border={'2px solid #A259FF'}
                      borderRadius={'20px'}
                      jutifyContent={'center'}
                      padding={'15px 30px'}
                      textColor={colors.whiteColor}
                      content={'Follow'}
                      fontSize={'16px'}
                      fontWeight={'600'}
                    ></Button>
                  </div>
                </div>
                <div className="statistical">
                  <div className="statistical_left">
                    <h4>{dataArtist.volume}+</h4>
                    <span>Volume</span>
                  </div>
                  <div className="statistical_middle">
                    <h4>{dataArtist.nfts_sold}+</h4>
                    <span>NFTs Sold</span>
                  </div>
                  <div className="statistical_left">
                    <h4>3000+</h4>
                    <span>Followers</span>
                  </div>
                </div>
                <div className="bio">
                  <h5>Bio</h5>
                  <p>{dataArtist.biography}</p>
                </div>
                <div className="links">
                  <h5>Links</h5>
                  <ul>
                    <li>
                      <img src={globe} alt="" />
                    </li>
                    <li>
                      <img src={discord} alt="" />
                    </li>
                    <li>
                      <img src={youtube} alt="" />
                    </li>
                    <li>
                      <img src={twitter} alt="" />
                    </li>
                    <li>
                      <img src={insta} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="body_infor_artist_right"></div>
            </div>
          </div>
        </div>
        {/* ))
          : null} */}

        <div className="body_artist">
          <div className="artist-body">
            <div className="container">
              <div className="artist-filter">
                <ul className="artist-filter-list">
                  <li
                    className={
                      selectedClass === 'created'
                        ? 'artist-filter-item active'
                        : 'artist-filter-item '
                    }
                    onClick={() => handleClickActiveClass('created')}
                  >
                    <span className="artist-filter-item_title">Created</span>
                    <span className="artist-filter-item_count">302</span>
                  </li>
                  <li
                    className={
                      selectedClass === 'owned'
                        ? 'artist-filter-item active'
                        : 'artist-filter-item '
                    }
                    onClick={() => handleClickActiveClass('owned')}
                  >
                    <span className="artist-filter-item_title">Owned</span>
                    <span className="artist-filter-item_count">67</span>
                  </li>
                  <li
                    className={
                      selectedClass === 'collection'
                        ? 'artist-filter-item active'
                        : 'artist-filter-item '
                    }
                    onClick={() => handleClickActiveClass('collection')}
                  >
                    <span className="artist-filter-item_title">Collection</span>
                    <span className="artist-filter-item_count">4</span>
                  </li>
                </ul>
                <div className="artist-table">
                  <div className="artist-table-wrap"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="artist-body-list">
            <div className="container">
              <div className="artist-body-grid">
                {listDataNFT
                  ? listDataNFT.map((e, index) => (
                      <div
                        className="body-artist-body-grid-item"
                        id={e.nft_id}
                        onClick={() => {
                          handleClick(e.nft_id);
                        }}
                      >
                        <Card
                          title={e.nft_name}
                          img_product={e.image}
                          price={e.price}
                          highest_bid="1.63"
                          img_artist={e.avatar}
                          name_artist={e.username}
                          bgColor={colors.background}
                          borderRadius={'20px'}
                        ></Card>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </ArtistStyled>
    </PrimaryLayout>
  );
};

export default ArtistPage;
