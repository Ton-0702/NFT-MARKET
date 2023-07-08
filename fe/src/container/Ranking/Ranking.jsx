import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components';
import {colors} from '../../Global';
import {PrimaryLayout} from 'components/Layout';

// import { ReactComponent as Avatar } from '../../assets/ranking-imgs/avatar.svg';
// import avatarImg from '../../assets/ranking-imgs/avatar.svg';
import {data} from './DataRanking';

const Ranking = ({title}) => {
  // console.log(document.body.clientWidth);
  useEffect(() => {
    const width = document.body.clientWidth;
    console.log(width);
  }, []);
  return (
    <PrimaryLayout>
      <RankingStyled className="ranking">
        <div className="ranking-container container">
          <div className="ranking-content">
            <div className="ranking-title">
              <h2>{title || 'Top Creators'}</h2>
              <p className="title-desc">
                Check out top ranking NFT artists on the NFT Marketplace.
              </p>
            </div>
            <div className="ranking-body">
              <div className="ranking-filter">
                <ul className="ranking-filter-list">
                  <li className="ranking-filter-item active">
                    <span className="ranking-filter-item__desktop">Today</span>
                    <span className="ranking-filter-item__mobile">1d</span>
                  </li>
                  <li className="ranking-filter-item">
                    <span className="ranking-filter-item__desktop">
                      This Week
                    </span>
                    <span className="ranking-filter-item__mobile">7d</span>
                  </li>
                  <li className="ranking-filter-item">
                    <span className="ranking-filter-item__desktop">
                      This Month
                    </span>
                    <span className="ranking-filter-item__mobile">30d</span>
                  </li>
                  <li className="ranking-filter-item">All Time</li>
                </ul>
                <div className="ranking-table">
                  <div className="ranking-table-wrap">
                    <table className="table">
                      <tr className="ranking-row-header">
                        <th className="table-header-item">
                          <span className="header-item-stt">#</span>
                        </th>
                        <th className="table-header-item header-item-artist">
                          Artist
                        </th>
                        <th className="table-header-item table-header-change">
                          Change
                        </th>
                        <th className="table-header-item table-header-sold">
                          NFTs Sold
                        </th>
                        <th className="table-header-item table-header-volume">
                          Volume
                        </th>
                      </tr>
                      {/* Body */}
                      <tbody className="table-body">
                        {data &&
                          data.map((item, index) => {
                            return (
                              <Fragment key={item.id}>
                                <DataTableRanking
                                  index={index + 1}
                                  src={item.img}
                                  username={item.username}
                                  change={item.change}
                                  sold={item.sold}
                                  volume={item.volume}
                                ></DataTableRanking>
                              </Fragment>
                            );
                          })}
                      </tbody>

                      {/* {data &&
                        data.map((item, index) => {
                          return (
                            <DataTableRanking
                              key={item.id}
                              index={index + 1}
                              src={item.img}
                              username={item.username}
                              change={item.change}
                              sold={item.sold}
                              volume={item.volume}
                            ></DataTableRanking>
                          );
                        })} */}

                      {/* <tbody className="table-body">
                      {data &&
                        data.map((item, index) => {
                          return (
                            <tr key={item.id} className="table-row-body">
                              <td className="table-body-data">
                                <span className="body-data-stt">
                                  {index || 1}
                                </span>
                              </td>
                              <td className="table-body-data">
                                <img
                                  className="table-body-data-img"
                                  src={item.img}
                                  alt="avatar"
                                />
                                <span className="body-data-username">
                                  {item.username || 'Jaydon Ekstrom Bothman'}{' '}
                                </span>
                              </td>
                              <td className="table-body-data">
                                <span className="body-data-change">
                                  {item.change || '+1.41%'}
                                </span>
                              </td>
                              <td className="table-body-data">
                                <span className="body-data-sold">
                                  {item.sold || 602}
                                </span>
                              </td>
                              <td className="table-body-data">
                                <span className="body-data-volume">
                                  {item.volume || 12.4} ETH
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody> */}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RankingStyled>
    </PrimaryLayout>
  );
};

export default Ranking;

const RankingStyled = styled.div`
  background-color: ${colors.background};
  .ranking-title {
    margin: 80px 0;
  }
  .ranking-title h2 {
    font-size: 51px;
    font-weight: 600;
    /* line-height: 56.1px; */
    color: ${colors.whiteColor};
    /* margin: 0;
    padding: 0; */
    cursor: default;
  }
  .title-desc {
    margin-top: 20px;
    font-size: 22px;
    font-weight: 400;
    line-height: 35.2px;
    color: ${colors.whiteColor};
  }
  /* ranking-filter-list */
  .ranking-filter-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .ranking-filter-item {
    /* display: inline-block; */
    position: relative;
    width: 100%;
    font-size: 22px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    height: 60px;
    color: ${colors.borderColor};
  }

  .ranking-filter-item::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: ${colors.borderColor};
    transform: scaleX(0); /* Initially hide the line */
    transition: transform 0.3s ease-in-out;
  }
  .active {
    color: ${colors.whiteColor};
  }
  .active::after {
    transform: scaleX(1);
  }

  /* ranking-table */
  .ranking-table {
    margin-top: 40px;
  }
  .table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 20px;
  }

  .ranking-row-header {
    height: 46px;
  }
  .header-item-stt {
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  .table-header-item {
    border: 1px solid ${colors.borderColor};
    border-style: solid none;
    color: ${colors.borderColor};
    font-weight: 400;
    text-align: left;
  }

  .table-header-item:first-child {
    border-left-style: solid;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 20px;
    width: 50px;
  }
  .table-header-item:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
  .table-header-change,
  .table-header-sold,
  .table-header-volume {
    cursor: pointer;
  }
  .ranking-filter-item__mobile {
    display: none;
  }

  .header-item-artist {
    width: 442px;
  }

  .table-header-change,
  .table-header-sold,
  .table-header-volume {
    width: 160px;
  }

  // Table body
  .table-row-body {
    height: 84px;
    background-color: ${colors.backgroundColor2};
    border-radius: 20px;
  }
  .table-body-data {
    font-weight: 400;
    text-align: left;
  }
  .table-body-data:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 20px;
    width: 20px;
  }
  .table-body-data:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  // body-data-stt
  .body-data-stt {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${colors.background};
    font-weight: 500;
    color: ${colors.borderColor};
    text-align: center;
    line-height: 30px;
  }
  .table-body-data:nth-child(2) {
    height: inherit;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }
  .table-body-data-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .body-data-username {
    font-size: 22px;
    font-weight: 600;
    line-height: 30.8px;
    color: ${colors.whiteColor};
    margin-left: 20px;
  }
  .body-data-change {
    font-weight: 400;
    line-height: 22.4px;
    color: ${colors.greenColor};
  }
  .body-data-sold,
  .body-data-volume {
    font-weight: 400;
    color: ${colors.whiteColor};
  }

  /* Responsive */

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    .ranking-container {
      max-width: 690px;
    }
    .ranking-title {
      margin: 40px 0;
    }
    .ranking-title h2 {
      font-size: 38px;
    }
    .title-desc {
      font-size: 16px;
    }
    .ranking-filter-item {
      font-size: 16px;
    }
    .table-header-sold {
      display: none;
    }
    /* tbody */
    .table-row-body {
      height: 60px;
    }
    .body-data-stt {
      background-color: transparent;
    }
    .table-body-data-img {
      width: 24px;
      height: 24px;
    }
    .body-data-username {
      font-size: 18px;
    }
    .table-body-data:nth-child(4) {
      display: none;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    .ranking-container {
      padding: 0 20px;
    }
  }

  //
  @media (max-width: 575.98px) {
    .ranking-container {
      max-width: 315px;
      padding: 0;
    }
    .ranking-title {
      margin: 30px 0 22px 0;
    }
    .ranking-title h2 {
      font-size: 28px;
    }
    .title-desc {
      margin-top: 10px;
      font-size: 16px;
      line-height: 22.4px;
    }
    .ranking-filter-item {
      font-size: 16px;
    }
    .ranking-filter-item__desktop {
      display: none;
    }
    .ranking-filter-item__mobile {
      display: block;
    }

    // table
    .ranking-table {
      margin-top: 18px;
    }
    .header-item-stt {
      width: 24px;
      height: 22px;
      line-height: 22px;
    }
    .header-item-artist,
    .table-header-volume {
      font-size: 12px;
    }
    .table-header-change {
      display: none;
    }

    .table-header-sold {
      display: none;
    }
    .table-body-data:nth-child(3) {
      display: none;
    }
    .body-data-stt {
      font-size: 12px;
      width: 24px;
      height: 24px;
      line-height: 24px;
    }
    .body-data-username {
      font-size: 16px;
      margin-left: 12px;
      line-height: 20px;
    }
    .body-data-volume {
      font-size: 12px;
    }
  }
`;

const DataTableRanking = ({index, src, username, change, sold, volume}) => {
  return (
    <>
      <tr className="table-row-body">
        <td className="table-body-data">
          <span className="body-data-stt">{index || 1}</span>
        </td>
        <td className="table-body-data">
          <img className="table-body-data-img" src={src} alt="avatar" />
          <span className="body-data-username">
            {username || 'Jaydon Ekstrom Bothman'}
          </span>
        </td>
        <td className="table-body-data">
          <span className="body-data-change">+{change || '+1.41%'}%</span>
        </td>
        <td className="table-body-data">
          <span className="body-data-sold">{sold || 602}</span>
        </td>
        <td className="table-body-data">
          <span className="body-data-volume">{volume || 12.4} ETH</span>
        </td>
      </tr>
    </>
  );
};
