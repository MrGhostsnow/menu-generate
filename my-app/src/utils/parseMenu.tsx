function parseMenu(rawText: string) {
  // 1. Divide por dias usando regex que detecta o título do dia em negrito: "**Segunda-feira**"
  const regexDia = /\*\*(.+?)\*\*/g;

  const dias: { dia: string; refeicoes: string[] }[] = [];

  let lastIndex = 0;
  let match;

  // Vamos achar todos os títulos dos dias
  const indices = [];
  while ((match = regexDia.exec(rawText)) !== null) {
    indices.push({ dia: match[1], index: match.index });
  }

  for (let i = 0; i < indices.length; i++) {
    const current = indices[i];
    const next = indices[i + 1];

    // Captura o texto entre o título atual e o próximo título (ou fim do texto)
    const bloco = rawText
      .substring(
        current.index + current.dia.length + 4, // +4 para contar os dois asteriscos antes e depois
        next ? next.index : rawText.length
      )
      .trim();

    // Extrai as linhas de refeição (normalmente começa com - ou • ou outro marcador)
    const refeicoes = bloco
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.startsWith("-") || line.startsWith("•"))
      .map((line) => line.replace(/^[-•]\s*/, ""));

    dias.push({ dia: current.dia, refeicoes });
  }

  return dias;
}

export default parseMenu;
