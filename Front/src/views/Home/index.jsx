import React, { useEffect, useState } from "react";
import B1 from "../../assets/images/Views/index/B1.jpeg";
import B2 from "../../assets/images/Views/index/B2.jpeg";
import B3 from "../../assets/images/Views/index/B3.jpeg";
import B4 from "../../assets/images/Views/index/B4.jpeg";
import B5 from "../../assets/images/Views/index/B5.jpeg";
import B6 from "../../assets/images/Views/index/B6.jpeg";
import B7 from "../../assets/images/Views/index/B7.jpeg";
import B8 from "../../assets/images/Views/index/B8.jpeg";
import B9 from "../../assets/images/Views/index/B9.jpeg";
import B10 from "../../assets/images/Views/index/B10.jpeg";
import B11 from "../../assets/images/Views/index/B11.jpeg";
import Bann from "../../assets/images/Views/index/Bann.png";
import genBook from "../../assets/images/General/imagePrincipal.jpeg";
import Carousel from "../../components/web/carrousel";
import SeparateLine from "../../components/atoms/separateLine";
import Banner from "../../components/web/banner";
import Popular from "../../components/web/mostPopular";
import axios from "axios";

import parraf1 from "../../assets/texts";
export default function Index() {
  // Data de la base de datos
  const [dataPopular, setDataPopular] = useState("");
  const slides = [B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11];
  useEffect(() => {
    const loadData = async () => {
      const loginUser = await axios.get("http://localhost:3001/books", {
        params: {
          filter: {
            mostPopular: true,
          },
        },
      });
      const data = loginUser.data[0];
      console.log("dataaaaaa", data);
      if (data) {
        setDataPopular({
          title: data.name,
          imageUrl: genBook,
          resume: data.resume,
        });
      } else {
        setDataPopular({
          title: "MostImportant",
          imageUrl: genBook,
          resume: parraf1.text1,
        });
      }
    };
    loadData();
  }, []);

  return (
    <>
      <Carousel slides={slides} automatic={true} />
      <SeparateLine />
      <Banner img={Bann} />
      <Popular data={dataPopular} />
    </>
  );
}
