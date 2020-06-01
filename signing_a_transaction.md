# Signing a transaction
There are three steps to sign a transaction: 
1. convert the transaction struct to byte array
2. calculate sha3 hash of the byte array
3. sign this hash with your private key.

## 1. Convert transaction struct to byte array

The algorithm is: convert each field of transaction into byte array in declarative order, and then add length before indefinite type (such as string and structure) and splice. The way the various field types are converted to byte arrays is shown in the table below.


|Type  |Conversion Method  |Example  |
|---------|---------|---------|
|int      | Convert to byte array with Big-endian | int64(1023) is converted to [0 0 0 0 0 0 3 255] |
|string   |Splice the byte of each character in the string and add length before it|"empow" is converted to [0 0 0 5 101 109 112 111 119]|
|array    |convert each element of the array into a byte array, add length before each array, put them together|["empow" "empow"] is converted to [0 0 0 2 0 0 0 5 101 109 112 111 119 0 0 0 5 101 109 112 111 119]|
|map     |Each pair of keys: values in the dictionary is converted into byte arrays and spliced, then each pair is spliced in ascending order of keys, and the length of map is added to the front of each pair.|["b":"empow", "a":"empow"] converts to [0 0 0 2 0 0 0 1 97 0 0 0 5 101 109 112 111 119 0 0 0 1 98 0 0 0 5 101 109 112 111 119]|

The transaction parameters are declared in this order: "time", "expiration", "gas_ratio", "gas_limit", "delay", "chain_id", "reserved", "signers", "actions", "amount_limit", and "signatures", so the pseudo-code converting a transaction struct to byte array is:


```go
func TxToBytes(t transaction) []byte {
        return Int64ToBytes(t.time) + Int64ToBytes(t. expiration) + 
                Int64ToBytes(int64(t.gas_ratio * 100)) + Int64ToBytes(int64(t.gas_limit * 100)) +     // Node that gas_ratio and gas_limit need to be multiplied by 100 and convert to int64
                Int64ToBytes(t.delay) + Int32ToBytes(t.chain_id) + 
                BytesToBytes(t.reserved) + // reserved is a reserved field. It only needs to write an empty byte array when serialized. Don't send this field in RPC request parameters.
                ArrayToBytes(t.signers) + ArrayToBytes(t.actions)  +
                ArrayToBytes(t.amount_limit) + ArrayToBytes(t.signatures)
    }
```


[Refer to empowjs for JavaScript implementation.](https://github.com/empow-blockchain/empowjs/blob/master/lib/structs.js#L102)

## 2. Calculate the hash of the byte array with sha3 algorithm

Use the sha3 libraries in your language to calculate hash of the byte array you obtained from the previous step.

## 3. Sign the hash with private key

Empow supports two asymmetric encryption algorithms: Ed25519 and Secp256k1. These two algorithms share the same signing process: generate a public-private key pair, and sign the hash from the previous step.

The private key of the "publisher_sigs" must agree with the transaction's "publisher" account. The "signatures" private keys must agrees with the transaction's "signers" accounts. "signatures" is used for multi-layer signing, and is not required; "publisher_sigs" is required. Fees for transaction execution will be taken out from the publisher's account.