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
        // maps email to credentials
        mapping(string => UniversityCredential) universityMap;
        mapping(string => JobCredential) jobMap;
        string email;
        string companyName;
        string universityName;
    }

    // public address mapped to university email (owner of email) 
    mapping(address => string) public accreditedUniversities;

    // public address mapped to firm email(owner of email)
    mapping(address => string) public registeredCompanies;
    
    // public address mapped to student which owns domain
    mapping(address => Person) public personMap;
    
    mapping(bytes32 => address) public personMap2;
    
    mapping(string => string) private emailToName;
    
    mapping(string => string) private nameToEmail;

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
        nameToEmail[_universityName] = _universityEmail;
    }

    function authorizeFirm(address _firmAddr, string _firmName, string _firmEmail) onlyOwner public
    {
        registeredCompanies[_firmAddr] = _firmEmail;
        emailToName[_firmEmail] = _firmName;
        nameToEmail[_firmName] = _firmEmail;
    }

    function identifyPerson(address _personAddr,string _personName, string _personEmail) onlyOwner public 
    {
        personMap[_personAddr].email = _personEmail;
        emailToName[_personEmail] = _personName;
        nameToEmail[_personName] = _personEmail;
        personMap2[keccak256(abi.encodePacked(_personName))] = _personAddr;
    }

    function getPersonAddr(string _personName) public view returns (address) {
        return personMap2[keccak256(abi.encodePacked(_personName))];
    }
    
    // UNIVERSITY INTERFACE
    function updateDegreeType(address _personAddr, string _degreeType) public {
        string storage universityEmail = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityEmail].degreeType = _degreeType;
        personMap[_personAddr].universityName = getNameFromEmail(universityEmail);
    }
    function updateCompleted(address _personAddr, bool _completed) public {
        string storage universityEmail = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityEmail].completed = _completed;
        personMap[_personAddr].universityName = getNameFromEmail(universityEmail);
    }
    function updateYearOfGraduation(address _personAddr, uint _yearOfGraduation) public {
        string storage universityEmail = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityEmail].yearOfGraduation = _yearOfGraduation;
        personMap[_personAddr].universityName = getNameFromEmail(universityEmail);
    }
    function updateFieldOfStudy(address _personAddr, string _fieldOfStudy) public  {
        string storage universityEmail = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityEmail].fieldOfStudy = _fieldOfStudy;
        personMap[_personAddr].universityName = getNameFromEmail(universityEmail);
    }
    function updateGPA(address _personAddr, uint _gpa) public {
        string storage universityEmail = accreditedUniversities[msg.sender];
        personMap[_personAddr].universityMap[universityEmail].gpa = _gpa;
        personMap[_personAddr].universityName = getNameFromEmail(universityEmail);
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
        string storage firmEmail = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmEmail].dateOfJoining = _dateOfJoining;
        personMap[_personAddr].companyName = getNameFromEmail(firmEmail);
    }

    function updateDesignation(address _personAddr, string _designation) public {
        string storage firmEmail = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmEmail].designation = _designation;
        personMap[_personAddr].companyName = getNameFromEmail(firmEmail);
    }

    function updateCTC(address _personAddr, uint _ctc) public {
        string storage firmEmail = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmEmail].CTC = _ctc;
        personMap[_personAddr].companyName = getNameFromEmail(firmEmail);
    }

    function updateDateOfRelieving(address _personAddr, string _dateOfRelieving) public {
        string storage firmEmail = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmEmail].dateOfRelieving = _dateOfRelieving;
        personMap[_personAddr].companyName = getNameFromEmail(firmEmail);
    }

    function updateEmployeeID(address _personAddr, string _employeeID) public {
        string storage firmEmail = registeredCompanies[msg.sender];
        personMap[_personAddr].jobMap[firmEmail].employeeID = _employeeID;
        personMap[_personAddr].companyName = getNameFromEmail(firmEmail);
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

    function getDegreeType(address _personAddr, string _universityEmail) public view returns (string) {
        return personMap[_personAddr].universityMap[_universityEmail].degreeType;
    }

    function getCompleted(address _personAddr, string _universityEmail) public view returns (bool) {
        return personMap[_personAddr].universityMap[_universityEmail].completed;
    }

    function getYearOfGraduation(address _personAddr, string _universityEmail) public view returns (uint) {
        return personMap[_personAddr].universityMap[_universityEmail].yearOfGraduation;
    }

    function getFieldOfStudy(address _personAddr, string _universityEmail) public view returns (string) {
        return personMap[_personAddr].universityMap[_universityEmail].fieldOfStudy;
    }

    function getGPA(address _personAddr, string _universityEmail) public view returns (uint) {
        return personMap[_personAddr].universityMap[_universityEmail].gpa;
    }
    
    function getDateOfJoining(address _personAddr, string _firmEmail) public view returns (string) {
        return personMap[_personAddr].jobMap[_firmEmail].dateOfJoining;
    }

    function getDesignation(address _personAddr, string _firmEmail) public view returns (string) {
        return personMap[_personAddr].jobMap[_firmEmail].designation;
    }
    
    function getCTC(address _personAddr, string _firmEmail) public view returns (uint) {
        return personMap[_personAddr].jobMap[_firmEmail].CTC;
    }
    
    function getDateOfRelieving(address _personAddr, string _firmEmail) public view returns (string) {
        return personMap[_personAddr].jobMap[_firmEmail].dateOfRelieving;
    }

    function getEmployeeID(address _personAddr, string _firmEmail) public view returns (string) {
        return personMap[_personAddr].jobMap[_firmEmail].employeeID;
    }
    
    function getNameFromEmail(string email) public view returns(string) {
        return emailToName[email];
    }

    function getEmailFromName(string name) public view returns(string) {
        return nameToEmail[name];    
    }
    
    function getSummary(address _personAddr) public view returns(string, string, string, uint, string, uint, string) {
        Person storage person = personMap[_personAddr];
        string storage email = person.email;
        return (
            getNameFromEmail(email),
            email,
            person.universityName,
            getYearOfGraduation(_personAddr, getEmailFromName(person.universityName)),
            getFieldOfStudy(_personAddr, getEmailFromName(person.universityName)),
            getGPA(_personAddr, getEmailFromName(person.universityName)),
            person.companyName
        );
    }
}