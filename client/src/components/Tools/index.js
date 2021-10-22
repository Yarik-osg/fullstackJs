import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 218px;
  height: 73px;
  font-family: Apercu Arabic Pro;
  font-style: normal;
  font-weight: normal;
  margin-top: 20px;
  font-size: 18px;
  line-height: 18px;
  background: #FAD34F;
  border-radius: 500px;
  border: none;
  color: white;
  cursor: pointer;
`

export const Input = styled.input`
  width: 557px;
  height: 83px;
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Apercu Arabic Pro;
  padding-left: 40px;
  margin: 5px 0 5px 0;
  @media screen and (max-width: 750px)
  {
    width: 80%;
  }
  ::placeholder {
    font-family: Apercu Arabic Pro;
    color: black;
  }
`
export const Wrapper = styled.div`{
  position: absolute;
  left: 230px;
  top: 75px;
  @media screen and (max-width: 750px)
  {
   
    left: 0;
    top: 0;
    width: 100%;
  }
}`
export const TextArea = styled.textarea`
  resize: none;
  width: 557px;
  height: 189px;
  background: #FFFFFF;
  font-family: Apercu Arabic Pro;
  border: 1px solid #DCDCDC;
  box-sizing: border-box;
  border-radius: 10px;
  padding-left: 40px;
  padding-top: 40px;
  margin: 5px 0 5px 0;
  @media screen and (max-width: 750px)
  {
    
    left: 0;
    top: 0;
    width: 80%;
  }
  ::placeholder {
    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    color: black;
    font-size: 1.1em;
    line-height: 180%;
  }
`
export const Title = styled.h1`
  width: 563px;
  height: 58px;
  font-weight: normal;
  font-family: Apercu Arabic Pro;
  font-style: normal;
`
export const Img = styled.img`{
  position: absolute;
  width: 900px;
  height: 900px;
  left: 1200px;
  top: -150px;
  border-radius: 50%;
  background: linear-gradient(110.34deg, #FF91CB 12.64%, #F472B7 69.79%);
  box-shadow: inset 0px 16px 42px rgba(0, 0, 0, 0.1);
}`
export const Svg = styled.img`{
  position: absolute;
  height: 100.84411209780487px;
  width: 100.3204150797413px;
  left: 66.09161376953125px;
  top: 50.780517578125px;

  border-radius: 50%;
  background: #FAD34F;
  transform: rotate(-35.19deg);
}`