export interface TeamSection {
  title: string;
  persons: Person[];
}

export interface Person {
  profession: string;
  email: string;
  phone: string;
  name: string;
  image_sm: string;
  image_md: string;
}
