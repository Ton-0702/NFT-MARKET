import React from "react";
import styled from "styled-components";
import { PrimaryLayout } from "components/Layout";
import discover from "../../assets/HomePage/DiscoverMore/Discover1.png";
import avatar from "../../assets/HomePage/Avatar1.svg";

const DetailPageStyled = styled.div`
    display: flex;
    flex-direction: column;
`

const SectionImageStyled = styled.div`
    width: 100%;
    height: 560px;
    img{
        width: 100%;
        height: 560px;
        object-fit: fill;
    }
`

const SectionDescriptionStyled = styled.div`
    width: 100%;
    height: auto;

    .descriptionNft{
        margin: 30px auto;
        width: 80%;
        height: 100%;

        .descriptionNft__Left{
            float: left;
            width: 50%;
            display: flex;
            flex-direction: column;
            .descriptionNft__Left__title{
                color: #FFFFFF;
                font-size: 45px;
                font-weight: bold;
            }
            .descriptionNft__Left__note-title{
                color: #858584;
                font-size: 20px;
                text-transform: capitalize;
                margin-top: 5px;
            }

            .descriptionNft__Left__note-info{
                color: #858584;
                font-size: 20px;
                text-transform: capitalize;
                margin-top: 30px;
                margin-bottom: 20px;
                font-weight: bold;
            }

            .descriptionNft__Left__name{
                display: flex;
                span{
                    color: #FFFFFF;
                    font-size: 20px;
                    font-weight: bold;
                }
                
                img{
                    width: 30px;
                    height: 30px;
                    margin-right: 15px;
                }
            }

            .descriptionNft__Left__detail{
                p{
                    color: #FFFFFF;
                    font-size: 20px;
                    white-space: pre-line; // giúp /n trong DB xuống hàng
                }
            }
        }
    }
`

const NftPage = () => {
    return (
        <PrimaryLayout>

            <DetailPageStyled>
                <SectionImageStyled>
                    <img src={discover} alt="#" />
                </SectionImageStyled>

                <SectionDescriptionStyled>
                    <div className="descriptionNft">
                        <div className="descriptionNft__Left">
                            <span className="descriptionNft__Left__title">
                                The Orbitians
                            </span>
                            <span className="descriptionNft__Left__note-title">
                                Minted on Sep 30, 2022
                            </span>

                            <span className="descriptionNft__Left__note-info">
                                Created By
                            </span>

                            <span className="descriptionNft__Left__name">
                                <img src={avatar} alt="#" />
                                <span>name</span>
                            </span>

                            <span className="descriptionNft__Left__note-info">
                                Description
                            </span>

                            <div className="descriptionNft__Left__detail">
                                <p>
                                    The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain,
                                    There are all sorts of beings in the NFT Universe.
                                    The most advanced and friendly of the bunch are Orbitians
                                    They live in a metal space machines, high up in the sky and only have one foot on Earth. These
                                </p>
                            </div>
                            
                            <span className="descriptionNft__Left__note-info">
                                Details
                            </span>

                            <span className="descriptionNft__Left__name">
                                <img src={avatar} alt="#" />
                                <span>name</span>
                            </span>

                            <span className="descriptionNft__Left__note-info">
                                Tags
                            </span>
                        </div>
                    </div>
                </SectionDescriptionStyled>

            </DetailPageStyled>

        </PrimaryLayout>
    )
}

export { NftPage };