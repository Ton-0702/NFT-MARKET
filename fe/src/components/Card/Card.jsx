import styled from "styled-components";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const CardStyled = styled.div`
  width: 510px;
  height: 505px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};

  .header_cart {
    height: 80%;
  }

  .header_cart img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .body_cart {
    height: 20%;
    padding: 20px;
  }

  .body_cart .title_cart h5 {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .body_cart .title_cart .info_artist {
    display: flex;
    column-gap: 10px;
    align-items: center;
  }

  .body_cart .title_cart .info_artist span {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const CardLargeStyled = styled.div``;

const CardSmallStyled = styled.div``;

const CardTrendingCollectionStyled = styled.div`
  width: 330px;
  height: 525px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};

  .header_cart {
    height: auto;
  }

  .header_cart .list_image {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto auto;
    justify-content: space-between;
    gap: 15px;
  }

  .header_cart .list_image .list_image_item:first-child {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    width: unset;
    height: unset;
  }

  .header_cart .list_image .list_image_item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  .header_cart .list_image .box_img {
    border-radius: 20px;
    background: rgb(162, 89, 255);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }

  .header_cart .list_image .box_img span {
    color: #fff;
    font-size: 22px;
    font-family: Space Mono;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }

  .body_cart {
    height: 20%;
  }

  .body_cart .title_cart h5 {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .body_cart .title_cart .info_artist {
    display: flex;
    column-gap: 10px;
    align-items: center;
  }

  .body_cart .title_cart .info_artist span {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
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
}) => {
  if (type === "large") {
    return <CardLargeStyled></CardLargeStyled>;
  } else if (type === "small") {
    return <CardSmallStyled></CardSmallStyled>;
  } else if (type === "TrendingCollection") {
    console.log(img_product.length);
    type2 = "";
    if (img_product.length > 1 && img_product.length <= 4) {
      type2 = img_product.map((element, index) => (
        <div
          className="list_image_item"
          key={index}
        >
          <img src={element} alt="" />
        </div>
      ));
    } else if (img_product.length > 4) {
      for (let index = 0; index < 3; index++) {
        type2 += `<div class='list_image_item' key='${index}'><img src=${img_product[index]} alt='' /></div>`;
      }
      box_img = "<div class='list_image_item box_img'><span>1025+</span></div>";
      type2 += box_img;
    }
    return [
      <CardTrendingCollectionStyled>
        <div className="header_cart">
          <div className="list_image">
            {img_product.length > 4 ? ReactHtmlParser(type2) : type2}
          </div>
        </div>
        <div className="body_cart">
          <div className="title_cart">
            <h5>{title}</h5>
            <div className="info_artist">
              <img src={img_artist} alt="" />
              <span>{name_artist}</span>
            </div>
          </div>
          <div className="info_cart"></div>
        </div>
      </CardTrendingCollectionStyled>,
    ];
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
      >
        <div className="header_cart">
          <img src={img_product} alt="" />
        </div>
        <div className="body_cart">
          <div className="title_cart">
            <h5>{title}</h5>
            <div className="info_artist">
              <img src={img_artist} alt="" />
              <span>{name_artist}</span>
            </div>
          </div>
          <div className="info_cart"></div>
        </div>
      </CardStyled>
    );
  }
};

export { Card };
