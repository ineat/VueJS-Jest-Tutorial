export default {
  addMemberToTeam(state: any, member: any) {
    console.log("state", state.heroesTeam);
    console.log("member", member.type);
    if (member.type === "Heroes") {
      if (state.heroesTeam.length > 4) {
        window.alert(
          "Your team is full, please remove one hero before add new one"
        );
      } else {
        state.heroesTeam = [...state.heroesTeam, member.member];
      }
    }

    if (member.type === "Wicked") {
      if (state.wickedTeam.length > 4) {
        window.alert(
          "Your team is full, please remove one hero before add new one"
        );
      } else {
        state.wickedTeam = [...state.wickedTeam, member.member];
      }
    }
  },

  removeMemberFromTeam(state: any, member: any) {
    if (member.type === "Team of heroes") {
      state.heroesTeam = state.heroesTeam.filter(
        (elem: any) => elem.id !== member.member.id
      );
    }

    if (member.type === "Team of wicked") {
      state.wickedTeam = state.wickedTeam.filter(
        (elem: any) => elem.id !== member.member.id
      );
    }
  }
};
