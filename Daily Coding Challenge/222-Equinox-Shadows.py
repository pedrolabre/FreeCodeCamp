"""
Today is the equinox, when the sun is directly above the equator and perfectly overhead at noon. 
Given a time, determine the shadow cast by a 4-foot vertical pole.
The time will be a string in "HH:MM" 24-hour format (for example, "15:00" is 3pm).
You will only be given a time in 30 minute increments.

Rules:
- The sun rises at 6am directly "east", and sets at 6pm directly "west".
- A shadow always points opposite the sun.
- The shadow's length (in feet) is the number of hours away from noon, cubed.
- There is no shadow before sunrise (before 6am), after sunset (6pm or later), or at noon.

Return:
- If a shadow exists, return "(length)ft (direction)". For example, "8ft west".
- Otherwise, return "No shadow".
"""

def get_shadow(time_str):
    # 1. Converte a string "HH:MM" em um número decimal
    partes = time_str.split(":")
    horas = int(partes[0])
    minutos = int(partes[1])
    tempo_decimal = horas + (minutos / 60)

    # 2. Filtra os horários em que a sombra não existe
    if tempo_decimal < 6 or tempo_decimal >= 18 or tempo_decimal == 12:
        return "No shadow"

    # 3. Calcula a distância em horas até o meio-dia
    horas_do_meio_dia = abs(12 - tempo_decimal)

    # 4. Eleva ao cubo para obter o comprimento da sombra
    comprimento = horas_do_meio_dia ** 3
    
    # Truque do Python: Remover o ".0" de números inteiros para os testes passarem
    if comprimento.is_integer():
        comprimento = int(comprimento)

    # 5. Define a direção (sombra aponta para o lado oposto do sol)
    direcao = "west" if tempo_decimal < 12 else "east"

    # 6. Retorna a string final formatada
    return f"{comprimento}ft {direcao}"