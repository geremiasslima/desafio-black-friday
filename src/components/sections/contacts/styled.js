import styled from "styled-components";



export const ContainerHome = styled.div`
    height: 50%;
    width: 100%;
    margin-top: 5%;
    width: 100vw;
    padding: 40px 40px 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(45deg,#BF00E7, #395E5B);



    
 
.container-form {
    margin-top: 40px;
    width: 100vw;
    max-width: 496px;
    display: -moz-box;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    h1 {
      text-align: center;
    }

    img {
      border: 2px solid #ddd;
    }

      
}`;

export const Input = styled.input`
margin-top: 10px;
border: 1px solid #ddd;
font-family: 'Roboto', sans-serif;
height: 2rem;
width: 20rem;
padding: 0 .5rem;
border-radius: .25rem 0 0 .25rem;

&:focus,
&:active {
  outline: none;
  box-shadow: none;
}

`;

export const Button = styled.button`
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
        
            

          
`;