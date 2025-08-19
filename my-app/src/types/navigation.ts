export type RootStackParamList = {
  FormScreen: undefined;
  ResultScreen: {action?: string, preferences: any }; 
};

export type TabParamList = {
  Home: undefined;
  Menu: {action?: string, preferences: any } | undefined;
  Recipe: { refeicao: string; action?: string } | undefined;
};
