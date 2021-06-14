import React, { useEffect, useState } from "react";
import { Typography, Button } from "antd";

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
      {room && (
        <Participant
          principal={true}
          key={room.localParticipant.sid}
          participant={room.localParticipant}
        />
      )}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          color: "#f1f1f1",
          width: "100%",
          padding: 25,
        }}
      >
        <Typography.Title style={{ color: "#f1f1f1" }}>
          Room name: {roomName}
        </Typography.Title>
        <p>
          Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
          phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
          maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
          latine molestiae, ad mutat oblique delicatissimi pro.
        </p>
        <Button type="primary" onClick={handleLogout} danger>
          Leave room
        </Button>
      </div>
      {participants.length === 0 ? <></> : <>{remoteParticipants}</>}
    </div>
  );
};

export default Room;
