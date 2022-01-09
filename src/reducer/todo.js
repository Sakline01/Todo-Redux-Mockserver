
const todo = (state = [], { type, payload }) => {
    switch (type) {
        case "ADD":
            return [...state, payload];
        case "EDIT":
            return (
                state.map(item => (
                    item.id === payload.id ? { ...item, title: payload.title, description: payload.desc } : item
                ))
            );
        case "TOGGLE":
            return (
                state.map(item => (item.id === payload.id ? { ...item, status: !item.status } : item))
            )
        case "DELETE":
            return state.filter(item => item.id !== payload.id);
        default:
            return state;
    }
}

export default todo;