import React, { Fragment } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import StudentReadOnlyRow from "./StudentReadOnlyRow";
import StudentEditableRow from "./StudentEditableRow";
import CalibrationReadOnlyRow from "./CalibrationReadOnlyRow";
import CalibrationEditableRow from "./CalibrationEditableRow";
import HookeReadOnlyRow from "./HookeReadOnlyRow";
import HookeEditableRow from "./HookeEditableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export class ComponentToPrint extends React.PureComponent {
  render() {
    const handleAddStudentFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...this.props.state.addStudentFormData };
      newFormData[fieldName] = fieldValue;

      this.props.state.setAddStudentFormData(newFormData);
    };

    const handleAddCalibrationFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...this.props.state.addCalibrationFormData };
      newFormData[fieldName] = fieldValue;

      this.props.state.setAddCalibrationFormData(newFormData);
    };

    const handleAddHookeFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...this.props.state.addHookeFormData };
      newFormData[fieldName] = fieldValue;

      this.props.state.setAddHookeFormData(newFormData);
    };

    const handleFormChanges = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldStateId = event.target.getAttribute("stateid");
      const fieldStateMethod = event.target.getAttribute("statemethod");
      const fieldValue = event.target.value;

      const newFormData = { ...this.props.state[fieldStateId] };
      newFormData[fieldName] = fieldValue;

      this.props.state[fieldStateMethod](newFormData);
    };

    const handleEditStudentFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...this.props.state.editFormData };
      newFormData[fieldName] = fieldValue;

      this.props.state.setEditFormData(newFormData);
    };

    const handleEditCalibrationFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...this.props.state.editCalibrationFormData };
      newFormData[fieldName] = fieldValue;

      this.props.state.setEditCalibrationFormData(newFormData);
    };

    const handleEditHookeFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...this.props.state.editHookeFormData };
      newFormData[fieldName] = fieldValue;

      this.props.state.setEditHookeFormData(newFormData);
    };

    const handleAddStudentFormSubmit = (event) => {
      event.preventDefault();

      const newContact = {
        id: nanoid(),
        studentNumber: this.props.state.addStudentFormData.studentNumber,
        studentName: this.props.state.addStudentFormData.studentName,
      };

      const newContacts = [...this.props.state.contacts, newContact];
      this.props.state.setContacts(newContacts);
    };

    const handleAddCalibrationFormSubmit = (event) => {
      event.preventDefault();

      const newCalibration = {
        id: nanoid(),
        distance: this.props.state.addCalibrationFormData.distance,
        time: this.props.state.addCalibrationFormData.time,
      };

      const newCalibrations = [
        ...this.props.state.calibrations,
        newCalibration,
      ];
      this.props.state.setCalibrations(newCalibrations);
    };

    const handleAddHookeFormSubmit = (event) => {
      event.preventDefault();

      const newHooke = {
        id: nanoid(),
        mass: this.props.state.addHookeFormData.mass,
        distance: this.props.state.addHookeFormData.distance,
      };

      const newHookes = [...this.props.state.hookes, newHooke];
      this.props.state.setHookes(newHookes);
    };

    const handleEditStudentFormSubmit = (event) => {
      event.preventDefault();

      const editedContact = {
        id: this.props.state.editContactId,
        studentNumber: this.props.state.editFormData.studentNumber,
        studentName: this.props.state.editFormData.studentName,
      };

      const newContacts = [...this.props.state.contacts];

      const index = this.props.state.contacts.findIndex(
        (contact) => contact.id === this.props.state.editContactId
      );

      newContacts[index] = editedContact;

      this.props.state.setContacts(newContacts);
      this.props.state.setEditContactId(null);
    };

    const handleEditCalibrationFormSubmit = (event) => {
      event.preventDefault();

      const editedCalibration = {
        id: this.props.state.editCalibrationId,
        distance: this.props.state.editCalibrationFormData.distance,
        time: this.props.state.editCalibrationFormData.time,
      };

      const newCalibrations = [...this.props.state.calibrations];

      const index = this.props.state.calibrations.findIndex(
        (calibration) => calibration.id === this.props.state.editCalibrationId
      );

      newCalibrations[index] = editedCalibration;

      this.props.state.setCalibrations(newCalibrations);
      this.props.state.setEditCalibrationId(null);
    };

    const handleEditHookeFormSubmit = (event) => {
      event.preventDefault();

      const editedHooke = {
        id: this.props.state.editHookeId,
        mass: this.props.state.editHookeFormData.mass,
        distance: this.props.state.editHookeFormData.distance,
      };

      const newHookes = [...this.props.state.hookes];

      const index = this.props.state.hookes.findIndex(
        (hooke) => hooke.id === this.props.state.editHookeId
      );

      newHookes[index] = editedHooke;

      this.props.state.setHookes(newHookes);
      this.props.state.setEditHookeId(null);
    };

    const handleEditStudentClick = (event, contact) => {
      event.preventDefault();
      this.props.state.setEditContactId(contact.id);

      const formValues = {
        studentNumber: contact.studentNumber,
        studentName: contact.studentName,
      };

      this.props.state.setEditFormData(formValues);
    };

    const handleEditCalibrationClick = (event, calibration) => {
      event.preventDefault();
      this.props.state.setEditCalibrationId(calibration.id);

      const formValues = {
        distance: calibration.distance,
        time: calibration.time,
      };

      this.props.state.setEditCalibrationFormData(formValues);
    };

    const handleEditHookeClick = (event, hooke) => {
      event.preventDefault();
      this.props.state.setEditHookeId(hooke.id);

      const formValues = {
        mass: hooke.mass,
        distance: hooke.distance,
      };

      this.props.state.setEditHookeFormData(formValues);
    };

    const handleCancelClick = () => {
      this.props.state.setEditContactId(null);
    };

    const handleCalibrationCancelClick = () => {
      this.props.state.setEditCalibrationId(null);
    };

    const handleHookeCancelClick = () => {
      this.props.state.setEditHookeId(null);
    };

    const handleStudentDeleteClick = (contactId) => {
      const newContacts = [...this.props.state.contacts];

      const index = this.props.state.contacts.findIndex(
        (contact) => contact.id === contactId
      );

      newContacts.splice(index, 1);

      this.props.state.setContacts(newContacts);
    };

    const handleCalibrationDeleteClick = (calibrationId) => {
      const newCalibrations = [...this.props.state.calibrations];

      const index = this.props.state.calibrations.findIndex(
        (calibration) => calibration.id === calibrationId
      );

      newCalibrations.splice(index, 1);

      this.props.state.setCalibrations(newCalibrations);
    };

    const handleHookeDeleteClick = (hookeId) => {
      const newHookes = [...this.props.state.hookes];

      const index = this.props.state.hookes.findIndex(
        (hooke) => hooke.id === hookeId
      );

      newHookes.splice(index, 1);

      this.props.state.setHookes(newHookes);
    };

    return (
      <div>
        <div class="row">
          <div class="titulo">VIBON 2022/2023</div>
          <div class="subTitulo">Trabalho SONAR</div>
          <div class="subVermelho">Registo de Dados e Resultados</div>
        </div>
        <div class="row">
          <div class="col-1"></div>

          <div class="col-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                Turma
              </span>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                Grupo
              </span>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-4">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                Data
              </span>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-1"></div>
        </div>

        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <form onSubmit={handleEditStudentFormSubmit}>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th class="th_25">Número</th>
                    <th>Nome</th>
                    {!this.props.hideToPrint ? <th class="th_15"></th> : null}
                  </tr>
                </thead>
                <tbody>
                  {this.props.state.contacts.map((contact) => (
                    <Fragment>
                      {this.props.state.editContactId === contact.id ? (
                        <StudentEditableRow
                          editFormData={this.props.state.editFormData}
                          handleEditFormChange={handleEditStudentFormChange}
                          handleCancelClick={handleCancelClick}
                          hideToPrint={this.props.hideToPrint}
                        />
                      ) : (
                        <StudentReadOnlyRow
                          contact={contact}
                          handleEditClick={handleEditStudentClick}
                          handleDeleteClick={handleStudentDeleteClick}
                          hideToPrint={this.props.hideToPrint}
                        />
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </Table>
            </form>

            {!this.props.hideToPrint ? (
              <form onSubmit={handleAddStudentFormSubmit}>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    Número
                  </span>
                  <input
                    type="text"
                    name="studentNumber"
                    required="required"
                    class="form-control"
                    placeholder="Insira um número"
                    onChange={handleAddStudentFormChange}
                  />
                </div>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon2">
                    Nome
                  </span>
                  <input
                    type="text"
                    name="studentName"
                    required="required"
                    class="form-control"
                    placeholder="Insira um nome"
                    onChange={handleAddStudentFormChange}
                  />
                </div>
                <div>
                  <Button className="btn_pad" type="submit" variant="secondary">
                    +
                  </Button>
                </div>
              </form>
            ) : null}
          </div>
          <div class="col-1"></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="h7 align_center">
            <b>Tabela 1:</b> Instrumento
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <form onSubmit={handleEditStudentFormSubmit}>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th>Instrumento</th>
                    <th>Unidade</th>
                    <th>Resolução</th>
                    <th>Incerteza</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Termómetro</td>
                    <td>ºC</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="resolution"
                          stateid="thermometer"
                          statemethod="setThermometer"
                          value={this.props.state.thermometer.resolution}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.thermometer.resolution}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="uncertainty"
                          stateid="thermometer"
                          statemethod="setThermometer"
                          value={this.props.state.thermometer.uncertainty}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.thermometer.uncertainty}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Fita métrica</td>
                    <td>mm</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="resolution"
                          stateid="tape"
                          statemethod="setTape"
                          value={this.props.state.tape.resolution}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.tape.resolution}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="uncertainty"
                          stateid="tape"
                          statemethod="setTape"
                          value={this.props.state.tape.uncertainty}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.tape.uncertainty}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Balança</td>
                    <td>g</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="resolution"
                          stateid="scale"
                          statemethod="setScale"
                          value={this.props.state.scale.resolution}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.scale.resolution}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="uncertainty"
                          stateid="scale"
                          statemethod="setScale"
                          value={this.props.state.scale.uncertainty}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.scale.uncertainty}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </form>
          </div>
          <div class="col-1"></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-5">
            <div class="h7 align_center">
              <b>Tabela 2:</b> Calibração SONAR
            </div>
          </div>
          <div class="col-5">
            <div class="h7 align_center">
              <b>Tabela 3:</b> Lei de HOOKE
            </div>
          </div>
          <div class="col-1"></div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-5">
            <form onSubmit={handleEditCalibrationFormSubmit}>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th class="th_40">
                      Distância <sub>d(mm)</sub>
                    </th>
                    <th class="th_35">
                      Tempo Eco <sub>t_eco(ms)</sub>
                    </th>
                    {!this.props.hideToPrint ? <th class="th_15"></th> : null}
                  </tr>
                </thead>
                <tbody>
                  {this.props.state.calibrations.map((calibration) => (
                    <Fragment>
                      {this.props.state.editCalibrationId === calibration.id ? (
                        <CalibrationEditableRow
                          editFormData={
                            this.props.state.editCalibrationFormData
                          }
                          handleEditFormChange={handleEditCalibrationFormChange}
                          handleCancelClick={handleCalibrationCancelClick}
                          hideToPrint={this.props.hideToPrint}
                        />
                      ) : (
                        <CalibrationReadOnlyRow
                          calibration={calibration}
                          handleEditClick={handleEditCalibrationClick}
                          handleDeleteClick={handleCalibrationDeleteClick}
                          hideToPrint={this.props.hideToPrint}
                        />
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </Table>
            </form>

            {!this.props.hideToPrint ? (
              <form onSubmit={handleAddCalibrationFormSubmit}>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    Distância
                  </span>
                  <input
                    type="text"
                    name="distance"
                    required="required"
                    class="form-control"
                    placeholder="Insira uma distância"
                    onChange={handleAddCalibrationFormChange}
                  />
                </div>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon2">
                    Tempo Eco
                  </span>
                  <input
                    type="text"
                    name="time"
                    required="required"
                    class="form-control"
                    placeholder="Insira um tempo"
                    onChange={handleAddCalibrationFormChange}
                  />
                </div>
                <div>
                  <Button className="btn_pad" type="submit" variant="secondary">
                    +
                  </Button>
                </div>
              </form>
            ) : null}
          </div>

          <div class="col-5">
            <form onSubmit={handleEditHookeFormSubmit}>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th class="th_40">
                      Massa <sub>m(g)</sub>
                    </th>
                    <th class="th_35">
                      Distância <sub>d(mm)</sub>
                    </th>
                    {!this.props.hideToPrint ? <th class="th_15"></th> : null}
                  </tr>
                </thead>
                <tbody>
                  {this.props.state.hookes.map((hooke) => (
                    <Fragment>
                      {this.props.state.editHookeId === hooke.id ? (
                        <HookeEditableRow
                          editFormData={this.props.state.editHookeFormData}
                          handleEditFormChange={handleEditHookeFormChange}
                          handleCancelClick={handleHookeCancelClick}
                          hideToPrint={this.props.hideToPrint}
                        />
                      ) : (
                        <HookeReadOnlyRow
                          hooke={hooke}
                          handleEditClick={handleEditHookeClick}
                          handleDeleteClick={handleHookeDeleteClick}
                          hideToPrint={this.props.hideToPrint}
                        />
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </Table>
            </form>

            {!this.props.hideToPrint ? (
              <form onSubmit={handleAddHookeFormSubmit}>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    Massa
                  </span>
                  <input
                    type="text"
                    name="mass"
                    required="required"
                    class="form-control"
                    placeholder="Insira uma massa"
                    onChange={handleAddHookeFormChange}
                  />
                </div>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon2">
                    Distância
                  </span>
                  <input
                    type="text"
                    name="distance"
                    required="required"
                    class="form-control"
                    placeholder="Insira uma distância"
                    onChange={handleAddHookeFormChange}
                  />
                </div>
                <div>
                  <Button className="btn_pad" type="submit" variant="secondary">
                    +
                  </Button>
                </div>
              </form>
            ) : null}
          </div>
          <div class="col-1"></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="h7 align_center">
            <b>Tabela 4:</b> Resultados - Calibração do SONAR
          </div>
        </div>
        <br></br>

        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <form onSubmit={handleEditStudentFormSubmit}>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th>Grandeza</th>
                    <th>
                      Simbolo <sub>(unidade)</sub>
                    </th>
                    <th>Valor</th>
                    <th>Incerteza padrão</th>
                    <th>
                      Incerteza relativa <sub>(%)</sub>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Temperatura ambiente</td>
                    <td>
                      ϴ<sub>1</sub> (K)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="roomTemperature"
                          statemethod="setRoomTemperature"
                          value={this.props.state.roomTemperature.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.roomTemperature.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="roomTemperature"
                          statemethod="setRoomTemperature"
                          value={this.props.state.roomTemperature.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.roomTemperature.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="roomTemperature"
                          statemethod="setRoomTemperature"
                          value={this.props.state.roomTemperature.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.roomTemperature.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Velocidade do som (ref.)</td>
                    <td>
                      v<sub>ref</sub> (m s<sup>-1</sup>)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="soundSpeedRef"
                          statemethod="setSoundSpeedRef"
                          value={this.props.state.soundSpeedRef.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.soundSpeedRef.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="soundSpeedRef"
                          statemethod="setSoundSpeedRef"
                          value={this.props.state.soundSpeedRef.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.soundSpeedRef.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="soundSpeedRef"
                          statemethod="setSoundSpeedRef"
                          value={this.props.state.soundSpeedRef.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.soundSpeedRef.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Declive da reta</td>
                    <td>
                      α<sub>1</sub> (mm ms<sup>-1</sup>)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="lineSlope"
                          statemethod="setLineSlope"
                          value={this.props.state.lineSlope.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.lineSlope.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="lineSlope"
                          statemethod="setLineSlope"
                          value={this.props.state.lineSlope.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.lineSlope.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="lineSlope"
                          statemethod="setLineSlope"
                          value={this.props.state.lineSlope.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.lineSlope.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Ordenada na origem</td>
                    <td>
                      β<sub>1</sub> (mm)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="origin"
                          statemethod="setOrigin"
                          value={this.props.state.origin.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.origin.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="origin"
                          statemethod="setOrigin"
                          value={this.props.state.origin.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.origin.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="origin"
                          statemethod="setOrigin"
                          value={this.props.state.origin.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.origin.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Coeficiente de correlação</td>
                    <td>
                      r<sup>2</sup>
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="coefficient"
                          statemethod="setCoefficient"
                          value={this.props.state.coefficient.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.coefficient.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="coefficient"
                          statemethod="setCoefficient"
                          value={this.props.state.coefficient.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.coefficient.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="coefficient"
                          statemethod="setCoefficient"
                          value={this.props.state.coefficient.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.coefficient.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Velocidade do som</td>
                    <td>
                      v<sub>som</sub> (m s<sup>-1</sup>)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="soundSpeedExp"
                          statemethod="setSoundSpeedExp"
                          value={this.props.state.soundSpeedExp.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.soundSpeedExp.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="soundSpeedExp"
                          statemethod="setSoundSpeedExp"
                          value={this.props.state.soundSpeedExp.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.soundSpeedExp.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="soundSpeedExp"
                          statemethod="setSoundSpeedExp"
                          value={this.props.state.soundSpeedExp.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.soundSpeedExp.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Desvio relativo (exatidão)</td>
                    <td>Δv (%)</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="relativeDeviation"
                          statemethod="setRelativeDeviation"
                          value={this.props.state.relativeDeviation.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.relativeDeviation.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="relativeDeviation"
                          statemethod="setRelativeDeviation"
                          value={this.props.state.relativeDeviation.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.relativeDeviation.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="relativeDeviation"
                          statemethod="setRelativeDeviation"
                          value={this.props.state.relativeDeviation.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.relativeDeviation.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </form>
          </div>
          <div class="col-1"></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="h7 align_center">
            <b>Tabela 5:</b> Resultados - Lei de HOOKE
          </div>
        </div>
        <br></br>

        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <form onSubmit={handleEditStudentFormSubmit}>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th>Grandeza</th>
                    <th>
                      Simbolo <sub>(unidade)</sub>
                    </th>
                    <th>Valor</th>
                    <th>Incerteza padrão</th>
                    <th>
                      Incerteza relativa <sub>(%)</sub>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Massa do suporte com placa</td>
                    <td>
                      m<sub>0</sub> (g)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="suportMass"
                          statemethod="setSuportMass"
                          value={this.props.state.suportMass.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.suportMass.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="suportMass"
                          statemethod="setSuportMass"
                          value={this.props.state.suportMass.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.suportMass.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="suportMass"
                          statemethod="setSuportMass"
                          value={this.props.state.suportMass.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.suportMass.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Distância inicial</td>
                    <td>
                      d<sub>0</sub> (mm)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="initialDistanceHooke"
                          statemethod="setInitialDistanceHooke"
                          value={this.props.state.initialDistanceHooke.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.initialDistanceHooke.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="initialDistanceHooke"
                          statemethod="setInitialDistanceHooke"
                          value={this.props.state.initialDistanceHooke.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.initialDistanceHooke.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="initialDistanceHooke"
                          statemethod="setInitialDistanceHooke"
                          value={this.props.state.initialDistanceHooke.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.initialDistanceHooke.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Declive da reta</td>
                    <td>
                      α<sub>2</sub> (g mm<sup>-1</sup>)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="lineSlopeHooke"
                          statemethod="setLineSlopeHooke"
                          value={this.props.state.lineSlopeHooke.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.lineSlopeHooke.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="lineSlopeHooke"
                          statemethod="setLineSlopeHooke"
                          value={this.props.state.lineSlopeHooke.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.lineSlopeHooke.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="lineSlopeHooke"
                          statemethod="setLineSlopeHooke"
                          value={this.props.state.lineSlopeHooke.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.lineSlopeHooke.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Ordenada na origem</td>
                    <td>
                      β<sub>2</sub> (g)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="originHooke"
                          statemethod="setOriginHooke"
                          value={this.props.state.originHooke.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.originHooke.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="originHooke"
                          statemethod="setOriginHooke"
                          value={this.props.state.originHooke.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.originHooke.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="originHooke"
                          statemethod="setOriginHooke"
                          value={this.props.state.originHooke.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.originHooke.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Coeficiente de correlação</td>
                    <td>
                      r<sup>2</sup>
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="coefficientHooke"
                          statemethod="setCoefficientHooke"
                          value={this.props.state.coefficientHooke.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.coefficientHooke.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="coefficientHooke"
                          statemethod="setCoefficientHooke"
                          value={this.props.state.coefficientHooke.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.coefficientHooke.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="coefficientHooke"
                          statemethod="setCoefficientHooke"
                          value={this.props.state.coefficientHooke.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.coefficientHooke.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Constante elástica da mola</td>
                    <td>k (N/m)</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="elastic"
                          statemethod="setElastic"
                          value={this.props.state.elastic.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.elastic.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="elastic"
                          statemethod="setElastic"
                          value={this.props.state.elastic.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.elastic.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="elastic"
                          statemethod="setElastic"
                          value={this.props.state.elastic.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.elastic.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </form>
          </div>
          <div class="col-1"></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="h7 align_center">
            <b>Tabela 6:</b> Resultados - Oscilador Amortecido
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <form onSubmit={handleEditStudentFormSubmit}>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th>Grandeza</th>
                    <th>
                      Simbolo <sub>(unidade)</sub>
                    </th>
                    <th>Valor</th>
                    <th>Incerteza padrão</th>
                    <th>
                      Incerteza relativa <sub>(%)</sub>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Massa do corpo suspenso</td>
                    <td>m (g)</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="bodyMass"
                          statemethod="setBodyMass"
                          value={this.props.state.bodyMass.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.bodyMass.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="bodyMass"
                          statemethod="setBodyMass"
                          value={this.props.state.bodyMass.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.bodyMass.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="bodyMass"
                          statemethod="setBodyMass"
                          value={this.props.state.bodyMass.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.bodyMass.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Massa total do oscilador</td>
                    <td>M (g)</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="oscilatorMass"
                          statemethod="setOscilatorMass"
                          value={this.props.state.oscilatorMass.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.oscilatorMass.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="oscilatorMass"
                          statemethod="setOscilatorMass"
                          value={this.props.state.oscilatorMass.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.oscilatorMass.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="oscilatorMass"
                          statemethod="setOscilatorMass"
                          value={this.props.state.oscilatorMass.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.oscilatorMass.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Distância inicial</td>
                    <td>
                      d<sub>0</sub> (mm)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="initialDistanceOscilator"
                          statemethod="setInitialDistanceOscilator"
                          value={
                            this.props.state.initialDistanceOscilator.value
                          }
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.initialDistanceOscilator.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="initialDistanceOscilator"
                          statemethod="setInitialDistanceOscilator"
                          value={
                            this.props.state.initialDistanceOscilator.standard
                          }
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.initialDistanceOscilator.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="initialDistanceOscilator"
                          statemethod="setInitialDistanceOscilator"
                          value={
                            this.props.state.initialDistanceOscilator.relative
                          }
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.initialDistanceOscilator.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Periodo de oscilação (zeros)</td>
                    <td>
                      T<sub>zeros</sub> (s)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="zeroPeriod"
                          statemethod="setZeroPeriod"
                          value={this.props.state.zeroPeriod.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.zeroPeriod.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="zeroPeriod"
                          statemethod="setZeroPeriod"
                          value={this.props.state.zeroPeriod.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.zeroPeriod.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="zeroPeriod"
                          statemethod="setZeroPeriod"
                          value={this.props.state.zeroPeriod.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.zeroPeriod.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Periodo de oscilação (picos)</td>
                    <td>
                      T<sub>peaks</sub> (s)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="peakPeriod"
                          statemethod="setPeakPeriod"
                          value={this.props.state.peakPeriod.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.peakPeriod.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="peakPeriod"
                          statemethod="setPeakPeriod"
                          value={this.props.state.peakPeriod.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.peakPeriod.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="peakPeriod"
                          statemethod="setPeakPeriod"
                          value={this.props.state.peakPeriod.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.peakPeriod.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Desvio relativo (exatidão)</td>
                    <td>ΔT (%)</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="exactRelativeDeviation"
                          statemethod="setExactRelativeDeviation"
                          value={this.props.state.exactRelativeDeviation.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.exactRelativeDeviation.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="exactRelativeDeviation"
                          statemethod="setExactRelativeDeviation"
                          value={
                            this.props.state.exactRelativeDeviation.standard
                          }
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.exactRelativeDeviation.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="exactRelativeDeviation"
                          statemethod="setExactRelativeDeviation"
                          value={
                            this.props.state.exactRelativeDeviation.relative
                          }
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.exactRelativeDeviation.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Coef. de Amortecimento</td>
                    <td>
                      γ (s<sup>-1</sup>)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="coefficientOscilator"
                          statemethod="setCoefficientOscilator"
                          value={this.props.state.coefficientOscilator.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.coefficientOscilator.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="coefficientOscilator"
                          statemethod="setCoefficientOscilator"
                          value={this.props.state.coefficientOscilator.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.coefficientOscilator.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="coefficientOscilator"
                          statemethod="setCoefficientOscilator"
                          value={this.props.state.coefficientOscilator.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.coefficientOscilator.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Frequência própria</td>
                    <td>
                      ω<sub>0</sub> (rad s<sup>-1</sup>)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="frequence"
                          statemethod="setFrequence"
                          value={this.props.state.frequence.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.frequence.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="frequence"
                          statemethod="setFrequence"
                          value={this.props.state.frequence.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.frequence.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="frequence"
                          statemethod="setFrequence"
                          value={this.props.state.frequence.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.frequence.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Frequência de oscilação</td>
                    <td>
                      ω (rad s<sup>-1</sup>)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="oscilatorFrequence"
                          statemethod="setOscilatorFrequence"
                          value={this.props.state.oscilatorFrequence.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.oscilatorFrequence.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="oscilatorFrequence"
                          statemethod="setOscilatorFrequence"
                          value={this.props.state.oscilatorFrequence.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.oscilatorFrequence.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="oscilatorFrequence"
                          statemethod="setOscilatorFrequence"
                          value={this.props.state.oscilatorFrequence.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.oscilatorFrequence.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Periodo de oscilação (calc)</td>
                    <td>
                      T<sub>calc</sub> (s)
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="calcPeriod"
                          statemethod="setCalcPeriod"
                          value={this.props.state.calcPeriod.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.calcPeriod.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="calcPeriod"
                          statemethod="setCalcPeriod"
                          value={this.props.state.calcPeriod.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.calcPeriod.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="calcPeriod"
                          statemethod="setCalcPeriod"
                          value={this.props.state.calcPeriod.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.calcPeriod.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Fator de qualidade</td>
                    <td>Q</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="qualityFactor"
                          statemethod="setQualityFactor"
                          value={this.props.state.qualityFactor.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.qualityFactor.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="qualityFactor"
                          statemethod="setQualityFactor"
                          value={this.props.state.qualityFactor.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.qualityFactor.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="qualityFactor"
                          statemethod="setQualityFactor"
                          value={this.props.state.qualityFactor.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.qualityFactor.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Decaimento (amplitude)</td>
                    <td>ΔT (%)</td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="value"
                          stateid="amplitude"
                          statemethod="setAmplitude"
                          value={this.props.state.amplitude.value}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.amplitude.value}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="standard"
                          stateid="amplitude"
                          statemethod="setAmplitude"
                          value={this.props.state.amplitude.standard}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.amplitude.standard}`}{" "}
                        </span>
                      )}
                    </td>
                    <td>
                      {!this.props.hideToPrint ? (
                        <input
                          size="5"
                          type="text"
                          required="required"
                          name="relative"
                          stateid="amplitude"
                          statemethod="setAmplitude"
                          value={this.props.state.amplitude.relative}
                          onChange={handleFormChanges}
                        ></input>
                      ) : (
                        <span class="td_span">
                          {" "}
                          {`${this.props.state.amplitude.relative}`}{" "}
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </form>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    );
  }
}
