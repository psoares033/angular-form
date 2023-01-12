import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CalibrationReadOnlyRow = ({ calibration, handleEditClick, handleDeleteClick, hideToPrint }) => {
  return (
    <tr>
      <td>{calibration.distance}</td>
      <td>{calibration.time}</td>
      {!hideToPrint ?
      <td>
        <button type="button" class="btn" onClick={(event) => handleEditClick(event, calibration)}><FontAwesomeIcon icon={faEdit} /></button>
        <button type="button" class="btn" onClick={() => handleDeleteClick(calibration.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
      </td>
      : null}
    </tr>
  );
};

export default CalibrationReadOnlyRow;
