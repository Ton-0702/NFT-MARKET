import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {PrimaryLayout} from 'components/Layout';
import banner from '../../assets/Nft-page-imgs/Banner.jpeg';
import avatar from '../../assets/HomePage/Avatar1.svg';
import globe from '../../assets/Nft-page-imgs/Globe.png';
import {colors} from 'Global';
import {useLocation} from 'react-router-dom';
import avatar1 from '../../assets/ranking-imgs/avatar.svg';
import avatar2 from '../../assets/ranking-imgs/avatar2.svg';
import avatar3 from '../../assets/ranking-imgs/avatar3.svg';
import avatar4 from '../../assets/ranking-imgs/avatar4.svg';
import avatar5 from '../../assets/ranking-imgs/avatar5.svg';
import avatar6 from '../../assets/ranking-imgs/avatar6.svg';
import avatar7 from '../../assets/ranking-imgs/avatar7.svg';
import axios from 'axios';
import {useCurrentUserStore} from 'store/store';
import {Card} from 'components/Card';
import {useNavigate} from 'react-router-dom';

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
  let TIME = 2000;
  const [count, setCount] = useState(TIME); // seconds
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  // const [dataNftPage, setDataNftPage] = useState();

  const [inputValue, setInputValue] = useState('');
  const [transactions, setTransactions] = useState([] || null);
  // console.log('transactions: ', transactions);
  const [nftId, setNftId] = useState();

  // const [currentUser, setCurrentUser] = useState([] || null);

  const location = useLocation();
  const {dataNft} = location.state;
  const [selectedClass, setSelectedClass] = useState('created');
  const [listDataNFT, setListDataNFT] = useState();
  const navigate = useNavigate();
  console.log('dataNft: ', dataNft);
  const currentUser = useCurrentUserStore((state) => state.currentUser);

  useEffect(() => {
    // get detail Page
    // async function getDetail() {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:8080/nfts/nft-detail-page/${dataNft.nft_id}`
    //       // `http://localhost:8080/nfts/nft-detail-page/${13}`
    //     );
    //     console.log(response.data[0]);
    //     setDataNftPage(response.data[0]);
    //     const nftId = response.data[0].nft_id;
    //     // const nft_name=response.data[0].nft_name;
    //     // console.log("nft name: ",nft_name);
    //     console.log('nftId: ', nftId);

    //     setNftId(nftId);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    // getListNFTbyId
    function getListNFTById() {
      axios
        .get(`http://localhost:8080/nfts/created-nft/${dataNft.account_id}`)
        // .get(`http://localhost:8080/nfts/created-nft/${13}`)
        .then((res) => {
          console.log(res.data);
          setListDataNFT(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getListNFTById();
    // getDetail();
  }, []);

  // get day and time end bid
  useEffect(() => {
    // console.log('nftId endbids', dataNft.nft_id);
    async function timeEndBid() {
      try {
        if (dataNft.nft_id) {
          const response = await axios.get(
            `http://localhost:8080/nfts/date-start-end-bid/${dataNft.nft_id}`
          );
          // console.log(response);
          const data = response.data;
          console.log('timeEndBid: ', data);
          const secondsRemain = Number(data.totalSecondRemain);
          if (secondsRemain <= 86000) {
            setCount(secondsRemain);
          } else {
            setCount(0);
          }
          console.log('secondsRemain:', secondsRemain);
        }
      } catch (error) {
        console.error(error);
      }
    }
    timeEndBid();
  }, []);

  // history Transaction
  useEffect(() => {
    async function historyTransaction() {
      try {
        if (dataNft.nft_id) {
          const response = await axios.get(
            `http://localhost:8080/transaction/history/${dataNft.nft_id}`
          );
          // console.log(response);
          const data = response.data;
          console.log('dataTransaction: ', data);
          setTransactions(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    historyTransaction();
  }, [dataNft.nft_id]);

  // handleClickActiveClass
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

  // handleClick
  const handleClick = (nftID) => {
    axios
      .get(`http://localhost:8080/nfts/nft-detail-page/${nftID}`)
      .then((res) => {
        navigate(`/nft-detail-page/${nftID}`, {
          state: {dataNft: res.data[0]},
        });
        window.scrollTo(0, 0);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // CountDown and transfer Data
  useEffect(() => {
    if (count >= 0) {
      const secondsLeft = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
        let timeLeftVar = secondsToTime(count);
        setHour(timeLeftVar.h);
        setMinute(timeLeftVar.m);
        setSecond(timeLeftVar.s);
        if (count === 0) {
          console.log('end bids', dataNft.nft_id);
          const formData = new FormData();
          formData.append('nft_id', dataNft.nft_id);
          try {
            axios.post(
              `http://localhost:8080/transaction/complete-transaction`,
              formData
            );
            console.log('Transaction success');
          } catch (error) {
            console.log('transaction end bid: ', error);
          }
        }
      }, 1000);

      return () => clearInterval(secondsLeft);
    } else {
      console.log('TimeOut');
    }
  }, [count, hour, minute, second]);

  // secondsToTime
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

  // create transaction bid
  const createTransactionBid = (inputValue) => {
    const {account_id} = currentUser;
    // http://localhost:8080/transaction/create
    console.log('inputValue: ', inputValue);
    const formData = new FormData();
    formData.append('nft_id', dataNft.nft_id);
    formData.append('account_id', account_id);
    formData.append('highest_bid', inputValue);
    async function postTransactionBid() {
      axios
        .post(`http://localhost:8080/transaction/create`, formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    postTransactionBid();
  };

  // handleClickPlaceBid
  const handleClickPlaceBid = () => {
    let dataBids;
    if (!currentUser) {
      alert('you need to LogIn');
      return null;
    }
    const {username} = currentUser;
    const today = new Date();
    const currentTime =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    // console.log('clicked');
    const inputNumber = Number(inputValue);
    // 1. get info username

    //2. check Value > 0 && truthy

    // if (inputNumber === 0 || inputNumber === '') {
    //   alert('Invalid Value');
    // } else if (transactions) {
    //   console.log('has transactions');
    // }

    if (!inputNumber) {
      console.log('Invalid Value');
      alert('Invalid Value');
    } else if (inputNumber < dataNft.price) {
      alert(`Must be greater than ${dataNft.price} ETH`);
    } else {
      if (transactions.length === 0) {
        dataBids = {
          username: username,
          date: today,
          avatar: 'a',
          currentTime: currentTime,
          highest_bid: inputNumber,
        };
        createTransactionBid(inputNumber);
        // sort data, likely Unshift method
        setTransactions((prevTransactions) => [dataBids, ...prevTransactions]);
        setInputValue('');
      }
      if (transactions.length > 0) {
        const highestBidsPrice = transactions[0].highest_bid;
        console.log('highestBidsPrice: ', highestBidsPrice);
        if (inputNumber > highestBidsPrice) {
          dataBids = {
            username: username,
            date: today,
            avatar: 'a',
            currentTime: currentTime,
            highest_bid: inputNumber,
          };
          createTransactionBid(inputNumber);
          // sort data, likely Unshift method
          setTransactions((prevTransactions) => [
            dataBids,
            ...prevTransactions,
          ]);
          setInputValue('');
        } else {
          alert(`Can not bids !!! the highest bid is ${highestBidsPrice} ETH`);
          console.log('can not add bids');
        }
      }
    }
    // 3. check ETH BIDS > history table BIDS
    // 4. check ETH user >= ETH BIDS

    // console.log('dataBids: ', dataBids);
    return dataBids;
  };

  const handleInputChange = (e) => {
    const {value} = e.target;
    setInputValue(value);
  };

  return (
    <PrimaryLayout>
      <NftPageStyled className="nft-page">
        <div className="nft-page-wrap">
          <img src={dataNft.image} alt="" className="banner" />
          <div className="container nft-page-content">
            <div className="content-left">
              <div className="content-left-wrap">
                <div className="content-top">
                  <div className="artist-name">{dataNft.nft_name}</div>
                  <span className="date-creating">
                    Minted on {dataNft.date_create}
                  </span>
                </div>
                <div className="content-created">
                  <div className="content-created-item">
                    <div className="create-by-title">Created By</div>
                    <div className="created-detail">
                      <img src={dataNft.avatar} alt="" />
                      <span className="create-by">
                        {dataNft.username || currentUser.username || 'Orbitian'}
                      </span>
                    </div>
                  </div>
                  <div className="content-created-item">
                    <div className="create-by-title">Price NFT</div>
                    <div className="created-detail">
                      <span className="price-nft">{dataNft.price} ETH</span>
                    </div>
                  </div>
                </div>
                <div className="content-desc">
                  <div className="desc-title">Description</div>
                  <span className="desc">
                    {dataNft.description
                      ? dataNft.description
                      : `The Orbitians is a collection of 10,000 unique NFTs on the
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
                    they've taken to make human beings their target.`}
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
                    {/* {categories_name &&
                      categories_name.map((tag, index) => {
                        return (
                          <li className="tags-item" key={index}>
                            animation
                          </li>
                        );
                      })} */}
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
                <div className="artist-name">{dataNft.nft_name}</div>
                <span className="date-creating">
                  Minted on {dataNft.date_create}
                </span>
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
                  <div className="input-bid">
                    <div className="input-bid-label">Bid Price: </div>
                    <input
                      type="number"
                      placeholder="ETH"
                      name="inputBid"
                      required
                      onChange={handleInputChange}
                      value={inputValue}
                    />
                  </div>

                  {hour === 0 && minute === 0 && second === 0 ? (
                    <div className="bids-end">
                      <span>The Auction has ended</span>
                    </div>
                  ) : (
                    <div className="card-btn">
                      <button
                        className="btn"
                        type="button"
                        onClick={handleClickPlaceBid}
                      >
                        <strong>Place Bid</strong>
                        <div id="container-stars">
                          <div id="stars"></div>
                        </div>

                        <div id="glow">
                          <div className="circle"></div>
                          <div className="circle"></div>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="table-content">
                <table className="auction__table">
                  <thead className="auction__table-header">
                    <tr>
                      <td className="auction__table-header-data">#</td>
                      <td className="auction__table-header-data">Username</td>
                      <td className="auction__table-header-data">Amount</td>
                    </tr>
                  </thead>
                  <tbody className="auction__table-body">
                    {transactions &&
                      transactions.map((item, index) => {
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
                                {item.highest_bid}
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
                      <span className="artist-filter-item_title">
                        Collection
                      </span>
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
                          key={index}
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
        </div>
      </NftPageStyled>
    </PrimaryLayout>
  );
};

export {NftPage};

const NftPageStyled = styled.div`
  background-color: ${colors.background};
  .nft-page-wrap {
    padding-bottom: 22px;
    overflow-y: auto;
  }

  .nft-page-wrap .banner {
    width: 100%;
    max-height: 560px;
    object-fit: fill;
    background-repeat: no-repeat;
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
    display: flex;
    justify-content: space-between;
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
  .create-by,
  .price-nft {
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
    /* height: 234px; */
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
    margin-bottom: 20px;
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

  // input-bid
  .input-bid {
    /* border: 1px solid red; */
    display: flex;
    height: 28px;
    align-items: center;
  }
  .input-bid-label {
    width: 30%;
    color: ${colors.whiteColor};
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    border-radius: 20px;
    height: 100%;
  }
  .input-bid input {
    width: 70%;
    height: 28px;
    border-radius: 4px;
    border: none;
    text-indent: 10px;
  }
  .input-bid input::-webkit-outer-spin-button,
  .input-bid input::-webkit-inner-spin-button {
    /* Chrome, Safari, Edge, Opera */
    -webkit-appearance: none;
    margin: 0;
  }
  .input-bid input:focus {
    outline: none;
  }

  input[type='number'] {
    /* Firefox */
    -moz-appearance: textfield;
  }

  /*  card */
  .card-btn {
    margin-top: 20px;
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

  // star
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    /* background-size: 300% 300%; */
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    border-radius: 10px;
    /* background-image: linear-gradient(#212121, #212121),
      linear-gradient(
        137.48deg,
        #ffdb3b 10%,
        #fe53bb 45%,
        #8f51ea 67%,
        #0044ff 87%
      ); */
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  #container-stars {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 20px;
  }

  strong {
    z-index: 2;
    /* font-family: 'Avalors Personal Use'; */
    font-family: 'Space Mono', monospace;
    font-size: 16px;
    letter-spacing: 2px;
    color: #ffffff;
    text-shadow: 0 0 4px ${colors.whiteColor};
  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;
  }

  .circle {
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;
  }

  .circle:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  .circle:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }

  .btn:hover #container-stars {
    z-index: 1;
    /* background-color: #212121; */
  }

  .btn:hover {
    transform: scale(1.1);
  }

  .btn:active {
    /* border: double 4px #fe53bb; */
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  .btn:active .circle {
    background: #fe53bb;
  }

  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;
  }

  #stars::after {
    content: '';
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
  }

  #stars::after {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  #stars::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
  }

  #stars::before {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }

  .bids-end span {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    color: ${colors.whiteColor};
    display: inline-block;
    width: 100%;
    text-align: center;
  }

  @keyframes animStar {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-135rem);
    }
  }

  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0);
    }
  }

  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
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
    border-radius: 50%;
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
    .tags-tittle .tags-list,
    .price-nft {
      font-size: 16px;
      font-weight: 400;
    }
    .price-nft {
      font-weight: 600;
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

  .artist-body {
    margin-top: 50px;
    border-top: 1px solid rgb(59, 59, 59);
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
