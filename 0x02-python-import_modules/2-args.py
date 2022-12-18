#!/usr/bin/python3

if __name__ == '__main__':
  import sys
  argv = sys.argv[1:] # remove the script name from the list of arguments
  num_args = len(argv)
  if num_args == 0:
    print("No argument.")
  elif num_args == 1:
    print("1 argument:")
  else:
    print(f"{num_args} arguments:")
  for i, arg in enumerate(argv):
    print(f"{i+1}: {arg}")
