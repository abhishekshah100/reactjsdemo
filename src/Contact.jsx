import React, {useState} from 'react';

const Contact = () => {
	const [data, setData] =useState({
		fullname: "",
		phone: "",
		email: "",
		message:""
	});

const InputEvent = (event) => {
	const {name, value} = event.target;

	setData((preVal) =>{
		return {
			...preVal,
			[name]: value,
		};
	}); 
};

const formSubmit = (e) => {
	e.preventDefault();
	alert(`My Name is ${data.fullname}. My Phone Number is ${data.phone}. My Email is ${data.email}. Your Message is ${data.message}`);
};
  return (
    <>
    <div className="my-5">
    	<h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
    	<div className="row">
    		<div className="col-md-6 col-10 mx-auto">
    			<form onSubmit={formSubmit} >
    				<div className="mb-3">
					  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
					  <input type="name" name="fullname" class="form-control" value={data.fullname} id="exampleFormControlInput1" placeholder="Enter Your Full Name" onChange={InputEvent} />
					</div>
					<div className="mb-3">
					  <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
					  <input type="number" class="form-control" name="phone" value={data.phone} id="exampleFormControlInput1" placeholder="Enter Your Phone Number" onChange={InputEvent} />
					</div>
					<div className="mb-3">
					  <label for="exampleFormControlInput1" className="form-label">Email Address</label>
					  <input type="email" class="form-control" name="email" value={data.email} id="exampleFormControlInput1" placeholder="Enter Your Email Address" onChange={InputEvent} />
					</div>
					<div className="mb-3">
					  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
					  <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3" placeholder="Your Message" onChange={InputEvent}>{data.msg}</textarea>
					</div>
					<div className="mb-3">
					  <button type="submit" class="btn btn-outline-success">Submit</button>
					</div>
    			</form>
    		</div>
    	</div>
    </div>
    </>
    )
}

export default Contact;
