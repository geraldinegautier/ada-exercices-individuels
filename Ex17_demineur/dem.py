import random # import librairie pour opérations aléatoires
import tkinter # import librairie pour affichage graphique

def draw_grid(number1, number2):
    # Création de la grille cachée (backSide) avec les valeurs 'X' et '0'
    backSide = createGridBack(number1,number2)
    print("backSide = ", backSide)
    for row in range(number1):
        buttons_in_row = []
        for column in range(number2):
            # Création d'un bouton pour chaque case de la grille
            button = tkinter.Button(
                window, font=("Arial", 25),
                width=3, height=1,
                command=lambda r=row, c=column: place_symbol(r, c, backSide) 
                # Utilisation de lambda pour passer les coordonnées du bouton cliqué
            )
            button.grid(row=row, column=column)  # Placement du bouton dans la grille
            buttons_in_row.append(button) # Ajout du bouton à la liste des boutons de la ligne courante
        buttons.append(buttons_in_row) # Ajout de la liste des boutons de la ligne courante à la grille globale des boutons

def place_symbol(row, column, backSide):
    # Récupération du bouton cliqué en utilisant ses coordonnées
    clicked_button = buttons[row][column]
    # Mise à jour du texte du bouton avec le symbole correspondant de la grille cachée (backSide)
    clicked_button.config(text=backSide[row][column])
    # Appel de la fonction pour vérifier la case 
    check_case(row, column, backSide)

# Creation de la grille back (cachée)
def createGridBack(lignNumber, columnNumber):
    # Créer une grille de dimensions (lignNumber x columnNumber) initialisée avec des '0'
    grid = [["0" for _ in range(columnNumber)] for _ in range(lignNumber)]
    for lign in range(lignNumber):
        # Déterminer aléatoirement le nombre de 'X' à placer dans la ligne courante
        xNumber = random.randint(0,columnNumber-1)
    
        for _ in range(xNumber):
            # Déterminer aléatoirement la position des 'X' dans la ligne courante
            xPlace = random.randint(0,columnNumber-1)
            grid[lign][xPlace] = "X"
    return grid

def check_case(clicked_row, clicked_col, backSide):
    # Récupération du bouton cliqué
    current_button = buttons[clicked_row][clicked_col]
    
    # Si la case cliquée est un '0'
    if backSide[clicked_row][clicked_col] == "0":
        btn_list = []
        count= 0
        # Vérification des cases adjacentes pour compter les 'X'
        if clicked_col > 0:
            btn_list.append(backSide[clicked_row][clicked_col - 1])  # Left
        if clicked_col < len(backSide[0]) - 1:
            btn_list.append(backSide[clicked_row][clicked_col + 1])  # Right
        if clicked_row > 0:
            btn_list.append(backSide[clicked_row - 1][clicked_col])  # Center Up
            if clicked_col > 0:
                btn_list.append(backSide[clicked_row - 1][clicked_col - 1])  # Left Up
            if clicked_col < len(backSide[0]) - 1:
                btn_list.append(backSide[clicked_row - 1][clicked_col + 1])  # Right Up
        if clicked_row < len(backSide) - 1:
            btn_list.append(backSide[clicked_row + 1][clicked_col])  # Center Down
            if clicked_col > 0:
                btn_list.append(backSide[clicked_row + 1][clicked_col - 1])  # Left Down
            if clicked_col < len(backSide[0]) - 1:
                btn_list.append(backSide[clicked_row + 1][clicked_col + 1])  # Right Down
        
        print("btn_list:", btn_list) 

        for value in btn_list:
            if value == "X":
                count+=1
        # Mise à jour du texte du bouton avec le nombre de 'X' adjacents
        current_button.config(text=str(count))
        print("count = ",str(count))
    else:
        # Si un 'X' est cliqué
        window.title("Vous avez perdu !")
        print("Vous avez perdu !")


# creation de la fenetre du jeu
window = tkinter.Tk()

# Personnalisation de la fenetre
window.title("Démineur")
window.minsize(500,500)

# Initialisation de la liste de boutons
buttons = []
# Création de la grille de boutons
draw_grid(6,8)

# Affichage de la fenêtre principale
window.mainloop() 
