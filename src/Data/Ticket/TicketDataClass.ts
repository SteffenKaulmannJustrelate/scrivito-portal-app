import { provideDataClass, unstable_JrRestApi } from "scrivito";

interface TicketJSON {
  pisa_Id: string
  number: string
  description: string
  title: string
  pinboardEntries: Array<string>
}

export const Ticket = provideDataClass("Ticket", {
  connection: {
    get: async (id) => {
      const item = await unstable_JrRestApi.get(`../pisa-api/Ticket/${id}`)

      return formatItem(item as TicketJSON)
    },

    index: async (params) => {
      const num = (Number(params.filters().column) * 10).toString()

      const ticket: any = await unstable_JrRestApi.post(`../pisa-api/search-services`, {
        data: {
          "query": {
            "flt": num,
            "CSO_WEB_RLS": "y"
          },
          "maximum": 20
        }
      })

      return { results: ticket?.results?.map(formatItem) || [] }
    },

    create: async (data) => {
      return {
        _id: "",
      };
    },

    update: async (id, data) => {
      const updateService: any = await unstable_JrRestApi.put(`../pisa-api/service/${id}`, { data });

      return;
    },

    delete: async (id) => {
      return {};
    },
  },
});

const formatItem = (item: TicketJSON) => ({
  ...item, pinboardEntries: item.pinboardEntries?.join("\n\n")
});
