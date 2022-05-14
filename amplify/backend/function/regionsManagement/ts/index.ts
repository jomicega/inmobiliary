import { Event } from './types';

export const handler = async (event: Event) => {
  console.log('Executed create region service....');
  const { fieldName } = event;
  console.log({ fieldName });
};
