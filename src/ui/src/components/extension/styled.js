import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 5rem 2rem;
  min-height: 100vh;
  @media (max-width: 900px) {
    text-align: center;
    margin: 2rem;
    padding: 0;
    
  }
`;

export const Imagem = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  display: block;
`;

export const Linha = styled.hr`
  margin: 2rem 0 1.5rem;
  border-bottom: 4px dotted ${(props) => props.theme.Grayish};
`;

export const TituloCard = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #333;
`;

export const Info = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export const Card = styled.div`
  margin: 1rem;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    margin-top: 2rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const Titulo = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: ${(props) => props.theme.Dark};
  margin-bottom: 0.7rem;
`;

export const Paragrafo = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.3;
  @media (max-width: 800px) {
    margin: 2rem;
  }
  @media (max-width: 600px) {
    margin: 1rem;
    font-size: 1rem;
  }
`;

export const Links = styled.a`
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Blue};
  border: 2px solid ${(props) => props.theme.Blue};
  padding: 0.7rem 1.5rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  :hover {
    color: ${(props) => props.theme.Blue};
  }
`;
