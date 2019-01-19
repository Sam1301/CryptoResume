pragma solidity ^0.4.25;

contract CredentialStore {
    struct UniversityCredential {
        string degreeType;
        bool completed;
        uint yearOfGraduation;
        string fieldOfStudy;
        uint gpa;
    }

    struct JobCredential {
        string dateOfJoining;
        string designation;
        uint CTC;
        string dateOfRelieving;
        string employeeID;
    }

    struct Person {
        // maps names to credentials
        mapping(string => UniversityCredential) universityMap;
        mapping(string => JobCredential) jobMap;
        string email;
    }

    // public address mapped to university name (owner of name) 
    mapping(address => string) public accreditedUniversities;

    // public address mapped to firm name(owner of name)
    mapping(address => string) public registeredCompanies;
    
    // public address mapped to student which owns domain
    mapping(address => Person) public personMap;
    
    mapping(bytes32 => address) public personMap2;
    
    mapping(string => string) private emailToName;
    
    // access credentials with this procedure:
    // credential = contract.studentMap[studentAddr].universityMap[universityName]

    address public owner;

    constructor () public {
        owner = msg.sender;
    }
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    
    // OWNER INTERFACE
    function authorizeUniversity(address _universityAddr, string _universityName, string _universityEmail) onlyOwner public 
    {
        accreditedUniversities[_universityAddr] = _universityEmail;
        emailToName[_universityEmail] = _universityName;
        
    }

    function authorizeFirm(address _firmAddr, string _firmName, string _firmEmail) onlyOwner public
    {
        registeredCompanies[_firmAddr] = _firmEmail;
        emailToName[_firmEmail] = _firmName;
    }

    function identifyPerson(address _personAddr,string _personName, string _personEmail) onlyOwner public 
    {
        personMap[_personAddr].email = _personEmail;
        emailToName[_personEmail] = _personName;
        personMap2[keccak256(abi.encodePacked(_personName))] = _personAddr;
    }

    function getPersonAddr(string _personName) public view returns (address) {
        return personMap2[keccak256(abi.encodePacked(_personName))];
    }
    
    // UNIVERSITY INTERFACE
    function updateDegreeType(address _personAddr, string _degreeType) public {
        string storage universityName = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityName].degreeType = _degreeType;
    }
    function updateCompleted(address _personAddr, bool _completed) public {
        string storage universityName = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityName].completed = _completed;
    }
    function updateYearOfGraduation(address _personAddr, uint _yearOfGraduation) public {
        string storage universityName = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityName].yearOfGraduation = _yearOfGraduation;
    }
    function updateFieldOfStudy(address _personAddr, string _fieldOfStudy) public  {
        string storage universityName = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityName].fieldOfStudy = _fieldOfStudy;
    }
    function updateGPA(address _personAddr, uint _gpa) public {
        string storage universityName = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityName].gpa = _gpa;
    }
    
    function verifyAllUniversity(address _personAddr, string _degreeType, bool _completed, uint _yearOfGraduation, string _fieldOfStudy, uint _gpa) public {
        updateDegreeType(_personAddr, _degreeType);
        updateCompleted(_personAddr, _completed);
        updateYearOfGraduation(_personAddr, _yearOfGraduation);
        updateFieldOfStudy(_personAddr, _fieldOfStudy);
        updateGPA(_personAddr, _gpa);
    }

     // COMPANY INTERFACE
    function updateDateOfJoining(address _personAddr, string _dateOfJoining) public {
        string storage firmName = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmName].dateOfJoining = _dateOfJoining;
    }

    function updateDesignation(address _personAddr, string _designation) public {
        string storage firmName = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmName].designation = _designation;
    }

    function updateCTC(address _personAddr, uint _ctc) public {
        string storage firmName = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmName].CTC = _ctc;
    }

    function updateDateOfRelieving(address _personAddr, string _dateOfRelieving) public {
        string storage firmName = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmName].dateOfRelieving = _dateOfRelieving;
    }

    function updateEmployeeID(address _personAddr, string _employeeID) public {
        string storage firmName = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmName].employeeID = _employeeID;
    }

    function verifyAllCompany(address _personAddr, string _dateOfJoining, string _designation, uint _ctc, string _dateOfRelieving, string _employeeID) public {
        updateDateOfJoining(_personAddr, _dateOfJoining);
        updateDesignation(_personAddr, _designation);
        updateCTC(_personAddr, _ctc);
        updateDateOfRelieving(_personAddr, _dateOfRelieving);
        updateEmployeeID(_personAddr, _employeeID);
    }
    
    // GETTERS
    function getName(address _personAddr) public view returns (string) {
        return emailToName[personMap[_personAddr].email];
    }

    function getDegreeType(address _personAddr, string _universityName) public view returns (string) {
        return personMap[_personAddr].universityMap[_universityName].degreeType;
    }

    function getCompleted(address _personAddr, string _universityName) public view returns (bool) {
        return personMap[_personAddr].universityMap[_universityName].completed;
    }

    function getYearOfGraduation(address _personAddr, string _universityName) public view returns (uint) {
        return personMap[_personAddr].universityMap[_universityName].yearOfGraduation;
    }

    function getFieldOfStudy(address _personAddr, string _universityName) public view returns (string) {
        return personMap[_personAddr].universityMap[_universityName].fieldOfStudy;
    }

    function getGPA(address _personAddr, string _universityName) public view returns (uint) {
        return personMap[_personAddr].universityMap[_universityName].gpa;
    }
    
    function getDateOfJoining(address _personAddr, string _firmName) public view returns (string) {
        return personMap[_personAddr].jobMap[_firmName].dateOfJoining;
    }

    function getDesignation(address _personAddr, string _firmName) public view returns (string) {
        return personMap[_personAddr].jobMap[_firmName].designation;
    }
    
    function getCTC(address _personAddr, string _firmName) public view returns (uint) {
        return personMap[_personAddr].jobMap[_firmName].CTC;
    }
    
    function getDateOfRelieving(address _personAddr, string _firmName) public view returns (string) {
        return personMap[_personAddr].jobMap[_firmName].dateOfRelieving;
    }

    function getEmployeeID(address _personAddr, string _firmName) public view returns (string) {
        return personMap[_personAddr].jobMap[_firmName].employeeID;
    }
    
    function getNameFromEmail(string email) public view returns(string) {
        return emailToName[email];
    }
}