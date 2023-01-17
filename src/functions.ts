import {
	createClient,
	configureChains,
	watchAccount,
	disconnect,
} from '@wagmi/core';
import { connect } from '@wagmi/core';
import { InjectedConnector } from '@wagmi/core/connectors/injected';
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { goerli } from '@wagmi/core/chains'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { prepareWriteContract } from '@wagmi/core'
import { writeContract } from '@wagmi/core'
import { ethers } from "ethers"
import { readContract } from '@wagmi/core'

const connector = new MetaMaskConnector({
  chains: [goerli],
})

// main wagmi configuration setup
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

window.onload= async function brcar () {
	const data = await readContract({
		address: '0xcF6eEe13aeeA52ECe57D2174b87c42FF70F0c153',
		abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"brojAuta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"carowner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cars","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"color","type":"string"},{"internalType":"uint256","name":"year","type":"uint256"},{"internalType":"bool","name":"registered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_color","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_year","type":"uint256"},{"internalType":"bool","name":"reg","type":"bool"}],"name":"createCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_color","type":"string"}],"name":"menjajBoju","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"proveriAuto","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"registerCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
		functionName: 'brojAuta',
	  })
	
	  console.log("Broj auta test  " + data); 
	
	  document.getElementById("pisi").innerHTML="Total number of cars: " + data;
	
	}

	export async function createcar () {

	try {
	document.getElementById("creating").innerHTML="Creating...";
	document.getElementById("enabled").style.backgroundColor= '#B7B7B7';
	document.getElementById("enabled").disabled = true;
	
	let registracija;

	if (document.getElementById("myCheck").checked){
			registracija = true;
	}
	
	else {
			registracija = false;
	}

	console.log(registracija);

	let ime=document.getElementById("imeauta").value;
	console.log(ime);
					
	let boja=document.getElementById("bojaauta").value;
	console.log(boja);

	let godina=document.getElementById("godinaauta").value;
	console.log(godina);

	const config  = await prepareWriteContract({
		address: '0xcF6eEe13aeeA52ECe57D2174b87c42FF70F0c153',
		abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"brojAuta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"carowner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cars","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"color","type":"string"},{"internalType":"uint256","name":"year","type":"uint256"},{"internalType":"bool","name":"registered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_color","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_year","type":"uint256"},{"internalType":"bool","name":"reg","type":"bool"}],"name":"createCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_color","type":"string"}],"name":"menjajBoju","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"proveriAuto","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"registerCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
		functionName: 'createCar',
		args:[ime,boja,godina, registracija],
	
		overrides: {
		value: ethers.utils.parseEther('0.01'),
				},
	})
		
		const { hash, data, error, write } = await writeContract(config);
		console.log(hash);
		
		var frm = document.getElementById("forma");
		frm.reset();
	
		document.getElementById("enabled").style.backgroundColor= '#000000';
		document.getElementById("creating").innerHTML="Successfully created new car";
		document.getElementById("creating").style.color = '#1C872D';
		document.getElementById("enabled").style.backgroundColor= '#000000';
		document.getElementById("enabled").disabled = false;

		const novauto = await readContract({
			address: '0xcF6eEe13aeeA52ECe57D2174b87c42FF70F0c153',
			abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"brojAuta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"carowner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cars","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"color","type":"string"},{"internalType":"uint256","name":"year","type":"uint256"},{"internalType":"bool","name":"registered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_color","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_year","type":"uint256"},{"internalType":"bool","name":"reg","type":"bool"}],"name":"createCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_color","type":"string"}],"name":"menjajBoju","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"proveriAuto","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"registerCar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
			functionName: 'brojAuta',
		})
		
			console.log(1+parseInt(novauto));
		
			let noviiznos = parseInt(novauto)+1;
		
			console.log("Novi broj auta test: " + noviiznos);
		
			document.getElementById("pisi").innerHTML="Total number of cars: " + noviiznos;

				} catch (error) {

			document.getElementById("creating").innerHTML="Error creating new car";
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

export function create(element: HTMLButtonElement) {
	element.addEventListener('click', () => createcar());
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
	createElement:HTMLInputElement
	
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
			addressElement.innerHTML = `${address ? '<h4>Your public address is:<br><h4>' + address : '<h4>Connect your wallet first.<h4>'}`;
		}
	);
}