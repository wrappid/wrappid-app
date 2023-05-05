#!/bin/bash
input_file="config.json"
output_file=".env"

key_word="RAPPID_APP_"

# read the JSON data from the input file
json_data=$(cat "$input_file")

# extract all keys and values from the JSON data
keys_and_values=$(echo "$json_data" | jq -r --arg prefix "$key_word" 'paths(scalars) as $p | [($p | join(".") | "\($prefix)\(.)"), (getpath($p) | tojson)] | join("=")')

echo "$keys_and_values" >"$output_file"
