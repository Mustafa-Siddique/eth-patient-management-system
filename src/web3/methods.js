import Web3 from "web3";
import { contractABI } from "./contractABI";
import moment from "moment";

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
      "0x52241B0AFD92E0aD050136c15c1DBD13229EC054"
    //   "0x5e8B0C280B192682301D9dC1925e39AFdeD477aC"
      //   "0x9e0184c18dc9De85386688aCB554c6Bff9D0144A"
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

// Get HospitalId from contract fetch
export const getHospitalId = async (address) => {
  try {
    const contract = await getPMSContract();
    const hospitalId = await contract.methods.getHospitalId(address).call();
    return hospitalId;
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

// Get doctorId from contract fetch
export const getDoctorId = async (address) => {
    try {
        const contract = await getPMSContract();
        const doctorId = await contract.methods.getDoctorId(address).call();
        return doctorId;
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

// Get PatientInfo from contract fetch using Current Wallet
export const getPatientInfo = async (wallet) => {
  try {
    const contract = await getPMSContract();
    const accounts = await web3.eth.getAccounts();
    let newArr = [];
    const patient = await contract.methods
      .getPatientInfo(wallet)
      .call({ from: accounts[0] }, (err, res) => {
        // Convert hex to utf-8 and push to newArr
        newArr.push(web3.utils.hexToUtf8(res.patientName));
        newArr.push(res.age);
        newArr.push(web3.utils.hexToUtf8(res.gender));
        newArr.push(res.doctorId);
        newArr.push(res.wallet);
        newArr.push(res._medicalIds);
      });
    return newArr;
  } catch (err) {
    console.error(err);
  }
};

// Add patient to contract
export const addPatientToContract = async (name, age, gender, doctorId, patientWallet, diagnosis, prescription, notes) => {
    try {
        const contract = await getPMSContract();
        const accounts = await web3.eth.getAccounts();
        const nameHex = web3.utils.utf8ToHex(name);
        const genderHex = web3.utils.utf8ToHex(gender);
        const diagnosisHex = web3.utils.utf8ToHex(diagnosis);
        const prescriptionHex = web3.utils.utf8ToHex(prescription);
        const notesHex = web3.utils.utf8ToHex(notes);
        // console.log(nameHex, age, genderHex, doctorId, patientWallet, diagnosisHex, prescriptionHex, notesHex);
        const res = await contract.methods
            .addPatient(nameHex, age, genderHex, doctorId, patientWallet, diagnosisHex, prescriptionHex, notesHex)
            .send({ from: accounts[0] });
        return res;
    } catch (err) {
        console.error(err);
    }
}

// Get Medical Record using id from contract fetch
export const getMedicalRecord = async (id) => {
  try {
    const contract = await getPMSContract();
    const accounts = await web3.eth.getAccounts();
    let newArr = [];
    const medicalRecord = await contract.methods
      .getMedicalRecordInfo(id)
      .call({ from: accounts[0] }, (err, res) => {
        // Convert hex to utf-8 and push to newArr
        newArr.push(web3.utils.hexToUtf8(res.diagnosis));
        newArr.push(web3.utils.hexToUtf8(res.prescription));
        newArr.push(web3.utils.hexToUtf8(res.notes));
        // Convert timestamp to date and push to newArr
        newArr.push(moment.unix(res.timestamp).format('lll'));
      });
    return newArr;
  } catch (err) {
    console.error(err);
  }
}