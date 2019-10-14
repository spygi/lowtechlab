# to male a methode for solving the minimumchangecouins
couins = [1,2,5,10,20,50,100,200]
couins.reverse() # 200, 100, 50 ...
change = -1
couinsreturned = []
for money in couins:
          while money <= change:
              couinsreturned.append(money)
              change = change - money

print(couinsreturned)
print(change)
                                                                     