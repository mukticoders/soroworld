export type Celestial = {
    texture: string;
    name: string;
    group: string;
    params: {
      size: number;
      orbitRadius: number;
      inclination: number;
      velocity: number;
    };
  };