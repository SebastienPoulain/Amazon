import React from "react";
import "./Home.css";
import Product from "./Product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          stopOnHover={false}
        >
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Prime/XCM_Manual_1305088_1560971_CA_fr_gw_desk_tall_1x_3658385_1500x600_fr_CA._CB662508715_.png" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/ZmUxZTRhNDUt/ZmUxZTRhNDUt-NWI5ZTg4OTct-w1500._CB662409109_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/Events/2020/NYNY/CA_NYNY_Dk-Hero_1500x600_1X_fr_v3._CB411997433_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/OWEyMGQzYjUt/OWEyMGQzYjUt-YWVjZjFhNjkt-w1500._CB662318940_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_fr-CA_FT_PVD6266._CB412529316_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/textbooks/SHARPXCM_Manual_1300113_1530194_ca_wp_textbook_gw_1500x600_ca-fr_940889de-7b6b-4e20-b65c-a045af15b586._CB412097644_.jpg" />
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Certified_Refurbished/XCM_Manual_ORIGIN_1262232_1336595_CA_ca_sept_hero_fr_ca_fr_3341981_1500x600_2X_fr_CA._CB405134765_.jpg"
              alt=""
            />
          </div>
        </Carousel>
        <div className="home__row">
          <Product
            id="23534534534"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="645645645"
            title="Un excellent mélangeur"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71TJaIlm9QL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="34234234"
            price={259.99}
            title="CUISINART SM-50BCC Precision Master Mélangeur sur pied Argenté 5,2 l"
            rating={4}
            image="https://m.media-amazon.com/images/I/61kJzrs92JL._AC_UL320_.jpg"
          />
          <Product
            image="https://m.media-amazon.com/images/I/71qf9VdbESL._AC_UY218_.jpg"
            id="34234234642"
            price={89.49}
            rating={3}
            title="Kenwood AT974 A Spaghetti Coupe Pâtes en métal, argent"
          />
          <Product
            image="https://m.media-amazon.com/images/I/31scHkHUMKL._AC_UY218_.jpg"
            price={190.98}
            id="12234"
            rating={2}
            title="Kenwood AT850B balance Electronique 2 G à 8 kg Plateau Verre"
          />
        </div>
        <div className="home__row">
          <Product
            id="96796"
            rating={5}
            price={22.43}
            image="https://m.media-amazon.com/images/I/71Zs4fd+GgL._AC_UY218_.jpg"
            title="Kenwood Chef Pétrin Assemblage par kenwood"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
