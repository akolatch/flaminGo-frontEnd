import React from "react";
import { roomsData } from "../../../SampleData/sampleData.js";
import HalfRoundDiv from "../../styledElements/HalfRoundDiv.jsx";
import FormButton from "../../styledElements/FormButton.jsx";
import InputTypeText from "../../styledElements/InputTypeText.jsx";

let AvailableRooms = (props) => {
  return (
    <div >
      <HalfRoundDiv className={'availabileRoomsList'} id={'listContainer'}>
        {props.availableRooms.map((room) => {
          if (!room.isOccupied) {
            return (
              <div id="roomListEntry" key={room._id}>
                {room.roomNumber}
                <FormButton
                  name={room._id}
                  onClick={(event) => {
                    props.goToNext(event);
                    props.selectRoom(event);
                  }}
                  id={"roomList"}
                >
                  Select Room
                </FormButton>
              </div>
            );
          }
        })}
      </HalfRoundDiv>
      </div>
  );
};

export default AvailableRooms;
