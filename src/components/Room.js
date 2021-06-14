import React, { useEffect, useState } from "react";
import { Divider, Tag, Row, Col } from "antd";

/* Components */
import Participant from "@/components/Participant";

const Room = ({ roomName, room, handleLogout }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);

    room.participants.forEach(participantConnected);

    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div style={{ width: "100%" }}>
      <Row justify="space-between" gutter={20}>
        {room && (
          <Col span={12}>
            <Divider orientation="left">
              Administrator &nbsp;
              <Tag
                data-testid="tagLogout"
                color="red"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                Close room
              </Tag>
            </Divider>
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
            />
          </Col>
        )}
        <Col span={12}>
          <Divider orientation="left">Participants</Divider>
          {remoteParticipants ? (
            remoteParticipants
          ) : (
            <Card hoverable style={{ marginTop: 15 }}></Card>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Room;
