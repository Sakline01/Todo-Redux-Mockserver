import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggle, delet } from '../../action/index';
import Edittodo from "./EditTodo";
import styles from "./show.module.css";
const Show = ({ id, title, desc, status }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const handleEditClick = (e) => {
    setIsEdit(e)
  }
  return (
    <div>
      <div className={styles.show}>
        <div >
          <div>
            {/* <input onChange={(e) => e.target.checked} type="checkbox" checked={check ? true : false} /> */}
            <div>
              <h2 className={styles.textt}>{title}</h2>
              <p>{desc}</p>
            </div>
          </div>
          <div>
            <button onClick={() => dispatch(toggle(id))} className={status ? styles.green : styles.red} >{status ? "T" : "F"}</button>
            <button onClick={() => dispatch(delet(id))}>X</button>
            <button onClick={() => setIsEdit(true)}>E</button>

          </div>
        </div>
      </div>
      {isEdit ? <Edittodo onHandleEdit={handleEditClick} title={title} desc={desc} id={id} /> : null}
    </div>
  );
};

export default Show;