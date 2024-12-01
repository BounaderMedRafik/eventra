export type EventProps = {
  id: string;
  title: string;
  desc: string;
  date: string;
  location: string;
  participant: string; //make a type for dat
  typeOfEvent: string;
  ImageOfEvent: string;
  Images: {
    url: string;
  }[];
}[];
