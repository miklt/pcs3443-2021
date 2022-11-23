import csv

header = ['username','password','email']
data = []
with open ('users.csv','w') as f:
    writer = csv.writer(f)
    writer.writerow(header)
    for i in range(100000):
        data = [f'user_{i}',f'pass_{i}',f'user_{i}@gmail.com']
        writer.writerow(data)
        