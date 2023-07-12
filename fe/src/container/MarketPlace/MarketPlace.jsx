import { Input } from "components/Input";
import { PrimaryLayout } from "components/Layout";
import { colors } from "../../Global";
import styled from "styled-components";

const MarketPlaceStyled = styled.div`
  .header_market_place form {
    position: relative;
  }

  .header_market_place h2 {
    color: #ffffff;
    font-size: 51px;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: 0em;
  }

  .header_market_place p {
    color: #ffffff;
    font-size: 22px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    margin-bottom: 30px;
  }

   /* market-place-filter-list */
   .market-place-filter-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .market-place-filter-item {
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

  .market-place-filter-item::after {
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

  /* market-place-table */
  .market-place-table {
    margin-top: 40px;
  }
  .table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 20px;
  }

  .market-place-row-header {
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


  .market-place-filter-item__mobile {
    display: none;
  }




  
`;

const MarketPlace = () => {
  return (
    <PrimaryLayout>
      <MarketPlaceStyled>
        <div className="container">
          <div className="header_market_place">
            <h2>Browse Marketplace</h2>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <Input
              width={"100%"}
              textColor={"#858584"}
              bgColor={"unset"}
              border={"1px solid #3B3B3B"}
              borderRadius={"20px"}
              paddingTop={"12px"}
              paddingBottom={"12px"}
              type={"search"}
              placeHolder={"Search your favourite NFTs"}
              paddingLeft={"20px"}
            ></Input>
          </div>
          <div className="market-place-body">
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
          </div>
        </div>
      </MarketPlaceStyled>
    </PrimaryLayout>
  );
};

export default MarketPlace;
