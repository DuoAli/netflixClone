import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./Home.scss";
import Tabs from "../../components/tabs/Tabs";
import Hero from "../../components/hero/Hero";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState();

  useEffect(() => {
    const getRandomList = async () => {
      const res = await axios.get(
        `lists${type ? "?type=" + type : ""}
            ${genre ? "?genre=" + genre : ""}`,
        {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      setLists(res.data);
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type={type} setGenre={setGenre} />
      <Tabs />
      {lists.map((list, index) => (
        <div key={index}>
          <List list={list} />
        </div>
      ))}
      <Hero />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
