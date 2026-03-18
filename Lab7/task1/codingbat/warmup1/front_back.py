def front_back(str):
  if len(str) <= 1:
    return str
  n = len(str) - 1
  front = str[1:n]
  return str[n] + front + str[0]
