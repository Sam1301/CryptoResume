pragma solidity ^0.4.17;

contract ResumeFactory {
    mapping(address => bool) public universities;
    mapping(address => Resume) public userContractAddresses;
    address[] resumes;
    
    function createResume() public {
        Resume c= new Resume();
        resumes.push(c);
        userContractAddresses[msg.sender] = c;
    }
    
    function getResumes() public view returns(address[]) {
        return resumes;
    }
    
    function addUniversity() public {
        universities[msg.sender] = true;
    }
    
    function verify(address user, uint marks) public {
        require(universities[msg.sender]); // valid university
        userContractAddresses[user].validate(marks);
    }
}
contract Resume {
    uint public marks;
    bool public validated;
    
    function validate(uint cgpa) public {
        marks = cgpa;
        validated = true;
    }
    
    function getMarks() public view returns (uint) {
        require(validated);
        return marks;
    }
}