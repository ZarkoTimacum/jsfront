import {
	createClient,
	configureChains,
	watchAccount,
	disconnect,
} from '@wagmi/core';
import { connect } from '@wagmi/core';
import { InjectedConnector } from '@wagmi/core/connectors/injected';
import { alchemyProvider } from '@wagmi/core/providers/alchemy';
import { goerli } from '@wagmi/core/chains';
import { prepareWriteContract } from '@wagmi/core';
import { writeContract } from '@wagmi/core';
import { ethers } from "ethers";
import { readContract } from '@wagmi/core';
import { waitForTransaction } from '@wagmi/core';
import ABI  from './abi.json';

// main wagmi configuration setup.
export function configureMainWagmi() {
	const { provider, webSocketProvider } = configureChains(
		[goerli],
		[alchemyProvider({ apiKey: 'RGl6ALYLxiuktwSl7e0LbzuNwWM8rZPB' })], 
	);
	const client = createClient({
		autoConnect: true,
		provider,
		webSocketProvider,
	});
}

window.onload= async function numberCars () {
	const data = await readContract({
		address: '0x7B47Cc733F49A7aF3fF4885579FbAa302E8d84ca',
		abi: ABI,
		functionName: 'brojAuta',
	  })
	  console.log("Number of car test  " + data); 
	
	  document.getElementById("write").innerHTML="Total number of cars: " + data;
	}

	export async function createCar () {
	
	try {
	document.getElementById("creating").innerHTML="Creating...";
	document.getElementById("enabled").style.backgroundColor= '#B7B7B7';
	document.getElementById("enabled").disabled = true;
	
	let registered;

	if (document.getElementById("myCheck").checked){
			registered = true;
	}
	else {
			registered = false;
	}
	console.log(registered);

	let Name=document.getElementById("nameCar").value;
	console.log(Name);
					
	let Color=document.getElementById("colorCar").value;
	console.log(Color);

	let Year=document.getElementById("yearCar").value;
	console.log(Year);

	const config  = await prepareWriteContract({
		address: '0x7B47Cc733F49A7aF3fF4885579FbAa302E8d84ca',
		abi: ABI,
		functionName: 'createCar',
		args:[Color, Name, Year, registered],
		overrides: {
		value: ethers.utils.parseEther('0.01'),
				},
	})
		const { hash } = await writeContract(config);
		console.log(hash);
		
		const hashTransaction = await waitForTransaction({
			hash
		  })
	
		  if(hashTransaction) {
		
		document.getElementById("enabled").style.backgroundColor= '#000000';
		document.getElementById("creating").innerHTML="Successfully created new car";
		document.getElementById("creating").style.color = '#1C872D';
		document.getElementById("enabled").style.backgroundColor= '#000000';
		document.getElementById("enabled").disabled = false;

		const newCar = await readContract({
			address: '0x7B47Cc733F49A7aF3fF4885579FbAa302E8d84ca',
			abi: ABI,
			functionName: 'brojAuta',
		})
		document.getElementById("write").innerHTML="Total number of cars is: " + newCar;
	}
				} catch (error) {
			document.getElementById("creating").innerHTML="Error creating new car!";
			document.getElementById("creating").style.color = '#FF0000';
			document.getElementById("enabled").style.color = '#FFFFFF';
			document.getElementById("enabled").disabled = false;
			document.getElementById("enabled").style.backgroundColor= '#000000';
				}
			}
		
export function setupConnect(element: HTMLButtonElement) {
	element.addEventListener('click', () => connectWallet());
}
export function setupDisconnect(element: HTMLButtonElement) {
	element.addEventListener('click', () => disconnect());
}
export function Create(element: HTMLButtonElement) {
	element.addEventListener('click', () => createCar());
}
export async function connectWallet() {
	try {
		const result = await connect({
			connector: new InjectedConnector(),
		});
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
	}
}
export function watchAccountSetup(
	connectElement: HTMLButtonElement,
	disconnectElement: HTMLButtonElement,
	addressElement: HTMLDivElement,
	enabledcreate: HTMLButtonElement,
	disabledcreate: HTMLButtonElement,
	createElement: HTMLInputElement
) {
	const unwatch = watchAccount(
		({ address, isConnected }) => {
		
			if (isConnected) {
				connectElement.style.display = 'none';
				disconnectElement.style.display = 'block';

				enabledcreate.style.display = 'block';
				disabledcreate.style.display = 'none';
			} else {
				connectElement.style.display = 'block';
				disconnectElement.style.display = 'none';

				enabledcreate.style.display = 'none';
				disabledcreate.style.display = 'block';
			}
			addressElement.innerHTML = `${address ? '<h4>Your public address is: <br>' + address : '<h4>Connect your wallet first.<h4>'}`;
		}
	);
}