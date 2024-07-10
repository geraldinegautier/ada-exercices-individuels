import time

def add(num1,num2):
    return num1+num2

def add_array(array, num):
    res_array = []
    for el in array:
        res_array.append(el + num)
    return res_array

def factoriel(num):
    res = 1
    for i in range(num+1):
        res = res*i
    return res

temps_inital = time.perf_counter()

# tableau = add_array([3, 4, 1, 10], 1)
resultat = factoriel(19)

temps_final = time.perf_counter()
temps_ecoule = temps_final - temps_inital
print("L'éxécution a duré ", temps_ecoule)