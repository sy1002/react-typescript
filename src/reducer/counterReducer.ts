function counterReducer(count:number, action:{ type: string }): number {
    switch (action.type) {
        case 'INCREMENT':
            return count + 1;
        case 'DECREMENT':
            return count - 1;
        case 'RESET':
            return 0;
        default:
            return count;
    }

}


export default counterReducer;