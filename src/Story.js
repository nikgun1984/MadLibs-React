import "./Story.css";

const Story = (props) => {
	/* Your story and appropriate props passed to the function
		props: isShown, color, noun1,noun2,adjective,resetMadlibs
	*/
	return (
		<div className={props.isShown}>
			<p>{`There was a ${props.color} ${props.noun1} who loved a ${props.adjective} ${props.noun2}`}</p>
			<button
				className={`button ${props.isShown ? "Story-shown" : "Story-hidden"}`}
				onClick={props.resetMadlibs}
			>
				Restart
			</button>
		</div>
	);
};

export default Story;
