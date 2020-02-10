const reducer = (state,action)=>{
    switch (action.type){
        case 'CHANGE_NAME':
            state = action.payload
            break
        default:
    }
    return state;
}
export default reducer;