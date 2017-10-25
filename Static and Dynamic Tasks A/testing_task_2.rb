### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

def func1 val 
  if val == 1
  return true
  else
  return false
  end
end

def max a, b
  if a > b
      return a 
  else
  b
  end 
end 
  
def looper 
  for i in 1..10
  puts i
  end
end
 
failures = 0 
 
if looper.count() == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
 
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

  
if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end



# testing_task_2.rb:7: warning: found = in conditional, should be ==
# testing_task_2.rb:14: syntax error, unexpected tIDENTIFIER, expecting ';' or '\n'
# def max a b
#            ^
# testing_task_2.rb:20: syntax error, unexpected keyword_end, expecting end-of-input
end 