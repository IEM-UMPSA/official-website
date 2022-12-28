const initialUserState = {
  newsDetails: []
}

const newsReducer = function(state = initialUserState, action) {
  	switch(action.type) {
	  case 'NEWS_DETAILS_SUCCESS':
	    return Object.assign({}, state, { newsDetails: action.newsDetails });
  	}
  	return state;
}

export default newsReducer;