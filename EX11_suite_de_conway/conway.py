def decoupeChaine(string_initial):
    string_output = string_initial[0]
    index=1
    while index < len(string_initial):
        if string_initial[index] == string_initial[index-1]:
            string_output += string_initial[index]
        else:
            string_output += " " + string_initial[index]
        index +=1
    return string_output

def decritChaine(string_initial_0):
    string_output = []
    string_initial = decoupeChaine(string_initial_0).split(" ")
    
    for i, elem in enumerate(string_initial):
        count=elem.count(str(elem[0]))
        string_output.insert(i, (str(count)+elem[0]))
    output_return = "".join(string_output)
    return output_return

def suiteConway(string, number):
    string_output = []
    string_output.insert(0,decritChaine(string))
    
    for i in range(2,number):
        print("string_output 1 ", string_output)
        string_output.insert(i, decritChaine(string_output[len(string_output)-1]))
        print("string_output 2 ", string_output)

    string_output.insert(0, string)
    output_return = "".join(string_output)
    
    return output_return

# print(decoupeChaine("aabbca"))

# print(decritChaine("1a111a"))
print(suiteConway("a", 6))