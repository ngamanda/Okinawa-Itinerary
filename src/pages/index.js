import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Page from "@components/Page"
import Banner from "@components/Banner"

import Day from "@components/Day"
import Activity from "@components/Activity"
import Location from "@components/Location"

import styles from "./index.module.css"

const IndexPage = ({ data }) => (
  <Page>
    <Banner />
    <div className={styles.activityList}>
      <div style={{ padding: "2em 1em" }}>
        <Activity title="Hotel">
          <ul>
            <li>Hotel Hokke Club Naha Shintoshin</li>
            <li>4 Chome-3-8 Omoromachi, Naha, Okinawa 900-0006, Japan</li>
          </ul>
        </Activity>
      </div>
      {/* DAY 1 */}
      <Day date="2019-09-12" mainLocation="Naha">
        <Activity title="Map" type="map">
          <Img
            fluid={data.day1Image.childImageSharp.fluid}
            className={styles.mapImage}
          />
          <ul>
            <li>A: Naha Airport</li>
            <li>
              B: Naminoue-gu Shrine
              <ul>
                <li>7 minutes drive from Airport</li>
              </ul>
            </li>
            <li>
              C: First Makishi Public Market
              <ul>
                <li>12 minutes drive from Naminoue-gu Shrine</li>
              </ul>
            </li>
            <li>
              D: Shurijo Castle
              <ul>
                <li>15 minutes drive from First Makishi Public Market</li>
              </ul>
            </li>
            <li>
              E: San-A Naha Main Place / Hotel
              <ul>
                <li>10 minutes drive from Shurijo Castle</li>
              </ul>
            </li>
            <li>
              F: Kokusai-dori Street
              <ul>
                <li>11 minutes drive from Hotel</li>
              </ul>
            </li>
          </ul>
        </Activity>

        <Activity
          title="Flight to Okinawa"
          type="plane_departure"
          timing="2:00 am - 8:10 am"
        >
          <ul>
            <li>Flight: 3K791</li>
            <li>Changi Airport - Terminal 1</li>
          </ul>
        </Activity>

        <Activity title="Airport R &amp; R" timing="8:10 am - 9:30 am">
          <ul>
            <li>Customs clearance / Wash-up</li>
            <li>🥙Pork Tamago Onigiri Honten - Domestic Terminal</li>
            <li>
              Collect Rental Car @ Naha Airport 1,{" "}
              <a href="https://maps.google.fr/maps?q=26.2018075,127.66225029999998">
                NISSAN PICK UP AGENCY
              </a>
              <ul>
                <li>Collection time: 10:00 am</li>
              </ul>
            </li>
          </ul>
        </Activity>

        <Activity title="Naminoue-gu Shrine" timing="30 Minutes">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-o/11/77/7c/3f/20171127-144140-largejpg.jpg"
            directions="https://www.google.com/maps/place/Naminouegu+Shrine/@26.2203641,127.6690172,17z/data=!3m1!4b1!4m5!3m4!1s0x34e56985510a3f75:0x776a51e1e15524ac!8m2!3d26.2203641!4d127.6712059"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g298224-d1373588-Reviews-or20-Naminoue_gu_Shrine-Naha_Okinawa_Prefecture.html"
            address="1-25-11 Wakasa, Naha 900-0031, Okinawa Prefecture"
          />
          <ul>
            <li>
              Prayer Steps
              <ul>
                <li> Wash your hand & mouth</li>
                <li>Read guide in hall on how to pray (Bowing and clapping)</li>
                <li>Famous amulet/omamori & omikuji-fortune written on</li>
                <li>Strip of paper by making offerings</li>
              </ul>
            </li>
            <li>Visit Naminoue beach right behind the shrine</li>
            <li>Free parking (20 lots)</li>
          </ul>
        </Activity>

        <Activity title="First Makishi Public Market" type="meals">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/11/98/aa/c0/makishi-public-market.jpg"
            directions="https://www.google.com/maps/place/First+Makishi+Public+Market/@26.2148454,127.6863398,17z/data=!3m1!4b1!4m5!3m4!1s0x34e569709a39d257:0x69fe9826555bc104!8m2!3d26.2148454!4d127.6885338"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g298224-d1372626-Reviews-Makishi_Public_Market-Naha_Okinawa_Prefecture.html"
            address="2-10-1 Matsuo, Naha 900-0014, Okinawa Prefecture"
          />
          <ul>
            <li>Hours: 8:00 AM - 9:00 PM</li>
            <li>
              Buy your seafood downstairs and get restaurants upstairs to cook
            </li>
            <li>
              <a
                href="https://www.google.com/maps/@26.21458,127.6811819,16z/data=!3m1!4b1!4m2!6m1!1s1OKbZsEaWV_Jlu28-a7nfL7CpacI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carparks >
              </a>
            </li>
          </ul>
        </Activity>

        <Activity title="Shurijo Castle" timing="60 - 90 Minutes">
          <Location
            image="https://www.japan-guide.com/g17/7103_top.jpg"
            directions="https://www.google.com/maps/place/Shurijo+Castle/@26.2170135,127.7173268,17z/data=!3m1!4b1!4m5!3m4!1s0x34e56bfe6cf4db67:0xc0899fbab29e4f8b!8m2!3d26.2170135!4d127.7195208"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g298224-d1373593-Reviews-Shurijo_Castle-Naha_Okinawa_Prefecture.html"
            address="Shuri, Naha 900-0000, Okinawa Prefecture"
          />
          <ul>
            <li>Hours: 8:30 AM to 8:00 PM</li>
            <li>Shoes have to be taken off to go into the castle</li>
            <li>Price: 820 yen / ~S$10.35</li>
            <li>Parking: 116 lots (320yen for 1 vehicle)</li>
          </ul>
        </Activity>

        <Activity title="San-A Naha Main Place">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/12/50/3e/7b/photo1jpg.jpg"
            directions="https://www.google.com/maps/place/San-A+Naha+Main+Place/@26.2079209,127.6858976,13.78z/data=!4m5!3m4!1s0x34e56bda1815ec15:0x19878b55152eae59!8m2!3d26.2256443!4d127.695076"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g298224-d8588179-Reviews-San_A_Naha_Main_Place-Naha_Okinawa_Prefecture.html"
            address="4-4-9 Omoromachi, Naha 900-0006, Okinawa Prefecture"
          />
          <ul>
            <li>Shopping mall with supermarket (Next to hotel)</li>
            <li>Head to hotel to wash up etc</li>
            <li>Free parking!</li>
          </ul>
        </Activity>

        <Activity title="Kokuseidori">
          <Location
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPXuN2Ift_EY-DIxSYwhGrU0BgiSixFrBPcT1HidW35oUHPkC"
            directions="https://www.google.com/maps/place/Naha+Kokusai+Dori+Shopping+Street/@26.2155374,127.6837491,17z/data=!4m13!1m7!3m6!1s0x34e5697751412f31:0x8d6939f65e915e02!2sKokusai-dori,+Naha,+Okinawa,+Japan!3b1!8m2!3d26.2149572!4d127.6858814!3m4!1s0x34e56977701f0ffb:0x137a2164664af9fc!8m2!3d26.2151944!4d127.6849186"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g298224-d1373583-Reviews-Kokusaidori-Naha_Okinawa_Prefecture.html"
            address="3 Chome-2-10 Makishi, Naha, Okinawa 900-0013, Japan"
          />
          <ul>
            <li>Hours: 9:30 AM to 10:00 PM</li>
            <li>2km shopping street</li>
            <li>
              <a
                href="https://www.google.com/maps/@26.21458,127.6811819,16z/data=!3m1!4b1!4m2!6m1!1s1OKbZsEaWV_Jlu28-a7nfL7CpacI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carparks >
              </a>
            </li>
          </ul>
        </Activity>
      </Day>

      {/* DAY 2 */}
      <Day date="2019-09-13" mainLocation="Motobu-cho">
        <Activity title="Map" type="map">
          <Img
            fluid={data.day2Image.childImageSharp.fluid}
            className={styles.mapImage}
          />
          <ul>
            <li>A: Hotel</li>
            <li>
              B: Former Japanese Navy Underground Headquarters
              <ul>
                <li>20 minutes drive from Hotel</li>
              </ul>
            </li>
            <li>
              C: Okinawa Outlet Mall Ashibinaa
              <ul>
                <li>
                  15 minutes drive from Cape Former Japanese Navy Underground
                  Headquarters
                </li>
              </ul>
            </li>
            <li>
              D: Ryujin no Yu (Onsen)
              <ul>
                <li>10 minutes drive from Okinawa Outlet Mall Ashibinaa</li>
              </ul>
            </li>
            <li>
              F: Gold Disc
              <ul>
                <li>20 minutes drive from Ryujin no Yu (Onsen)</li>
              </ul>
            </li>
          </ul>
        </Activity>

        <Activity
          title="Former Japanese Navy Underground Headquarters (旧海軍司令部壕)"
          timing="2 hours"
        >
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/0d/03/9d/ec/caption.jpg"
            directions="https://www.google.com/maps/place/Former+Japanese+Navy+Underground+Headquarters/@26.1861958,127.6742784,17z/data=!3m1!4b1!4m5!3m4!1s0x34e568548646b01f:0xa23b72b917d9845!8m2!3d26.1861958!4d127.6764724"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1023467-d1526763-Reviews-Former_Japanese_Navy_Underground_Headquarters-Tomigusuku_Okinawa_Prefecture.html"
            address="236 Tomigusuku, Tomigusuku 901-0241, Okinawa Prefecture"
          />
          <ul>
            <li>440 yen / S$6 per pax</li>
            <li>Free parking (100 lots)</li>
          </ul>
        </Activity>

        <Activity title="Okinawa Outlet Mall Ashibinaa (沖縄アウトレットモール あしびなー)">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-w/10/08/ba/44/caption.jpg"
            directions="https://www.google.com/maps/place/OKINAWA+OUTLET+MALL+ASHIBINAA/@26.1591093,127.6554816,17z/data=!3m1!4b1!4m5!3m4!1s0x34e5680b869eccf7:0xd51f50b361213e26!8m2!3d26.1591093!4d127.6576756"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1023467-d1449920-Reviews-Ashibina_Outlet_Mall-Tomigusuku_Okinawa_Prefecture.html"
            address="1-188 Toyosaki, Tomigusuku 901-0225, Okinawa Prefecture"
          />
          <ul>
            <li>8% tax refund on the second floor of the mall</li>
            <li>Free parking (1000 lots)</li>
          </ul>
        </Activity>

        <Activity title="Senagajima Hotel Ryujin no Yu (琉球温泉 瀬長島ホテル)">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/11/e7/b8/76/caption.jpg"
            directions="https://www.google.com/maps/place/Ryukyu+Onsen+Senagajima+Hotel/@26.1835135,127.64275,13.78z/data=!4m8!3m7!1s0x34e5681ee85506ff:0x8c686fc36d94a9e0!5m2!4m1!1i2!8m2!3d26.176284!4d127.641466"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1023467-d7238486-Reviews-Ryujin_no_Yu-Tomigusuku_Okinawa_Prefecture.html"
            address="174-5 Senaga | Senagajima Hotel, Tomigusuku 901-0233, Okinawa Prefecture"
          />
          <ul>
            <li>Onsen / Steam / Sauna</li>
            <li>1330 yen / S$18</li>
            <li>Refundable 100 yen locker, soaps all provided</li>
            <li>Free parking</li>
          </ul>
        </Activity>

        <Activity title="Karaoke Bar" type="meals">
          <Location
            name="GOLD-DISC"
            directions="https://www.google.com/maps/place/GOLD-DISC/@26.2145747,127.687017,17z/data=!4m5!3m4!1s0x34e56982c491c127:0x1575d3a982e6aab8!8m2!3d26.218678!4d127.679353"
            tripAdvisor="https://www.tripadvisor.com.sg/Restaurant_Review-g298224-d6045949-Reviews-Gold_Disc-Naha_Okinawa_Prefecture.html"
            address="1-14-19 Matsuyama Pair City Bldg. B1, Naha 900-0032 Okinawa Prefecture"
          >
            <ul>
              <li>Bar live music venue with 50s/60s music (Elvis)</li>
              <li>Let's take a cab from the hotel?</li>
            </ul>
          </Location>
        </Activity>
      </Day>

      <Day date="2019-09-14" mainLocation="Okinawa City">
        <Activity title="Map" type="map">
          <Img
            fluid={data.day3Image.childImageSharp.fluid}
            className={styles.mapImage}
          />
          <ul>
            <li>A: Hotel</li>
            <li>
              B: Cape Manzamo (2 hours drive)
              <ul>
                <li>40 minutes drive from Hotel</li>
              </ul>
            </li>
            <li>
              C: Kyoda Rest Area (Lunch)
              <ul>
                <li>30 minutes drive from Cape Manzamo</li>
              </ul>
            </li>
            <li>
              D: Okinawa Churaumi Aquarium
              <ul>
                <li>40 minutes drive from Lunch</li>
                <li>1 hour drive from Cape Mazamo</li>
              </ul>
            </li>
            <li>
              E: Bise no Fukugi Tree Road
              <ul>
                <li>8 minutes drive from Okinawa Churaumi Aquarium</li>
              </ul>
            </li>
            <li>
              F: Hotel Orion Motobu Resort & Spa (Onsen)
              <ul>
                <li>2 minutes drive from Bise no Fukugi Tree Road</li>
                <li>3 minutes drive from Okinawa Churaumi Aquarium</li>
              </ul>
            </li>
          </ul>
        </Activity>

        <Activity
          title="(Optional) Cape Mazamo"
          timing="30 - 60 minutes"
          type="drive"
        >
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/13/de/46/29/caption.jpg"
            directions="https://www.google.com/maps/place/Cape+Manzamo/@26.5049491,127.8479515,17z/data=!3m1!4b1!4m5!3m4!1s0x34e503788741a7f9:0xdfec3d6fcce75918!8m2!3d26.5049491!4d127.8501455"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1120809-d1232982-Reviews-Cape_Manzamo-Onna_son_Kunigami_gun_Okinawa_Prefecture.html"
            address="Onna, Onna-son, Kunigami-gun 904-0411, Okinawa Prefecture"
          />
          <ul>
            <li>Can drop by if we are driving there to Ocean Expo Park</li>
            <li>Should go early, hard to find lots there</li>
          </ul>
        </Activity>

        <Activity title="Kyoda Rest Area" type="meals">
          <Location
            image="http://okinawatravelinfo.com/wp-content/uploads/2014/09/4d9d9e6aa9d2e0b867877d7c4557d0b9.jpg"
            directions="https://www.google.com/maps/place/Kyoda+Rest+Area/@26.5521558,127.968166,17z/data=!3m1!4b1!4m5!3m4!1s0x34e4fff1abf7fc15:0xb1c0bbbf8305dbb6!8m2!3d26.552151!4d127.97036"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1023465-d1373581-Reviews-Michi_no_Eki_Kyoda_Yambaru_Local_Products_Center-Nago_Okinawa_Prefecture.html"
            address="905-0024 17-1, Kyoda, Nago-shi, Okinawa, 905-0024"
          />
          <ul>
            <li>Hours: 9:00 am - 7pm</li>
            <li>Rest stop / Lunch</li>
            <li>104 lots, always long line to enter</li>
          </ul>
        </Activity>

        <Activity title="Ocean Expo Park" timing="3 - 4 hours">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/01/67/24/99/caption.jpg"
            directions="https://www.google.com/maps/place/Ocean+Expo+Park/@26.7006666,127.8774322,17z/data=!4m5!3m4!1s0x34e4fbcb06b9af8d:0x9959600907c8bfc4!8m2!3d26.6913328!4d127.8777408"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1120808-d1657253-Reviews-Okinawa_Memorial_Park_Ocean_Expo_Park-Motobu_cho_Kunigami_gun_Okinawa_Prefecture.html"
            address="424 Ishikawa, Motobu-cho, Kunigami-gun 905-0206, Okinawa Prefecture"
          />
          <ul>
            <li>
              Tropical Dream Center
              <ul>
                <li>Price: 760 yen / S$10</li>
              </ul>
            </li>
            <li>
              Oceanic Culture Center Planatarium
              <ul>
                <li>Price: 190 yen / S$3</li>
              </ul>
            </li>
            <li>
              Okinawa Churami Aquarium
              <ul>
                <li>Price: 1850 yen / S$25</li>
              </ul>
            </li>
            <li>Emerald Beach</li>
            <li>Dolphin Shows @ 11:00, 13:00, 14:30, 16:00</li>
            <li>Recommends sight seeing bus</li>
            <li>All parking areas within the Ocean Expo Park are free</li>
          </ul>
        </Activity>

        <Activity
          timing="20 minutes"
          title="(Optional) Bise no Fukugi Tree Road"
        >
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/11/c7/99/c3/bise-fukugi-tree-road.jpg"
            directions="https://www.google.com/maps/place/Bise+Fukugi+Tree+Lane/@26.7006666,127.8774322,17z/data=!3m1!4b1!4m5!3m4!1s0x34e4fa3bb2e83feb:0xa38ab5013a129a36!8m2!3d26.7006666!4d127.8796262"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1120808-d1566502-Reviews-Bise_no_Fukugi_Tree_Road-Motobu_cho_Kunigami_gun_Okinawa_Prefecture.html"
            address="Bise, Motobu-cho, Kunigami-gun 905-0207, Okinawa Prefecture"
          />
          <ul>
            <li>10 minutes walk from Ocean Expo Park</li>
            <li>Sightseeing Walk</li>
            <li>Suggest to leave car at Ocean Expo Park</li>
          </ul>
        </Activity>

        <Activity title="Hotel Orion Motobu Resort & Spa (Onsen)">
          <Location
            image="http://www.okinawaresort-orion.com/wp-content/themes/orion-pc/img/foreign04.jpg"
            directions="https://www.google.com/maps/place/Hotel+Orion+Motobu+Resort+and+Spa/@26.698513,127.8773823,17z/data=!4m8!3m7!1s0x34e4fa3a6e6b6535:0xbaf9554c10fce1c5!5m2!4m1!1i2!8m2!3d26.698513!4d127.879571"
            tripAdvisor="https://www.tripadvisor.com.sg/Hotel_Review-g1120808-d6487730-Reviews-Hotel_Orion_Motobu_Resort_Spa-Motobu_cho_Kunigami_gun_Okinawa_Prefecture.html"
            address="Japan, 〒905-0207 Okinawa, Kunigami District, Motobu, １４８−１"
          />
          <ul>
            <li>Price: 2,150 yen</li>
            <li>Nice sunset view at 6:30pm</li>
          </ul>
        </Activity>
      </Day>

      <Day date="2019-09-15" mainLocation="Tomigusuku">
        <Activity title="Map" type="map">
          <Img
            fluid={data.day4Image.childImageSharp.fluid}
            className={styles.mapImage}
          />
          <ul>
            <li>A: Hotel</li>
            <li>
              B: Southeast Botanical Gardens
              <ul>
                <li>30 minutes minutes drive from Hotel</li>
              </ul>
            </li>
            <li>
              C: AEON MALL Okinawa Rycom
              <ul>
                <li>
                  18 minutes minutes drive from Southeast Botanical Gardens
                </li>
              </ul>
            </li>
            <li>D: Naha Airport</li>
          </ul>
        </Activity>

        <Activity
          title="Southeast Botanical Gardens (東南植物楽園)"
          timing="2 hours"
        >
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/12/9a/c8/77/4-5.jpg"
            directions="https://www.google.com/maps/place/Southeast+Botanical+Garden/@26.375568,127.804373,17z/data=!3m1!4b1!4m5!3m4!1s0x34e511d8db9268d7:0x97aa9da99ec7390b!8m2!3d26.375568!4d127.806567"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g298225-d4435966-Reviews-Southeast_Botanical_Gardens-Okinawa_City_Okinawa_Prefecture.html"
            address="2146 Chibana, Okinawa City 904-2143, Okinawa Prefecture"
          />
          <ul>
            <li>Price: 1,500 yen / S$20</li>
          </ul>
        </Activity>

        <Activity title="AEON MALL Okinawa Rycom">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/08/8f/be/fa/caption.jpg"
            directions="https://www.google.com/maps/place/AEON+MALL+Okinawa+Rycom/@26.2950916,127.7786127,17z/data=!4m5!3m4!1s0x34e5126214d2f427:0xcb2e803176e4f16b!8m2!3d26.3144559!4d127.7961594"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1120817-d8041147-Reviews-Aeon_Mall_Okinawa_Rycom-Kitanakagusuku_son_Nakagami_gun_Okinawa_Prefecture.html"
            address="4 Gaiku, Gaseirijigyoku, Ikinai, Awasetochi-ku, Kitanakagusuku-son, Nakagami-gun 901-2300, Okinawa Prefecture"
          />
          <ul>
            <li>Shopping / Dinner</li>
            <li>Free parking</li>
          </ul>
        </Activity>

        <Activity title="Return Rental Car" timing="8:00 PM">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/11/53/f5/30/photo0jpg.jpg"
            directions="https://www.google.com/maps/search/naha+airport/@26.2065408,127.646449,17z/data=!3m1!4b1"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g298224-d14027881-Reviews-Naha_Airport_Station-Naha_Okinawa_Prefecture.html"
            address="938-5 Kagamizu, Naha 901-0142, Okinawa Prefecture"
          />
          <ul>
            <li>Naha Airport</li>
          </ul>
        </Activity>
      </Day>

      <Day date="2019-09-16">
        <Activity
          title="Depart for Naha Airport"
          type="drive"
          timing="40 minutes"
        >
          <ul>
            <li>Take the Yui Rail to the Airport</li>
            <li>Price: 300 yen / S$4</li>
            <li>
              <ul>
                <li>Hotel -> Rail: 6 mins (450m)</li>
                <li>Rail: 21 mins (10 stops)</li>
              </ul>
            </li>
          </ul>
        </Activity>
        <Activity title="Airport R &amp; R">
          <ul>
            <li>Breakfast</li>
          </ul>
        </Activity>
        <Activity
          title="Flight to Singapore"
          type="plane_arrival"
          timing="9:10 am - 1:20 pm"
        >
          <ul>
            <li>Flight: 3K792</li>
            <li>Changi Airport - Terminal 1</li>
          </ul>
        </Activity>
      </Day>
    </div>
  </Page>
)

export default IndexPage

export const query = graphql`
  query {
    day1Image: file(relativePath: { eq: "day-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day2Image: file(relativePath: { eq: "day-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day3Image: file(relativePath: { eq: "day-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day4Image: file(relativePath: { eq: "day-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
