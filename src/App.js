import React, { useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ComponentToPrint } from "./components/ComponentToPrint";
import ReactToPrint from "react-to-print";
import Button from "react-bootstrap/Button";

const App = () => {
  const componentRef = useRef();

  const [hideToPrint, setHideToPrint] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [addStudentFormData, setAddStudentFormData] = useState({
    studentNumber: "",
    studentName: "",
  });
  const [editFormData, setEditFormData] = useState({
    studentNumber: "",
    studentName: "",
  });
  const [editContactId, setEditContactId] = useState(null);

  const [thermometer, setThermometer] = useState({
    resolution: "",
    uncertainty: "",
  });
  const [tape, setTape] = useState({ resolution: "", uncertainty: "" });
  const [scale, setScale] = useState({ resolution: "", uncertainty: "" });

  const [calibrations, setCalibrations] = useState([]);
  const [addCalibrationFormData, setAddCalibrationFormData] = useState({
    distance: "",
    time: "",
  });
  const [editCalibrationFormData, setEditCalibrationFormData] = useState({
    distance: "",
    time: "",
  });
  const [editCalibrationId, setEditCalibrationId] = useState(null);

  const [hookes, setHookes] = useState([]);
  const [addHookeFormData, setAddHookeFormData] = useState({
    mass: "",
    distance: "",
  });
  const [editHookeFormData, setEditHookeFormData] = useState({
    mass: "",
    distance: "",
  });
  const [editHookeId, setEditHookeId] = useState(null);

  const [roomTemperature, setRoomTemperature] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [soundSpeedRef, setSoundSpeedRef] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [lineSlope, setLineSlope] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [origin, setOrigin] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [coefficient, setCoefficient] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [soundSpeedExp, setSoundSpeedExp] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [relativeDeviation, setRelativeDeviation] = useState({
    value: "",
    standard: "",
    relative: "",
  });

  const [suportMass, setSuportMass] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [initialDistanceHooke, setInitialDistanceHooke] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [lineSlopeHooke, setLineSlopeHooke] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [originHooke, setOriginHooke] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [coefficientHooke, setCoefficientHooke] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [elastic, setElastic] = useState({
    value: "",
    standard: "",
    relative: "",
  });

  const [bodyMass, setBodyMass] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [oscilatorMass, setOscilatorMass] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [initialDistanceOscilator, setInitialDistanceOscilator] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [zeroPeriod, setZeroPeriod] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [peakPeriod, setPeakPeriod] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [exactRelativeDeviation, setExactRelativeDeviation] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [coefficientOscilator, setCoefficientOscilator] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [frequence, setFrequence] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [oscilatorFrequence, setOscilatorFrequence] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [calcPeriod, setCalcPeriod] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [qualityFactor, setQualityFactor] = useState({
    value: "",
    standard: "",
    relative: "",
  });
  const [amplitude, setAmplitude] = useState({
    value: "",
    standard: "",
    relative: "",
  });

  var state = {
    contacts: contacts,
    setContacts: setContacts,
    addStudentFormData: addStudentFormData,
    setAddStudentFormData: setAddStudentFormData,
    editFormData: editFormData,
    setEditFormData: setEditFormData,
    editContactId: editContactId,
    setEditContactId: setEditContactId,

    thermometer: thermometer,
    setThermometer: setThermometer,
    tape: tape,
    setTape: setTape,
    scale: scale,
    setScale: setScale,

    calibrations: calibrations,
    setCalibrations: setCalibrations,
    addCalibrationFormData: addCalibrationFormData,
    setAddCalibrationFormData: setAddCalibrationFormData,
    editCalibrationFormData: editCalibrationFormData,
    setEditCalibrationFormData: setEditCalibrationFormData,
    editCalibrationId: editCalibrationId,
    setEditCalibrationId: setEditCalibrationId,

    hookes: hookes,
    setHookes: setHookes,
    addHookeFormData: addHookeFormData,
    setAddHookeFormData: setAddHookeFormData,
    editHookeFormData: editHookeFormData,
    setEditHookeFormData: setEditHookeFormData,
    editHookeId: editHookeId,
    setEditHookeId: setEditHookeId,

    roomTemperature: roomTemperature,
    setRoomTemperature: setRoomTemperature,
    soundSpeedRef: soundSpeedRef,
    setSoundSpeedRef: setSoundSpeedRef,
    lineSlope: lineSlope,
    setLineSlope: setLineSlope,
    origin: origin,
    setOrigin: setOrigin,
    coefficient: coefficient,
    setCoefficient: setCoefficient,
    soundSpeedExp: soundSpeedExp,
    setSoundSpeedExp: setSoundSpeedExp,
    relativeDeviation: relativeDeviation,
    setRelativeDeviation: setRelativeDeviation,

    suportMass: suportMass,
    setSuportMass: setSuportMass,
    initialDistanceHooke: initialDistanceHooke,
    setInitialDistanceHooke: setInitialDistanceHooke,
    lineSlopeHooke: lineSlopeHooke,
    setLineSlopeHooke: setLineSlopeHooke,
    originHooke: originHooke,
    setOriginHooke: setOriginHooke,
    coefficientHooke: coefficientHooke,
    setCoefficientHooke: setCoefficientHooke,
    elastic: elastic,
    setElastic: setElastic,

    bodyMass: bodyMass,
    setBodyMass: setBodyMass,
    oscilatorMass: oscilatorMass,
    setOscilatorMass: setOscilatorMass,
    initialDistanceOscilator: initialDistanceOscilator,
    setInitialDistanceOscilator: setInitialDistanceOscilator,
    zeroPeriod: zeroPeriod,
    setZeroPeriod: setZeroPeriod,
    peakPeriod: peakPeriod,
    setPeakPeriod: setPeakPeriod,
    exactRelativeDeviation: exactRelativeDeviation,
    setExactRelativeDeviation: setExactRelativeDeviation,
    coefficientOscilator: coefficientOscilator,
    setCoefficientOscilator: setCoefficientOscilator,
    frequence: frequence,
    setFrequence: setFrequence,
    oscilatorFrequence: oscilatorFrequence,
    setOscilatorFrequence: setOscilatorFrequence,
    calcPeriod: calcPeriod,
    setCalcPeriod: setCalcPeriod,
    qualityFactor: qualityFactor,
    setQualityFactor: setQualityFactor,
    amplitude: amplitude,
    setAmplitude: setAmplitude,
  };

  return (
    <div>
      {
        <div className="app-container">
          <ComponentToPrint
            state={state}
            hideToPrint={hideToPrint}
            ref={componentRef}
          />
          {!hideToPrint ? (
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4">
                <div className="d-grid gap-2">
                  <Button
                    type="button"
                    class="btn"
                    onClick={() => setHideToPrint(!hideToPrint)}
                    variant="dark"
                  >
                    Salvar
                  </Button>
                </div>
              </div>
              <div class="col-4"></div>
            </div>
          ) : (
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4">
                <div className="d-grid gap-2">
                  <Button
                    type="button"
                    class="btn"
                    onClick={() => setHideToPrint(!hideToPrint)}
                    variant="dark"
                  >
                    Editar
                  </Button>
                </div>
              </div>
              <div class="col-4"></div>
            </div>
          )}
          <br></br>
          {hideToPrint ? (
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4">
                <div className="d-grid gap-2">
                  <ReactToPrint
                    trigger={() => (
                      <Button type="button" class="btn" variant="dark">
                        Imprimir
                      </Button>
                    )}
                    content={() => componentRef.current}
                  />
                </div>
              </div>
              <div class="col-4"></div>
            </div>
          ) : null}
        </div>
      }
    </div>
  );
};

export default App;
