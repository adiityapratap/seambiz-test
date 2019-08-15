export const SET_CONTACTS = 'SET_CONTACTS';

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS :
            return {...state}
        default:
            return state
    }
}
