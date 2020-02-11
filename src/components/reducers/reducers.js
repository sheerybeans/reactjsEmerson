// const INITIAL_STATE = {
//     fullname: ''
// };

const reducer = (state = '',action)=>{
    switch (action.type){
        case 'CHANGE_NAME':
            state = action.payload.name;
            break
        default:
    }
    return state;
}
export default reducer;