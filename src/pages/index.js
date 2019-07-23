import React from "react"
import Page from "@components/Page"
import Banner from "@components/Banner"

import Day from "@components/Day"
import Activity from "@components/Activity"
import Location from "@components/Location"

import styles from "./index.module.css"

const IndexPage = () => (
  <Page>
    <Banner />
    <div className={styles.activityList}>
      {/* DAY 1 */}
      <Day date="2019-09-12" mainLocation="Naha">
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
            <li>
              Collect Rental Car
              <ul>
                <li>Collection time: 9 am</li>
              </ul>
            </li>
          </ul>
        </Activity>

        <Activity title="Shurijo Castle" timing="~ 1.5 hour visit">
          <Location
            image="https://www.japan-guide.com/g17/7103_top.jpg"
            directions="https://www.google.com/maps/place/Shurijo+Castle/@26.2170135,127.7173268,17z/data=!3m1!4b1!4m5!3m4!1s0x34e56bfe6cf4db67:0xc0899fbab29e4f8b!8m2!3d26.2170135!4d127.7195208"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g298224-d1373593-Reviews-Shurijo_Castle-Naha_Okinawa_Prefecture.html"
            address="Shuri, Naha 900-0000, Okinawa Prefecture"
          />
          <ul>
            <li>Shoes have to be taken off to go into the castle</li>
            <li>Price: 820 yen / ~S$10.35</li>
          </ul>
        </Activity>

        <Activity
          title="Okinawa World Culture Kingdom Gyokusendo"
          timing="~ 2.5 hours visit"
        >
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/12/50/3e/7b/photo1jpg.jpg"
            directions="https://www.google.com/maps/place/Okinawa+World/@26.1404245,127.7468284,17z/data=!4m8!1m2!2m1!1sokinawa+world+culture+kingdom+gyokusendo!3m4!1s0x34e56f6969c6afcd:0xfed80b6e91aa9dcb!8m2!3d26.1405207!4d127.7485789"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1023469-d1425041-Reviews-Okinawa_World_Culture_Kingdom_Gyokusendo-Nanjo_Okinawa_Prefecture.html"
            address="1336 Tamagusuku Maekawa, Nanjo 901-0616, Okinawa Prefecture"
          />
          <ul>
            <li>Price: ~S$21.41 / pax</li>
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
          </ul>
        </Activity>

        <Activity title="Naha Food" type="meals">
          <Location
            name="Ryukyu Sabo Ashibiuna (琉球茶房 あしびうなぁ)"
            directions="https://www.google.com/maps/place/Ryukyu+Sabo+Ashibiuna/@26.21957,127.7174415,17z/data=!3m1!4b1!4m5!3m4!1s0x34e56bfebf2c0001:0x53e11e16fd7d7200!8m2!3d26.21957!4d127.7196355"
            tripAdvisor="https://www.tripadvisor.com.sg/Restaurant_Review-g298224-d1568216-Reviews-Ryukyu_Sabo_Ashibiuna-Naha_Okinawa_Prefecture.html"
            address="2-13 Shuri Tonokuracho beside the Naha-city Shuri Library, Naha 903-0812 Okinawa Prefecture"
          >
            <ul>
              <li>
                Traditional Okinawa food including soba pork, katsu, and bitter
                melon
              </li>
              <li>Advised to book</li>
            </ul>
          </Location>

          <Location
            name="Aguncha (酒菜処 あぐん茶)"
            directions="https://www.google.com/maps/place/Aguncha/@26.2221947,127.6821839,17z/data=!3m1!4b1!4m5!3m4!1s0x34e5697edb824fd9:0xdecc9766cc614b4a!8m2!3d26.2221947!4d127.6843779"
            tripAdvisor="https://www.tripadvisor.com.sg/Restaurant_Review-g298224-d5532898-Reviews-Aguncha-Naha_Okinawa_Prefecture.html"
            address="2-13-2 Maejima, Naha 900-0016 Okinawa Prefecture"
          >
            <ul>
              <li>Sushi / Seafood</li>
            </ul>
          </Location>

          <Location
            name="Hamaton (浜とん)"
            directions="https://www.google.com/maps/place/%E6%B5%9C%E3%81%A8%E3%82%93/@26.206835,127.677974,17z/data=!3m1!4b1!4m5!3m4!1s0x34e569a0175ea619:0x10f758b844bc1b1!8m2!3d26.206835!4d127.680168"
            tripAdvisor="https://www.tripadvisor.com.sg/Restaurant_Review-g298224-d8404463-Reviews-Hamaton-Naha_Okinawa_Prefecture.html"
            address="2-13-2 Maejima, Naha 900-0016 Okinawa Prefecture"
          >
            <ul>
              <li>Sushi / Seafood</li>
            </ul>
          </Location>

          <Location
            name="Yunangi (ゆうなんぎい)"
            directions="https://www.google.com/maps/place/Yunangi/@26.212953,127.6750627,16.07z/data=!4m5!3m4!1s0x34e5697632abaaab:0xbc3d7e001fb60df1!8m2!3d26.2144746!4d127.6819079"
            tripAdvisor="https://www.tripadvisor.com.sg/Restaurant_Review-g298224-d1575654-Reviews-Yunangi-Naha_Okinawa_Prefecture.html"
            address="3-3-3 Kumoji, Naha 900-0015 Okinawa Prefecture"
          >
            <ul>
              <li>Bento Meals</li>
              <li>Cash only (S$12 ~ S$38)</li>
            </ul>
          </Location>

          <Location
            name="Inaka Public Market Minami (第一牧志公設市場)"
            directions="https://www.google.com/maps/place/First+Makishi+Public+Market/@26.2145747,127.687017,17z/data=!4m5!3m4!1s0x34e569709a39d257:0x69fe9826555bc104!8m2!3d26.2145747!4d127.687017"
            tripAdvisor="https://www.tripadvisor.com.sg/Restaurant_Review-g298224-d7352643-Reviews-Inaka_Public_Market_Minami-Naha_Okinawa_Prefecture.html"
            address="2-10-20 Matsuo, Naha 900-0014 Okinawa Prefecture"
          >
            <ul>
              <li>Like wet market</li>
              <li>Soup / Soba (~ 390 yen / S$5)</li>
            </ul>
          </Location>

          <Location
            name="GOLD-DISC"
            directions="https://www.google.com/maps/place/GOLD-DISC/@26.2145747,127.687017,17z/data=!4m5!3m4!1s0x34e56982c491c127:0x1575d3a982e6aab8!8m2!3d26.218678!4d127.679353"
            tripAdvisor="https://www.tripadvisor.com.sg/Restaurant_Review-g298224-d6045949-Reviews-Gold_Disc-Naha_Okinawa_Prefecture.html"
            address="1-14-19 Matsuyama Pair City Bldg. B1, Naha 900-0032 Okinawa Prefecture"
          >
            <ul>
              <li>Bar live music venue with 50s/60s music</li>
            </ul>
          </Location>
        </Activity>
      </Day>

      {/* DAY 2 */}
      <Day date="2019-09-13" mainLocation="Motobu-cho">
        <Activity
          title="Hotel to Ocean Expo Park"
          type="drive"
          timing="~2 hours drive"
        >
          <ul>
            <li>OR drive to Airport and take the Shuttle to Ocean Expo Park</li>
            <li>Shuttle takes ~2.5 hours</li>
          </ul>
        </Activity>

        <Activity title="(Optional) Cape Mazamo" type="drive">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/13/de/46/29/caption.jpg"
            directions="https://www.google.com/maps/place/Cape+Manzamo/@26.5049491,127.8479515,17z/data=!3m1!4b1!4m5!3m4!1s0x34e503788741a7f9:0xdfec3d6fcce75918!8m2!3d26.5049491!4d127.8501455"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1120809-d1232982-Reviews-Cape_Manzamo-Onna_son_Kunigami_gun_Okinawa_Prefecture.html"
            address="Onna, Onna-son, Kunigami-gun 904-0411, Okinawa Prefecture"
          />
          <ul>
            <li>Can drop by if we are driving there to Ocean Expo Park</li>
          </ul>
        </Activity>

        <Activity title="Ocean Expo Park">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/01/67/24/99/caption.jpg"
            directions="https://www.google.com/maps/place/Ocean+Expo+Park/@26.7006666,127.8774322,17z/data=!4m5!3m4!1s0x34e4fbcb06b9af8d:0x9959600907c8bfc4!8m2!3d26.6913328!4d127.8777408"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1120808-d1657253-Reviews-Okinawa_Memorial_Park_Ocean_Expo_Park-Motobu_cho_Kunigami_gun_Okinawa_Prefecture.html"
            address="424 Ishikawa, Motobu-cho, Kunigami-gun 905-0206, Okinawa Prefecture"
          />
          <ul>
            <li>Tropical Dream Center</li>
            <li>Oceanic Culture Center Planatarium</li>
            <li>Dolphin Shows @ 11:00, 13:00, 14:30, 16:00</li>
            <li>Emerald Beach</li>
            <li>Okinawa Churami Aquarium</li>
            <li>Recommends sigt seeing bus</li>
            <li>~ S$21.80 / pax</li>
          </ul>
        </Activity>

        <Activity title="(Optional) Bise no Fukugi Tree Road">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/11/c7/99/c3/bise-fukugi-tree-road.jpg"
            directions="https://www.google.com/maps/place/Bise+Fukugi+Tree+Lane/@26.7006666,127.8774322,17z/data=!3m1!4b1!4m5!3m4!1s0x34e4fa3bb2e83feb:0xa38ab5013a129a36!8m2!3d26.7006666!4d127.8796262"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1120808-d1566502-Reviews-Bise_no_Fukugi_Tree_Road-Motobu_cho_Kunigami_gun_Okinawa_Prefecture.html"
            address="Bise, Motobu-cho, Kunigami-gun 905-0207, Okinawa Prefecture"
          />
          <ul>
            <li>10 minutes walk from Ocean Expo Park</li>
            <li>Sightseeing Walk</li>
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
          </ul>
        </Activity>

        <Activity title="Motobu-cho Food">
          <Location
            name="Michi-no-Eki Kyoda Yambaru Local Products Center (道の駅許田 フードコート)"
            directions="https://www.google.com/maps/place/Michi+no+Eki+Kyoda+Food+Court/@26.5520841,127.9678523,17z/data=!4m8!1m2!2m1!1sMichi-no-Eki+Kyoda+Yambaru+Local+Products+Center!3m4!1s0x34e4ffa8a8b11155:0x297a2d968803bd6a!8m2!3d26.5520172!4d127.9697327"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1023465-d1373581-Reviews-Michi_no_Eki_Kyoda_Yambaru_Local_Products_Center-Nago_Okinawa_Prefecture.html"
            address="17-1 Kyoda, Nago 905-0024, Okinawa Prefecture"
          >
            <ul>
              <li>Pit stop on the way to Ocean Expo Park</li>
            </ul>
          </Location>
          <Location
            name="Kishimoto Honten (きしもと食堂)"
            directions="https://www.google.com/maps/place/Kishimoto+Shokudo/@26.6603373,127.8936787,17z/data=!3m1!4b1!4m5!3m4!1s0x34e4f95eb431867d:0x1653b48af7640a31!8m2!3d26.6603373!4d127.8958727"
            tripAdvisor="https://www.tripadvisor.com.sg/Restaurant_Review-g1120808-d3216233-Reviews-Kishimoto_Honten-Motobu_cho_Kunigami_gun_Okinawa_Prefecture.html"
            address="5 Toguchi, Motobu-cho, Kunigami-gun 905-0214 Okinawa Prefecture"
          >
            <ul>
              <li>Lunch and brunch only, serves Soba</li>
            </ul>
          </Location>
        </Activity>
      </Day>

      <Day date="2019-09-14" mainLocation="Okinawa City">
        <Activity
          title="Southeast Botanical Gardens (東南植物楽園)"
          timing="~2 hours"
        >
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/12/9a/c8/77/4-5.jpg"
            directions="https://www.google.com/maps/place/Southeast+Botanical+Garden/@26.375568,127.804373,17z/data=!3m1!4b1!4m5!3m4!1s0x34e511d8db9268d7:0x97aa9da99ec7390b!8m2!3d26.375568!4d127.806567"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g298225-d4435966-Reviews-Southeast_Botanical_Gardens-Okinawa_City_Okinawa_Prefecture.html"
            address="2146 Chibana, Okinawa City 904-2143, Okinawa Prefecture"
          />
          <ul>
            <li>~ S$17.51 per pax</li>
          </ul>
        </Activity>
        <Activity title="American Village">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/10/28/1c/0d/photo0jpg.jpg"
            directions="https://www.google.com/maps/place/Ryukyu+Onsen+Senagajima+Hotel/@26.1835135,127.64275,13.78z/data=!4m8!3m7!1s0x34e5681ee85506ff:0x8c686fc36d94a9e0!5m2!4m1!1i2!8m2!3d26.176284!4d127.641466"
            tripAdvisor="https://www.google.com/maps/place/American+Village/@26.3168555,127.755379,17z/data=!3m1!4b1!4m5!3m4!1s0x34e5130508159acd:0x1bde7c8b1d9e8bcc!8m2!3d26.3168555!4d127.7575677"
            address="15-69 Mihama, Chatan-cho, Nakagami-gun 904-0115, Okinawa Prefecture"
          />
          <ul>
            <li>East West fusion city</li>
            <li>Tourist TRAP, don't buy souvenirs from here</li>
          </ul>
        </Activity>
      </Day>

      <Day date="2019-09-15" mainLocation="Tomigusuku">
        <Activity
          title="Former Japanese Navy Underground Headquarters (旧海軍司令部壕)"
          timing="~2 hours"
        >
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/0d/03/9d/ec/caption.jpg"
            directions="https://www.google.com/maps/place/Former+Japanese+Navy+Underground+Headquarters/@26.1861958,127.6742784,17z/data=!3m1!4b1!4m5!3m4!1s0x34e568548646b01f:0xa23b72b917d9845!8m2!3d26.1861958!4d127.6764724"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1023467-d1526763-Reviews-Former_Japanese_Navy_Underground_Headquarters-Tomigusuku_Okinawa_Prefecture.html"
            address="236 Tomigusuku, Tomigusuku 901-0241, Okinawa Prefecture"
          />
          <ul>
            <li>440 yen / S$5.55 per pax</li>
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
            <li>440 yen / S$5.55 per pax</li>
          </ul>
        </Activity>

        <Activity title="(Optional) Ryujin no Yu (琉球温泉 瀬長島ホテル)">
          <Location
            image="https://media-cdn.tripadvisor.com/media/photo-s/11/e7/b8/76/caption.jpg"
            directions="https://www.google.com/maps/place/Ryukyu+Onsen+Senagajima+Hotel/@26.1835135,127.64275,13.78z/data=!4m8!3m7!1s0x34e5681ee85506ff:0x8c686fc36d94a9e0!5m2!4m1!1i2!8m2!3d26.176284!4d127.641466"
            tripAdvisor="https://www.tripadvisor.com.sg/Attraction_Review-g1023467-d7238486-Reviews-Ryujin_no_Yu-Tomigusuku_Okinawa_Prefecture.html"
            address="174-5 Senaga | Senagajima Hotel, Tomigusuku 901-0233, Okinawa Prefecture"
          />
          <ul>
            <li>Onsen / Steam / Sauna</li>
            <li>1330 yen / S$16.78 per pax</li>
            <li>Refundable 100 yen locker, soaps all provided</li>
          </ul>
        </Activity>
      </Day>

      <Day date="2019-09-16">
        <Activity
          title="Depart for Naha Airport"
          type="drive"
          timing="7:00 am - 7:30 am"
        >
          <ul>
            <li>May have traffic jam</li>
          </ul>
        </Activity>
        <Activity title="Airport R &amp; R">
          <ul>
            <li>Return Rental Car</li>
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
