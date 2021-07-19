import styled from "styled-components";

export const ContainerMenu = styled.div`
  height: 100vh;
    width: 100vw;
    padding: 40px 40px 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(23deg,#06100D, #211);

  

  .btn-class-top {
      margin: 32px;
      font-family: 'Roboto', sans-serif;
      background-color: #06100D;
      border: 2px solid #4CAF50;
      border-radius: .6rem;
      color: white;
      padding: 5px 15px;
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      transition-duration: 0.5s;
          &:hover {
            background-color: #4CAF50; /* Green */
            color: white;
      
          }
        
            

          }
          .btn-class {
            display: flex;
            position: relative;
            

            
          

        a {

        margin-left: 6rem;        
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        font-size: 14px;
        display: flex;
        color: #fff;
        font-weight: 700;
        list-style: none;
        text-decoration: none;
         
      }
      
      }
`;