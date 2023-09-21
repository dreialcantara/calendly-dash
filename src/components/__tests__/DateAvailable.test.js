import React from "react";
import DateAvailable from "./DateAvailable";
import axios from "axios";

jest.mock("axios");

describe("DateAvailable component", () => {
  it("should render the correct text and date", async () => {
    const text = "Próximo horário disponível:";
    const Uri = "https://calendly.com/api/v1/event_types/1234567890";

    // Simula que a API retorna um horário disponível
    axios.get.mockResolvedValueOnce({
      data: {
        collection: [
          {
            start_time: "2023-09-21T10:00:00.000Z",
          },
        ],
      },
    });

    const wrapper = await render(<DateAvailable text={text} Uri={Uri} />);

    // Verifica se o texto e a data estão sendo renderizados corretamente
    expect(wrapper.getByText(text)).toBeInTheDocument();
    expect(wrapper.getByText("21/09/2023 14:00")).toBeInTheDocument();
  });

  it("should render a message if no available times are found", async () => {
    const text = "Próximo horário disponível:";
    const Uri = "https://calendly.com/api/v1/event_types/1234567890";

    // Simula que a API não retorna nenhum horário disponível
    axios.get.mockResolvedValueOnce({
      data: {
        collection: [],
      },
    });

    const wrapper = await render(<DateAvailable text={text} Uri={Uri} />);

    // Verifica se a mensagem de erro está sendo renderizada corretamente
    expect(wrapper.getByText("Nenhum horário disponível")).toBeInTheDocument();
  });
});
