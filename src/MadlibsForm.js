// import { useState } from "react";
import { useFormik } from "formik";
import "./MadlibsForm.css";

const validate = (values) => {
	const errors = {};
	if (!values.noun1) {
		errors.noun1 = "Noun1 Field Required";
	}
	if (!values.noun2) {
		errors.noun2 = "Noun2 Field Required";
	}
	if (!values.adjective) {
		errors.adjective = "Adjective Field Required";
	}
	if (!values.color) {
		errors.color = "Color Field Required";
	}
	return errors;
};
const MadlibsForm = ({ addStory, isShown }) => {
	const formik = useFormik({
		initialValues: {
			noun1: "",
			noun2: "",
			adjective: "",
			color: "",
		},
		validate,
		onSubmit: (values) => {
			addStory(values);
			formik.resetForm();
			validate(values);
		},
	});
	return (
		<div className={isShown}>
			<form onSubmit={formik.handleSubmit}>
				<input
					className="MadlibsForm"
					type="text"
					placeholder="noun1"
					name="noun1"
					value={formik.values.noun1}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{formik.touched.noun1 && formik.errors.noun1 ? (
					<div className="MadlibsForm-error">{formik.errors.noun1}</div>
				) : null}
				<br />
				<input
					className="MadlibsForm"
					type="text"
					placeholder="noun2"
					name="noun2"
					value={formik.values.noun2}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{formik.touched.firstName && formik.errors.noun2 ? (
					<div className="MadlibsForm-error">{formik.errors.noun2}</div>
				) : null}
				<br />
				<input
					className="MadlibsForm"
					type="text"
					placeholder="adjective"
					name="adjective"
					value={formik.values.adjective}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{formik.touched.firstName && formik.errors.adjective ? (
					<div className="MadlibsForm-error">{formik.errors.adjective}</div>
				) : null}
				<br />
				<input
					className="MadlibsForm"
					type="text"
					placeholder="color"
					name="color"
					value={formik.values.color}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				{formik.touched.firstName && formik.errors.color ? (
					<div className="MadlibsForm-error">{formik.errors.color}</div>
				) : null}
				<br />
				<button type="submit">Get Story</button>
			</form>
		</div>
	);
};

export default MadlibsForm;
