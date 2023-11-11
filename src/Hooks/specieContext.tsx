import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '@utils/api';

interface SpeciesInfo {
  id: string;
  nome: string;
  nomeCientifico: string;
  classificacao: string;
  tipo_alimentacao: string;
  bioma: string;
  image_url: string;
  evolucao: string;
  situacao_atual: string;
}

interface SpeciesContextData {
  speciesInfo: SpeciesInfo | null;
  speciesId: string | null; 
  loading: boolean;
  getSpeciesInfo: (speciesId: string) => Promise<void>;
  setSpeciesId: (speciesId: string) => void; 
}

const SpeciesContext = createContext({} as SpeciesContextData);

function SpeciesProvider({ children }: { children: ReactNode }) {
  const [speciesInfo, setSpeciesInfo] = useState<SpeciesInfo | null>(null);
  const [speciesId, setSpeciesId] = useState<string | null>('653db902c28b3577ca09bf07'); // Inicialize speciesId como null
  const [loading, setLoading] = useState<boolean>(false);

  async function getSpeciesInfo(speciesId: string) {
    try {
      setLoading(true);
      const response = await authService.specieInfo(speciesId);
      setSpeciesInfo(response.data);
      setSpeciesId(speciesId);
    } catch (error) {
      console.error('Erro ao buscar informações da espécie:', error);
      
      Alert.alert('Erro', 'Não foi possível obter informações da espécie.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <SpeciesContext.Provider value={{ speciesInfo, speciesId, loading, getSpeciesInfo, setSpeciesId }}>
      {children}
    </SpeciesContext.Provider>
  );
}

function useSpecies() {
  const context = useContext(SpeciesContext);
  return context;
}

export { useSpecies, SpeciesProvider };
