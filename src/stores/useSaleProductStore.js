import { create } from "zustand";

const useSaleProductStore = create((set) => ({
  records: [],
  addRecord: (newRecord) =>
    set((state) => ({ records: [...state.records, newRecord] })),
  removeRecord: (id) =>
    set((state) => ({
      records: state.records.filter((record) => record.product_id !== id),
    })),
  changeQuantity: (id, quantity) =>
    set((state) => ({
      records: state.records.map((record) => {
        if (record.product_id === id) {
          const newQuantity = parseInt(record.quantity) + parseInt(quantity);
          return {
            ...record,
            quantity: newQuantity,
            cost: record.product.price * newQuantity,
          };
        } else {
          return record;
        }
      }),
    })),

    resetRecords: () => set({ records: [] }),
}));

export default useSaleProductStore;