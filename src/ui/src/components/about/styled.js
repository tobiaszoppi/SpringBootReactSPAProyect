import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem;
  img {
    @media (max-width: 1067px) {
      width: 22.4rem;
      z-index: -1;
    }
  }
  @media (max-width: 1067px) {
    padding: 1rem;
  }
`;

export const Linha = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1067px) {
    flex-direction: column-reverse;
  }
`;

export const Textos = styled.div`
  max-width: 33rem;
  @media (max-width: 1067px) {
    text-align: center;
    margin-top: 4rem;
  }
`;

export const ColunaImagem = styled.div`
  display: flex;
  
  
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 1rem;
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    @media (max-width: 1067px) {
      margin: 1.4rem;
    }
  }
`;

export const Firefox = styled.a`
  background: ${(props) => props.theme.White};
  color: ${(props) => props.theme.Dark};
  box-shadow: 0 0 0.5rem ${(props) => props.theme.Grayish};
  :hover {
    border: 2px solid ${(props) => props.theme.Dark};
  }
`;

export const Chrome = styled.a`
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Blue};
  border: 2px solid ${(props) => props.theme.Blue};
  :hover {
    color: ${(props) => props.theme.Blue};
  }
`;

export const Paragrafo = styled.p`
  line-height: 1.5;
  margin-bottom: 2rem;
`;
export const Titulo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
