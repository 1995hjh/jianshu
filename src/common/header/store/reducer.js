const defaultState = {
	focused: false
};

export default (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	if (action.type === 'search_focus') {
		newState.focused = true;
	} else if (action.type === 'search_blur') {
		newState.focused = false;
	}
	return newState;
}