import React, { useEffect, useState } from "react";
import axios from "axios"; // Importe o Axios

function TestButton() {
  const accessToken =
    "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjk0MDI2MDUyLCJqdGkiOiI2OTJiMTQ0MC1iNzBkLTRlZTEtOTFkMC0xNTE2MzYyYzQ5NzUiLCJ1c2VyX3V1aWQiOiJIREVHT0RINVhFTU1SUTc1In0.pus5iCEpa0EbxX9P5VpzX2EwHbzoieB27kBH541x91ZombzKZb9qQiRcs0QjaDU1YgDvkw9194GCS-3SZaad9w"; // Substitua pelo seu token de acesso
  const eventTypeUri =
    "https://api.calendly.com/event_types/b681a1d9-48ab-4f4c-9b32-5c8e901786cf"; // Substitua pela URI do tipo de evento
  const todayPlusDays = 0; // Substitua pelo número de dias desejado

  const [availableTime, setAvailableTime] = useState(""); // Estado para armazenar o horário disponível

  const fetchData = async () => {
    try {
      const now = new Date();
      const startTime = new Date(
        now.getTime() + 4 * 60 * 60 * 1000 + todayPlusDays * 24 * 60 * 60 * 1000
      );
      const endTime = new Date(startTime.getTime() + 7 * 24 * 60 * 60 * 1000);
      const maxDays = 15; // Limite máximo de semanas
      let daysPassed = 0;

      while (daysPassed < maxDays) {
        try {
          const apiUrl = `https://api.calendly.com/event_type_available_times?event_type=${encodeURIComponent(
            eventTypeUri
          )}&start_time=${encodeURIComponent(
            startTime.toISOString()
          )}&end_time=${encodeURIComponent(endTime.toISOString())}`;

          const response = await axios.get(apiUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const responseData = response.data;

          if (responseData.collection.length > 0) {
            const firstAvailableTime = responseData.collection[0];
            const formattedBrtStartTime = new Date(
              firstAvailableTime.start_time
            ).toISOString();
            // Define o horário disponível no estado
            setAvailableTime(formattedBrtStartTime);
            return;
          } else {
            startTime.setDate(startTime.getDate() + 6);
            endTime.setDate(endTime.getDate() + 6);
            daysPassed++;
          }
        } catch (error: any) {
          console.error("Erro na solicitação à API: " + error.toString());
          return;
        }
      }

      // Define uma mensagem se nenhum horário estiver disponível
      setAvailableTime("Nenhum horário disponível");
    } catch (error: any) {
      console.error("Erro na solicitação à API: " + error.toString());
    }
  };

  useEffect(() => {
    // Chama fetchData() quando o componente é montado
    //fetchData();
  }, []);

  console.log(availableTime);

  return (
    <div>
      <button onClick={fetchData}>Obter Horário Disponível</button>
      <p>{availableTime}</p>
    </div>
  );
}

export default TestButton;
