import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    //background-color: gray;

    display: flex;
    justify-content: space-between;
    //align-items: center;
  }

  .divider {
    height: 5px;
    background-color: #B2281E;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  font-size: 14px;
  .logo {
    position: relative;
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    //background-size: contain;
    //transform: scale(0.5);
    //left: 30px;
    //background-position: 0 0;
    
    //::after {
    //  content: "React";
    //  font-size: 50px;
    //  font-weight: bold;
    //  text-decoration: none;
    //  position: absolute;
    //  left: 60px;
    //  color: white;
    //}
  }

  .select-list {
    display: flex;
    //align-items: center;
    line-height: 70px;

    .select-item {
      position: relative;

      a {
        display: block;
        color: #ccc;
        padding: 0 20px;
      }

      :last-of-type {
        position: relative;

        ::after {
          position: absolute;
          content: "";    //必须
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      :hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }

`;

export const HeaderRight = styled.div`
  color: #ccc;
  display: flex;
  font-size: 12px;
  align-items: center;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;

    :hover {
      cursor: pointer;
      border-color: whitesmoke;
    }
  }
`;