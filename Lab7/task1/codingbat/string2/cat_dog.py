def cat_dog(str):
  cat_count = dog_count = 0
  for i in range(len(str) - 2):
    if str[i] + str[i+1] + str[i+2] == 'cat':
      cat_count += 1
    elif str[i] + str[i+1] + str[i+2] == 'dog':
      dog_count += 1
  
  if dog_count == cat_count:
    return True
  else:
    return False
