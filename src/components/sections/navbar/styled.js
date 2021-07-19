import styled from "styled-components";



export const Container = styled.div`
height: 7rem;
justify-content: center;
z-index: 10;
display: flex;
border: 2px solid;
width: 100vw;
box-sizing: border-box;
background: linear-gradient(23deg,#06100D, #211);




  .container-box-top {
    display: flex;
    padding: 0;

    .btn-class-top {
      margin: 32px;
      font-family: 'Roboto', sans-serif;
      background-color: #06100D;
      border: 2px solid #4CAF50;
      border-radius: .6rem;
      color: white;
      padding: 5px 15px;
      text-align: end;
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
            margin-left: 12rem;

            
          

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
  
    .logo-center{
      margin-left: 8rem;
        margin-bottom: -60%;
        height: 156px;
        width: 156px;
      }

    li {
      position: static  ;
      display: flex;
      margin: 2px 2px;
      padding : 2rem 1rem;
      
     

     > a {
        margin-left: 8rem;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        padding : .8rem;
        transition-duration: 0.5s;


        &:hover {
          color: #4CAF50;
          list-style: inside;
          }

      }
      
    }
  }
  `;






