/*
Given a 6x6 matrix (array of arrays), representing a QR code, return the string of binary data in the code.

The QR code may be given in any rotation of 90 degree increments.
A correctly oriented code has a 2x2 group of 1's (orientation markers) in the bottom-left, top-left, and top-right corners.
The three 2x2 orientation markers are not part of the binary data.
The binary data is read left-to-right, top-to-bottom (like a book) when the QR code is correctly oriented.
A code will always have exactly one valid orientation.
*/

function decodeQr(qr) {
    // Função auxiliar para verificar se a matriz está na orientação correta.
    // Ela checa se os três cantos de marcação (blocos 2x2) contêm apenas '1's.
    function isOriented(matrix) {
        return matrix[0][0] === '1' && matrix[0][1] === '1' && matrix[1][0] === '1' && matrix[1][1] === '1' && // Canto Superior-Esquerdo
               matrix[0][4] === '1' && matrix[0][5] === '1' && matrix[1][4] === '1' && matrix[1][5] === '1' && // Canto Superior-Direito
               matrix[4][0] === '1' && matrix[4][1] === '1' && matrix[5][0] === '1' && matrix[5][1] === '1';   // Canto Inferior-Esquerdo
    }

    // Função auxiliar para rotacionar a matriz 6x6 exatos 90 graus no sentido horário.
    function rotate(matrix) {
        let result = [];
        let n = matrix.length;
        
        // Itera sobre as colunas da matriz original para transformá-las em linhas
        for (let i = 0; i < n; i++) {
            let newRow = '';
            // Itera de baixo para cima para garantir o sentido horário
            for (let j = 0; j < n; j++) {
                newRow += matrix[n - 1 - j][i];
            }
            result.push(newRow);
        }
        return result;
    }

    // Gira o QR code continuamente até encontrar a única orientação válida.
    // O loop para assim que isOriented() retornar true.
    while (!isOriented(qr)) {
        qr = rotate(qr);
    }

    // Variável para acumular a string final com os dados binários.
    let result = '';
    
    // Varre a matriz corretamente orientada (da esquerda para direita, de cima para baixo).
    for (let r = 0; r < 6; r++) { // r = linha (row)
        for (let c = 0; c < 6; c++) { // c = coluna (column)
            
            // Pula as iterações se a coordenada (r, c) cair dentro de um dos três marcadores 2x2.
            // Marcador Superior-Esquerdo: linhas 0,1 e colunas 0,1
            // Marcador Superior-Direito: linhas 0,1 e colunas 4,5
            // Marcador Inferior-Esquerdo: linhas 4,5 e colunas 0,1
            if ((r < 2 && c < 2) || (r < 2 && c > 3) || (r > 3 && c < 2)) {
                continue; // Ignora este bit e vai para o próximo
            }
            
            // Se não for um marcador, adiciona o bit aos nossos dados.
            result += qr[r][c];
        }
    }

    return result;
}