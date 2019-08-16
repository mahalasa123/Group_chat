import { getMessages, getMembers } from './data';

export function getChatLog() {
  
  return getMessages().then(function(messages) {
    return getMembers().then(function(members) {
      // Traverse through members array & modify it to match the requirement
      members.map((item) => {
        item.fullName = item.firstName + ' ' + item.lastName;
        item.userId = item.id;
        delete item.firstName;
        delete item.lastName;
        delete item.id;
        delete item.ip;
        return item;
      })
  
      // Traverse through messages array & modify it to match the requirement
      messages.map((item) => {
        item.messageId = item.id;
        item.timestamp = new Date(item.timestamp).toDateString();
        delete item.id;
        return item;
      })

      // Sort messages array based on timestamp
      messages.sort(function(a, b) {
        var dateA = new Date(a.timestamp), dateB = new Date(b.timestamp);
        return dateA - dateB;
      });

      // Merge "members" array & "messages" array based on "userId" key to get desired output
      let finalArr = [];
      messages.map(item => {
        members.map(item1 => {
          if (item.userId === item1.userId) {
            finalArr.push(Object.assign(item, item1));
          }
          return item1;
        })
        return item;
      })
      return finalArr;
    });
  }); 
};


