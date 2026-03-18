def max_end3(nums):
  max = 0
  
  if nums[0] > nums[len(nums)-1]:
    max = nums[0]
  else:
    max = nums[len(nums)-1]
  
  nums[0] = nums[1] = nums[2] = max
  return nums
