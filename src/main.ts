// styles
import './style.css';

// functions
import {
	configureMainWagmi,
	setupConnect,
	watchAccountSetup,
	setupDisconnect,
	Create
} from './functions';

// HTML part
document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
<div id="main">
		<button id='connectBtn'>LOGIN</button>
		<button id='disconnectBtn'>LOGOUT</button>
		<div id='address'></div>
<div id="container">
<form id="form" onsubmit="return false">
	 <div id="field">
		   	<label for="Name">NAME:</label>
		   	<input id="nameOfCar" type="text" maxlength="20" onchange="(this.value)"/><br>
		  
		   	<label for="Color">COLOR:</label>
		   	<input id="colorOfCar" type="text" maxlength="10" onchange="(this.value)"/><br>
		  
		   	<label for="Number">YEAR:</label>
		   	<input id="yearOfCar" type="number" min="1950" max="2024" onchange="(this.value)"/><br>
	  </div>   
			<div id="checkdiv">
						REGISTERED: <br> <input type="checkbox"  id="myCheck"/>
						<button id='enabled'>CREATE CAR</button> 
						<button id='disabled'>CREATE CAR</button> 
			</div>
				<div id="creating">
				</div>
		</form>
	</div>
	<p id="write">Total number of cars is: loading.... </p>
</div> 
  </div>
`;

// JavaScript part
configureMainWagmi();
watchAccountSetup(
	document.querySelector<HTMLButtonElement>('#connectBtn')!,
	document.querySelector<HTMLButtonElement>('#disconnectBtn')!,
	document.querySelector<HTMLDivElement>('#address')!,
	document.querySelector<HTMLButtonElement>('#enabled')!,
	document.querySelector<HTMLButtonElement>('#disabled')!,
	document.querySelector<HTMLInputElement>('#myChecked')!,
);
setupConnect(document.querySelector<HTMLButtonElement>('#connectBtn')!);
setupDisconnect(document.querySelector<HTMLButtonElement>('#disconnectBtn')!);
Create(document.querySelector<HTMLButtonElement>('#enabled')!);