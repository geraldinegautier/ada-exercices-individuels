def decoupeChaine(string_input):
    string_output = ""
    index = 0
    while index < len(string_input):
        if index==0:
            string_output = string_input[0]
        elif string_input[index] == string_input[index-1]:
            string_output += string_input[index]
        else:
            string_output += " " + string_input[index]
        index +=1
    return string_output

def decritChaine(string_input):
    array_output = []
    array_input = decoupeChaine(string_input).split(" ")
    
    for i, elem in enumerate(array_input):
        count=len(elem)
        array_output.append(str(count)+elem[0])
    string_output = "".join(array_output)
    return string_output

def suiteConway(string_input, number):
    array_output = []    
    for i in range(number-1):
        if i==0:
            array_output.append(decritChaine(string_input[i]))
        else:
            array_output.append(decritChaine(array_output[i-1]))
    array_output.insert(0, string_input)
    string_output = "".join(array_output)
    
    return string_output

# print(decoupeChaine("aabbca"))
# print(decritChaine("aabbca"))
print(suiteConway("a", 3))