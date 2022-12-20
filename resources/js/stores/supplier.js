import { defineStore } from "pinia";
import { del, get, post, put } from "@/services/api";

export const useSupplierStore = defineStore("supplier", {
    state: () => ({
        supplier: {},
        suppliers: [],
        trash: [],
    }),

    getters: {
        getSupplier: (state) => state.supplier,
        getSuppliers: (state) => state.suppliers,
        getTrash: (state) => state.trash,
    },

    actions: {
        async addSupplier(data) {
            const response = await post("/admin/supplier", data);

            return response;
        },

        async editSupplier(id, data) {
            const response = await post("/admin/supplier/" + id, data);

            return response;
        },

        async deleteSupplier(id) {
            const response = await del("/admin/supplier/" + id);

            return response;
        },

        async getListSupplier(url = `/admin/supplier/`) {
            const response = await get(url);

            this.suppliers = response.data;
        },

        async getListTrashSupplier(url = `/admin/supplier/trash`) {
            const response = await get(url);

            this.trash = response.data;
        },

        async deleteTrash(id) {
            const response = await del(`/admin/supplier/trash/` + id);

            return response;
        },

        async restoreFromTrash(id) {
            const response = await put(`/admin/supplier/trash/restore/` + id);

            return response;
        },
    },
});
