export interface Product {
    id: string;
    name: string;
    desc: string;
    image: string;
    color: string;
    category: string;
    price: number;
    orderedItems: number;
    rating: number;
    reviews: {
        total: number;
        breakdown: Record<string, number>;
    };
    isFavorite: boolean;
    totalQuantity: number;
    refund: number;
}