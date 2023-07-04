import styled from "styled-components";

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
  width: 510px;
  height: 505px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};

  .header_cart {
    height: 80%;
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
}) => {
  if (type === "large") {
    return <CardLargeStyled></CardLargeStyled>;
  } else if (type === "small") {
    return <CardSmallStyled></CardSmallStyled>;
  } else if (type === "TrendingCollection") {
    return (
      <CardTrendingCollectionStyled>
        <div className="header_cart">
          <div className="list_image">
            <div className="list_image_item">
              <img src="" alt="" />
            </div>
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
        {/* <div className="body_cart">
          <div className="title_cart">
            <h5>{title}</h5>
            <div className="info_artist">
              <img src={img_artist} alt="" />
              <span>{name_artist}</span>
            </div>
          </div>
          <div className="info_cart"></div>
        </div> */}
      </CardTrendingCollectionStyled>
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
