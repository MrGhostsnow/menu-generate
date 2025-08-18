import axios from "axios";

export const gerarCardapio = async (data: any, action: any) => {
  const response = await axios.post(
    "https://n8n-agent-fgk8.onrender.com/webhook-test/menu-generator",
    {
      ...data,   
      action,   
    }
  );
  return response.data;
};


export const gerarReceita = async (receita: string, action: any) => {
  const response = await axios.post(
    "https://n8n-agent-fgk8.onrender.com/webhook-test/menu-generator",
    {
      receita,   
      action,   
    }
  );
  return response.data;
};