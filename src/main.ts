// styles
import './style.css';

// functions
import {
	configureMainWagmi,
	setupConnect,
	watchAccountSetup,
	setupDisconnect,
	create,
} from './functions';

// HTML part
document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `

<div>
		<button id='connectBtn'>LOGIN</button>
		<button id='disconnectBtn'>LOGOUT</button>
	<div id="p">
		<div id='address'></div>
</div>
<div id="container">
<form id="forma" onsubmit="return false">
	 <div id="polje">
		   <label for="imes">NAME:</label>
		   <input id="imeauta" type="text" value="" onchange="(this.value)"/><br>
		  
		   <label for="color">COLOR:</label>
		   <input id="bojaauta" type="text" value="" onchange="(this.value)"/><br>
		  
		   <label for="number">YEAR:</label>
		   <input id="godinaauta" type="number" value="" onchange="(this.value)"/><br>
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
	<p id="pisi">Total number of cars is: loading.... </p>
</div> 
  
`;

// JS part
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
create(document.querySelector<HTMLButtonElement>('#enabled')!);