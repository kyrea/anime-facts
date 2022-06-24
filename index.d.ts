interface AnimeFacts {
  _id: number;
  fact: string;
}

export function getFact(): Promise<AnimeFacts>;
