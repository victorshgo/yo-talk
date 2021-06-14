import React from "react";
import { Card, PageHeader, Input, Divider, Button } from "antd";
import { VideoCameraFilled } from "@ant-design/icons";

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}) => {
  return (
    <Card hoverable>
      <form style={{ width: 400 }}>
        <PageHeader
          title={
            <>
              <VideoCameraFilled />
              &nbsp; Yo! Talk
            </>
          }
          subTitle="Lessons by video call"
        />

        <label htmlFor="name">Type your name:</label>
        <Input
          id="name"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          data-testid="inputName"
          required
        />

        <label htmlFor="room">Enter room name:</label>
        <Input
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          data-testid="inputRoom"
          required
        />

        <Divider />

        <Button
          type="primary"
          disabled={connecting || username === "" || roomName === ""}
          onClick={handleSubmit}
          data-testid="buttonSubmit"
          style={{ width: "100%" }}
        >
          {connecting ? "Connecting..." : "Join"}
        </Button>
      </form>
    </Card>
  );
};

export default Lobby;