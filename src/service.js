import { getMessages, getMembers } from './data';

export function getChatLog() {
  
  return getMessages().then(function(messages) {
    return getMembers().then(function(members) {
      members.map((item) => {
        item.fullName = item.firstName + ' ' + item.lastName;
        item.userId = item.id;
        delete item.firstName;
        delete item.lastName;
        delete item.id;
        delete item.ip;
        return item;
      })
  
      messages.map((item) => {
        item.messageId = item.id;
        item.timestamp = new Date(item.timestamp).toDateString();
        delete item.id;
        return item;
      })

      messages.sort(function(a, b) {
        var dateA = new Date(a.timestamp), dateB = new Date(b.timestamp);
        return dateA - dateB;
      });

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


