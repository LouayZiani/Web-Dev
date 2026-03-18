def combo_string(a, b):
  shorter = ''
  longer = ''
  
  if len(a) > len(b):
    shorter = b
    longer = a
  else:
    shorter = a
    longer = b
  return shorter + longer + shorter
