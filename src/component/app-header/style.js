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

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }

  .select-list {
    display: flex;
    align-items: center;
    //line-height: 70px;

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
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
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

`;