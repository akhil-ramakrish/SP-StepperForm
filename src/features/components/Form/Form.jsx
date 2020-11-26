import React, { useState } from "react";
import "./Form.scss";
import Details from "../Details";
import DragnDrop from "../DragandDrop";
import { csv } from "d3";
import Data from "../../misc/data.csv";
import Submission from '../Submission';

const MainForm = (props) => {
	const [csvData, setCsvData] = useState();
	const [imageOutput,setImageOutput] = useState(null);

	const csvTrial = () => {
		csv(`${Data}`).then((data) => {
			setCsvData(data[0]);
			props.stepCountUpdate();
		});
	};


	const getImageInfo=(imageResponse)=>{
		setImageOutput(imageResponse)
	}
	switch (props.step) {
		case 1:
			return (
				<div className="btn-container">
					<button
						className={`btn btn-primary ${window.matchMedia("(max-width: 580px)").matches?'mb-3':null}`}
						onClick={() => props.stepCountUpdate()}
					>
						Add from Scratch
					</button>
					<button className="btn btn-success" onClick={() => csvTrial()}>
						Upload as CSV
					</button>
				</div>
			);
		case 2:
			return <Details updateStepCount={props.stepCountUpdate} 
			        data={csvData} storeDetails={props.getDetails}/>;
		case 3:
			return <DragnDrop storeImageInfo={getImageInfo} updateStepCount={props.stepCountUpdate}/>;
		case 4: return <Submission data={{'fields':props.details,'image':imageOutput}}/>
		default:
			return null;
	}
};

export default MainForm;
