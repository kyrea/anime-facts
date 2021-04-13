interface AnimeFacts {
  _id: number;
  tags: string[];
  fact: string;
  length: number;
}

export function getFact(): Promise<AnimeFacts>;
