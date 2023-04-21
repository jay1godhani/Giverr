import React from "react";

import "./Message.scss";
import { Link, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../../utils/newRequest";

const Message = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser)
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageBody = {
      ConversationId: id,
      desc: e.target[0].value,
    };

    const res = await newRequest.post("messages", messageBody);

    e.target[0].value = "";

    queryClient.invalidateQueries(["messages"]);
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages:</Link> {currentUser.username} 
        </span>
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="message">
            {data.map((m) => {
              return (
                <div
                  className={
                    m.UserId === currentUser._id ? "owner item" : "item"
                  }
                  key={m._id}
                >
                  <img src={m.pic} alt="" />
                  <p>{m.desc}</p>
                </div>
              );
            })}
          </div>
        )}
        <form className="write" onSubmit={handleSubmit}>
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
