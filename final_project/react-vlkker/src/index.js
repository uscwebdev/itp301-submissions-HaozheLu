import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Player from './players.js';
import Playoffs from './Playoffs';
const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <div id="first">
      <div id="first-left">
        <div id="text">
          <h2>Phoenix Suns</h2>
          <h2>2023-24 NBA Season</h2>
        </div>
      </div>
      <div id="first-right">
        <strong>
          Entering the 23-24 season, the Suns made major adjustments to their
          lineup. They first traded veteran Chris Paul, who performed poorly in
          the playoffs last season, for Bradley Beal, a scorer in his prime.
          They gave up Ayton, who was considered the future of the team, and
          signed Nurkic from the Trail Blazers, who is more compatible with the
          team. This season, the 35-year-old veteran Kevin Durant and the rising
          star Devin Booker will continue to challenge for the championship.
        </strong>
      </div>
    </div>
    <div id="main">
      <div className="roster-header">
        <h2>Phoenix Suns 2023-24 Roster</h2>
      </div>
      <div id="23-24roster">
        <Player
          src="https://m.basketnews.com/image-393014-crop700x700.jpg"
          name="Bradley Beal"
          age="30"
          height="6'4''"
          position="SG/PG"
          salary="$46,741,590"
        />
        <Player
          src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5MjA4NDQ3ODA2MzUxMTI4/usatsi_18028605_168395540_lowres.jpg"
          name="Devin Booker"
          age="27"
          height="6'5''"
          position="SG"
          salary="$36,016,200"
        />
        <Player
          src="https://www.azcentral.com/gcdn/authoring/authoring-images/2023/10/03/PPHX/71039392007-uscp-7-s-7-wnx-24-d-3-l-40-sc-6-o-original.jpg"
          name="Kevin Durant"
          age="35"
          height="6'10''"
          position="SF/PF"
          salary="$47,649,433"
        />
        <Player
          src="https://staticg.sportskeeda.com/editor/2023/10/5f2bf-16986676658052-1920.jpg?w=840"
          name="Eric Gordon"
          age="34"
          height="6'3''"
          position="SG/PG"
          salary="$3,196,448"
        />
        <Player
          src="https://m.basketnews.com/image-393013-crop700x700.jpg"
          name="Jusuf Nurkic"
          age="29"
          height="7'0''"
          position="C"
          salary="$16,875,000"
        />
        <Player
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ0LmYC7Es72UJFDXhoyzRhlA1uTjVWU6YOQOZcCW3A&s"
          name="Josh Okogie"
          age="25"
          height="6'4''"
          position="SG"
          salary="$2,815,937"
        />
      </div>
      <div className="roster-header">
        <h2>Phoenix Suns Playoff Histories</h2>
      </div>
      <Playoffs />
    </div>
  </React.StrictMode>
);
