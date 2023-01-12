import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faCancel } from '@fortawesome/free-solid-svg-icons';

const EditableRow = ({
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
          placeholder="Enter a name..."
          name="studentNumber"
          value={editFormData.studentNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input size="30"
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="studentName"
          value={editFormData.studentName}
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

export default EditableRow;
