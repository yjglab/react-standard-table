import { create } from "zustand";

interface TableStore {
  page: number;
  rowsPerPage: number;
  total: number;

  setTotal: (total: number) => void;
  setPage: (page: number) => void;
  setNextPage: () => void;
  setPrevPage: () => void;
  setRowsPerPage: (rows: number) => void;
}
export const useTableStore = create<TableStore>((set) => ({
  page: 1,
  rowsPerPage: 10,
  total: 0,

  setTotal: (total) => set(() => ({ total })),
  setPage: (page) => set(() => ({ page })),
  setNextPage: () => set((state) => ({ page: state.page + 1 })),
  setPrevPage: () => set((state) => ({ page: state.page - 1 })),
  setRowsPerPage: (rows) => set(() => ({ rowsPerPage: rows })),
}));
