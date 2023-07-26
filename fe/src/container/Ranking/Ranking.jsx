import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../Global";
import { PrimaryLayout } from "components/Layout";
import ReactPaginate from "react-paginate";

import { dataOfThisMonthFake } from "./DataRanking";
import { dataOfThisWeekFake } from "./DataRanking";
import axios from "axios";
import { useSettingsStore } from "store/store";
import { redirect, useNavigate } from "react-router-dom";
// console.log('dataOfThisMonth:', dataOfThisMonthFake);

const Ranking = ({ title }) => {
  const [selectedClass, setSelectedClass] = useState("today");
  const [dataTodayTopCreator, setDataTodayTopCreator] = useState();
  const [dataThisWeekTopCreator, setDataThisWeekTopCreator] = useState();
  const [dataThisMonthTopCreator, setDataThisMonthTopCreator] = useState();
  const [dataAlltimeTopCreator, setDataAlltimeTopCreator] = useState();
  const [creatorID, setCreatorID] = useState();

  const light = useSettingsStore((state) => state.light);

  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  console.log("creatorID: " + creatorID);

  // console.log('data: ', {
  //   dataTodayTopCreator: dataTodayTopCreator,
  //   dataThisWeekTopCreator: dataThisWeekTopCreator,
  //   dataThisMonthTopCreator: dataThisMonthTopCreator,
  //   dataAlltimeTopCreator: dataAlltimeTopCreator,
  // });
  useEffect(() => {
    function getAllTopCreator() {
      try {
        function getTopCreatorAlltime() {
          return axios.get(
            `http://localhost:8080/api/ranking/all?page=${page}`
          );
        }
        function getTopCreatorToday() {
          return axios.get("http://localhost:8080/api/ranking/today?page=1");
        }
        Promise.all([getTopCreatorAlltime(), getTopCreatorToday()]).then(
          (res) => {
            let alltime = res[0].data;

            const alltimeTotalPage = res[0].data[0].total_page;
            setTotalPage(alltimeTotalPage);
            console.log("alltime: ", alltime);

            const today = res[1].data;
            setDataAlltimeTopCreator(alltime);
            setDataTodayTopCreator(today);

            // chưa xong api
            setDataThisWeekTopCreator([]);
            setDataThisMonthTopCreator([]);
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
    getAllTopCreator();
  }, [page]);

  const handleClick = (artistId) => {
    console.log(artistId);
    axios
      .get(`http://localhost:8080/api/artist/${artistId}`)
      .then((res) => {
        navigate(`/artist/${artistId}`, {
          state: { dataArtist: res.data[0] },
        });
        window.scrollTo(0, 0);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClickActiveClass = (activeClass) => {
    if (activeClass === "today") {
      setSelectedClass(activeClass);
      // setDataTopCreator(dataTodayTopCreator);
    }
    if (activeClass === "7day") {
      setSelectedClass(activeClass);
    }
    if (activeClass === "30day") {
      setSelectedClass(activeClass);
    }
    if (activeClass === "alltime") {
      setSelectedClass(activeClass);

      // setDataTopCreator(dataAlltimeTopCreator);
    }
  };

  // pagination
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    // console.log(event.selected + 1);
    setPage(newPage);
  };

  return (
    <PrimaryLayout>
      <RankingStyled className="ranking" light={light}>
        <div className="container ranking-container">
          <div className="ranking-content">
            <div className="ranking-title">
              <h2>{title || "Top Creators"}</h2>
              <p className="title-desc">
                Check out top ranking NFT artists on the NFT Marketplace.
              </p>
            </div>
            <div className="ranking-body">
              <div className="ranking-filter">
                <ul className="ranking-filter-list">
                  <li
                    className={
                      selectedClass === "today"
                        ? "ranking-filter-item active"
                        : "ranking-filter-item"
                    }
                    onClick={() => handleClickActiveClass("today")}
                  >
                    <span className="ranking-filter-item__desktop">Today</span>
                    <span className="ranking-filter-item__mobile">1d</span>
                  </li>
                  <li
                    className={
                      selectedClass === "7day"
                        ? "ranking-filter-item active"
                        : "ranking-filter-item"
                    }
                    onClick={() => handleClickActiveClass("7day")}
                  >
                    <span className="ranking-filter-item__desktop">
                      This Week
                    </span>
                    <span className="ranking-filter-item__mobile">7d</span>
                  </li>
                  <li
                    className={
                      selectedClass === "30day"
                        ? "ranking-filter-item active"
                        : "ranking-filter-item"
                    }
                    onClick={() => handleClickActiveClass("30day")}
                  >
                    <span className="ranking-filter-item__desktop">
                      This Month
                    </span>
                    <span className="ranking-filter-item__mobile">30d</span>
                  </li>
                  <li
                    className={
                      selectedClass === "alltime"
                        ? "ranking-filter-item active"
                        : "ranking-filter-item"
                    }
                    onClick={() => handleClickActiveClass("alltime")}
                  >
                    All Time
                  </li>
                </ul>
                <div className="ranking-table">
                  <div className="ranking-table-wrap">
                    <table className="table">
                      <thead>
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
                      </thead>
                      {/* Body */}
                      <tbody className="table-body">
                        {/* today */}
                        {selectedClass === "alltime" &&
                          dataTodayTopCreator &&
                          dataTodayTopCreator.length > 0 &&
                          dataTodayTopCreator.map((item, index) => {
                            return (
                              <Fragment
                                key={index}
                                onClick={setCreatorID(item.account_id)}
                              >
                                <DataTableRanking
                                  index={index + 1}
                                  src={item.avatar}
                                  username={item.username}
                                  change={item.change}
                                  sold={item.nfts_sold}
                                  volume={item.volume}
                                ></DataTableRanking>
                              </Fragment>
                            );
                          })}
                        {/* This Week */}
                        {selectedClass === "7day" &&
                          dataOfThisWeekFake &&
                          dataOfThisWeekFake.length > 0 &&
                          dataOfThisWeekFake.map((item, index) => {
                            return (
                              <Fragment key={index}>
                                <DataTableRanking
                                  index={index + 1}
                                  src={item.avatar}
                                  username={item.username}
                                  change={item.change}
                                  sold={item.nfts_sold}
                                  volume={item.volume}
                                ></DataTableRanking>
                              </Fragment>
                            );
                          })}
                        {/* This Month */}
                        {selectedClass === "30day" &&
                          dataOfThisMonthFake &&
                          dataOfThisMonthFake.length > 0 &&
                          dataOfThisMonthFake
                            .slice(10, 20)
                            .map((item, index) => {
                              return (
                                <Fragment key={index}>
                                  <DataTableRanking
                                    index={index + 1}
                                    src={item.avatar}
                                    username={item.username}
                                    change={item.change}
                                    sold={item.nfts_sold}
                                    volume={item.volume}
                                  ></DataTableRanking>
                                </Fragment>
                              );
                            })}

                        {/* Alltime */}
                        {selectedClass === "alltime" &&
                          dataAlltimeTopCreator &&
                          dataAlltimeTopCreator.length > 0 &&
                          dataAlltimeTopCreator.map((item, index) => {
                            return (
                              <Fragment
                                key={index}
                              >
                                <DataTableRanking
                                  id = {item.account_id}
                                  index={index + 1}
                                  src={item.avatar}
                                  username={item.username}
                                  change={item.change}
                                  sold={item.nfts_sold}
                                  volume={item.volume}
                                  onclick={() => handleClick(item.account_id)}
                                ></DataTableRanking>
                              </Fragment>
                            );
                          })}
                      </tbody>
                    </table>

                    {/* checking no data --> show 'There are no auctions'  */}
                    {/* today */}
                    {selectedClass === "today" &&
                      dataTodayTopCreator &&
                      dataTodayTopCreator.length === 0 && (
                        <div className="no-auction">
                          There are no auctions going on Today
                        </div>
                      )}
                    {/* this week */}
                    {selectedClass === "7day" &&
                      dataOfThisWeekFake &&
                      dataOfThisWeekFake.length === 0 && (
                        <div className="no-auction">
                          There are no auctions going on this week
                        </div>
                      )}
                    {/* this month */}
                    {selectedClass === "30day" &&
                      dataOfThisMonthFake &&
                      dataOfThisMonthFake.length === 0 && (
                        <div className="no-auction">
                          There are no auctions going on this month
                        </div>
                      )}
                    {/* alltime */}
                    {selectedClass === "alltime" &&
                      dataAlltimeTopCreator &&
                      dataAlltimeTopCreator.length === 0 && (
                        <div className="no-auction">
                          There are no auctions going on Today
                        </div>
                      )}
                    {/* Pagination */}
                    {selectedClass === "alltime" &&
                      dataAlltimeTopCreator &&
                      dataAlltimeTopCreator.length > 0 && (
                        <div className="topCreator-pagination">
                          <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={totalPage}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                          />
                        </div>
                      )}
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
  /* background-color: ${colors.background}; */
  padding-bottom: 10px;
  background-color: ${(prop) =>
    prop.light ? colors.whiteColor : colors.background};

  .ranking-content {
    margin-bottom: 20px;
  }
  .ranking-title {
    margin: 80px 0;
  }
  .ranking-title h2 {
    font-size: 51px;
    font-weight: 600;
    /* line-height: 56.1px; */
    /* color: ${colors.whiteColor}; */
    color: ${(prop) => (prop.light ? colors.primaryColor : colors.whiteColor)};

    /* margin: 0;
    padding: 0; */
    cursor: default;
  }
  .title-desc {
    margin-top: 20px;
    font-size: 22px;
    font-weight: 400;
    line-height: 35.2px;
    /* color: ${colors.whiteColor}; */
    color: ${(prop) => (prop.light ? colors.blackColor : colors.whiteColor)};
  }
  /* ranking-filter-list */

  ul li {
    user-select: none;
  }
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
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    /* background-color: ${colors.borderColor}; */
    background-color: ${(prop) =>
      prop.light ? colors.primaryColor : colors.borderColor};
    transform: scaleX(0); /* Initially hide the line */
    transition: transform 0.3s ease-in-out;
  }
  .active {
    /* color: ${colors.whiteColor}; */
    color: ${(prop) => (prop.light ? colors.primaryColor : colors.borderColor)};
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
    /* border: 1px solid ${colors.borderColor}; */
    border: 1px solid
      ${(prop) => (prop.light ? colors.primaryColor : colors.borderColor)};
    border-style: solid none;
    /* color: ${colors.borderColor}; */
    color: ${(prop) => (prop.light ? colors.blackColor : colors.borderColor)};
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
    /* background-color: ${colors.backgroundColor2}; */
    /* background-color: ${colors.whiteColor}; */
    background-color: ${(prop) =>
      prop.light ? colors.backgroundColor3 : colors.backgroundColor2};
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
    /* background-color: ${colors.background}; */
    background-color: ${(prop) =>
      prop.light ? colors.backgroundColor3 : colors.background};
    font-weight: 500;
    /* color: ${colors.borderColor}; */
    color: ${(prop) => (prop.light ? colors.blackColor : colors.borderColor)};
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
    /* color: ${colors.whiteColor}; */
    color: ${(prop) => (prop.light ? colors.background : colors.whiteColor)};
    margin-left: 20px;
  }
  .body-data-change {
    font-weight: ${(prop) => (prop.light ? "600" : "400")};
    line-height: 22.4px;
    color: ${colors.greenColor};
    /* color: ${(prop) =>
      prop.light ? colors.blackColor : colors.greenColor}; */
  }
  .body-data-sold,
  .body-data-volume {
    font-weight: 400;
    /* color: ${colors.whiteColor}; */
    color: ${(prop) => (prop.light ? colors.background : colors.whiteColor)};
  }

  .no-auction {
    /* color: ${colors.whiteColor}; */
    color: ${(prop) => (prop.light ? colors.borderColor : colors.whiteColor)};
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  /* pagination */
  .topCreator-pagination {
    width: 100%;
  }

  .topCreator-pagination ul {
    list-style: none;
    /* color: ${colors.whiteColor}; */
    color: ${(prop) => (prop.light ? colors.blackColor : colors.whiteColor)};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .topCreator-pagination ul li {
    text-align: center;
    margin: 0 6px;
    padding: 10px 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .selected {
    /* background-color: ${colors.backgroundColor2}; */
    background-color: ${(prop) =>
      prop.light ? colors.primaryColor : colors.backgroundColor2};

    width: 10px;
    cursor: progress;
  }
  .topCreator-pagination ul li.disabled {
    opacity: 0.6;
    cursor: default;
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
    .no-auction {
      font-size: 26px;
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
    .no-auction {
      font-size: 16px;
    }
  }
`;

const DataTableRanking = ({ id, index, src, username, change, sold, volume, onclick }) => {
  return (
    <>
      <tr className="table-row-body" onClick={onclick}>
        <td className="table-body-data">
          <span className="body-data-stt">{index || 1}</span>
        </td>
        <td className="table-body-data">
          <img className="table-body-data-img" src={src} alt="avatar" />
          <span className="body-data-username">
            {username || "Jaydon Ekstrom Bothman"}
          </span>
        </td>
        <td className="table-body-data">
          <span className="body-data-change">{change || "+1.41%"}</span>
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
