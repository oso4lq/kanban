import styled from 'styled-components'

export const Button = styled.button`
    height: 30px;
    //width: 178px;

    background-color: ${props => props.$transparent ? 'transparent' : '#565EEF'};
    color: ${props => props.$transparent ? '#565EEF' : '#FFFFFF'};

    border-radius: 4px;

    border: ${props => props.$transparent ? '0.7px solid var(--palette-navy-60, #565EEF)' : 'none'};;

    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin: 0px 20px;
    padding: 0px 10px;


    &:hover {
        background-color: ${props => props.$transparent ? '#33399b' : '#33399b'};
        color: #FFFFFF;
    }`

export default Button;

/*
.header__btn-main-new {
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
  }
  .pop-user-set button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: #565EEF;
    border-radius: 4px;
    border: 1px solid #565EEF;
  }
 
  .pop-exit__exit-yes {
    width: 153px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;
    margin-right: 10px;
  }
  .pop-exit__exit-no {
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;
  }













button,
._btn {
  cursor: pointer;
  outline: none;
}


  .pop-browse__btn-browse, .pop-browse__btn-edit {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
  .pop-browse__btn-browse button, .pop-browse__btn-edit button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
  .pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
    margin-right: 8px;
  }

  ._btn-bor {
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    background: transparent;
    color: #565EEF;
  }
  ._btn-bg {
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
  }

 
  .card__btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
  }
  .card__btn div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
  }

  //<495
  .header__btn-main-new {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }

  .pop-browse__btn-browse button, .pop-browse__btn-edit button {
    width: 100%;
    height: 40px;
  }
  .pop-browse__btn-browse .btn-group, .pop-browse__btn-edit .btn-group {
    width: 100%;
  }
  .pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
    margin-right: 0px;
  }

  */