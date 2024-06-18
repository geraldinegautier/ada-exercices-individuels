# dictionnaire
dic_compress = {'texte': '1',
 'lorem': '2',
 'qui': '3',
 'donc': '4',
 'est': '5',
 'que': '6',
 'pour': '7',
 'ceci': '8',
 'faux-texte': '9',
 'dans': '10',
 'plus': '11',
 'avec': '12'}

# fonction qui renvoie une liste de mots à partir d'un texte et d'un espace comme délimiteur
def parse_sentence(text):
    return text.split(' ')

# fonction qui renvoie un texte où les mots sont joints en utilisant un espace comme séparateur
def join_sentence(text_parsed):
    return (' '.join(text_parsed))

# fonction qui renvoie une liste compressée à l'aide d'un dictionnaire
def compress_text(text_parsed, dic):
    text_compressed = []
    for word in text_parsed:
        found = False
        for key, value in dic.items():
            if word == key:
                text_compressed.append(value)
                found = True
                break
        if not found:
            text_compressed.append(word)
    return text_compressed

# fonction qui décompresse une liste de mots à l'aide d'un dictionnaire et renvoie le texte en utilisant un espace comme séparateur
def decompress_text(text_compressed, dic):
    text_decompressed = []
    for element in text_compressed:
        found = False
        for key, value in dic.items():
            if element == value:
                text_decompressed.append(key)
                found = True
                break
        if not found:
            text_decompressed.append(element)
    return join_sentence(text_decompressed)

# fonction qui crée un dictionnaire à partir d'un texte 
# => chaque mot devient la clé et la value représente le nb d'occurence du mot
# seuls les mots de plus de 2 lettres sont elligibles pour entrer dans le dictionnaire
# seuls les mots qui apparaissent au moins 2 fois dans le texte sont elligibles pour entrer dans le dictionnaire
def create_dic(text_parsed):
    dic = {}
    for word in text_parsed:
        if dic.__contains__(word) == False and len(word)>=3 and text_parsed.count(word)>=2:
            dic[word] = text_parsed.count(word)
    return dic

txt_a= "généralement, on utilise un texte en faux latin ( le texte ne veut rien dire, il a été modifié ), le lorem ipsum ou lipsum, qui permet donc de faire office de texte d'attente. l'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique. ce texte a pour autre avantage d'utiliser des mots de longueur variable, essayant de simuler une occupation normale. la méthode simpliste consistant à copier-coller un court texte plusieurs fois ( « ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte » ) a l'inconvénient de ne pas permettre une juste appréciation typographique du résultat final. il circule des centaines de versions différentes du lorem ipsum, mais ce texte aurait originellement été tiré de l'ouvrage de cicéron, de finibus bonorum et malorum ( liber primus ), texte populaire à cette époque, dont l'une des premières phrases est : « neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... » ( « il n'existe personne qui aime la souffrance pour elle-même, ni qui la recherche ni qui la veuille pour ce qu'elle est... » ). expert en utilisabilité des sites web et des logiciels, jakob nielsen souligne que l'une des limites de l'utilisation du faux-texte dans la conception de sites web est que ce texte n'étant jamais lu, il ne permet pas de vérifier sa lisibilité effective. la lecture à l'écran étant plus difficile, cet aspect est pourtant essentiel. nielsen préconise donc l'utilisation de textes représentatifs plutôt que du lorem ipsum. on peut aussi faire remarquer que les formules conçues avec du faux-texte ont tendance à sous-estimer l'espace nécessaire à une titraille immédiatement intelligible, ce qui oblige les rédactions à formuler ensuite des titres simplificateurs, voire inexacts, pour ne pas dépasser l'espace imparti. contrairement à une idée répandue, le faux-texte ne donne même pas un aperçu réaliste du gris typographique, en particulier dans le cas des textes justifiés : en effet, les mots fictifs employés dans le faux-texte ne faisant évidemment pas partie des dictionnaires des logiciels de pao, les programmes de césure ne peuvent pas effectuer leur travail habituel sur de tels textes. par conséquent, l'interlettrage du faux-texte sera toujours quelque peu supérieur à ce qu'il aurait été avec un texte réel, qui présentera donc un aspect plus sombre et moins lisible que le faux-texte avec lequel le graphiste a effectué ses essais. un vrai texte pose aussi des problèmes de lisibilité spécifiques ( noms propres, numéros de téléphone, retours à la ligne fréquents, composition des citations en italiques, intertitres de plus de deux lignes ... ) qu'on n'observe jamais dans le faux-texte."
txt_b = parse_sentence(txt_a)
txt_c = ['ceci', 'est', 'un', 'faux-texte', 'ceci', 'est']
#print(join_sentence(txt_b))
dic_txt_b = create_dic(txt_b)
txt_d = compress_text(txt_b,dic_txt_b)
#print(txt_d)
print(decompress_text(txt_d,dic_txt_b))