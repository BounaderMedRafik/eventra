export type EventProps = {
  id: string;
  title: string;
  desc: string;
  date: string;
  location: string;
  participant: {
    name: string;
    category: string;
  }[];
  typeOfEvent: string;
  ImageOfEvent: string;
  Images: string[];
}[];
