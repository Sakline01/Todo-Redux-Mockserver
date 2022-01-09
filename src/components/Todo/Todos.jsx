import React, { useEffect } from "react";
import Input from "./Input";
import Show from "./Show";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import PostTodo, { GetTodo } from "./api";
import { useDispatch } from "react-redux";
import { gettodorequest, gettodofail, gettodosucess } from '../../action/index';

const Todos = () => {
  const Mock = useSelector((state) => state.Mock);
  // let isLoding = useSelector(state => state.Mock.isLoding);
  const dispatch = useDispatch();
  console.log(Mock.isLoading)
  const handleOnAdd = (text) => {
    dispatch(gettodorequest())
    setTimeout(() => {
      let payload = {
        title: text.text,
        desc: text.desc
      }

      PostTodo(payload)
        .then(res => {

          GetTodo()
            .then(res => dispatch(gettodosucess(res.data)))
        })
        .catch(
          dispatch(gettodofail)
        )
    }, 2000);


  }

  useEffect(() => {
    GetTodo()
      .then(res => dispatch(gettodosucess(res.data)))
  }, []);
  return (
    <>
      <Input onAdd={handleOnAdd} key={uuidv4()} />
      {Mock.isLoading && <h2>Loding....</h2>}
      {!Mock.isLoading && Mock.data.map((item) => (
        <>
          <Show check={item.complete} key={item.id} id={item.id} title={item.title} desc={item.desc} status={item.status} />
        </>
      ))}
    </>
  );
};

export default Todos;