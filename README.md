# On-Chain Incident Report System

**Contract Address:** `0x47FcC51B4f3c1cB72B666637d634b459EA581c72`  
**Network:** Flare Coston2 Testnet  
**Explorer:** [View Contract](https://coston2-explorer.flare.network/address/0x47FcC51B4f3c1cB72B666637d634b459EA581c72)

## Description

The On-Chain Incident Report System is a decentralized application built on the Flare Network that enables transparent, immutable, and time-stamped incident reporting. This smart contract-based solution provides a secure platform for users to submit detailed reports that are permanently recorded on the blockchain, creating an auditable trail of events.

The system leverages blockchain technology to ensure data integrity, prevent tampering, and provide cryptographic proof of when reports were submitted. Each report is associated with the reporter's wallet address and includes a precise timestamp, making it ideal for use cases requiring verifiable, time-sensitive documentation.

## Features

- **Immutable Report Storage**: All reports are permanently stored on the Flare blockchain, ensuring data cannot be altered or deleted
- **Wallet-Based Authentication**: Reports are automatically linked to the submitter's wallet address, providing accountability and authenticity
- **Timestamp Verification**: Each report includes a blockchain-verified timestamp for precise chronological tracking
- **Sequential Report IDs**: Reports are assigned unique, incrementing IDs for easy reference and retrieval
- **Event Emission**: Smart contract events enable real-time monitoring and indexing of new reports
- **Public Accessibility**: Anyone can query the total number of reports and retrieve individual report details
- **Gas-Efficient Design**: Optimized contract design minimizes transaction costs for users
- **Cross-Platform Integration**: Compatible with Web3 wallets and can be integrated into various applications

## How It Solves

### The Problem

Traditional incident reporting systems face several critical challenges:

1. **Data Tampering**: Centralized databases can be modified or deleted, compromising evidence integrity
2. **Trust Issues**: Users must trust intermediaries to maintain accurate records
3. **Lack of Transparency**: Closed systems prevent independent verification of reports
4. **Time Disputes**: Timestamp manipulation in centralized systems can invalidate evidence
5. **Single Point of Failure**: Centralized servers are vulnerable to outages, attacks, or data loss
6. **Delayed Access**: Bureaucratic processes can slow down report retrieval and verification

### The Solution

This blockchain-based system addresses these challenges through:

**Immutable Audit Trail**: Once a report is submitted to the blockchain, it becomes part of the permanent ledger. The cryptographic nature of blockchain technology makes it virtually impossible to alter historical records, ensuring evidence remains intact for legal, compliance, or investigative purposes.

**Decentralized Trust**: By removing intermediaries, the system eliminates the need to trust a single entity. The blockchain itself serves as the trusted authority, with consensus mechanisms ensuring data validity.

**Complete Transparency**: All reports are publicly accessible, allowing stakeholders to independently verify submissions. This transparency is crucial for accountability in corporate governance, regulatory compliance, and public safety scenarios.

**Cryptographic Timestamps**: Blockchain timestamps are tamper-proof and verifiable by anyone, providing indisputable proof of when an incident was reported. This is particularly valuable in legal disputes or insurance claims.

**Resilient Infrastructure**: The distributed nature of blockchain ensures the system remains operational even if individual nodes fail, providing superior reliability compared to centralized solutions.

**Instant Verification**: Reports can be retrieved and verified in real-time without waiting for administrative approval, accelerating investigation and response processes.

### Use Cases

- **Corporate Compliance**: Document workplace incidents, safety violations, or ethics concerns with verifiable timestamps
- **Insurance Claims**: Create tamper-proof records of accidents or property damage for claim verification
- **Supply Chain Management**: Track and report quality issues, delays, or damages throughout the logistics chain
- **Public Safety**: Enable citizens to report incidents with guaranteed data integrity for law enforcement
- **Academic Integrity**: Record plagiarism or misconduct reports with transparent, unchangeable evidence
- **Healthcare Incidents**: Document adverse events or near-misses with HIPAA-compliant wallet addresses
- **Environmental Monitoring**: Track and timestamp pollution incidents or environmental violations
- **Whistleblower Protection**: Provide anonymous yet verifiable channels for reporting organizational wrongdoing

### Benefits

- **Legal Admissibility**: Blockchain-verified timestamps and immutable records strengthen evidence in legal proceedings
- **Regulatory Compliance**: Meets stringent record-keeping requirements for industries like finance, healthcare, and aviation
- **Cost Reduction**: Eliminates overhead associated with maintaining centralized reporting infrastructure
- **Global Accessibility**: Anyone with an internet connection and Web3 wallet can submit reports from anywhere
- **Auditability**: External auditors can independently verify report histories without system access
- **Data Sovereignty**: Users maintain control over their submissions through their wallet keys

## Technical Implementation

The system is built using:
- **Smart Contract**: Solidity-based contract deployed on Flare Network
- **Frontend Framework**: Next.js with TypeScript for type-safe development
- **Web3 Integration**: Wagmi hooks for seamless blockchain interaction
- **Wallet Connection**: Support for MetaMask, WalletConnect, and other Web3 wallets
- **UI Framework**: Modern, accessible interface with loading states and error handling

## Getting Started

1. Connect your Web3 wallet (MetaMask recommended)
2. Ensure you're on the Flare Coston2 testnet
3. Write your incident description in the text area
4. Click "Submit Report" and confirm the transaction
5. Wait for blockchain confirmation
6. Receive your unique report ID for future reference

## Contract Functions

- `submitReport(string description)`: Submit a new report with description
- `getReportCount()`: Retrieve the total number of submitted reports
- `reports(uint256 reportId)`: Fetch details of a specific report by ID

## Events

- `NewReport(address indexed reporter, uint256 indexed reportId)`: Emitted when a new report is submitted

---

*Built on Flare Network - Powering the next generation of decentralized applications*

