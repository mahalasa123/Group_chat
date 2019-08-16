import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getMessages, getMembers } from './data';
import { getChatLog } from './service';

configure({adapter: new Adapter()});

describe('getChatLog() array using API Promise', () => {
  it('should load the group chat data from two API calls', () => {
      return getMessages().then(data1 => {
        expect(data1).toBeDefined();
        return getMembers().then(data2 => {
          expect(data2).toBeDefined();
        })
    })

  it('returns the correct format', () => {
  return getChatLog().then(([firstMessage]) => {
      expect(typeof firstMessage.messageId).toBe('string');
      expect(typeof firstMessage.userId).toBe('string');
      expect(typeof firstMessage.fullName).toBe('string');
      expect(typeof firstMessage.timestamp).toBe('string');
      expect(typeof firstMessage.email).toBe('string');
      expect(typeof firstMessage.message).toBe('string');
      expect(firstMessage.avatar === null || typeof firstMessage === 'string').toBeTruthy();
    });
});
})
})