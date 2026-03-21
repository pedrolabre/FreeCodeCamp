/*
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

For example, given "10:00", return "8ft west" because 10am is 2 hours from noon, 
so 2³ = 8 feet, and the shadow points west because the sun is in the east at 10am.
*/

function getShadow(time) {
  // 1. Converte a string "HH:MM" em um número decimal
  const partes = time.split(":");
  const horas = parseInt(partes[0], 10);
  const minutos = parseInt(partes[1], 10);
  const tempoDecimal = horas + (minutos / 60);

  // 2. Filtra os horários em que a sombra não existe
  if (tempoDecimal < 6 || tempoDecimal >= 18 || tempoDecimal === 12) {
    return "No shadow";
  }

  // 3. Calcula a distância em horas até o meio-dia
  const horasDoMeioDia = Math.abs(12 - tempoDecimal);

  // 4. Eleva ao cubo para obter o comprimento da sombra
  const comprimento = Math.pow(horasDoMeioDia, 3);

  // 5. Define a direção (sombra aponta para o lado oposto do sol)
  const direcao = tempoDecimal < 12 ? "west" : "east";

  // 6. Retorna a string final formatada
  return `${comprimento}ft ${direcao}`;
}