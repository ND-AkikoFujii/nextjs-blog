export type BreadcrumbItem = {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
}

export interface BreadcrumbJsonLd{
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BreadcrumbItem[]
}