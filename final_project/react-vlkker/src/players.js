import React from 'react';

export default function Player(props) {
  var lowerCase = props.name.toLowerCase();
  var names = lowerCase.split(' ');
  var firstName = names[0];
  var lastName = names[1];
  return (
    <div className="Player">
      <img src={props.src} alt={props.name} className="PlayerImg" />
      <div className="PlayerInfo">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Height: {props.height}</p>
        <p>Position: {props.position}</p>
        <p>Salary: {props.salary}</p>
        <a
          href={
            'https://www.lineups.com/nba/player-stats/' +
            firstName +
            '-' +
            lastName
          }
          id="playerStats"
        >
          Player Stats
        </a>
      </div>
    </div>
  );
}
