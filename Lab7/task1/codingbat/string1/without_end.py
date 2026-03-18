def without_end(str):
  new_str = ''
  
  for i in range(len(str) - 1):
    if i != 0:
      new_str += str[i]
  return new_str
