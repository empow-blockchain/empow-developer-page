define({ "api": [
  {
    "type": "get",
    "url": "getNodeInfo",
    "title": "/getNodeInfo",
    "version": "0.1.2",
    "name": "getNodeInfo",
    "group": "API",
    "description": "<p>Returns information of the EMPOW server node</p>",
    "success": {
      "examples": [
        {
          "title": "Example:",
          "content": "    \n{\n    \"build_time\": \"20200222_153105+0700\",\n    \"git_hash\": \"7583382576326f9abb44841e798b8bf296cf9b11\",\n    \"mode\": \"ModeNormal\",\n    \"network\": {\n        \"id\": \"12D3KooWH7ada9K3mDWGbNg7UZ2wqk14GNc4e8sqe9uWUfFKkjBk\",\n        \"peer_count\": 10\n    },\n    \"code_version\": \"0.1.2\",\n    \"server_time\": \"1589968988272888992\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "build_time",
            "description": "<p>Building time of the 'server' binary</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "git_hash",
            "description": "<p>Git hash of the 'iserver' binary</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "network",
            "description": "<p>Network information of the node</p>"
          }
        ]
      }
    },
    "filename": "./_apidoc.js",
    "groupTitle": "API"
  },
  {
    "type": "post",
    "url": "sendTx",
    "title": "/sendTx",
    "version": "0.1.2",
    "name": "sendTx",
    "group": "API",
    "description": "<p>Publish the transaction to the node. When the node receives the transaction, it will do a sanity check and return errors if the check fails. If the check passes, the transaction will be added to the transaction pool and return a Hash of the transaction.</p> <p>Users may use the hash as an argument of the getTxByHash API or the getTxReceiptByTxHash API, to look up the transaction state, and check whether execution succeeds.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int64",
            "optional": false,
            "field": "time",
            "description": "<p>Time of the transaction generation, in nanoseconds, from UnixEpoch-zero.</p>"
          },
          {
            "group": "Parameter",
            "type": "int64",
            "optional": false,
            "field": "expiration",
            "description": "<p>The time when the transaction expires, in nanoseconds since UnixEpoch-zero. If a block-producing node receives the transaction after expiration, it will not execute the transaction.</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "gas_ratio",
            "description": "<p>GAS ratio. This transaction will be executed with default ratio, multiplied by this parameter. The higher the ratio, the faster the transaction gets executed. The value can be reasonably between 1.0 to 100.0</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "gas_limit",
            "description": "<p>Maximum GAS allowed by this transaction. Should not be lower than 50,000</p>"
          },
          {
            "group": "Parameter",
            "type": "int64",
            "optional": false,
            "field": "delay",
            "description": "<p>The nanoseconds of the transaction delay. Set to 0 for non-delayed transactions.</p>"
          },
          {
            "group": "Parameter",
            "type": "uint32",
            "optional": false,
            "field": "chain_id",
            "description": "<p>chain_id</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "actions",
            "description": "<p>Specific calls of the transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "amount_limit",
            "description": "<p>Limits on token of the transaction. More than one token limits may be specified; if the transaction exceeds theses limits, execution will halt.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "publisher",
            "description": "<p>ID of the transaction publisher</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "publisher_sigs",
            "description": "<p>Signatures of the publisher, as described here. The publisher may provide multiple signatures for different permissions. Refer to documentations on the permission system.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "signers",
            "description": "<p>The IDs of signers other than the publisher. May be left empty.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "signatures",
            "description": "<p>Signatures of the signers. Each signers should have one or many signatures, so the length of the signatures should not be less than that of the signers.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example:",
          "content": "    \n{\n    \"time\": 1544709662543340000,\n    \"expiration\": 1544709692318715000,\n    \"gas_ratio\": 1,\n    \"gas_limit\": 500000,\n    \"delay\": 0,\n    \"chain_id\": 1024,\n    \"signers\": [],\n    \"actions\": [\n        {\n            \"contract\": \"token.empow\",\n            \"action_name\": \"transfer\",\n            \"data\": \"[\\\"em\\\", \\\"wallet1\\\", \\\"wallet2\\\", \\\"100\\\", \\\"memo\\\"]\",\n        },\n    ],\n    \"amount_limit\": [\n        {\n            \"token\": \"*\",\n            \"value\": \"unlimited\",\n        },\n    ],\n    \"signatures\": [],\n    \"publisher\": \"wallet1\",\n    \"publisher_sigs\": [\n        {\n            \"algorithm\": \"ED25519\",\n            \"public_key\": \"lDS+SdM+aiVHbDyXapvrsgyKxFg9mJuHWPZb/INBRWY=\",\n            \"signature\": \"/K1HM0OEbfJ4+D3BmalpLmb03WS7BeCz4nVHBNbDrx3/A31aN2RJNxyEKhv+VSoWctfevDNRnL1kadRVxSt8CA==\",\n        },\n    ],\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>the transaction hash</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "pre_tx_receipt",
            "description": "<p>receipt of transaction executed in advance by RPC node, returned only when RPC node opens the switch</p>"
          }
        ]
      }
    },
    "filename": "./_apidoc.js",
    "groupTitle": "API"
  }
] });
