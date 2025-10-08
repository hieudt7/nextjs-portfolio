export type Character = {
  id: string;
  name: string;
  title: string;
  role: string;
  description: string;
  stats: {
    pwr: number;
    atk: number;
    def: number;
  };
  abilities: string[];
  ultimateSkill: {
    name: string;
    bonus: string;
  };
  technique: {
    name: string;
    skillCount: number;
  };
  weapon: {
    name: string;
    type: string;
  };
  image?: string;
};

export type CharacterTheme = {
  background: string;
  particleColor: string;
  circularBackdrop: string;
  spinBorder: string;
};
