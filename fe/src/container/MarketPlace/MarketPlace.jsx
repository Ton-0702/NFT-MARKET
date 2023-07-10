import { PrimaryLayout } from "components/Layout";
import styled from "styled-components";

const MarketPlaceStyled = styled.div``;

const MarketPlace = () => {
  return (
    <PrimaryLayout>
      <MarketPlaceStyled>
        <div className="container">
          <div className="header_market_place">
            <h2>Browse Marketplace</h2>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <form action="">
              <input type="search" name="search" id="" />
              <i class="fa-thin fa-magnifying-glass"></i>
            </form>
          </div>
        </div>
      </MarketPlaceStyled>
    </PrimaryLayout>
  );
};

export default MarketPlace;
