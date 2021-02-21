import { useState } from "react";
import MadlibsForm from "./MadlibsForm";
import Story from "./Story";

const Madlibs = () => {
	/* Set up your Story State */
	const [story, setStory] = useState({
		noun1: "",
		noun2: "",
		adjective: "",
		color: "",
	});
	/* Initialize state isShown to hide/show elements */
	const [isShown, setIsShown] = useState(false);

	const addStory = (story) => {
		/* Add your story */
		let newStory = { ...story };
		setStory(newStory);
		setIsShown(true);
	};
	const resetMadlibs = () => {
		/* Reset Madlibs */
		setIsShown(false);
	};
	return (
		<div>
			<h1>Madlibs!!!</h1>
			<MadlibsForm
				addStory={addStory}
				isShown={isShown ? "Story-hidden" : "Story-shown"}
			/>
			<Story
				isShown={isShown ? "Story-shown" : "Story-hidden"}
				noun1={story.noun1}
				noun2={story.noun2}
				adjective={story.adjective}
				color={story.color}
				resetMadlibs={resetMadlibs}
			/>
		</div>
	);
};

export default Madlibs;
