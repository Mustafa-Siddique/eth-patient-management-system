import { useSelector } from "react-redux";
import Web3 from "web3";
import { contractABI } from "./contractABI";

const web3 = new Web3(window.ethereum);

// Get the contract instance
export const getContracts = async (abi, address) => {
  const contract = new web3.eth.Contract(abi, address);
  return contract;
};

export const getPMSContract = async () => {
  try {
    const contract = await getContracts(
      contractABI,
      "0x9e0184c18dc9De85386688aCB554c6Bff9D0144A"
    );
    return contract;
  } catch (err) {
    console.error(err);
  }
};

// getHospitalInfo from contract fetch
export const getHospitalInfo = async (id) => {
  try {
    const contract = await getPMSContract();
    const hospitalInfo = await contract.methods.getHospitalInfo(id).call();
    let newArr = [];
    // Convert hex to utf-8 and push to newArr
    newArr.push(web3.utils.hexToUtf8(hospitalInfo.hospitalAddress));
    newArr.push(web3.utils.hexToUtf8(hospitalInfo.hospitalContact));
    newArr.push(web3.utils.hexToUtf8(hospitalInfo.hospitalName));
    newArr.push(hospitalInfo.hospitalWallet);
    return newArr;
  } catch (err) {
    console.error(err);
  }
};

// Get hospitalIdCounter from contract fetch
export const getHospitalIdCounter = async () => {
  try {
    const contract = await getPMSContract();
    const hospitalId = await contract.methods.hospitalIdCounter().call();
    return hospitalId;
  } catch (err) {
    console.error(err);
  }
};

// Get user type
export const getUserType = async (address) => {
  try {
    const contract = await getPMSContract();
    const userType = await contract.methods.getUserType(address).call();
    return userType;
  } catch (err) {
    console.error(err);
  }
};

// Add hospital to contract
export const addHospital = async (
  hospitalName,
  hospitalAddress,
  hospitalContact,
  hospitalWallet
) => {
  try {
    const contract = await getPMSContract();
    const accounts = await web3.eth.getAccounts();
    const hospitalNameHex = web3.utils.utf8ToHex(hospitalName);
    const hospitalAddressHex = web3.utils.utf8ToHex(hospitalAddress);
    const hospitalContactHex = web3.utils.utf8ToHex(hospitalContact);
    const res = await contract.methods
      .addHospital(
        hospitalNameHex,
        hospitalAddressHex,
        hospitalContactHex,
        hospitalWallet
      )
      .send({ from: accounts[0] });
    return res;
  } catch (err) {
    console.error(err);
  }
};

// Get doctorInfo from contract fetch
export const getDoctorInfo = async (id) => {
  try {
    const contract = await getPMSContract();
    const doctor = await contract.methods.getDoctorInfo(id).call();
    let newArr = [];
    // Convert hex to utf-8 and push to newArr
    newArr.push(web3.utils.hexToUtf8(doctor.doctorName));
    newArr.push(doctor.hospitalId);
    newArr.push(doctor._wallet);
    return newArr;
  } catch (err) {
    console.error(err);
  }
};

// Get doctorIdCounter from contract fetch
export const getDoctorIdCounter = async () => {
  try {
    const contract = await getPMSContract();
    const doctorId = await contract.methods.doctorIdCounter().call();
    return doctorId;
  } catch (err) {
    console.error(err);
  }
};

// Add doctor to contract
export const addDoctor = async (doctorName, hospitalId, wallet) => {
  try {
    const contract = await getPMSContract();
    const accounts = await web3.eth.getAccounts();
    const doctorNameHex = web3.utils.utf8ToHex(doctorName);
    const res = await contract.methods
      .addDoctor(doctorNameHex, hospitalId, wallet)
      .send({ from: accounts[0] });
    return res;
  } catch (err) {
    console.error(err);
  }
};
