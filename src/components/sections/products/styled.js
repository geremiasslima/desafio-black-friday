import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 40px 40px 32px;
    display: flex;
    align-items: center;
    flex-direction: column;


    .coluna{
  margin-top: 5rem;
  padding: 4px;
  float: left;
  width: 30.33%;

  &:hover {
    -webkit-transform: scale(1.5);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition: 1s;
}
  }
  
  .row::after {
  content: "";
  clear: both;
  display: table;

  @media screen and (max-width: 500px) {
  .column {
    width: 100%;
  }
}}
  h3 {
    margin-left: 10%;
    text-align: center;
    justify-content: center;
  }

`;
