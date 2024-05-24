# Proposition d'amelioration de GPT afin de me permettre d'explorer un code différent

# 1. Conventions de nommage : Utilisez des noms descriptifs pour les variables et les fonctions afin d'améliorer la lisibilité. Par exemple, string_input pourrait être renommé en input_string, string_output en output_string, etc.

# 2. Optimisation des boucles : Vous pouvez simplifier les structures de boucle pour les rendre plus lisibles. Par exemple, vous pouvez utiliser une boucle for avec enumerate au lieu d'une boucle while pour decoupeChaine.

# 3. Style cohérent : Assurez-vous d'avoir une indentation et un espacement cohérents dans l'ensemble de votre code pour une meilleure lisibilité et maintenabilité.

# 4. Évitez les conversions inutiles : Dans decritChaine, il n'est pas nécessaire de convertir count en chaîne de caractères car elle est déjà concaténée à une chaîne de toute façon.

# 5. Gérez les cas limites : Assurez-vous que vos fonctions traitent correctement les cas limites. Par exemple, que se passe-t-il si une chaîne vide est passée à suiteConway ?


# Divise la chaîne d'entrée en segments en ajoutant un espace entre deux caractères consécutifs différents.
def decoupe_chaine(input_string):
    output_string = input_string[0]
    for i in range(1, len(input_string)):
        if input_string[i] != input_string[i - 1]:
            output_string += " "
        output_string += input_string[i]
    return output_string

# Décrit la chaîne d'entrée en comptant le nombre d'occurrences consécutives de chaque caractère.
def decrit_chaine(input_string):
    output_array = []
    for segment in decoupe_chaine(input_string).split():
        count = len(segment)
        # f-string (format string) pour concaténer count et segment[0] ensemble.
        output_array.append(f"{count}{segment[0]}")
    return "".join(output_array)

# Génère une suite de Conway pour la chaîne d'entrée donnée avec le nombre d'itérations spécifié.
def suite_conway(input_string, number):
    output_array = [input_string]
    for _ in range(number - 1):
        output_array.append(decrit_chaine(output_array[-1]))
    return "".join(output_array)

# Test
print(suite_conway("a", 3))
