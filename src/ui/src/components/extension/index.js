import {
  Container,
  Links,
  Paragrafo,
  Titulo,
  Info,
  Cards,
  Card,
  Linha,
  TituloCard,
  Imagem,
} from "./styled";
import nati from "./../../assets/images/nati.png";
import meli from "./../../assets/images/meli.png";
import norberto from "./../../assets/images/norberto.png";
import laura from "./../../assets/images/laura.png";
import marina from "./../../assets/images/marina.png";
import { i18n } from "./../../translate/i18n";
import React from "react";
export default function extension() {
  return (
    <Container>
      <Titulo>{i18n.t("extension.titulo")}</Titulo>
      <Cards>

        <Card>
          <Imagem src={nati} alt="card1 logo" />
          <TituloCard>{i18n.t("extension.card1.titulo")}</TituloCard>
          <Info>{`${i18n.t("extension.card1.paragrafo")}`}</Info>
          <Info>{`${i18n.t("extension.card1.paragrafo2")}`}</Info>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
        </Card>

        <Card id="card2">
          <Imagem src={meli} alt="card2 logo" />
          <TituloCard>{i18n.t("extension.card2.titulo")}</TituloCard>
          <Info>{`${i18n.t("extension.card2.paragrafo")}`}</Info>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
        </Card>

        <Card id="card3">
          <Imagem src={norberto} alt="card3 logo" />
          <TituloCard>{i18n.t("extension.card3.titulo")}</TituloCard>
          <Info>{`${i18n.t("extension.card3.paragrafo")}`}</Info>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
        </Card>

        <Card id="card4">
          <Imagem src={laura} alt="card4 logo" />
          <TituloCard>{i18n.t("extension.card4.titulo")}</TituloCard>
          <Info>{`${i18n.t("extension.card4.paragrafo")}`}</Info>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
        </Card>

        <Card id="card5">
          <Imagem src={marina} alt="card5 logo" />
          <TituloCard>{i18n.t("extension.card5.titulo")}</TituloCard>
          <Info>{`${i18n.t("extension.card5.paragrafo")}`}</Info>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
        </Card>

      </Cards>

      <Paragrafo>
        {i18n.t("extension.paragrafo").split('\n').map((line, index) => {
          return <span key={index}>{line}<br /></span>
        })}
      </Paragrafo>

    </Container>
  );
}
