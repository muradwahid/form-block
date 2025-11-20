import { useState } from "@wordpress/element";
import React from 'react'

const BForm = ({ children, attributes, isFrontend=false }) => {
	const { form, button, termsConditions, message } = attributes;
	const { navigation } = button;

	const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
	const [showErrorMessage, setShowErrorMessage] = React.useState(false);


	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		let errors = [];
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		const fields = Object.keys(data);
		const getErrorEl = (name) => {
			const el = form.querySelector(`.b-blocks-input-field-validation-${name}`);
			if (!el) return;
			const isValid = JSON.parse(el.dataset.iserror);
			if (isValid) {
				el.classList.add('b-blocks-input-field-error-container');
				return name;
			}
		}

		fields.forEach(field => {
			const error = getErrorEl(field);
			error && errors.push(error);
		})

	}
	// console.log("form", attributes, " : ", form);
	
	return <div className="b-blocks-b-form-wrapper">
		<form onSubmit={handleSubmit} className="b-blocks-b-form-container">
				{children}
			{(termsConditions.show && form.formType === 'register')&& (
				<div className="b-blocks-b-form-termsConditionWrapper">
					<label className="b-blocks-b-form-checkbox-container">
						<input type="checkbox" required />
						<span className="b-blocks-b-form-checkmark"></span>
					</label>
					{/* <input type="checkbox" name="checkbox" required /> */}
					<label className="b-blocks-b-blocks-termsConditionWrapper-first">{termsConditions.label.first}</label>
					<a className="b-blocks-b-blocks-termsConditionWrapper-link" href={termsConditions.url}>{termsConditions.label.second}</a>
				</div>
			)}
			<div className="b-blocks-form-button-wrapper">
				<button className='b-blocks-form-submitBtn' type="submit">{button.button.text}</button>
				{(navigation.isNavigation &&(navigation.first.text || navigation.second.text)) && <div className="b-blocks-form-button-navigation-wrapper"><p className="b-blocks-form-button-navigation-text">{navigation.first.text}</p> <a className="b-blocks-form-button-navigation-link" href={navigation.second.url}>{navigation.second.text}</a> </div>}
			</div>
		</form>

		{(showSuccessMessage && message.success.successFulRegistration) && <div className="b-blocks-b-form-success-message">
				<span>{message.success.successFulRegistration}</span>
		</div>}
		
		{(showErrorMessage && message.error.default) && <div className="b-blocks-b-form-error-message">
				<span>{message.error.default}</span>
			</div>}
	</div>
}
export default BForm;