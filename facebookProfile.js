let facebookProfile = {
  name : "Gary",
  friends : 300,
  messages : ["hi", "what is happening", "going out tonite?"], 
  
  postMessage : function(messages) {
    facebookProfile.messages.push("hello");
  },
  deleteMessage : function(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend : function (friends) {
    facebookProfile.friends = facebookProfile.friends + 1;
  },
  removeFriend : function () {
    facebookProfile.friends = facebookProfile.friends - 1;
  }
};
