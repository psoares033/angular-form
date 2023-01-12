import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faCancel } from '@fortawesome/free-solid-svg-icons';

const CalibrationEditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return (
    <tr>
      <td>
        <input size="7"
          type="text"
          required="required"
          placeholder="Enter a distance"
          name="distance"
          value={editFormData.distance}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input size="7"
          type="text"
          required="required"
          placeholder="Enter a time"
          name="time"
          value={editFormData.time}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" class="btn"><FontAwesomeIcon icon={faSave} /></button>
        <button type="button" class="btn" onClick={handleCancelClick}><FontAwesomeIcon icon={faCancel} /></button>
      </td>
    </tr>
  );
};

export default CalibrationEditableRow;
