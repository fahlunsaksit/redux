export default (state = 0, { type, score }) => {
    switch (type) {
        case 'INCREMENT':
            return state + score
        case 'DECREMENT':
            return state - score
        case 'setZero':
            return 0
        default:
            return state
    }
}