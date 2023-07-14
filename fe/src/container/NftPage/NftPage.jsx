import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {PrimaryLayout} from 'components/Layout';
import banner from '../../assets/Nft-page-imgs/Banner.jpeg';
import avatar from '../../assets/HomePage/Avatar1.svg';
import globe from '../../assets/Nft-page-imgs/Globe.png';
import {colors} from 'Global';

import avatar1 from '../../assets/ranking-imgs/avatar.svg';
import avatar2 from '../../assets/ranking-imgs/avatar2.svg';
import avatar3 from '../../assets/ranking-imgs/avatar3.svg';
import avatar4 from '../../assets/ranking-imgs/avatar4.svg';
import avatar5 from '../../assets/ranking-imgs/avatar5.svg';
import avatar6 from '../../assets/ranking-imgs/avatar6.svg';
import avatar7 from '../../assets/ranking-imgs/avatar7.svg';

const auctionData = [
  {
    id: 1,
    img: avatar1,
    username: 'Jaydon Ekstrom Bothman',
    change: 1.4,
    sold: 602,
    volume: 12.4,
  },
  {
    id: 2,
    img: avatar2,
    username: 'Ruben Carder',
    change: 1.3,
    sold: 480,
    volume: 10.2,
  },
  {
    id: 3,
    img: avatar3,
    username: 'Alfredo Septimus',
    change: 1.2,
    sold: 600,
    volume: 12.2,
  },
  {
    id: 4,
    img: avatar4,
    username: 'Davis Franci',
    change: 1.2,
    sold: 400,
    volume: 11.2,
  },
  {
    id: 5,
    img: avatar5,
    username: 'Livia Rosser',
    change: 1.3,
    sold: 480,
    volume: 10.2,
  },
  {
    id: 6,
    img: avatar6,
    username: 'Kianna Donin',
    change: 1.3,
    sold: 480,
    volume: 10.2,
  },
  {
    id: 7,
    img: avatar7,
    username: 'Phillip Lipshutz',
    change: 1.3,
    sold: 489,
    volume: 9.2,
  },
];

const NftPage = () => {
  let TIME = 600;
  const [count, setCount] = useState(TIME); // seconds
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (count >= 0) {
      const secondsLeft = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
        let timeLeftVar = secondsToTime(count);
        setHour(timeLeftVar.h);
        setMinute(timeLeftVar.m);
        setSecond(timeLeftVar.s);
      }, 1000);

      //   console.log(count);
      console.log('Hour: ', hour);
      console.log('Minutes: ', minute);
      console.log('Seconds: ', second);

      return () => clearInterval(secondsLeft);
    } else {
      console.log('TimeOut');
    }
  }, [count, hour, minute, second]);

  const secondsToTime = (secs) => {
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    return {
      h: hours,
      m: minutes,
      s: seconds,
    };
  };

  return (
    <PrimaryLayout>
      <NftPageStyled className="nft-page">
        <div className="nft-page-wrap">
          <div className="banner"></div>
          <div className="nft-page-content container">
            <div className="content-left">
              <div className="content-left-wrap">
                <div className="content-top">
                  <div className="artist-name">The Orbitians</div>
                  <span className="date-creating">Minted on Sep 30, 2022</span>
                </div>
                <div className="content-created">
                  <div className="create-by-title">Created By</div>
                  <div className="created-detail">
                    <img src={avatar} alt="" />
                    <span className="create-by">Orbitian</span>
                  </div>
                </div>
                <div className="content-desc">
                  <div className="desc-title">Description</div>
                  <span className="desc">
                    The Orbitians is a collection of 10,000 unique NFTs on the
                    Ethereum blockchain,There are all sorts of beings in the NFT
                    Universe. The most advanced and friendly of the bunch are
                    Orbitians. They live in a metal space machines, high up in
                    the sky and only have one foot on Earth. These Orbitians are
                    a peaceful race, but they have been at war with a group of
                    invaders for many generations. The invaders are called
                    Upside-Downs, because of their inverted bodies that live on
                    the ground, yet do not know any other way to be.
                    Upside-Downs believe that they will be able to win this war
                    if they could only get an eye into Orbitian territory, so
                    they've taken to make human beings their target.
                  </span>
                </div>

                <div className="content-details">
                  <div className="detail-title">Details</div>
                  <div className="detail-item">
                    <img src={globe} alt="" />
                    <div className="detail-item-text">View on Etherscan</div>
                  </div>
                  <div className="detail-item">
                    <img src={globe} alt="" />
                    <div className="detail-item-text">View Original</div>
                  </div>
                </div>

                <div className="content-tags">
                  <div className="tags-tittle">Tags</div>
                  <ul className="tags-list">
                    <li className="tags-item">animation</li>
                    <li className="tags-item">illustration</li>
                    <li className="tags-item">moon</li>
                    <li className="tags-item">sun</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-right">
              <div className="content-top content-top__small-devices">
                <div className="artist-name">The Orbitians</div>
                <span className="date-creating">Minted on Sep 30, 2022</span>
              </div>
              <div className="auction-card">
                <div className="card-content">
                  <div className="auction-text">Auction ends in: </div>
                  <div className="card-time">
                    <div className="hour">
                      <div className="hour-counting">
                        {hour < 10 ? '0' + hour : hour}
                      </div>
                      <div className="card-time-detail">Hours</div>
                    </div>
                    <div className="colon">:</div>
                    <div className="minute">
                      <div className="minute-counting">
                        {' '}
                        {minute < 10 ? '0' + minute : minute}
                      </div>
                      <div className="card-time-detail">Minutes</div>
                    </div>
                    <div className="colon">:</div>
                    <div className="seconds">
                      <div className="seconds-counting">
                        {second < 10 ? '0' + second : second}
                      </div>

                      <div className="card-time-detail">Seconds</div>
                    </div>
                  </div>
                  <div className="card-btn">
                    <button>Place Bid</button>
                  </div>
                </div>
              </div>

              <div className="table-content">
                <table className="auction__table">
                  <thead className="auction__table-header">
                    <td className="auction__table-header-data">#</td>
                    <td className="auction__table-header-data">Username</td>
                    <td className="auction__table-header-data">Amount</td>
                  </thead>
                  <tbody className="auction__table-body">
                    {auctionData &&
                      auctionData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className="auction__table-body-data">
                              {index + 1}
                            </td>
                            <td className="auction__table-body-data">
                              <img
                                className="body-data-img"
                                src={item.img}
                                alt=""
                              />
                              <span className="body-data-username">
                                {item.username}
                              </span>
                            </td>
                            <td className="auction__table-body-data">
                              <span className="body-data-amount">
                                {item.volume}
                              </span>{' '}
                              ETH
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </NftPageStyled>
    </PrimaryLayout>
  );
};

export {NftPage};

const NftPageStyled = styled.div`
  background-color: ${colors.background};
  .banner {
    width: 100%;
    height: 560px;
    background: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .nft-page-content {
    margin-top: 32px;
    display: flex;
  }
  .content-left {
    width: 60%;
  }
  .content-left-wrap {
    width: 552px;
  }
  .artist-name {
    font-size: 51px;
    color: ${colors.whiteColor};
    font-weight: 600;
    line-height: 56.1px;
  }
  .date-creating {
    font-size: 22px;
    font-weight: 400;
    line-height: 35.2px;
    color: ${colors.borderColor};
  }
  .content-created {
    margin-top: 30px;
  }
  .create-by-title,
  .desc-title,
  .detail-title,
  .tags-tittle {
    font-family: 'Space Mono', monospace;
    color: ${colors.borderColor};
    font-size: 22px;
    font-weight: 700;
    line-height: 35.2px;
  }
  .created-detail {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .created-detail img {
    width: 24px;
    height: 24px;
  }
  .create-by {
    height: 24px;
    font-size: 22px;
    font-weight: 600;
    color: ${colors.whiteColor};
    line-height: 24px;
    margin-left: 10px;
  }

  .content-desc {
    margin-top: 30px;
    text-align: justify;
  }
  .desc {
    font-size: 22px;
    font-weight: 400;
    line-height: 35.2px;
    color: ${colors.whiteColor};
  }
  .content-details {
    margin-top: 28px;
  }
  .detail-title {
    margin-bottom: 20px;
  }
  .detail-item {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  .detail-item img {
    width: 32px;
    height: 32px;
  }
  .detail-item-text {
    color: ${colors.whiteColor};
    font-size: 22px;
    line-height: 35.2px;
    margin-left: 10px;
  }
  .content-tags {
    margin-top: 28px;
  }
  .tags-tittle {
    margin-bottom: 20px;
  }
  .content-tags ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
  .content-tags .tags-item {
    font-size: 12px;
    font-weight: 600;
    line-height: 46px;
    text-transform: uppercase;
    text-align: center;
    color: ${colors.whiteColor};
    padding: 0 30px;
    height: 46px;
    border-radius: 20px;
    background-color: ${colors.backgroundColor2};
    cursor: pointer;
  }
  /* content right */
  .content-top__small-devices {
    display: none;
  }

  /* auction card */
  .content-right {
    width: 40%;
  }
  .auction-card {
    margin: 0 auto;
    width: 295px;
    height: 234px;
    background-color: ${colors.backgroundColor2};
    border-radius: 20px;
  }
  .card-content {
    padding: 30px;
  }
  .auction-text {
    font-size: 12px;
    font-weight: 400;
    line-height: 13.2px;
    color: ${colors.whiteColor};
  }
  .card-time {
    margin-top: 14px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .colon {
    color: ${colors.whiteColor};
    font-size: 38px;
    width: 18px;
  }
  .hour-counting,
  .minute-counting,
  .seconds-counting {
    width: 53px;
    height: 46px;
    font-size: 38px;
    font-weight: 600;
    line-height: 45.6px;
    color: ${colors.whiteColor};
  }
  .card-time-detail {
    color: ${colors.whiteColor};
    font-size: 12px;
  }
  /*  card */
  .card-btn {
    margin-top: 28px;
    width: 100%;
  }
  .card-btn button {
    width: 100%;
    height: 60px;
    border-radius: 20px;
    color: ${colors.whiteColor};
    font-weight: 600;
    background-color: ${colors.primaryColor};
    border: none;
    cursor: pointer;
  }

  /*  Table */
  .table-content {
    margin: 0 auto;
    margin-top: 40px;
    width: 392px;
    border-radius: 10px;
    background-color: ${colors.backgroundColor2};
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 0;
  }
  table,
  th,
  td {
    border: none;
    border-collapse: collapse;
  }
  td:not(:first-child) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .auction__table {
    width: 100%;
  }
  .auction__table-header-data {
    color: ${colors.textColor1};
    font-family: 'Space Mono', monospace;
    font-weight: 600;
  }
  .auction__table-header-data,
  .auction__table-body-data {
    padding-left: 10px;
  }
  .auction__table-body {
    color: ${colors.textColor1};
    font-weight: 500;
  }
  .auction__table-body tr:nth-child(2n) {
    background-color: rgb(235 220 214 / 10%);
  }

  .auction__table-body-data:nth-child(2) {
    display: flex;
    align-items: center;
  }

  .body-data-img {
    width: 24px;
    height: 24px;
  }
  .body-data-username {
    margin-left: 8px;
  }

  .body-data-amount {
    color: ${colors.greenColor};
  }

  /* Responsive */
  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
    .banner {
      height: 420px;
    }
  }
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    .container {
      max-width: 690px;
    }
    /* left */
    .content-left {
      width: 50%;
    }
    .content-left-wrap {
      max-width: 343px;
    }
    .artist-name {
      font-size: 38px;
    }
    .date-creating {
      font-size: 16px;
    }
    .create-by-title,
    .desc-title,
    .detail-title,
    .tags-tittle .tags-list {
      font-size: 16px;
      font-weight: 400;
    }
    .create-by {
      font-size: 16px;
      font-weight: 400;
    }
    .desc {
      font-size: 16px;
      font-weight: 400;
    }
    .detail-item img {
      width: 24px;
      height: 24px;
    }
    .detail-item-text {
      font-size: 16px;
    }
    .tags-list {
      flex-direction: column;
      row-gap: 10px;
    }
    .tags-item {
      width: fit-content;
    }
    /* Content right */
    .content-right {
      width: 50%;
    }
    .table-content {
      width: 88%;
    }
    .auction__table-body-data:nth-child(2) {
      height: 46px;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    .banner {
      height: 320px;
      background-position: center;
    }
    .container {
      width: 412px;
    }
    .content-top {
      display: none;
    }
    .content-right {
      width: 100%;
    }
    .nft-page-content {
      flex-direction: column-reverse;
    }
    .content-top__small-devices {
      display: block;
      width: 100%;
    }
    .artist-name {
      font-size: 28px;
      line-height: 28px;
      width: 100%;
    }
    .date-creating {
      display: inline-block;
      margin-top: 10px;
    }
    .auction-card {
      margin-top: 20px;
    }
    .table-content {
      width: 96%;
    }
    /* Left content */
    .content-left {
      width: 100%;
    }
    .content-left-wrap {
      max-width: 412px;
    }
  }

  //
  @media (max-width: 575.98px) {
    .container {
      width: 315px;
    }
    .table-content {
      width: 100%;
    }
    .content-left-wrap {
      max-width: 315px;
    }
    .content-desc {
      margin-top: 20px;
    }
    .content-details {
      margin-top: 20px;
    }
    .detail-title {
      margin-bottom: 10px;
    }
    .content-tags {
      margin-top: 20px;
    }
  }
`;
