export interface propertyProps {
  _id: string;
  name: string;
  value: number;
  img?: string;
}

export interface CreatePropertyBody {
  name: string;
  value: number;
  img?: string;
}

export interface UpdatePropertyBody extends Partial<CreatePropertyBody> {
  id: string;
}

export type PropertyExample = {
  id: number,
  name: string,
  value: number
}