def string_match(a, b):
  count = 0
  new_length = min(len(a), len(b)) - 1
  for i in range(new_length):
    if a[i:i+2] == b[i:i+2]:
      count += 1
  
  return count
