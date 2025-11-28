// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BugReport {
    struct Report {
        address reporter;
        string description;
        uint256 timestamp;
    }

    Report[] public reports;

    event NewReport(address indexed reporter, uint256 indexed reportId);

    // No constructor params. Deployment requires zero input.
    constructor() {}

    // Add a new bug report
    function submitReport(string calldata description) external {
        require(bytes(description).length > 0, "Empty description");

        reports.push(Report({
            reporter: msg.sender,
            description: description,
            timestamp: block.timestamp
        }));

        emit NewReport(msg.sender, reports.length - 1);
    }

    // Get total number of reports
    function getReportCount() external view returns (uint256) {
        return reports.length;
    }
}
