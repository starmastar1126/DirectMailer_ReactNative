import React from 'react';
import StepIndicator from 'react-native-step-indicator';

const labels = ["TARGET PROSPECTS","CREATE YOUR OFFER","LAUNCH CAMPAIGN"];
const customStyles1 = {
    stepIndicatorSize: 30, currentStepIndicatorSize: 30, separatorStrokeWidth: 2, currentStepStrokeWidth: 3, stepStrokeWidth: 2,
    stepStrokeCurrentColor: '#009C01', stepStrokeFinishedColor: '#009C01', stepStrokeUnFinishedColor: '#009C01',
    separatorFinishedColor: '#009C01', separatorUnFinishedColor: '#009C01',
    stepIndicatorCurrentColor: '#009C01', stepIndicatorFinishedColor: '#FFFFFF', stepIndicatorUnFinishedColor: '#FFFFFF',
    stepIndicatorLabelFontSize: 13, currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#FFFFFF', stepIndicatorLabelFinishedColor: '#009C01', stepIndicatorLabelUnFinishedColor: '#009C01',
    labelColor: '#A0ACBC', labelSize: 10, currentStepLabelColor: '#A0ACBC'
}
const customStyles2 = {
  stepIndicatorSize: 30, currentStepIndicatorSize: 30, separatorStrokeWidth: 2, currentStepStrokeWidth: 3, stepStrokeWidth: 2,
  stepStrokeCurrentColor: '#009C01', stepStrokeFinishedColor: '#009C01', stepStrokeUnFinishedColor: '#009C01',
  separatorFinishedColor: '#009C01', separatorUnFinishedColor: '#009C01',
  stepIndicatorCurrentColor: '#009C01', stepIndicatorFinishedColor: '#009C01', stepIndicatorUnFinishedColor: '#FFFFFF',
  stepIndicatorLabelFontSize: 13, currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#FFFFFF', stepIndicatorLabelFinishedColor: '#FFFFFF', stepIndicatorLabelUnFinishedColor: '#009C01',
  labelColor: '#A0ACBC', labelSize: 10, currentStepLabelColor: '#A0ACBC'
}
const customStyles3 = {
  stepIndicatorSize: 30, currentStepIndicatorSize: 30, separatorStrokeWidth: 2, currentStepStrokeWidth: 3, stepStrokeWidth: 2,
  stepStrokeCurrentColor: '#009C01', stepStrokeFinishedColor: '#009C01', stepStrokeUnFinishedColor: '#009C01',
  separatorFinishedColor: '#009C01', separatorUnFinishedColor: '#009C01',
  stepIndicatorCurrentColor: '#009C01', stepIndicatorFinishedColor: '#009C01', stepIndicatorUnFinishedColor: '#009C01',
  stepIndicatorLabelFontSize: 13, currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#FFFFFF', stepIndicatorLabelFinishedColor: '#FFFFFF', stepIndicatorLabelUnFinishedColor: '#FFFFFF',
  labelColor: '#A0ACBC', labelSize: 10, currentStepLabelColor: '#A0ACBC'
}

class AthenaStepIndicator extends React.Component {
  render() {
    const { currentPosition } = this.props;    
    return ( 
      <StepIndicator
          stepCount={3}
          customStyles={currentPosition == 0 ? customStyles1 : currentPosition == 1 ? customStyles2 : customStyles3 }
          currentPosition={currentPosition}
          labels={labels}
      />
    );
  }
}
export default AthenaStepIndicator;
