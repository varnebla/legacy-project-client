import * as actions from '../actions/index';

describe('Testing Redux actions', () => {
  describe('LOGIN action', () => {
    it('Login action should exist', () => {
      expect(actions.login).toBeDefined();
    });

    it('should create an action to login', () => {
      const user = 'testing';
      const expectedAction = {
        type: 'LOGIN',
        user
      };
      expect(actions.login(user)).toEqual(expectedAction);
    });
  });

  describe('SET_PLAYLIST action', () => {
    it('Set action should exist', () => {
      expect(actions.set).toBeDefined();
    });

    it('should create an action to SET_PLAYLIST', () => {
      const playlist = 'testing';
      const expectedAction = {
        type: 'SET_PLAYLIST',
        playlist,
      };
      expect(actions.set(playlist)).toEqual(expectedAction);
    });
  });

  describe('LOGOUT action', () => {
    it('LOGOUT action should exist', () => {
      expect(actions.logout).toBeDefined();
    });

    it('should create an action to LOGOUT', () => {
      const expectedAction = {
        type: 'LOGOUT',
      };
      expect(actions.logout()).toEqual(expectedAction);
    });
  });
  describe('UNSET_PLAYLIST action', () => {
    it('Unset action should exist', () => {
      expect(actions.unset).toBeDefined();
    });

    it('should create an action to UNSET_PLAYLIST', () => {
      const playlist = 'testing';
      const expectedAction = {
        type: 'UNSET_PLAYLIST',
        playlist
      };
      expect(actions.unset(playlist)).toEqual(expectedAction);
    });
  });
});