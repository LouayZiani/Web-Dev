def diff21(n):
  abs_diff = abs(n - 21)
  if n > 21:
    return abs_diff * 2
  return abs_diff
  
print(diff21(25))