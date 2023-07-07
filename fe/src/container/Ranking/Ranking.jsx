import React from 'react';
import styled from 'styled-components';
import {colors} from '../../Global';
import {PrimaryLayout} from 'components/Layout';

// import { ReactComponent as Avatar } from '../../assets/ranking-imgs/avatar.svg';
import avatarImg from '../../assets/ranking-imgs/avatar.svg';

const Ranking = ({title, index, username, change, sold, volume}) => {
  return (
    <PrimaryLayout>
      <RankingStyled className="ranking">
        <div className="ranking-container container">
          <div className="ranking-title">
            <h2>{title || 'Top Creators'}</h2>
            <p className="title-desc">
              Check out top ranking NFT artists on the NFT Marketplace.
            </p>
          </div>
          <div className="ranking-body">
            <div className="ranking-filter">
              <ul className="ranking-filter-list">
                <li className="ranking-filter-item active">Today</li>
                <li className="ranking-filter-item">This Week</li>
                <li className="ranking-filter-item">This Month</li>
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
                    <tbody className="table-body">
                      <tr className="table-row-body">
                        <td className="table-body-data">
                          <span className="body-data-stt">{index || 1}</span>
                        </td>
                        <td className="table-body-data">
                          <img
                            className="table-body-data-img"
                            src={avatarImg}
                            alt="avatar"
                          />
                          <span className="body-data-username">
                            {username || 'Jaydon Ekstrom Bothman'}{' '}
                          </span>
                        </td>
                        <td className="table-body-data">
                          <span className="body-data-change">
                            {change || '+1.41%'}
                          </span>
                        </td>
                        <td className="table-body-data">
                          <span className="body-data-sold">{sold || 602}</span>
                        </td>
                        <td className="table-body-data">
                          <span className="body-data-volume">
                            {volume || 12.4} ETH
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="ranking-table-body">
                  {/* <RankingCard></RankingCard> */}
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
  margin-top: 50px;
  background-color: ${colors.background};
  .ranking-title h2 {
    font-size: 51px;
    font-weight: 600;
    line-height: 56.1px;
    color: ${colors.whiteColor};
    margin: 0;
    cursor: default;
  }
  .title-desc {
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
`;

// const RankingCard = ({
//   amount,
//   src,
//   username,
//   changePercent,
//   soldAmount,
//   volume,
// }) => {
//   return (
//     <RankingCardStyled>
//       <div className="ranking-card-container">
//         <div className="ranking-card-stt">{amount || 1}</div>
//         <div className="ranking-card-avatar">
//           <img src={src} alt="" />
//         </div>
//         <div className="ranking-username">
//           {username || 'Jaydon Ekstrom Bothman'}
//         </div>
//         <div className="ranking-change">{changePercent || '+1.4%'}</div>
//         <div className="ranking-sold">{soldAmount || 602}</div>
//         <div className="ranking-volume">{volume || 12.4 + 'ETH'}</div>
//       </div>
//     </RankingCardStyled>
//   );
// };

// const RankingCardStyled = styled.div``;
