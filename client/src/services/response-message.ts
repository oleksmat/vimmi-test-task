export type ResponseMessage<Data> = {
  error: false;
  data: Data;
} | {
  error: true;
  message: string;
};
