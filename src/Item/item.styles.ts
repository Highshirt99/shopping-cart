import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between ;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px ;

button{
  border-radius: 0 0 20px 20px;
  background: blue;
  color: #fff;

  &:hover{
    color: black;
    background-color: lightblue;
  }
}

img{
  max-height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0 0 ;

}

.details{
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  height: 100%;
  position: relative;
}
h3{
  color: blue;
}
.details p{
 font-size: small;

}

.rating{
display: flex;
gap: 8px;
align-items: center;
position: absolute;
bottom: 2px;
background: #000;
height: 20px;
padding: 5px;
 color: #fff;
 border-radius: 5px;



}


`;
