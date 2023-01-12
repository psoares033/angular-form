import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const StudentReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick, hideToPrint }) => {
  return (
    <tr>
      <td>{contact.studentNumber}</td>
      <td>{contact.studentName}</td>
      {!hideToPrint ?
      <td>
        <button type="button" class="btn" onClick={(event) => handleEditClick(event, contact)}><FontAwesomeIcon icon={faEdit} /></button>
        <button type="button" class="btn" onClick={() => handleDeleteClick(contact.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
      </td>
      : null}
    </tr>
  );
};

export default StudentReadOnlyRow;
