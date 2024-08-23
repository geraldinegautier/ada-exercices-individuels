convert_bib = {
    'ATA':'I',
    'ATC':'I',
    'ATT':'I',
    'ATG':'M',
    'ACA':'T',
    'ACC':'T',
    'ACG':'T',
    'ACT':'T',
    'AAC':'N',
    'AAT':'N',
    'AAA':'K',
    'AAG':'K',
    'AGC':'S',
    'AGT':'S',
    'AGA':'R',
    'AGG':'R',
    'CTA':'L',
    'CTC':'L',
    'CTG':'L',
    'CTT':'L',
    'CCA':'P',
    'CCC':'P',
    'CCG':'P',
    'CCT':'P',
    'CAC':'H',
    'CAT':'H',
    'CAA':'Q',
    'CAG':'Q',
    'CGA':'R',
    'CGC':'R',
    'CGG':'R',
    'CGT':'R',
    'GTA':'V',
    'GTC':'V',
    'GTG':'V',
    'GTT':'V',
    'GCA':'A',
    'GCC':'A',
    'GCG':'A',
    'GCT':'A',
    'GAC':'D',
    'GAT':'D',
    'GAA':'E',
    'GAG':'E',
    'GGA':'G',
    'GGC':'G',
    'GGG':'G',
    'GGT':'G',
    'TCA':'S',
    'TCC':'S',
    'TCG':'S',
    'TCT':'S',
    'TTC':'F',
    'TTT':'F',
    'TTA':'L',
    'TTG':'L',
    'TAC':'Y',
    'TAT':'Y',
    'TAA':'_',
    'TAG':'_',
    'TGC':'C',
    'TGT':'C',
    'TGA':'_',
    'TGG':'W'
}

### Partie A ###
def cutting_A(file_path):
    array_cut = []

    with open(file_path, 'r') as f:  
        while True:
            char = f.read(3)
            if not char:
                break
            array_cut.append(char)
            
    return array_cut

def convert_A(array):
    array_converted = []

    for string_to_convert in array:
        converted_value = convert_bib.get(string_to_convert, '')
        array_converted.append(converted_value)

    result = ''.join(array_converted)
    return result

### Partie B ###
def cutting_B(file_path):
    array_cut = []
    
    with open(file_path, 'r') as f:  
        while True:
            char = f.read(25)
            if not char:
                break

            packet = []
            for i in range(0, len(char), 5):
                packet.append(char[i:i+5])
            array_cut.append(packet)

    return array_cut

def count_letter(column, letter):
    count = 0  

    for i, row in enumerate(column):
        if row[i] == letter:
            count += 1

    return count

def find_recurrence(array):
    recurrence = {
        'A': [0, 0, 0, 0, 0],
        'C': [0, 0, 0, 0, 0],
        'G': [0, 0, 0, 0, 0],
        'T': [0, 0, 0, 0, 0]
    }
    
    for i in range(len(array)):
        for j in range(5):  
            if array[i][j] == 'A':
                recurrence['A'][j] += 1
            elif array[i][j] == 'C':
                recurrence['C'][j] += 1
            elif array[i][j] == 'G':
                recurrence['G'][j] += 1
            elif array[i][j] == 'T':
                recurrence['T'][j] += 1

    return recurrence


result_A = cutting_A(r"C:\Users\gverc\Code\Exercices_indiv\Ex25_ADN\adn.txt")
# print(result_A)
# print(convert_A(result))

result_B = cutting_B(r"C:\Users\gverc\Code\Exercices_indiv\Ex25_ADN\adn.txt")
# print(result_B)
print(find_recurrence(result_B[-1]))