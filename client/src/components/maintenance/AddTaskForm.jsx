import React from 'react';
import FormButton from '../styledElements/FormButton.jsx';
import HalfRoundDiv from '../styledElements/HalfRoundDiv.jsx';
import InputTypeText from '../styledElements/InputTypeText.jsx';
import InputTypeRadio from '../styledElements/InputTypeRadio.jsx';
import TextAreaForm from '../styledElements/TextAreaForm.jsx';
import {gradient} from '../styledElements/styleGuid.js';

let AddTaskForm = () => {
  return (
    <div>
      <HalfRoundDiv className={'addTask'}>
        <h1 className="formTitle">Add a Task</h1>
        <h2 className="taskInputTitle">Task Title</h2>
        <InputTypeText className="taskInput" placeholder={'Task Title'}/>
        <h2 className="roomInputTitle">Room Number</h2>
        <InputTypeText className="roomInput" placeholder={'Room Number'}/>
        <h2 className="textAreaTitle">Task Description</h2>
        <TextAreaForm className="textArea" placeholder={'Task Description'}/>
        <h2 className="radioTitle">Department</h2>
        <form className="ticketType">
          <label for="Housekeeping"><input name='task' type="radio" value="Housekeeping" id="Housekeeping"/>Housekeeping</label>
          <label for="Maintenance"><input name='task' type="radio" value="Maintenance" id="Maintenance"/>Maintenance</label>
        </form>
        <FormButton className="submitButton">
          Submit
        </FormButton>
      </HalfRoundDiv>
    </div>
  );
};

export default AddTaskForm;