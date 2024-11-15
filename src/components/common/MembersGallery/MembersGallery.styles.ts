import styled from 'styled-components'

export const StyledMembersGallery = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;

  @media only screen and (max-width: 999px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`
export const StyledMember = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`
export const StyledMemberImageContainer = styled.div`
  aspect-ratio: 10/16;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const StyledMemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: left;
  padding: 10px;
  background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 70%) 33%, rgb(0 0 0 / 100%));
  backdrop-filter: blur(1px);

  h4 {
    font-size: 32px;

    @media only screen and (max-width: 999px) {
      font-size: 22px;
      line-height: 100%;
    }
    @media only screen and (max-width: 666px) {
      font-size: 19px;
      max-width: 50%;
      line-height: 100%;
    }
  }
  h5 {
    color: #d5b1a9;
    font-size: 15px;

    @media only screen and (max-width: 999px) {
      font-size: 13px;
    }
    @media only screen and (max-width: 666px) {
      font-size: 11px;
    }
  }
`
