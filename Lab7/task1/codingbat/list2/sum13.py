def sum13(nums):
  sum = 0
  
  for i in range(len(nums)):
    if nums[i] == 13:
      if i + 1 < len(nums):
        nums[i + 1] = 0
      continue
    sum += nums[i]
  return sum
