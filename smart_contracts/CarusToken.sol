// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CarusToken is ERC20 {
    address[] public Admins = [
        0xf0dcADa1281620509E2CaDE0Da3D0337EaAB8D33,
        0xc328015f14b72ffFb9DD151DDb17e7a1CB4Df598,
        0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    ];

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

    constructor() ERC20("Carus Token", "CRS") {}

    function mint(address to, uint256 amount) public OnlyAdmin {
        _mint(to, amount);
    }
}
