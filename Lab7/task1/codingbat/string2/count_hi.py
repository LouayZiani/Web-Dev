def count_hi(str):
  count = 0
  
  for i in range(len(str)):
    if i != len(str) - 1 and str[i]+str[i+1] == 'hi':
      count += 1

  return count