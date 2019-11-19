import reducers from '../reducers/reducers';

const initialState = {
  username: '',
  name: '',
  picture: '',
  playlists: []
};

const mockUser = {
  username: 'mockUsername',
  name: 'mockName',
  picture: 'mockUglyPic',
  playlists: ['one', 'two', 'three']
};

const mockPlaylist = {
  id: 'mockID12345'
};

const mockPlaylistUnset = 'mockID12345';

const mockUserPlaylist = {
  username: 'mockUsername',
  name: 'mockName',
  picture: 'mockUglyPic',
  playlists: ['one', 'two', 'three', 'mockID12345']
};

describe('Testing Reducers', () => {

  it('Reducer should be defined', () => {
    expect(reducers).toBeDefined();
  });

  it('should return initial state with wrong input', () => {
    expect(reducers(undefined, {any: 'value'})).toEqual(initialState);
  });

  describe('Login Reducer', () => {
    it('Should return updated state', () => {
      expect(reducers([], {type: 'LOGIN', user: mockUser})).toEqual(mockUser);
    });
    // check if about undefinded and null
    it('should return empty object if null is passed', () => {
      expect(reducers(initialState, {type: 'LOGIN', user: null })).toEqual(initialState);
    });
    
    it('should return empty object if undfined is passed', () => {
      expect(reducers(initialState, {type: 'LOGIN', user: undefined })).toEqual(initialState);
    });

    describe('Set_Playlist Reducer', () => {
      it('Should return updated state', () => {
        expect(reducers(mockUser, {type: 'SET_PLAYLIST', playlist: mockPlaylist })).toEqual(mockUserPlaylist);
      });
    });

    describe('Logout Reducer', () => {
      it('Should return initial state', () => {
        expect(reducers({}, {type: 'LOGOUT'})).toEqual(initialState);
      });
    });

    describe('Unset_Playlist Reducer', () => {
      it('Should return state with removed playlist', () => {
        expect(reducers(mockUserPlaylist, {type: 'UNSET_PLAYLIST', playlist: mockPlaylistUnset})).toEqual(mockUser);
      });
      it('Should return previous state if no playlist id is passed', () => {
        expect(reducers(mockUserPlaylist, {type: 'UNSET_PLAYLIST', playlist: null})).toEqual(mockUserPlaylist);
      });
    });
  });
});