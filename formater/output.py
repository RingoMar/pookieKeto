f = open('int.txt', "r", encoding = "utf-8")
for line in f:
    print ('"{}",'.format(line.replace("\n", "")))
f.close()