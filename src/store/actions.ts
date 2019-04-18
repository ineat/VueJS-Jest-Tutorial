export default {
  addMember({ commit }: any, member: any) {
    commit("addMemberToTeam", member);
  },

  removeMember({ commit }: any, member: any) {
    commit("removeMemberFromTeam", member);
  }
};
