import { provideDataClass, unstable_JrRestApi } from "scrivito";

export const Pinboard = provideDataClass("Pinboard", {
  connection: {
    get: async (id) => {

      const move: any = await unstable_JrRestApi.get(`../pisa-api/servicestatusminus/045700FD77213BE9E040A8C00D015F8E`)
    },

    index: async (params) => {
      return { results: [] }
    },

    create: async (data) => {
      console.log(data)

      return {
        _id: "",
      };
    },

    update: async (id, data) => {
      const updateService: any = await unstable_JrRestApi.put(`../pisa-api/serviceaddpin/${id}`, { data });

      return;
    },

    delete: async (id) => {
      return {};
    },
  },
});
