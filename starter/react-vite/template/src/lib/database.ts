import Dexie, { type Table } from "dexie";

export interface ExampleRecord {
  id?: number;
  value: string;
  createdAt: Date;
}

class NawyDatabase extends Dexie {
  records!: Table<ExampleRecord, number>;

  constructor() {
    // Rename this database for each product before shipping.
    super("nawy-product-template");
    this.version(1).stores({
      records: "++id, createdAt",
    });
  }
}

export const db = new NawyDatabase();
