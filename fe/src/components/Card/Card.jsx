import styled from 'styled-components';
import React from 'react';
// import ReactHtmlParser from 'react-html-parser';

const CardStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};

  .header_card {
    height: 300px;
  }

  .header_card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  .body_card {
    height: 20%;
    padding: 20px;
  }

  .body_card .title_card {
    margin-bottom: 27px;
  }

  .body_card .title_card h5 {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .body_card .title_card .info_artist {
    display: flex;
    column-gap: 10px;
    align-items: center;
  }

  .body_card .title_card .info_artist img {
    width: 24px;
    height: 24px;
    object-fit: cover;
    border-radius: 50px;
  }

  .body_card .title_card .info_artist span {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  .body_card .info_card {
    display: flex;
    justify-content: space-between;
  }

  .body_card .info_card h6 {
    color: #858584;
    font-family: 'Space Mono';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    margin-bottom: 5px;
  }

  .body_card .info_card span {
    color: #fff;
    font-family: 'Space Mono';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  .body_card .info_card .price {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .body_card .info_card .highest_bid {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

const CardLargeStyled = styled.div``;

const CardSmallStyled = styled.div``;

const CardTrendingCollectionStyled = styled.div`
  width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};

  .header_card {
    height: auto;
  }

  .header_card .list_image {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto auto;
    justify-content: space-between;
    gap: 15px;
  }

  .header_card .list_image .list_image_item:first-child {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    width: unset;
    height: 400px;
  }

  .header_card .list_image .list_image_item {
    width: 100px;
    height: 100px;
  }

  .header_card .list_image .list_image_item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  .header_card .list_image .box_img {
    border-radius: 20px;
    background: rgb(162, 89, 255);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }

  .header_card .list_image .box_img span {
    color: #fff;
    font-size: 22px;
    font-family: Space Mono;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }

  .body_card {
    height: 20%;
  }

  .body_card .title_card h5 {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .body_card .title_card .info_artist {
    display: flex;
    column-gap: 10px;
    align-items: center;
  }

  .body_card .title_card .info_artist img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  .body_card .title_card .info_artist span {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  @media (max-width: 991.98px) {
  }

  @media (max-width: 767.98px) {
    width: 100%;
  }
`;

const CardTopCreatorHomePage = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1 0 0;
  border-radius: 20px;
  background: #3b3b3b;
  position: relative;

  .number_id {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 20px;
    top: 18px;
    border-radius: 50px;
    background: #2b2b2b;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .number_id span {
    color: #858584;
    text-align: center;
    font-size: 16px;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  .header_card {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .header_card img {
    width: 95%;
    height: 100%;
    border-radius: 50%;
  }

  .body_card h5 {
    color: #fff;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
  }

  .body_card .total_sales {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .body_card .total_sales p {
    color: #858584;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  .body_card .total_sales span {
    color: #fff;
    font-size: 16px;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  @media (max-width: 991.98px) {
    flex-direction: unset;
    .header_card {
      width: 30%;
    }

    .body_card h5 {
      text-align: unset;
    }
  }

  @media (max-width: 767.98px) {
  }
`;

const CardCategoriesHomePage = styled.div`
  border-radius: 20px;
  background: #3b3b3b;

  .header_card {
    background-image: url(${(props) => props.background_img});
    background-repeat: round;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 0;
    backdrop-filter: blur(7.5px);
    background-size: cover;
  }

  .header_card img {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }

  .body_card {
    padding: 10%;
  }

  .body_card .title_card h5 {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    width: fit-content;
  }

  @media (max-width: 991.98px) {
    .header_card img {
      object-fit: contain;
    }
  }

  @media (max-width: 767.98px) {
    .header_card img {
      object-fit: contain;
    }
  }
`;

const Card = ({
  type,
  title,
  img_product,
  bgColor,
  borderRadius,
  img_artist,
  name_artist,
  type2,
  box_img,
  total_sales,
  number_id,
  background_img,
  highest_bid,
  price,
}) => {
  if (type === 'large') {
    return <CardLargeStyled></CardLargeStyled>;
  } else if (type === 'small') {
    return <CardSmallStyled></CardSmallStyled>;
  } else if (type === 'TrendingCollection') {
    type2 = '';
    if (img_product.length > 1 && img_product.length <= 4) {
      type2 = img_product.map((element, index) => (
        <div className="list_image_item" key={index}>
          <img src={element} alt="" />
        </div>
      ));
    } else if (img_product.length > 4) {
      for (let index = 0; index < 3; index++) {
        type2 += `<div className='list_image_item' key='${index}'><img src=${img_product[index]} alt='' /></div>`;
      }
      box_img =
        "<div className='list_image_item box_img'><span>1025+</span></div>";
      type2 += box_img;
    }
    return [
      <CardTrendingCollectionStyled>
        <div className="header_card">
          <div className="list_image">
            {/* {img_product.length > 4 ? ReactHtmlParser(type2) : type2} */}
          </div>
        </div>
        <div className="body_card">
          <div className="title_card">
            <h5>{title}</h5>
            <div className="info_artist">
              <img src={img_artist} alt="" />
              <span>{name_artist}</span>
            </div>
          </div>
          <div className="info_card"></div>
        </div>
      </CardTrendingCollectionStyled>,
    ];
  } else if (type === 'TopCreatorHomePage') {
    return (
      <CardTopCreatorHomePage
        type={type}
        title={title}
        bgColor={bgColor}
        borderRadius={borderRadius}
        img_artist={img_artist}
        name_artist={name_artist}
        total_sales={total_sales}
        number_id={number_id}
      >
        <div className="number_id">
          <span>{number_id + 1}</span>
        </div>
        <div className="header_card">
          <img src={img_artist} alt="" />
        </div>
        <div className="body_card">
          <h5>{name_artist}</h5>
          <div className="total_sales">
            <p>Total Sales:</p>
            <span>{total_sales} ETH</span>
          </div>
        </div>
      </CardTopCreatorHomePage>
    );
  } else if (type === 'CategoriesHomePage') {
    return (
      <CardCategoriesHomePage
        background_img={background_img}
        img_product={img_product}
        title={title}
        type={type}
      >
        <div className="header_card">
          <img src={img_product} alt="" />
        </div>
        <div className="body_card">
          <div className="title_card">
            <h5>{title}</h5>
          </div>
        </div>
      </CardCategoriesHomePage>
    );
  } else {
    return (
      <CardStyled
        type={type}
        title={title}
        img_product={img_product}
        bgColor={bgColor}
        borderRadius={borderRadius}
        img_artist={img_artist}
        name_artist={name_artist}
        price={price}
        highest_bid={highest_bid}
      >
        <div className="header_card">
          <img src={img_product} alt="" />
        </div>
        <div className="body_card">
          <div className="title_card">
            <h5>{title}</h5>
            <div className="info_artist">
              <img src={img_artist} alt="" />
              <span>{name_artist}</span>
            </div>
          </div>
          <div className="info_card">
            <div className="price">
              <h6>Price</h6>
              <span>{price} ETH</span>
            </div>
            <div className="highest_bid">
              <h6>Highest Bid</h6>
              <span>{highest_bid} ETH</span>
            </div>
          </div>
        </div>
      </CardStyled>
    );
  }
};

export {Card};
