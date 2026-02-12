import { Dayjs } from "dayjs";

export type Presenter = {
  _id: string;
  name: string;
  department: string;
  isFeatured: boolean;
  isPublished: boolean;
  image: string;
  bio: string;
  sessions?: Session[];
};

export type Session<TPresenter = { label: string; value: string }> = {
  _id: string;
  title: string;
  description: string;
  location: string;
  startTime: Dayjs;
  endTime: Dayjs;
  date: string;
  presenters: TPresenter[];
  link: string;
  thumbnail: string;
  isPublished: boolean;
};

export type HourSession = {
  _id: string;
  sessions: Session<Presenter>[];
};
