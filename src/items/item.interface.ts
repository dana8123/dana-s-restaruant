export interface BaseItem {
    name: string;
    price: number;
    dascription: string;
    image: string;
}

export interface Item extends BaseItem {
    id: number; 
}