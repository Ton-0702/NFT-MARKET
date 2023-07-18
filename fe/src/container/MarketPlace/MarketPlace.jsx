import {Input} from 'components/Input';
import {PrimaryLayout} from 'components/Layout';
import {colors} from '../../Global';
import styled from 'styled-components';
import {Card} from 'components/Card';

import avatar1 from '../../assets/Artist/avatar1.png';
import cate5a from '../../assets/HomePage/Categories/cate5a.png';
import {useState} from 'react';

const CreatedMarketPlaceData = [
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

const MarketPlaceStyled = styled.div`
  .container {
    padding: 0 20px;
  }

  .header-market-place {
    padding: 40px 0px;
  }

  .header-market-place form {
    position: relative;
  }

  .header-market-place form input {
    font-size: 16px;
  }

  .header-market-place h2 {
    color: #ffffff;
    font-size: 51px;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: 0em;
    margin-bottom: 10px;
  }

  .header-market-place p {
    color: #ffffff;
    font-size: 22px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    margin-bottom: 30px;
  }

  ul li {
    user-select: none;
  }
  .market-place-filter-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    overflow: auto;
  }
  .market-place-filter-item {
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

  .market-place-filter-item::after {
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

  .market-place-filter-item-title {
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    margin-right: 16px;
  }

  .market-place-filter-item-count {
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

  .active .market-place-filter-item-count {
    background-color: ${colors.borderColor};
  }

  .market-place-body-list {
    background-color: ${colors.backgroundColor2};
  }

  .market-place-body-list .market-place-body-grid {
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
    .market-place-body-list .market-place-body-grid {
      grid-template-columns: auto auto;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    .header-market-place h2 {
      font-size: 38px;
    }

    .header-market-place
      .infor-market-place
      .body-infor-market-place
      .header-body-infor-market-place {
      gap: 30px;
      flex-direction: column;
    }
  }

  //
  @media (max-width: 575.98px) {
    .header-market-place h2 {
      font-size: 28px;
    }

    .header-market-place p {
      font-size: 16px;
    }

    .market-place-body-list .market-place-body-grid {
      grid-template-columns: auto;
    }

    .header-market-place
      .infor-market-place
      .body-infor-market-place
      .statistical {
      justify-content: space-between;
      gap: unset;
    }

    .header-market-place
      .infor-market-place
      .body-infor-market-place
      .header-body-infor-market-place
      .body-infor-market-place-button {
      flex-direction: column;
    }

    .header-market-place
      .infor-market-place
      .body-infor-market-place
      .header-body-infor-market-place
      .body-infor-market-place-button
      button {
      width: 100%;
    }

    .header-market-place
      .infor-market-place
      .body-infor-market-place
      .statistical
      h4 {
      font-size: 22px;
    }

    .header-market-place
      .infor-market-place
      .body-infor-market-place
      .statistical
      span {
      font-size: 16px;
    }
  }
`;

const MarketPlace = () => {
  const [selectedClass, setSelectedClass] = useState('created');

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
  return (
    <PrimaryLayout>
      <MarketPlaceStyled>
        <div className="container">
          <div className="header-market-place">
            <h2>Browse Marketplace</h2>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <Input
              width={'100%'}
              textColor={'#858584'}
              bgColor={'unset'}
              border={'1px solid #3B3B3B'}
              borderRadius={'20px'}
              paddingTop={'12px'}
              paddingBottom={'12px'}
              type={'search'}
              placeHolder={'Search your favourite NFTs'}
              paddingLeft={'20px'}
            ></Input>
          </div>
          {/* <div className="market-place-body">
            <div className="market-place-filter">
              <ul className="market-place-filter-list">
                <li className="market-place-filter-item active">
                  <span className="market-place-filter-item__desktop">
                    Today
                  </span>
                  <span className="market-place-filter-item__mobile">1d</span>
                </li>
                <li className="market-place-filter-item">
                  <span className="market-place-filter-item__desktop">
                    This Week
                  </span>
                  <span className="market-place-filter-item__mobile">7d</span>
                </li>
                <li className="market-place-filter-item">
                  <span className="market-place-filter-item__desktop">
                    This Month
                  </span>
                  <span className="market-place-filter-item__mobile">30d</span>
                </li>
                <li className="market-place-filter-item">All Time</li>
              </ul>
              <div className="market-place-table">
                <div className="market-place-table-wrap">
                  <table className="table">
                    <tr className="market-place-row-header">
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
            
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}

          <div className="body-market-place">
            <div className="market-place-body">
              <div className="container">
                <div className="market-place-filter">
                  <ul className="market-place-filter-list">
                    <li
                      className={
                        selectedClass === 'created'
                          ? 'market-place-filter-item active'
                          : 'market-place-filter-item'
                      }
                      onClick={() => handleClickActiveClass('created')}
                    >
                      <span className="market-place-filter-item-title">
                        Created
                      </span>
                      <span className="market-place-filter-item-count">
                        302
                      </span>
                    </li>
                    <li
                      className={
                        selectedClass === 'owned'
                          ? 'market-place-filter-item active'
                          : 'market-place-filter-item'
                      }
                      onClick={() => handleClickActiveClass('owned')}
                    >
                      <span className="market-place-filter-item-title">
                        Owned
                      </span>
                      <span className="market-place-filter-item-count">67</span>
                    </li>
                    <li
                      className={
                        selectedClass === 'collection'
                          ? 'market-place-filter-item active'
                          : 'market-place-filter-item'
                      }
                      onClick={() => handleClickActiveClass('collection')}
                    >
                      <span className="market-place-filter-item-title">
                        Collection
                      </span>
                      <span className="market-place-filter-item-count">4</span>
                    </li>
                  </ul>
                  <div className="market-place-table">
                    <div className="market-place-table-wrap"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="market-place-body-list">
              <div className="container">
                <div className="market-place-body-grid">
                  {CreatedMarketPlaceData
                    ? CreatedMarketPlaceData.map((e, index) => (
                        <div className="body-market-place-body-grid-item">
                          <Card
                            title={e.title}
                            img_product={e.img}
                            price={e.price}
                            highest_bid={e.price}
                            img_artist={e.img_artist}
                            name_artist={e.name_artist}
                            total_sales={e.total_sales}
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
        </div>
      </MarketPlaceStyled>
    </PrimaryLayout>
  );
};

export default MarketPlace;
