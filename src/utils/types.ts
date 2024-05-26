interface ICategoriesTitles {
  id: number,
  title: string,
  isActive: boolean,
}

interface ICategory {
  'name': string,
  'id': string,
  'image': string,
  'bgColor': string,
  'tags': string[]
}

export type { ICategoriesTitles, ICategory };