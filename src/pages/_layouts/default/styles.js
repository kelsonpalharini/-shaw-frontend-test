import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #6159c1, #9999ff);
  display: flex;
  justify-content: center;
  align-content: center;
`;


export const Content = styled.div`
 width: 100%;

 form {
   max-height: 90%;
   display: flex;
   flex-direction: column;
   margin-top: 30px;
   margin-left: 20%;
   margin-right: 20%;
   margin-bottom: 20px;
   background-color: rgba(255, 255, 255, 0.8);
   border-radius: 10px;
   border-width: thin;
   -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.87);
   -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.87);
   box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.87);

   .button-next {
     width: 70px;
     padding: 10px;
     margin: 10px;
   }

   .div-header {
     padding-left: 10px;
     padding-top: 10px;
     margin-left: 10px;
     margin-top: 10px;
     margin-bottom: 0px !important;
   }

   .div-details {
     padding: 10px;
     margin: 10px
   }

   input {
     border: 0;
     border-radius: 4px;
     height: 30px;
     padding: 0 15px;
     margin: 0 0 10px;

   }

 }

`;
