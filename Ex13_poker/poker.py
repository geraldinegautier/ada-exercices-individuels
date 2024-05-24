import random

playerOne = []
playerTwo = []

def createDeck():
    forms = ["♠︎", "♣︎", "♡", "♢"]
    figures = ["J", "Q", "K"]
    deck = []
    mixDeck = []
    for form in forms:
        for i in range(1,11):
            deck.append(str(i) + form)
        for figure in figures:
            deck.append(figure + form)
    mixDeck = random.sample(deck, len(deck))
    return mixDeck

def deal(number):
    firstDeck  = createDeck()
    for i in range(number):
        playerOne.append(firstDeck.pop(i))
        playerTwo.append(firstDeck.pop(i+1))
    print("les cartes du joueur A sont : ", playerOne)
    print("les cartes du joueur B sont : ", playerTwo)
    return (playerOne, playerTwo, firstDeck)
    
def flop():
    result = deal(2)
    playerOne = result[0]
    playerTwo = result[1]
    deck = result[2]
    flop_cards = []
    for i in range(3):
        deck.pop(0)
        if i == 0:
            for y in range(3):
                flop_cards.append(deck.pop(0))
        else:
            flop_cards.append(deck.pop(0))
    print(flop_cards)
    print(deck) 

# print(createDeck())
# deal(5)
flop()