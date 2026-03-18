def last2(str):
  count = 0
  end = str[len(str)-2: len(str)]
  for i in range(len(str) - 2):
    if str[i: i+2] == end:
      count+= 1
  
  return count
