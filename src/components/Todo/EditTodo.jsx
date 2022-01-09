import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './edittodo.module.css';
import { editTodo } from '../../action/index';

const Edittodo = ({ id, title, desc, onHandleEdit }) => {
    const [edit, setEdit] = useState({ title: title, desc: desc, id: id });
    const dispatch = useDispatch();
    console.log(edit);
    return (
        <div className={style.popup}>
            <div>
                <input value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} type="text" />
                <input value={edit.desc} onChange={(e) => setEdit({ ...edit, desc: e.target.value })} type="text" />
                <button onClick={() => { dispatch(editTodo(edit)); onHandleEdit(false) }}>OK</button>
            </div>
        </div>
    );
}

export default Edittodo;
