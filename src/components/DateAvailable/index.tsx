import React, { useEffect, useState } from "react";
import { CardStyle } from "./CardStyle";
import axios from "axios";

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const year = date.getFullYear();

  return `${hours}:${minutes} ${day}/${month}/${year}`;
};

export type DateAvailableProps = {
  text: string;

  Uri: string;
};

const DateAvailable: React.FC<DateAvailableProps> = ({ text, Uri }) => {
  const accessToken =
    "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjk0MDI2MDUyLCJqdGkiOiI2OTJiMTQ0MC1iNzBkLTRlZTEtOTFkMC0xNTE2MzYyYzQ5NzUiLCJ1c2VyX3V1aWQiOiJIREVHT0RINVhFTU1SUTc1In0.pus5iCEpa0EbxX9P5VpzX2EwHbzoieB27kBH541x91ZombzKZb9qQiRcs0QjaDU1YgDvkw9194GCS-3SZaad9w"; // Substitua pelo seu token de acesso
  const eventTypeUri = Uri; // Substitua pela URI do tipo de evento
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
            const originalStartTime = new Date(firstAvailableTime.start_time);
            const adjustedStartTime = new Date(
              originalStartTime.getTime() + 4 * 60 * 60 * 1000 // Adiciona 4 horas
            ).toISOString();
            // Define o horário disponível no estado
            setAvailableTime(adjustedStartTime);
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
    fetchData();
  }, []);

  console.log(availableTime);

  const formattedDate = formatDate(availableTime);

  return (
    <CardStyle>
      <p>{text}</p>
      <p>{formattedDate}</p>
    </CardStyle>
  );
};

export default DateAvailable;
