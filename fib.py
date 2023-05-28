n=int(input("Enter the number"))
temp=0
first=1
for i in range(n):
    second=temp+first
    print(second,end=" ")
    temp=first
    first=second
