/**
 * @api {get} getNodeInfo /getNodeInfo
 * @apiVersion 0.1.2
 * @apiName getNodeInfo
 * @apiGroup API
 *
 * @apiDescription Returns information of the EMPOW server node
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "build_time": "20200222_153105+0700",
    "git_hash": "7583382576326f9abb44841e798b8bf296cf9b11",
    "mode": "ModeNormal",
    "network": {
        "id": "12D3KooWH7ada9K3mDWGbNg7UZ2wqk14GNc4e8sqe9uWUfFKkjBk",
        "peer_count": 10
    },
    "code_version": "0.1.2",
    "server_time": "1589968988272888992"
}
 * @apiSuccess (Response) {string}   build_time           Building time of the 'server' binary
 * @apiSuccess (Response) {string}   git_hash             Git hash of the 'iserver' binary
 * @apiSuccess (Response) {string}   mode                 Current mode of the server. It can be one of 'ModeInit', 'ModeNormal' and 'ModeSync'
 * @apiSuccess (Response) {object}   network              Network information of the node
 * @apiSuccess (Response) {string}   code_version         the version of code
 * @apiSuccess (Response) {string}   server_time          the current timestamp of the server, unit is nano second
 */
function getNodeInfo() { return; }


/**
 * @api {get} getChainInfo /getChainInfo
 * @apiVersion 0.1.2
 * @apiName getChainInfo
 * @apiGroup API
 *
 * @apiDescription Returns information of the EMPOW blockchain
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "net_name": "mainnet",
    "protocol_version": "1.0",
    "chain_id": 1024,
    "head_block": "15032582",
    "head_block_hash": "HcxNrV7iLF3sB28LXstCpnYBiNGVHfXn3UzE2KnKicUy",
    "lib_block": "15032558",
    "lib_block_hash": "GEx4uhF2UyMvzNmG7juH4C1T1wvxYNccwU9GqivapYEp",
    "witness_list": [
        "ERJu6Yk368oxmR8Td1SPntpX41DddwLEHwwAyDxgfTBL",
        "995M5gttT3ExXh2Lgemp3d9LbtVPQTutxSXceqEth6At",
        "5uRFkpPYvXc65WyfdpWvDbrfg4zCD8ssqeL4tT62Mwgk",
        "HgGci1YLHHNzDVdtZijViAPn64AyJ7TvEAgBisTDTedp",
        "GxwV1gpzLrxFBTHjg6DJBTuAS2iykcPcUSTgXzG9P2NK",
        "5M4neuqpQPsyevBcRgr9NUNCZEvqz2iL4vmRTaVdckkJ"
    ],
    "lib_witness_list": [
        "ERJu6Yk368oxmR8Td1SPntpX41DddwLEHwwAyDxgfTBL",
        "995M5gttT3ExXh2Lgemp3d9LbtVPQTutxSXceqEth6At",
        "5uRFkpPYvXc65WyfdpWvDbrfg4zCD8ssqeL4tT62Mwgk",
        "HgGci1YLHHNzDVdtZijViAPn64AyJ7TvEAgBisTDTedp",
        "GxwV1gpzLrxFBTHjg6DJBTuAS2iykcPcUSTgXzG9P2NK",
        "5M4neuqpQPsyevBcRgr9NUNCZEvqz2iL4vmRTaVdckkJ"
    ],
    "pending_witness_list": [
        "ERJu6Yk368oxmR8Td1SPntpX41DddwLEHwwAyDxgfTBL",
        "995M5gttT3ExXh2Lgemp3d9LbtVPQTutxSXceqEth6At",
        "5uRFkpPYvXc65WyfdpWvDbrfg4zCD8ssqeL4tT62Mwgk",
        "HgGci1YLHHNzDVdtZijViAPn64AyJ7TvEAgBisTDTedp",
        "GxwV1gpzLrxFBTHjg6DJBTuAS2iykcPcUSTgXzG9P2NK",
        "5M4neuqpQPsyevBcRgr9NUNCZEvqz2iL4vmRTaVdckkJ"
    ],
    "head_block_time": "1589972243500227387",
    "lib_block_time": "1589972231500361817"
}
 * @apiSuccess (Response) {string}   net_name                Network name, such as "mainnet" or "testnet"
 * @apiSuccess (Response) {string}   protocol_version        EMPOW protocol version
 * @apiSuccess (Response) {uint32}   chain_id                EMPOW chain id
 * @apiSuccess (Response) {int64}    head_block              the lastest block height
 * @apiSuccess (Response) {string}   head_block_hash         the hash of the lastest block
 * @apiSuccess (Response) {int64}    lib_block               height of irreversible blocks
 * @apiSuccess (Response) {int64}    lib_block_hash          hash of irreversible blocks
 * @apiSuccess (Response) {array}    witness_list            list of pubkeys for the current block production nodes
 * @apiSuccess (Response) {array}    lib_witness_list        list of pubkeys for the block production nodes of the last irreversible block time
 * @apiSuccess (Response) {array}    pending_witness_list    list of pubkeys for the next round block production nodes
 * @apiSuccess (Response) {int64}    head_block_time         time of head block
 * @apiSuccess (Response) {int64}    lib_block_time          time of last irreversible block
 */
function getChainInfo() { return; }



/**
 * @api {get} getGasRatio /getGasRatio
 * @apiVersion 0.1.2
 * @apiName getGasRatio
 * @apiGroup API
 *
 * @apiDescription Get the GAS multiplier information, so that users may set their desired GAS trading multipliers. We recommend a slightly higher gas ratio than lowest_gas_ratio so that transactions will be published timely.
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "lowest_gas_ratio": 1,
    "median_gas_ratio": 1
}
 * @apiSuccess (Response) {double}   lowest_gas_ratio        the lowest gas ratio of the most recently packed blocks
 * @apiSuccess (Response) {double}   median_gas_ratio        the median gas ratio of the most recently packed blocks
 */
function getGasRatio() { return; }



/**
 * @api {get} getRAMInfo /getRAMInfo
 * @apiVersion 0.1.2
 * @apiName getRAMInfo
 * @apiGroup API
 *
 * @apiDescription Get RAM information for the current blockchain, including usage and price.
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "used_ram": "41241439401",
    "available_ram": "112477856567",
    "total_ram": "153719295968",
    "sell_price": 0.008728776617316296,
    "buy_price": 0.008903352149662622
}
 * @apiSuccess (Response) {int64}    available_ram        RAM available, in byte
 * @apiSuccess (Response) {int64}    used_ram             The amount of RAM sold, in byte
 * @apiSuccess (Response) {int64}    total_ram            The system's total RAM count, in byte
 * @apiSuccess (Response) {double}   buy_price            The buying price of RAM, in IOST/byte
 * @apiSuccess (Response) {double}   sell_price           The selling price of RAM, in IOST/byte
 */
function getRAMInfo() { return; }



/**
 * @api {get} getTxByHash /getTxByHash/{hash}
 * @apiVersion 0.1.2
 * @apiName getTxByHash
 * @apiGroup API
 *
 * @apiDescription Fetches the transaction by its base58 encoded hash
 * 
 * @apiParam {string} hash     hash of the transaction
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "status": "IRREVERSIBLE",
    "transaction": {
        "hash": "DahCMUFPwvH5kcDeqJFi9JZb8X7fKiAaUs2ronqQkUqk",
        "time": "1589973178299000000",
        "expiration": "1589973268299000000",
        "gas_ratio": 1,
        "gas_limit": 2000000,
        "delay": "0",
        "chain_id": 1024,
        "actions": [
            {
                "contract": "token.empow",
                "action_name": "transfer",
                "data": "[\"em\",\"EM2ZsHwjT3AFVf3u4ZD29iUd727oPN6KWdzzpjP8NE1qAwTbX\",\"EM2ZsEiwxX2GaZML1Tt7q1d3Z37V3dCtrDQ5S5gRKQHk9irqc\",\"50\",\"Sponsor Reward: +50 EM - EM2ZsMcCwUUP2GP6uVEdLTDPGcjHdFgbRAvSFCDwUcknV6YkT\"]"
            }
        ],
        "signers": [],
        "publisher": "EM2ZsHwjT3AFVf3u4ZD29iUd727oPN6KWdzzpjP8NE1qAwTbX",
        "referred_tx": "",
        "amount_limit": [
            {
                "token": "*",
                "value": "unlimited"
            }
        ],
        "tx_receipt": {
            "tx_hash": "DahCMUFPwvH5kcDeqJFi9JZb8X7fKiAaUs2ronqQkUqk",
            "gas_usage": 11846,
            "ram_usage": {},
            "status_code": "SUCCESS",
            "message": "",
            "returns": [
                "[]"
            ],
            "receipts": [
                {
                    "func_name": "token.empow/transfer",
                    "content": "[\"em\",\"EM2ZsHwjT3AFVf3u4ZD29iUd727oPN6KWdzzpjP8NE1qAwTbX\",\"EM2ZsEiwxX2GaZML1Tt7q1d3Z37V3dCtrDQ5S5gRKQHk9irqc\",\"50\",\"Sponsor Reward: +50 EM - EM2ZsMcCwUUP2GP6uVEdLTDPGcjHdFgbRAvSFCDwUcknV6YkT\"]"
                }
            ]
        }
    },
    "block_number": "15034447"
}
 * @apiSuccess (Response) {enum}      status                  PENDING- transaction is cached, PACKED - transaction is in reversible blocks, IRREVERSIBLE - transaction is in irreversible blocks
 * @apiSuccess (Response) {object}    transaction             Transaction data
 * @apiSuccess (Response) {string}    block_number            the number of the block which the tx is in
 */
function getTxByHash() { return; }



/**
 * @api {get} getTxReceiptByTxHash /getTxReceiptByTxHash/{hash}
 * @apiVersion 0.1.2
 * @apiName getTxReceiptByTxHash
 * @apiGroup API
 *
 * @apiDescription Get transaction receipt data with transaction hash.
 *
 * @apiParam {string} hash     hash of the receipt
 * 
 * @apiSuccessExample {json} Example:
 *     
{
    "tx_hash": "DahCMUFPwvH5kcDeqJFi9JZb8X7fKiAaUs2ronqQkUqk",
    "gas_usage": 11846,
    "ram_usage": {},
    "status_code": "SUCCESS",
    "message": "",
    "returns": [
        "[]"
    ],
    "receipts": [
        {
            "func_name": "token.empow/transfer",
            "content": "[\"em\",\"EM2ZsHwjT3AFVf3u4ZD29iUd727oPN6KWdzzpjP8NE1qAwTbX\",\"EM2ZsEiwxX2GaZML1Tt7q1d3Z37V3dCtrDQ5S5gRKQHk9irqc\",\"50\",\"Sponsor Reward: +50 EM - EM2ZsMcCwUUP2GP6uVEdLTDPGcjHdFgbRAvSFCDwUcknV6YkT\"]"
        }
    ]
}
 * @apiSuccess (Response) {string}                tx_hash              hash of the transaction
 * @apiSuccess (Response) {double}                gas_usage            GAS consumption of the transaction
 * @apiSuccess (Response) {map}    ram_usage            RAM consumption for the transaction. map-key is account name, and value is RAM amount
 * @apiSuccess (Response) {enum}                  status_code          Status of the transaction. SUCCESS; GAS_RUN_OUT - insufficient GAS; BALANCE_NOT_ENOUGH - insufficient balance; WRONG_PARAMETER; RUNTIME_ERROR - a run-time error; TIMEOUT; WRONG_TX_FORMAT; DUPLICCATE_SET_CODE - set code is duplicated unexpectedly; UNKNOWN_ERROR
 * @apiSuccess (Response) {string}                message              a message descripting status_code
 * @apiSuccess (Response) {array}                 returns              return values for each Action
 * @apiSuccess (Response) {array}                 receipts             for event functions
 */
function getTxReceiptByTxHash() { return; }


/**
 * @api {get} getBlockByHash /getBlockByHash/{hash}/{complete}
 * @apiVersion 0.1.2
 * @apiName getBlockByHash
 * @apiGroup API
 *
 * @apiDescription Get block information with block hash.
 * 
 * @apiParam {string} hash       block hash
 * @apiParam {bool}   complete     true - show detailed transactions within the block; false - don't.
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "status": "IRREVERSIBLE",
    "block": {
        "hash": "82djLyDJDM1pxsXzEsCVNCjARAgh35zXPZR7rmDxY2bv",
        "version": "1",
        "parent_hash": "AGFya7nTs88TcHFoZ2joRGWYx9Uz8rq1VQAmuAHmsB4t",
        "tx_merkle_hash": "HErsHrCzcqxJLLJ3cbTXNEBjU6wGGP9KkYGFNnbjgtJU",
        "tx_receipt_merkle_hash": "5Jn4xM2Taafrqmhh8nLixVjD9DRV6A4Ga6T1pRkg1CmH",
        "number": "15035691",
        "witness": "2Wn9ExjNwG1AXwAdDkWL4t7hV3Gvg3Yk2zMz3tJ6w799",
        "time": "1589973803000280912",
        "gas_usage": 0,
        "tx_count": "3",
        "info": {
            "mode": 0,
            "thread": 0,
            "batch_index": []
        },
        "transactions": []
    }
}
 * @apiSuccess (Response) {enum}                status           PENDING - block is in cache; IRREVERSIBLE - block is irreversible.
 * @apiSuccess (Response) {object}              block            a Block struct
 */
function getBlockByHash() { return; }



/**
 * @api {get} getBlockByNumber /getBlockByNumber/{number}/{complete}
 * @apiVersion 0.1.2
 * @apiName getBlockByNumber
 * @apiGroup API
 *
 * @apiDescription Get block information using the block number.
 * 
 * @apiParam {int64}  number       block number
 * @apiParam {bool}   complete     true - show detailed transactions within the block; false - don't.
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "status": "IRREVERSIBLE",
    "block": {
        "hash": "82djLyDJDM1pxsXzEsCVNCjARAgh35zXPZR7rmDxY2bv",
        "version": "1",
        "parent_hash": "AGFya7nTs88TcHFoZ2joRGWYx9Uz8rq1VQAmuAHmsB4t",
        "tx_merkle_hash": "HErsHrCzcqxJLLJ3cbTXNEBjU6wGGP9KkYGFNnbjgtJU",
        "tx_receipt_merkle_hash": "5Jn4xM2Taafrqmhh8nLixVjD9DRV6A4Ga6T1pRkg1CmH",
        "number": "15035691",
        "witness": "2Wn9ExjNwG1AXwAdDkWL4t7hV3Gvg3Yk2zMz3tJ6w799",
        "time": "1589973803000280912",
        "gas_usage": 0,
        "tx_count": "3",
        "info": {
            "mode": 0,
            "thread": 0,
            "batch_index": []
        },
        "transactions": []
    }
}
 * @apiSuccess (Response) {enum}                status           PENDING - block is in cache; IRREVERSIBLE - block is irreversible.
 * @apiSuccess (Response) {object}              block            a Block struct
 */
function getBlockByNumber() { return; }




/**
 * @api {get} getAccount /getAccount/{address}/{by_longest_chain}
 * @apiVersion 0.1.2
 * @apiName getAccount
 * @apiGroup API
 *
 * @apiDescription Get account information.
 * 
 * @apiParam {string}  address                 the account address
 * @apiParam {bool}    by_longest_chain        true - get data from the longest chain; false - get data from irreversible blocks
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "address": "EM2ZsEiwxX2GaZML1Tt7q1d3Z37V3dCtrDQ5S5gRKQHk9irqc",
    "balance": 100.00000001,
    "gas_info": {
        "current_total": 1445464.87,
        "transferable_gas": 0,
        "pledge_gas": 1445464.87,
        "increase_speed": 17.25,
        "limit": 4500000,
        "pledged_info": []
    },
    "ram_info": {
        "available": "0",
        "used": "0",
        "total": "0"
    },
    "frozen_balances": [],
    "vote_infos": []
}
 * @apiSuccess (Response) {string}              address             account address
 * @apiSuccess (Response) {double}              balance             the balance of the account
 * @apiSuccess (Response) {object}              gas_info            Gas information
 * @apiSuccess (Response) {object}              ram_info            Ram information
 * @apiSuccess (Response) {array}               frozen_balances     information on the frozen balance
 * @apiSuccess (Response) {array}               vote_infos          information of vote
 */
function getAccount() { return; }




/**
 * @api {get} getTokenBalance /getTokenBalance/{address}/{token}/{by_longest_chain}
 * @apiVersion 0.1.2
 * @apiName getTokenBalance
 * @apiGroup API
 *
 * @apiDescription Get account balance of a specified token.
 * 
 * @apiParam {string}  address                 account address
 * @apiParam {string}  token                   token name
 * @apiParam {bool}    by_longest_chain        true - get information from the longest chain; false - get data from irreversible blocks
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "balance": 0,
    "frozen_balances": []
}
 * @apiSuccess (Response) {double}              balance             the balance
 * @apiSuccess (Response) {array}               frozen_balances     information on the frozen balance
 */
function getTokenBalance() { return; }





/**
 * @api {get} getProducerVoteInfo /getProducerVoteInfo/{address}/{by_longest_chain}
 * @apiVersion 0.1.2
 * @apiName GetProducerVoteInfo
 * @apiGroup API
 *
 * @apiDescription Get producer vote infomation
 * 
 * @apiParam {string}  address                 account address
 * @apiParam {string}  token                   token name
 * @apiParam {bool}    by_longest_chain        true - get information from the longest chain; false - get data from irreversible blocks
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "balance": 0,
    "frozen_balances": []
}
 * @apiSuccess (Response) {double}              balance             the balance
 * @apiSuccess (Response) {array}               frozen_balances     information on the frozen balance
 */
function GetProducerVoteInfo() { return; }



/**
 * @api {get} getContract /getContract/{id}/{by_longest_chain}
 * @apiVersion 0.1.2
 * @apiName getContract
 * @apiGroup API
 *
 * @apiDescription Get contract information using contract ID.
 * 
 * @apiParam {string}  id                      contract ID
 * @apiParam {bool}    by_longest_chain        true - get data from longest chain; false - get data from irreversible blocks
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "balance": 0,
    "frozen_balances": []
}
 * @apiSuccess (Response) {double}              balance             the balance
 * @apiSuccess (Response) {array}               frozen_balances     information on the frozen balance
 */
function getContract() { return; }



/**
 * @api {post} getContractStorage /getContractStorage
 * @apiVersion 0.1.2
 * @apiName getContractStorage
 * @apiGroup API
 *
 * @apiDescription Get contract storage data.
 * 
 * @apiParam {string}  id                      ID of the smart contract
 * @apiParam {string}  key                     the key of StateDB
 * @apiParam {string}  field                   the values from StateDB; if StateDB[key] is a map then it is required to configure field to obtain values of StateDB[key][field]
 * @apiParam {bool}    by_longest_chain        true - get data from the longest chain; false - get data from irreversible blocks
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "data": "8",
    "block_hash": "GFfWHwe9cdw5aHaTDExFm2DBzaV9wdgybTQpHsQsbaKS",
    "block_number": "38194"
}
 * @apiSuccess (Response) {string}              data               the stored data
 * @apiSuccess (Response) {string}              block_hash         the hash of block from which the data is from
 * @apiSuccess (Response) {string}              block_number       the number of block from which the data is from
 */
function getContractStorage() { return; }





/**
 * @api {post} getContractStorageFields /getContractStorageFields
 * @apiVersion 0.1.2
 * @apiName getContractStorageFields
 * @apiGroup API
 *
 * @apiDescription Get contract storage key list of map, up to 256 are returned.
Note: Developers should not rely on this API to obtain all keys of a map in the contract. If there is such a requirement, you need to maintain all keys yourself . See mapKeys for details.
 * 
 * @apiParam {string}  id                      ID of the smart contract
 * @apiParam {string}  key                     the key of StateDB
 * @apiParam {bool}    by_longest_chain        true - get data from the longest chain; false - get data from irreversible blocks
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "fields": [
        "issuer",
        "totalSupply",
        "supply",
        "canTransfer",
        "onlyIssuerCanTransfer",
        "defaultRate",
        "decimal",
        "fullName"
    ]
}
 * @apiSuccess (Response) {array}              fields               look like this
 */
function getContractStorageFields() { return; }


/**
 * @api {post} getBatchContractStorage /getBatchContractStorage
 * @apiVersion 0.1.2
 * @apiName getBatchContractStorage
 * @apiGroup API
 *
 * @apiDescription Get batch contract storage data.
 * 
 * @apiParam {string}  id                      ID of the smart contract
 * @apiParam {array}   key                     the key-fields which are queried，the order of return values is the same as the request
 * @apiParam {bool}    by_longest_chain        true - get data from the longest chain; false - get data from irreversible blocks
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "datas": [
        "2100000000000000000",
        "8",
        "null"
    ],
    "block_hash": "3Tv3QUPRhhAj7L3j6DCEtkKycXtkeFgAMU3zZU3HA6Qr",
    "block_number": "39123"
}
 * @apiSuccess (Response) {string}              datas                 the stored data, returned in order as request
 * @apiSuccess (Response) {string}              block_hash            the hash of block from which the data is from
 * @apiSuccess (Response) {string}              block_number          the number of block from which the data is from
 */
function getBatchContractStorage() { return; }



/**
 * @api {post} sendTx /sendTx
 * @apiVersion 0.1.2
 * @apiName sendTx
 * @apiGroup API
 *
 * @apiDescription Publish the transaction to the node. When the node receives the transaction, it will do a sanity check and return errors if the check fails. If the check passes, the transaction will be added to the transaction pool and return a Hash of the transaction.

Users may use the hash as an argument of the getTxByHash API or the getTxReceiptByTxHash API, to look up the transaction state, and check whether execution succeeds.
 * @apiParam {int64} time Time of the transaction generation, in nanoseconds, from UnixEpoch-zero.
 * @apiParam {int64} expiration The time when the transaction expires, in nanoseconds since UnixEpoch-zero. If a block-producing node receives the transaction after expiration, it will not execute the transaction.
 * @apiParam {double} gas_ratio GAS ratio. This transaction will be executed with default ratio, multiplied by this parameter. The higher the ratio, the faster the transaction gets executed. The value can be reasonably between 1.0 to 100.0
 * @apiParam {double} gas_limit Maximum GAS allowed by this transaction. Should not be lower than 50,000
 * @apiParam {int64} delay The nanoseconds of the transaction delay. Set to 0 for non-delayed transactions.
 * @apiParam {uint32} chain_id chain_id
 * @apiParam {object} actions Specific calls of the transaction
 * @apiParam {object} amount_limit Limits on token of the transaction. More than one token limits may be specified; if the transaction exceeds theses limits, execution will halt.
 * @apiParam {string} publisher ID of the transaction publisher
 * @apiParam {object} publisher_sigs Signatures of the publisher, as described here. The publisher may provide multiple signatures for different permissions. Refer to documentations on the permission system.
 * @apiParam {object} signers The IDs of signers other than the publisher. May be left empty.
 * @apiParam {object} signatures Signatures of the signers. Each signers should have one or many signatures, so the length of the signatures should not be less than that of the signers.
 * 
 * 
 * 
 
 * @apiSuccessExample {json} Example:
 *     
{
    "time": 1544709662543340000,
    "expiration": 1544709692318715000,
    "gas_ratio": 1,
    "gas_limit": 500000,
    "delay": 0,
    "chain_id": 1024,
    "signers": [],
    "actions": [
        {
            "contract": "token.empow",
            "action_name": "transfer",
            "data": "[\"em\", \"wallet1\", \"wallet2\", \"100\", \"memo\"]",
        },
    ],
    "amount_limit": [
        {
            "token": "*",
            "value": "unlimited",
        },
    ],
    "signatures": [],
    "publisher": "wallet1",
    "publisher_sigs": [
        {
            "algorithm": "ED25519",
            "public_key": "lDS+SdM+aiVHbDyXapvrsgyKxFg9mJuHWPZb/INBRWY=",
            "signature": "/K1HM0OEbfJ4+D3BmalpLmb03WS7BeCz4nVHBNbDrx3/A31aN2RJNxyEKhv+VSoWctfevDNRnL1kadRVxSt8CA==",
        },
    ],
}

 * @apiSuccess (Response) {string}   hash                the transaction hash
 * @apiSuccess (Response) {object}   pre_tx_receipt      receipt of transaction executed in advance by RPC node, returned only when RPC node opens the switch
 */
function sendTx() { return; }

/**
 * @api {post} subscribe /subscribe
 * @apiVersion 0.1.2
 * @apiName subscribe
 * @apiGroup API
 *
 * @apiDescription Subscription events, including events triggered in smart contracts and transactions completed.
 * 
 * @apiParam {array}       topics            topics，the enum is CONTRACT_EVENT or CONTRACT_RECEIPT
 * @apiParam {object}      filter            Received events are filtered according to the fields in the filter. If this field is not passed, event data in all topics will be received.
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "result": {
        "event": {
            "topic": "CONTRACT_RECEIPT",
            "data": "[\"contribute\",\"producer00001\",\"900\"]",
            "time": "1545646637413936000"
        }
    }
}
 * @apiSuccess (Response) {enum}             topic              topic，the enum is CONTRACT_EVENT or CONTRACT_RECEIPT
 * @apiSuccess (Response) {string}           data               event data
 * @apiSuccess (Response) {int64}            time               event timestamp
 */
function subscribe() { return; }




/**
 * @api {get} getCandidateBonus /getCandidateBonus/{address}/{by_longest_chain}
 * @apiVersion 0.1.2
 * @apiName getCandidateBonus
 * @apiGroup API
 *
 * @apiDescription Query the voting bonus a node can receive.
 * 
 * @apiParam {string}       address                       node account address
 * @apiParam {bool}         by_longest_chain              true - get data from the longest chain; false - get data from irreversible blocks
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "bonus": 0
}
 * @apiSuccess (Response) {double}             bonus              the bonus he can receive
 */
function getCandidateBonus() { return; }

/**
 * @api {get} getTokenInfo /getTokenInfo/{symbol}/{by_longest_chain}
 * @apiVersion 0.1.2
 * @apiName getTokenInfo
 * @apiGroup API
 *
 * @apiDescription   Query the token information.
 * 
 * @apiParam {string}       symbol                        token symbol
 * @apiParam {bool}         by_longest_chain              true - get data from the longest chain; false - get data from irreversible blocks
 *
 * @apiSuccessExample {json} Example:
 *     
{
    "symbol": "em",
    "full_name": "em",
    "issuer": "issue.empow",
    "total_supply": "9000000000000000000",
    "current_supply": "504850231558063526",
    "decimal": 8,
    "can_transfer": true,
    "only_issuer_can_transfer": false,
    "total_supply_float": 90000000000,
    "current_supply_float": 5048502315.580635
}
 * @apiSuccess (Response) {string}             symbol                          token symbol
 * @apiSuccess (Response) {string}             full_name                       token full name
 * @apiSuccess (Response) {string}             issuer                          token issuer
 * @apiSuccess (Response) {string}             total_supply                    total amount of token supply, is the result of total_supply_float multiplied by decimal
 * @apiSuccess (Response) {string}             current_supply                  current amount of token supply, is the result of current_supply_float multiplied by decimal
 * @apiSuccess (Response) {double}             total_supply_float              total amount of token supply
 * @apiSuccess (Response) {double}             current_supply_float            current amount of token supply
 * @apiSuccess (Response) {int}                decimal                         token decimal
 * @apiSuccess (Response) {bool}               can_transfer                    whether the token can be transfered
 * @apiSuccess (Response) {bool}               only_issuer_can_transfer        whether the token can only be transfered by issuer
 * 
 */
function getTokenInfo() { return; }