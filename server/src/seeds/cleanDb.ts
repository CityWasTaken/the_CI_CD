import { Question } from '../models/index.js';

export default async () => {
  try {
    await Question.deleteMany({});
  } catch (error) {
    console.log('ERROR DELETING QUESTIONS', error);
  }
}
