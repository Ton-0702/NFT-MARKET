import React from 'react';
import styled from 'styled-components';
import {colors} from '../../Global';

const Ranking = ({title}) => {
  return (
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
              <li className="ranking-filter-item">Today</li>
              <li className="ranking-filter-item">This Week</li>
              <li className="ranking-filter-item">This Month</li>
              <li className="ranking-filter-item">All Time</li>
            </ul>
            <div className="ranking-table">
              <div className="ranking-table-header">
                <div className="table-header-list">
                  <div className="table-header-item">#</div>
                  <div className="table-header-item">Artist</div>
                  <div className="table-header-item">Change</div>
                  <div className="table-header-item">NFTs Sold</div>
                  <div className="table-header-item">Volume</div>
                </div>
              </div>

              <div className="ranking-table-body">
                <RankingCard></RankingCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RankingStyled>
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
    position: relative;
  }
  .ranking-filter-item {
    width: 100%;
    font-size: 22px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    height: 60px;
    color: ${colors.borderColor};
  }

  .ranking-filter-item:first-child::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 2px;
    left: 0;
    bottom: 0;
    color: ${colors.primaryColor};
    z-index: 1;
  }
`;

const RankingCard = ({
  amount,
  src,
  username,
  changePercent,
  soldAmount,
  volume,
}) => {
  return (
    <RankingCardStyled>
      <div className="ranking-card-container">
        <div className="ranking-card-stt">{amount || 1}</div>
        <div className="ranking-card-avatar">
          <img src={src} alt="" />
        </div>
        <div className="ranking-username">
          {username || 'Jaydon Ekstrom Bothman'}
        </div>
        <div className="ranking-change">{changePercent || '+1.4%'}</div>
        <div className="ranking-sold">{soldAmount || 602}</div>
        <div className="ranking-volume">{volume || 12.4 + 'ETH'}</div>
      </div>
    </RankingCardStyled>
  );
};

const RankingCardStyled = styled.div``;
