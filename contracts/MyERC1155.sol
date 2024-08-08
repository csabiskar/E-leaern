// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
contract MyERC1155 is ERC1155, ERC1155Burnable, Ownable {
    uint256 public constant POP = 0;
    uint256 public constant LuckyNFT = 2;
    // constructor(address initialOwner) ERC1155("") Ownable(initialOwner) {}
    constructor(address initialOwner)
           ERC1155("https://ipfs.io/ipfs/QmePSfCVU1ZFjhHZNgRtRAGzW9sDKAXL2cP6BmpHh3azTY/{id}.json")
            Ownable(initialOwner)
        {
            _mint(msg.sender,POP,100,"");
            _mint(msg.sender,LuckyNFT,1,"");
        }

    function uri(
        uint256 _tokenid
    )public pure override returns (string memory){
        return string(
            abi.encodePacked(
                "https://ipfs.io/ipfs/QmePSfCVU1ZFjhHZNgRtRAGzW9sDKAXL2cP6BmpHh3azTY/",
                Strings.toString(_tokenid),
                ".json"
            )
        );
    }

    function contractURI() public pure returns (string memory){
        return "https://ipfs.io/ipfs/QmePSfCVU1ZFjhHZNgRtRAGzW9sDKAXL2cP6BmpHh3azTY/collection.json";
    }
    
    function airdrop(
        uint tokenid,
        address[] calldata recipients
    )external onlyOwner{
        for(uint i=0;i<recipients.length;i++){
            _safeTransferFrom(msg.sender, recipients[i], tokenid, 1,"");
            if(
                balanceOf(owner(),POP) == 90 &&
                balanceOf(owner(),LuckyNFT) == 1
            ){
                _safeTransferFrom(msg.sender, recipients[i], LuckyNFT, 1, "");
            }
        }
    }

     function mint(address to, uint256 tokenId, uint256 amount, bytes memory data) public onlyOwner {
        _mint(to, tokenId, amount, data);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) 
    
    internal virtual {
        // super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
        // require(msg.sender == owner() || to == address(0),
        //     "Token cannot be transferren, only be burned"
        // );
    }
}

