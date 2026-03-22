"""
Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

The given string will contain the following characters, each representing a type of bean:

An apostrophe (') is a light roast bean worth 1 point each.
A dash (-) is a medium roast bean worth 2 points each.
A period (.) is a dark roast bean worth 3 points each.
The roast level is determined by the average of all the beans.

Return:

"Light" if the average is less than 1.75.
"Medium" if the average is 1.75 to 2.5.
"Dark" if the average is greater than 2.5.
"""

# SINTAXE: 'def' é a palavra-chave para definir uma função em Python. 
# '(beans):' define o parâmetro e os dois pontos indicam o início de um bloco de código (que será indentado).
def detect_roast(beans):

    # SINTAXE: Chaves '{}' criam um Dicionário. Ele mapeia "chaves" (à esquerda do ':') para "valores" (à direita).
    # SEMÂNTICA: Estamos criando um mapa de tradução.
    # LÓGICA: Em vez de usar vários 'ifs', criamos uma tabela de consulta: "'" vale 1, "-" vale 2, "." vale 3.
    point_map = {"'": 1, "-": 2, ".": 3}
    
    # SINTAXE & SEMÂNTICA: Esta linha contém uma "List Comprehension" (Compreensão de Lista) geradora dentro da função 'sum()'.
    # 'sum(...)' é uma função nativa que soma todos os números que recebe.
    # 'point_map[bean]' acessa o dicionário criado acima e pega o valor numérico (1, 2 ou 3) correspondente àquele caractere.
    # 'for bean in beans' é o laço que percorre cada caractere da string.
    # LÓGICA: "Traduza cada caractere em 'beans' para seu número correspondente usando o dicionário, e some todos eles."
    total_points = sum(point_map[bean] for bean in beans)
    
    # SINTAXE: 'len()' é uma função nativa do Python que retorna o comprimento (length) de algo.
    # LÓGICA: Calcula a média dividindo os pontos totais pela quantidade de caracteres na string.
    average = total_points / len(beans)
    
    # SINTAXE: 'if' seguido da condição e dois pontos (':').
    # LÓGICA: Se a média for menor que 1.75...
    if average < 1.75:
        # SINTAXE: 'return' devolve o valor. Note que a indentação (espaço à esquerda) diz que esta linha pertence ao 'if'.
        return "Light"
        
    # SINTAXE: 'elif' é a abreviação do Python para "else if". O Python permite encadear comparações matemáticas '1.75 <= average <= 2.5'.
    # LÓGICA: Se a média estiver contida no intervalo de 1.75 a 2.5 (inclusive)...
    elif 1.75 <= average <= 2.5:
        return "Medium"
        
    # SINTAXE: 'else:' captura qualquer coisa que sobrou.
    # LÓGICA: Se passou das verificações acima, a média é maior que 2.5.
    else:
        return "Dark"