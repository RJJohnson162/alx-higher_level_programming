#!/usr/bin/python3

import sys

# Get the list of arguments
argv = sys.argv[1:]

# Print the number of arguments
if len(argv) == 0:
    print("Number of argument(s): 0.")
elif len(argv) == 1:
    print("Number of argument(s): 1. Argument:")
else:
    print("Number of argument(s):", len(argv), "arguments:")

# Print the arguments
for i, arg in enumerate(argv, start=1):
    print(i, ":", arg)
