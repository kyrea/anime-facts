interface AnimeFact {
  _id: number;
  tags: string[];
  fact: string;
}

export async function getFact(): Promise<AnimeFact>;