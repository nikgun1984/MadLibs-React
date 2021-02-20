import { useState } from "react";

const MadlibsForm = () => {
	const [formData, setFormData] = useState({
		noun1: "",
		noun2: "",
		adjective: "",
		color: "",
	});
	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};
	return (
		<div>
			<form>
				<input
					type="text"
					placeholder="noun1"
					name="noun1"
					value={formData.noun1}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="nount2"
					name="noun2"
					value={formData.noun2}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="adjective"
					name="adjective"
					value={formData.adjective}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="color"
					name="color"
					value={formData.color}
					onChange={handleChange}
				/>
				<button>Get Story</button>
			</form>
		</div>
	);
};

export default MadlibsForm;
