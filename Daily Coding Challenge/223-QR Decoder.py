"""
Given a 6x6 matrix (array of arrays), representing a QR code, return the string of binary data in the code.

The QR code may be given in any rotation of 90 degree increments.
A correctly oriented code has a 2x2 group of 1's (orientation markers) in the bottom-left, top-left, and top-right corners.
The three 2x2 orientation markers are not part of the binary data.
The binary data is read left-to-right, top-to-bottom (like a book) when the QR code is correctly oriented.
A code will always have exactly one valid orientation.
"""

def decode_qr(qr):
    # Função auxiliar para verificar a orientação correta do QR Code.
    # Um QR code válido tem blocos 2x2 cheios de '1's em 3 cantos específicos.
    def is_oriented(matrix):
        return (matrix[0][0] == '1' and matrix[0][1] == '1' and matrix[1][0] == '1' and matrix[1][1] == '1' and # Canto Superior-Esquerdo
                matrix[0][4] == '1' and matrix[0][5] == '1' and matrix[1][4] == '1' and matrix[1][5] == '1' and # Canto Superior-Direito
                matrix[4][0] == '1' and matrix[4][1] == '1' and matrix[5][0] == '1' and matrix[5][1] == '1')    # Canto Inferior-Esquerdo

    # Função auxiliar para rotacionar a matriz 90 graus no sentido horário.
    def rotate(matrix):
        # Passo 1: matrix[::-1] inverte as linhas (de baixo para cima).
        # Passo 2: zip(*...) pega as colunas dessa matriz invertida e as transforma em linhas.
        # Passo 3: "".join(row) transforma as tuplas de caracteres de volta em strings.
        return ["".join(row) for row in zip(*matrix[::-1])]

    # Gira o QR code continuamente até encontrar a orientação válida.
    # O enunciado garante que sempre existirá exatamente UMA orientação certa.
    while not is_oriented(qr):
        qr = rotate(qr)

    # String para acumular os dados binários puros.
    result = ""
    
    # Varre a matriz corretamente orientada (da esquerda para direita, de cima para baixo).
    for r in range(6):
        for c in range(6):
            # Pula a leitura se a coordenada estiver dentro dos marcadores de orientação 2x2.
            # (r < 2 e c < 2) -> Linhas 0,1 e Colunas 0,1 (Superior Esquerdo)
            # (r < 2 e c > 3) -> Linhas 0,1 e Colunas 4,5 (Superior Direito)
            # (r > 3 e c < 2) -> Linhas 4,5 e Colunas 0,1 (Inferior Esquerdo)
            if (r < 2 and c < 2) or (r < 2 and c > 3) or (r > 3 and c < 2):
                continue
            
            # Se a coordenada não fizer parte de um marcador, extrai o bit.
            result += qr[r][c]

    return result