import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoListDetails = (props) => {
	const [line, setLine] =useState(false);

	const cutIt=() =>{
		setLine("true");
	}
	
	return (
		<>
			<div className="todo_style">
				<span onClick={cutIt}>
					<DeleteIcon className="deleteIcon" />
				</span>
				<span onClick={() => {props.onSelect(props.id)}}>
					<DeleteForeverIcon className="deleteIcon" />
				</span>
				<li style={{textDecoration:line?"line-through":"none"}}>{props.text}</li>
			</div>
		</>
		);
}

export default ToDoListDetails;
