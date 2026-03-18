def end_other(a, b):
  a = a.lower()
  b = b.lower()
  
  if a == b[-len(a):] or b == a[-len(b):]:
    return True
  else:
    return False
