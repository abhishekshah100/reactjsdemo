import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ToDoListDetails from './ToDoListDetails';

const ToDoList = () => {

	const [item, setItem]= useState("");
	
	const [listItem, setListItem] =useState([]);

	const inputEvent = (event) => {
		setItem(event.target.value)
	}

	const listOfItems = () =>{
		if(item.length !== 0)
		{
			setListItem((prevValue)=>{
			return [...prevValue, item];	
			})
		}

		setItem("");
	}

	const deleteItems = (id) => {
		console.log("Deleted");

		setListItem((preValue) => {
			return preValue.filter((arrElem, index) => {
				return index !== id;
			});
		});
	};

	return (
	<>
		<div className="main_div">
			<div className="center_div">
				<br/>
				<h1>To Do List </h1>
				<br/>
				<input className="toDoListInput" type="name" value={item} placeholder="Add an Item" name="todolist" onChange={inputEvent}/>
				<Button className="newBtn" onClick={listOfItems}>
				<AddIcon />
				</Button>
				<br/>
				<ol>
					{listItem.map((value, index)=>{
						return <ToDoListDetails text={value} key={index} id={index} onSelect={deleteItems}/>
					})}
				</ol>
			</div>
		</div>
	</>
	)
}

export default ToDoList;