const initialState = {
    data: {
      foo: 'bar'
    }
  }
  
  function home(state = initialState, action) {
    switch(action.type) {
  
      default:
        return {
          ...state,
        };
    }
  }
  
  export default home;
  