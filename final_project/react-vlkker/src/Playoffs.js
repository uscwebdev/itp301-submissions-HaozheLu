import React, { useState } from 'react';
export default function Playoffs() {
  const Seasons = [
    {
      id: 1,
      season: '2022-23',
      content:
        "The Phoenix Suns went through significant changes in their roster during the 2022-23 season. They received Kevin Durant in the middle of the season and eventually entered the playoffs as the fourth seed in the Western Conference. In the first round, they faced the Los Angeles Clippers, initially losing a home game but then winning four consecutive games to advance to the Western Conference semifinals. In the semifinals, they were eventually defeated 2-4 by the Denver Nuggets, the champion of the 2023 season. The Nuggets were a dominant team, winning the championship in just 20 games, second only in history to the 2017 Warriors. Therefore, the Suns' ability to win two games in the series shows that they still had some competitiveness.",
      visible: true,
    },
    {
      id: 2,
      season: '2020-21',
      content:
        "The Phoenix Suns was probably the biggest dark horse in the 2020-21 NBA season. With the arrival of veteran Chris Paul, the Suns turned their fortunes around and entered the playoffs as the second seed in the Western Conference. In the first round, they defeated the defending champion, the Los Angeles Lakers, then swept the Denver Nuggets in the second round, and beat the Los Angeles Clippers 4-2 in the Western Conference Finals. In the NBA Finals, they won the first two games, but due to Giannis Antetokounmpo's outstanding performance for the Milwaukee Bucks, they lost four consecutive games and missed out on that year's championship",
      visible: true,
    },
    {
      id: 3,
      season: '2009-10',
      content:
        "During the 2009-10 NBA season, the Phoenix Suns showcased a remarkable performance in the playoffs. Guided by Steve Nash, a point guard who had won the MVP twice, they closed the regular season with a notable 54-28 record, securing the third seed in the Western Conference. In their initial playoff matchup, they triumphed over the Portland Trail Blazers, clinching the series 4-2. The Suns then went on to confront the San Antonio Spurs in the second round. The Spurs' lineup featured prominent players like Tim Duncan, widely regarded as the best power forward ever, alongside Tony Parker and Manu Ginobili. Phoenix impressively swept the series 4-0, progressing to the Western Conference Finals. There, they faced off against the reigning NBA champions, the Los Angeles Lakers, led by Kobe Bryant and Pau Gasol. Despite a strong effort from the Suns, the Lakers emerged victorious in the series with a 4-2 win and eventually captured the NBA title that year.",
      visible: true,
    },
    {
      id: 4,
      season: '2006-07',
      content:
        "In Game 4 of the 2007 Western Conference Semifinals between the San Antonio Spurs and the Phoenix Suns, the Spurs were leading 2:1 before the game, but the media still favored the Suns to win, as their system were very impactful. The Suns were also seen as championship favorites that year. During the game, the Suns led throughout, particularly due to the strategic brilliance of their star, Steve Nash. However, a turning point occurred when Spurs player Robert Horry committed a flagrant foul by knocking down Nash. This foul immediately incited the anger of Suns players Amar'e Stoudemire and Boris Diaw, leading to a conflict. After the game, Stoudemire and Diaw were suspended, which significantly weakened the Suns' frontcourt. Ultimately, the Spurs took advantage of this and won the series. It's worth noting that the Spurs went on to become the NBA champions that year.",
      visible: true,
    },
  ];
  const [seasons, setSeasons] = useState(Seasons);
  const addSeasonBox = () => {
    const hiddenSeasonBoxIndex = seasons.findIndex((season) => !season.visible);
    if (hiddenSeasonBoxIndex !== -1) {
      const updatedSeasons = [...seasons];
      updatedSeasons[hiddenSeasonBoxIndex].visible = true;
      setSeasons(updatedSeasons);
    }
  };
  const deleteSeasonBox = (id) => {
    const updatedSeasons = [];
    for (let i = 0; i < seasons.length; i++) {
      if (seasons[i].id === id) {
        updatedSeasons.push({ ...seasons[i], visible: false });
      } else {
        updatedSeasons.push(seasons[i]);
      }
    }
    setSeasons(updatedSeasons);
  };
  return (
    <div>
      <button
        id="Addbutton"
        onClick={addSeasonBox}
        disabled={seasons.every((season) => season.visible)}
      >
        Add
      </button>
      <div>
        {seasons.map(
          (SeasonBox) =>
            SeasonBox.visible && (
              <div key={SeasonBox.id} className="SeasonBox">
                <h3>{SeasonBox.season}</h3>
                <p>{SeasonBox.content}</p>
                <button onClick={() => deleteSeasonBox(SeasonBox.id)}>
                  Delete
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
}
