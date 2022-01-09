import { v4 as uuidv4 } from 'uuid';
export const increment = (val) => {
    return {
        type: "INCREMENT",
        payload: val
    }
};
export const decrement = (val) => {
    return {
        type: "DECREMENT",
        payload: val
    }
};
export const multiply = (val) => {
    return {
        type: "MULTIPLY",
        payload: val
    }
};
export const division = (val) => {
    return {
        type: "DIVISION",
        payload: val
    }
};
export const add = ({ text, desc }) => {
    return {
        type: "ADD",
        payload: {
            title: text,
            description: desc,
            status: false,
            id: uuidv4()
        }
    }
};
export const gettodosucess = (data) => {
    return {
        type: "GETTODOSUCESS",
        payload: {
            data: data
        }
    }
};

export const gettodorequest = () => {
    return {
        type: "GETTODOREQUEST",
        payload: {
            isLoding: true
        }
    }
};
export const gettodofail = () => {
    return {
        type: "GETTODOFAIL",
        payload: {
            isError: true
        }
    }
};

export const editTodo = ({ title, desc, id }) => {
    return {
        type: "EDIT",
        payload: {
            title: title,
            desc: desc,
            id: id
        }
    }
};
export const toggle = (id) => {
    return {
        type: "TOGGLE",
        payload: {
            id: id
        }
    }
};
export const delet = (id) => {
    return {
        type: "DELETE",
        payload: {
            id: id
        }
    }
};