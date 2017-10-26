const team = {
    _players: [
          {firstName: "Johan",
          lastName: 'Lindstrom',
          age: 37},
       {firstName: "Bjorn",
          lastName: "Bjerkoe",
          age: 40},
       {firstName: "Axel",
          lastName: "Bjerkoe",
          age: 68}
     ],
    _games: [
      {opponent: "Broncos",
      teamPoints: 45,
      opponentPoints: 27},
      {opponent: "Raiders",
      teamPoints: 42,
      opponentPoints: 24},
      {opponent: "Lions",
      teamPoints: 33,
      opponentPoints: 17}
    ],
    get players() {
        return this._players
  },
  
    get games() {
        return this._games
  },
      addPlayer(firstName, lastName, age) {
    let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  
      this.players.push(player);
      },  
       
    addGame(opp, myPts, oppPts) {
      const game = {
        opp: opp,
        myPts: myPts,
        oppPts: oppPts
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 'Age', 28);
  team.addPlayer('Lisa', 'Leslie', 'Age', 44);
  team.addPlayer('Clint', 'Eastwood', 'Age', 76);
  team.addGame('Titans', 100, 98);
  console.log(team.players);
  