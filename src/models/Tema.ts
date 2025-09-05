import type Postagem from "./Postagem";

export default interface Tema {
  usuario: any;
  id: number;
  descricao: string;
  postagem?: Postagem[] | null;
}
