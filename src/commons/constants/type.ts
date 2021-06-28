export type ListType<R> = {
  items: R[];
  totalCount: number;
};

export interface DynamicPageProps {
  title: string;
  description: string;
  imageUrl: string;
}
