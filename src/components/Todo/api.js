import axios from 'axios';
function PostTodo(payLoad) {
    return (
        axios.post('http://localhost:3000/todos',
            payLoad
        )
    )
}
export default PostTodo;

export function GetTodo() {

    return (
        axios.get("http://localhost:3000/todos")
    )

}