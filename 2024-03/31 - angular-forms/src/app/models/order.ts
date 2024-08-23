export interface FancyOrder {
    name: string;
    quantity: number;
    description?: string;

    addressForInvoice: string;
    sameAddressForDelivery: boolean;

    addressForDelivery?: string;

}