import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const HookeReadOnlyRow = ({ hooke, handleEditClick, handleDeleteClick, hideToPrint }) => {
  return (
    <tr>
      <td>{hooke.mass}</td>
      <td>{hooke.distance}</td>
      {!hideToPrint ?
      <td>
        <button type="button" class="btn" onClick={(event) => handleEditClick(event, hooke)}><FontAwesomeIcon icon={faEdit} /></button>
        <button type="button" class="btn" onClick={() => handleDeleteClick(hooke.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
      </td>
      : null}
    </tr>
  );
};

export default HookeReadOnlyRow;
