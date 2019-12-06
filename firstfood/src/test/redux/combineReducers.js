function mapValues(obj, fn) {
    return Object.keys(obj).reduce((result, key) => {
        result[key] = fn(obj[key], key);
        return result;
    }, {});
}
export default function combineReducers(reducers) {
    var finalReducers = pick(reducers, (val) => typeof val === 'function')
    var sanityError

    try {
        assertReducerSanity(finalReducers)
    } catch (e) {
        sanityError = e
    }

    return function combination(state = {}, action) {
        if (sanityError) {
            throw sanityError
        }

        if (process.env.NODE_ENV !== 'production') {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action)
            if (warningMessage) {
                console.error(warningMessage)
            }
        }

        var hasChanged = false
        var finalState = mapValues(finalReducers, (reducer, key) => {
            var previousStateForKey = state[key]
            var nextStateForKey = reducer(previousStateForKey, action)
            if (typeof nextStateForKey === 'undefined') {
                var errorMessage = getUndefinedStateErrorMessage(key, action)
                throw new Error(errorMessage)
            }
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey
            return nextStateForKey
        })

        return hasChanged ? finalState : state
    }
}