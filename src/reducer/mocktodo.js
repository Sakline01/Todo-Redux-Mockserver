let initstate = {
    data: [],
    isLoading: true,
    isError: false
}
export default function mocktodo(state = initstate, { type, payload }) {
    switch (type) {
        case "GETTODOSUCESS":
            return { ...state, data: payload.data, isLoading: false, isError: false }
        case "GETTODOREQUEST":
            return { ...state, isLoading: true, isError: false }
        default:
            return state;
    }
};
