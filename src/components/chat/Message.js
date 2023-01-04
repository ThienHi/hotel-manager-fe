import React from "react";
import { makeStyles } from "@material-ui/core";
import { Avatar } from "antd";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  layout: {
    margin: "50px",
    width: "95%",
  },
}));

const Message = () => {
  const classes = useStyles();
  const message = "";
  return (
    <div>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMCHdN1pFdBlzDOEOAZ8GV450cmV4IimxVQKsfKc&s" size={40} />
      <div>
        <p>
          {message?.sender.name}
          <span>( {message?.sender.email} )</span>
          <span>
            {/* {moment(message?.sender.created_at).format("DD/MM/YYYY HH:mm")} */}
            TH
          </span>
        </p>
        {/* {messageContent} */}
      </div>
    </div>
  );
};

export default Message;
