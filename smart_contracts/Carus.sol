// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

interface Icarus {
    function mint(address to, uint256 amount) external;
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
}

contract Carus {
    uint256 public TransactionId;
    uint256 public RecyclerId;
    uint256 public NumOfSignUps;
    uint256 public NumOfTransactions;
    uint256 public TotalAmountDeposited;
    uint256 public TotalAmountSpent;
    uint256 public DailyReward = 2 ether;
    address public CarusToken;
    address[] public Admins = [
        0xf0dcADa1281620509E2CaDE0Da3D0337EaAB8D33,
        0xc328015f14b72ffFb9DD151DDb17e7a1CB4Df598,
        0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    ];

    struct Transaction {
        uint256 id;
        address initiator;
        address receiver;
        string details;
        uint256 amount;
        uint256 timestamp;
    }

    struct Recycler {
        uint256 id;
        uint256 timestamp;
    }

    Transaction[] public Transactions;

    mapping(uint256 => Transaction) public TransactionById;
    mapping(address => Transaction[]) public TransactionsByAddress;
    mapping(address => Transaction[]) public TransactionsByAdmin;
    mapping(address => Recycler) public RecyclerData;

    error AccountExists();
    error NotEnoughFunds();

    event AccountCreated(address indexed recycler, uint256 indexed recyclerId);
    event ContractFunded(uint256 indexed Amount);
    event MintedTo(address indexed to, uint256 indexed amount);
    event DailyMinted(address indexed to, uint256 indexed amount);

    modifier SignedUp() {
        require(RecyclerData[msg.sender].id != 0, "Not Signed Up");
        _;
    }

    modifier DailyTimerReached() {
        if (RecyclerData[msg.sender].id > 0) {
            require(block.timestamp - RecyclerData[msg.sender].timestamp >= 60, "Not yet 24 hours");
        }
        _;
    }

    modifier OnlyAdmin() {
        bool admin = false;
        for (uint256 i = 0; i < Admins.length; i++) {
            if (tx.origin == Admins[i]) {
                admin = true;
            }
        }
        require(admin == true, "Not An Admin");
        _;
    }

    constructor(address tokenAdress) {
        CarusToken = tokenAdress;
    }

    function mintTo(address to, uint256 amount) public OnlyAdmin {
        if (Icarus(CarusToken).balanceOf(address(this)) < amount) {
            revert NotEnoughFunds();
        } else {
            bool success = Icarus(CarusToken).transfer(to, amount);
            if (success) {
                Transaction storage transaction = TransactionById[TransactionId];
                Transaction[] storage transactionsbyaddress = TransactionsByAddress[to];
                Transaction[] storage transactionsbyAdmin = TransactionsByAdmin[msg.sender];
                transaction.id = TransactionId;
                transaction.initiator = msg.sender;
                transaction.receiver = to;
                transaction.details = "minted to recycler";
                transaction.amount = amount;
                transaction.timestamp = block.timestamp;
                transactionsbyaddress.push(transaction);
                transactionsbyAdmin.push(transaction);
                Transactions.push(transaction);

                NumOfTransactions = NumOfTransactions + 1;
                TotalAmountSpent = TotalAmountSpent + amount;

                emit MintedTo(to, amount);
            }
        }
    }

    function dailyMint() public DailyTimerReached {
        if (Icarus(CarusToken).balanceOf(address(this)) < DailyReward) {
            revert NotEnoughFunds();
        } else {
            if (RecyclerData[msg.sender].id > 0) {
                Recycler storage recycler = RecyclerData[msg.sender];
                recycler.timestamp = block.timestamp;
                bool success = Icarus(CarusToken).transfer(msg.sender, DailyReward);
                if (success) {
                    Transaction storage transaction = TransactionById[TransactionId];
                    Transaction[] storage transactionsbyaddress = TransactionsByAddress[msg.sender];
                    transaction.id = TransactionId + 1;
                    transaction.initiator = msg.sender;
                    transaction.receiver = msg.sender;
                    transaction.details = "daily mint to recycler";
                    transaction.amount = DailyReward;
                    transaction.timestamp = block.timestamp;
                    transactionsbyaddress.push(transaction);
                    Transactions.push(transaction);

                    NumOfTransactions = NumOfTransactions + 1;
                    TotalAmountSpent = TotalAmountSpent + DailyReward;

                    emit DailyMinted(msg.sender, DailyReward);
                }
            } else {
                Recycler storage recycler = RecyclerData[msg.sender];
                recycler.id = RecyclerId + 1;
                NumOfSignUps = NumOfSignUps + 1;
                recycler.timestamp = block.timestamp;

                bool success = Icarus(CarusToken).transfer(msg.sender, DailyReward);
                if (success) {
                    Transaction storage transaction = TransactionById[TransactionId];
                    Transaction[] storage transactionsbyaddress = TransactionsByAddress[msg.sender];
                    transaction.id = TransactionId;
                    transaction.initiator = msg.sender;
                    transaction.receiver = msg.sender;
                    transaction.details = "daily mint to recycler";
                    transaction.amount = DailyReward;
                    transaction.timestamp = block.timestamp;
                    transactionsbyaddress.push(transaction);
                    Transactions.push(transaction);

                    NumOfTransactions = NumOfTransactions + 1;
                    TotalAmountSpent = TotalAmountSpent + DailyReward;

                    emit AccountCreated(msg.sender, recycler.id);
                    emit DailyMinted(msg.sender, DailyReward);
                }
            }
        }
    }

    function fundContract(uint256 amount) public {
        Icarus(CarusToken).mint(address(this), amount);
        Transaction storage transaction = TransactionById[TransactionId];
        Transaction[] storage transactionsbyAdmin = TransactionsByAdmin[msg.sender];
        transaction.id = TransactionId;
        transaction.initiator = msg.sender;
        transaction.receiver = address(this);
        transaction.details = "Funded Contract";
        transaction.amount = amount;
        transaction.timestamp = block.timestamp;
        transactionsbyAdmin.push(transaction);
        Transactions.push(transaction);

        NumOfTransactions = NumOfTransactions + 1;
        TotalAmountDeposited = TotalAmountDeposited + amount;

        emit ContractFunded(amount);
    }

    function accountTokenBalance(address account) public view returns (uint256 balance) {
        balance = Icarus(CarusToken).balanceOf(account);
    }

    function checkDaily() public view returns (bool isDaily) {
        if (RecyclerData[msg.sender].id > 0) {
            if (block.timestamp - RecyclerData[msg.sender].timestamp >= 60) {
                isDaily = true;
            } else {
                isDaily = false;
            }
        } else {
            isDaily = true;
        }
    }

    function currentTime() public view returns (uint256) {
        return block.timestamp;
    }

    function timeCounter() public view returns (uint256 time) {
        time = block.timestamp - RecyclerData[msg.sender].timestamp;
    }

    function transactionByIdFunc(uint256 id) public view returns (Transaction memory _transaction) {
        _transaction = TransactionById[id];
    }

    function transactionByAddressFunc(address account) public view returns (Transaction[] memory _transactions) {
        _transactions = TransactionsByAddress[account];
    }

    function transactionByAdminFunc(address account) public view returns (Transaction[] memory _transactions) {
        _transactions = TransactionsByAdmin[account];
    }

    function transactionsFunc() public view returns (Transaction[] memory _transactions) {
        _transactions = Transactions;
    }
}
