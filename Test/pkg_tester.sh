#!/bin/bash

run_test() {
    local start_time=$(date +%s%3N)
    echo "Running $1..."
    
    node $1

    local end_time=$(date +%s%3N) 
    local elapsed_time=$((end_time - start_time))
    
    echo "$1 finished in ${elapsed_time} ms"
    echo "========================================="
}

# Run the test files
run_test "test_map.js"
run_test "test_filter.js"
run_test "test_reduce.js"
run_test "test_call.js"
run_test "test_apply.js"


echo "All tests completed!➡️"
