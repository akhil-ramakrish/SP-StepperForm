import React, { useState, useEffect } from "react";
import "../../App.scss";
import Form from "../components/Form/Form";

const StepperForm = (props)=>{
    
	const [step1, setStep1] = useState("");
	const [step2, setStep2] = useState("");
	const [step3, setStep3] = useState("");

	useEffect(() => {
		if (props.stepCount === 1) {
			setStep1("step-active");
		} else if (props.stepCount === 2) {
			setStep2("step-active");
			setStep1("step-success");
		} else if (props.stepCount === 3) {
			setStep3("step-active");
			setStep2("step-success");
		} else {
			setStep3("step-success");
		}
	}, [props.stepCount]);


	return (
		<div className="App">
			<ul className="steps">
				<li className={`step ${step1}`}>
					<div className="step-content">
						<span className="step-circle">1</span>
						<span className="step-text">Step 1</span>
					</div>
				</li>
				<li className={`step ${step2}`}>
					<div className="step-content">
						<span className="step-circle">2</span>
						<span className="step-text">Step 2</span>
					</div>
				</li>
				<li className={`step ${step3}`}>
					<div className="step-content">
						<span className="step-circle">3</span>
						<span className="step-text">Step 3</span>
					</div>
				</li>
			</ul>
			<div className="form-container">
				<Form 
				stepCountUpdate={props.updateStepCount} 
				step={props.stepCount} 
				getDetails={props.getDetails}
				details={props.details}   
				/>
				
			</div>
		</div>
	);
}

export default StepperForm;