import axios from 'axios';

export const gerarCardapio = async (data : any) => {
  const response = await axios.post('https://n8n-agent-fgk8.onrender.com/webhook-test/menu-generator', data);
  return response.data;
};
