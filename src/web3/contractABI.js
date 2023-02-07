// Export Contract ABI for PMS contract
export const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "doctorName",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "hospitalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"name": "NewDoctorRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "hospitalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "hospitalName",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "hospitalWallet",
				"type": "address"
			}
		],
		"name": "NewHospitalRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "patientWallet",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			}
		],
		"name": "NewPatientRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "doctorName",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "hospitalId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hospitalName",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "hospitalAddress",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "hospitalContact",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "hospitalWallet",
				"type": "address"
			}
		],
		"name": "addHospital",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_diagnosis",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_prescription",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_notes",
				"type": "bytes32"
			}
		],
		"name": "addMedicalRecord",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_name",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_gender",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_doctorId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_patientWallet",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_diagnosis",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_prescription",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_notes",
				"type": "bytes32"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "doctorIdCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctorIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "doctorIdsForAddresses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctors",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "name",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "hospitalId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getDoctorId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			}
		],
		"name": "getDoctorInfo",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "doctorName",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "hospitalId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_wallet",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getHospitalId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "hospitalId",
				"type": "uint256"
			}
		],
		"name": "getHospitalInfo",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "hospitalName",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "hospitalAddress",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "hospitalContact",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "hospitalWallet",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patientWallet",
				"type": "address"
			}
		],
		"name": "getPatientInfo",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "patientName",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "gender",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getUserType",
		"outputs": [
			{
				"internalType": "enum UserType",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hospitalIdCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hospitalIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hospitalIdsForAddresses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hospitals",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "name",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_address",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "contact",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "medicalIdCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "patientIdCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "patientIdsForAddresses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "name",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "gender",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "patientWallet",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "enum UserType",
				"name": "_userType",
				"type": "uint8"
			}
		],
		"name": "setSuperuser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userTypes",
		"outputs": [
			{
				"internalType": "enum UserType",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]