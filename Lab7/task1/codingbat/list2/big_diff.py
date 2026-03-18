def big_diff(nums):
  minim = nums[0]
  maxim = nums[0]

  for num in nums:
    maxim = max(num, maxim)
    minim = min(num, minim)
    
  return maxim - minim