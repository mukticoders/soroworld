export type Celestial = {
 texture?: string;
 name?: string;
 group?: string;
 desc?: string;
 link?: string;
 params: {
  size?: number;
  orbitRadius?: number;
  diameter?: number;
  inclination?: number;
  velocity?: number;
 };
};
