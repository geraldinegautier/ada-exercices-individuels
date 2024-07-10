import re

str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."
reg1 = re.findall(r"de", str) #recherche toutes les occurences de 'de' => 3
reg2 = re.findall(r"\bde\b", str) #recherche toutes les occurences de 'de' en tant que que mot distinct => 2
print(len(reg1))
print(len(reg2))
reg3 = re.findall(r"\b[dl]e[s]?\b", str) #recherche toutes les occurences de  "de", "des" et "les" => 4
print(len(reg3))
reg4 = re.findall(r"\w", str) #recherche tous les caractères
print(len(reg4))
reg5 = re.findall(r"[a-zA-Z]", str) #recherche tous les caractères alphabétiques
print(len(reg5))
reg6 = re.findall(r"[éèêà,?.;:!']", str)
print(len(reg6))