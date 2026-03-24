import { type CartItem, type OrderFormData, type GelatoOrderPayload, sampleQuotes, tshirtColors, tshirtSizes } from "@shared/schema";
import { randomUUID } from "crypto";

export interface Order {
  id: string;
  items: CartItem[];
  shippingAddress: OrderFormData;
  gelatoOrderId?: string;
  status: "pending" | "submitted" | "error";
  createdAt: string;
  totalAmount: number;
}

export interface IStorage {
  getQuotes(): Promise<typeof sampleQuotes>;
  getColors(): Promise<typeof tshirtColors>;
  getSizes(): Promise<typeof tshirtSizes>;
  createOrder(items: CartItem[], address: OrderFormData): Promise<Order>;
  getOrder(id: string): Promise<Order | undefined>;
  updateOrderStatus(id: string, status: Order["status"], gelatoOrderId?: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private orders: Map<string, Order>;

  constructor() {
    this.orders = new Map();
  }

  async getQuotes() {
    return sampleQuotes;
  }

  async getColors() {
    return [...tshirtColors];
  }

  async getSizes() {
    return [...tshirtSizes];
  }

  async createOrder(items: CartItem[], address: OrderFormData): Promise<Order> {
    const id = randomUUID();
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order: Order = {
      id,
      items,
      shippingAddress: address,
      status: "pending",
      createdAt: new Date().toISOString(),
      totalAmount,
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async updateOrderStatus(id: string, status: Order["status"], gelatoOrderId?: string): Promise<void> {
    const order = this.orders.get(id);
    if (order) {
      order.status = status;
      if (gelatoOrderId) order.gelatoOrderId = gelatoOrderId;
    }
  }
}

export const storage = new MemStorage();
