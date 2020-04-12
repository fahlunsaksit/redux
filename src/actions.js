export const increment = (score = 1 ) => ({
    type: 'INCREMENT',
    score
})

export const decrement = (score = -1 ) => ({
    type: 'INCREMENT',
    score
})

export const setZero = (score = 0) => ({
    type: 'setZero',
    score
})