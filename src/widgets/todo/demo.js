/**
 *
 *
 * @flow
 */
import React from "react";
import Todo from "./index";
import styled from "styled-components";
import { Theme } from "@lugia/lugia-web";
const Wrapper = styled.div`
  // margin: 50px;
`;

export default () => {
  const data = [
    { title: "待办事项一", status: "inProcess" },
    { title: "待办事项二", status: "inProcess" },
    { title: "待办事项三", status: "inProcess" },
    { title: "待办事项四", status: "finish" },
    { title: "待办事项五", status: "finish" },
    { title: "待办事项六", status: "finish" },
    { title: "待办事项七", status: "finish" }
  ];
  const config = {
    title: "待办事项",
    description: "代办事件任务栏显示最近要待办的事件",
    buttonText: "新增"
  };

  const view = {
    ["Todo"]: {
      ButtonTheme: {
        normal: {
          background: {
            color: "#c07b12"
          }
        }
      },
      InputTheme: {
       Container:{
         normal:{
           margin: 10
         }
       }
      }
    }
  };

  return (
    <Wrapper>
      <Theme config={view}>
        <Todo
          data={data}
          config={config}
          onChange={res => {
            console.log(res);
          }}
        />
      </Theme>
    </Wrapper>
  );
};
