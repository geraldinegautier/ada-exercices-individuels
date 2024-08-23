import pytest
import tkinter
from dem import createGridBack, draw_grid

class TestGridGenerator:
    def test_correct_dimensions(self):
        """
        Teste si la grille de dimensions 5x10 est correctement générée.
        """
        lignNumber = 5
        columnNumber = 10
        grid = createGridBack(lignNumber, columnNumber)
        
        # Vérifie que le nombre de lignes est correct
        assert len(grid) == lignNumber, f"Expected {lignNumber} rows, but got {len(grid)}"
        
        # Vérifie que chaque ligne a le nombre correct de colonnes
        for row in grid:
            assert len(row) == columnNumber, f"Expected {columnNumber} columns, but got {len(row)}"
    
    def test_incorrect_dimensions(self):
        """
        Teste que la grille de dimensions 5x10 n'a pas les dimensions incorrectes 2x8 ou 10x5.
        """
        lignNumber = 5
        columnNumber = 10
        grid = createGridBack(lignNumber, columnNumber)
        
        # Vérifie que le nombre de lignes n'est pas incorrect
        assert len(grid) != 2, f"Unexpected number of rows: {len(grid)}"
        assert len(grid) != 10, f"Unexpected number of rows: {len(grid)}"
        
        # Vérifie que chaque ligne n'a pas un nombre incorrect de colonnes
        for row in grid:
            assert len(row) != 8, f"Unexpected number of columns: {len(row)}"
            assert len(row) != 5, f"Unexpected number of columns: {len(row)}"

# test pour vérifier que createGridBack est appelé avec les bons arguments. A FAIRE


# Fixtures pour la fenêtre Tkinter et la liste des boutons
@pytest.fixture
def window():
    return tkinter.Tk()

@pytest.fixture
def buttons():
    return []

@pytest.mark.parametrize("number1, number2", [
    (5, 10),
    (3, 3),
    (7, 4)
])
# Test pour vérifier la création des boutons
def test_draw_grid_creates_buttons(window, buttons, number1, number2):
    draw_grid(window, buttons, number1, number2)

    assert len(buttons) == number1
    assert all(len(row) == number2 for row in buttons)
    
    
# Test pour vérifier que les boutons appellent la fonction place_symbol avec les bons arguments lorsqu'ils sont cliqués.

# Exécution du test
if __name__ == "__main__":
    pytest.main()
